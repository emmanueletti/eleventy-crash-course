// Config file for 11ty
const Card = require('./src/_includes/components/Card.js');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets/'); // have to tell 11ty to copy over specific folders
  eleventyConfig.addPassthroughCopy('src/css/'); // have to tell 11ty to copy over specific folders
  eleventyConfig.addWatchTarget('src/css/'); // 11ty only watches certain files for change by default, have to specify the others

  // shortcode components
  // shortcodes are just re-useable bits of content
  eleventyConfig.addShortcode('Card', Card);

  return {
    dir: {
      input: 'src',
      includes: '_includes', // includes seems to be 11tys version of partials
      output: '_site',
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
};
