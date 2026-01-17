const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addPairedShortcode("sectionHeader", function (content, title) {
    return `
    <div class="section-header">
      <h2>${title}</h2>
      <p class="section-subtitle">${content}</p>
    </div>
  `;
  });

  eleventyConfig.addShortcode("redact", function (text = "", required_clearance = 1) {
    const needed = Number(required_clearance);
    const count = text.length || 5;
    const encoded = Buffer.from(String(text), "utf8").toString("base64");

    return `<span class="redact" data-redact data-required-clearance="${needed}" data-redact-text="${encoded}"><span class="redact-mask" aria-hidden="true">${"█".repeat(count)}</span><span class="redact-text" aria-hidden="true"></span></span>`;
  });

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addCollection("documents", function (collectionApi) {
    return collectionApi.getAll().filter((item) => {
      return item.filePathStem && item.filePathStem.startsWith("/documents/");
    });
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
