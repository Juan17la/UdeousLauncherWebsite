// Shared by every landing page: finds the visitor's OS and points the buttons at the
// newest GitHub release. Markup contract:
//   [data-dl="windows|windows-portable|macos|deb|rpm|linux"]  download links
//   [data-os="windows|macos|linux"]   cards of one OS (gets class "rec" when it's the visitor's)
//   [data-primary]   hero button; [data-primary-label] its text
//   [data-version]   filled with the release tag
//   [data-size="<key>"]  filled with " · 8.6 MB";  [data-file="<key>"]  filled with the asset's file name
//   script#ld   JSON-LD whose softwareVersion/downloadUrl get the release's values
// Without network the links fall back to the releases page.
(() => {
  const REPO = 'Juan17la/Udeos_Launcher';
  const PAGE = `https://github.com/${REPO}/releases`;
  const PATTERNS = {
    windows: /windows-amd64-installer\.exe$/,
    'windows-portable': /windows-amd64-portable\.zip$/,
    macos: /macos-universal\.dmg$/,
    deb: /linux-amd64\.deb$/,
    rpm: /linux-x86_64\.rpm$/,
    linux: /linux-amd64\.tar\.gz$/,
  };
  const NAMES = { windows: 'Windows', macos: 'macOS', linux: 'Linux' };
  const PRIMARY = { windows: 'windows', macos: 'macos', linux: 'deb' };

  const ua = navigator.userAgentData?.platform || navigator.platform || '';
  const uaStr = navigator.userAgent;
  const os = /win/i.test(ua) ? 'windows' : /mac|iphone|ipad/i.test(ua + uaStr) ? 'macos' : 'linux';
  document.documentElement.dataset.os = os;
  document.querySelectorAll(`[data-os="${os}"]`).forEach((e) => e.classList.add('rec'));

  const all = (sel) => document.querySelectorAll(sel);
  const label = all('[data-primary-label]');
  label.forEach((e) => (e.textContent = `Download for ${NAMES[os]}`));
  all('[data-dl],[data-primary]').forEach((a) => (a.href = PAGE + '/latest'));

  fetch(`https://api.github.com/repos/${REPO}/releases?per_page=1`) // /latest skips betas
    .then((r) => r.json())
    .then(([rel]) => {
      const asset = (key) => rel.assets.find((a) => PATTERNS[key]?.test(a.name));
      const url = (key) => asset(key)?.browser_download_url || rel.html_url;
      all('[data-dl]').forEach((a) => (a.href = url(a.dataset.dl)));
      all('[data-primary]').forEach((a) => (a.href = url(PRIMARY[os])));
      all('[data-version]').forEach((e) => (e.textContent = rel.tag_name));
      all('[data-size]').forEach((e) => {
        const a = asset(e.dataset.size);
        if (a) e.textContent = ` · ${(a.size / 1048576).toFixed(1)} MB`;
      });
      all('[data-file]').forEach((e) => (e.textContent = asset(e.dataset.file)?.name || e.textContent));

      const ld = document.getElementById('ld');
      if (ld) {
        const data = JSON.parse(ld.textContent);
        data.softwareVersion = rel.tag_name.replace(/^v/, '');
        data.datePublished = rel.published_at.slice(0, 10);
        data.downloadUrl = rel.html_url;
        ld.textContent = JSON.stringify(data);
      }
    })
    .catch(() => {}); // keep the fallback links
})();
