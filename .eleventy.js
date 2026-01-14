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

  eleventyConfig.addShortcode("redact", function (length = 12) {
    const count = Number(length) || 12;
    return `<span class="redacted">${"█".repeat(count)}</span>`;
  });


  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addCollection("documents", function (collectionApi) {
    return collectionApi.getAll().filter((item) => {
      // Adjust "documents" to your folder name
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
