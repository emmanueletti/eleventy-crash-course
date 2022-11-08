// Config file for 11ty

module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: 'src',
      includes: '_includes', // includes seems to be 11tys version of partials
      output: '_site',
    },
    templateFormats: ['md', 'njx', 'html'],
    markdownTemplateEngine: 'njx',
    htmlTemplateEngine: 'njx',
    dataTemplateEngine: 'njx',
  };
};
