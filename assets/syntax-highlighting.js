window.Prism = window.Prism || {};
window.Prism.plugins = window.Prism.plugins || {};
window.Prism.plugins.autoloader = window.Prism.plugins.autoloader || {};
window.Prism.plugins.autoloader.languages_path = "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/";

window.addEventListener("DOMContentLoaded", function () {
  if (window.Prism && typeof window.Prism.highlightAll === "function") {
    window.Prism.highlightAll();
  }
});
