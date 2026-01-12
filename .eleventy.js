module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

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
