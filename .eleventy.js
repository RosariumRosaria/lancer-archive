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
    const strs = String(text).split(" ");

    let ret = "";

    for (const str of strs) {
      const encoded = Buffer.from(str, "utf8").toString("base64");
      const count = str.length;

      ret += `<span class="redact" data-redact data-pagefind-ignore data-required-clearance="${needed}" data-redact-text="${encoded}">
      <span class="redact-mask">${"█".repeat(count)}</span>
      <span class="redact-text"></span>
    </span> `;
    }

    return ret.trim();
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
