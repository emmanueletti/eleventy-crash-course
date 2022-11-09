// import { html } from 'common-tags';
// can't use ESM with 11ty just yet

// 11ty caches components, will need to kill and restart server when changes made

const { html } = require('common-tags');

// simple javascript function returning a string with some interpolation
function Card({ title, link, linkText, isRaised }) {
  const raised = isRaised ? 'card__container--raised' : '';
  return html`
    <div class="card__container ${raised}">
      <h2 class="card__title">${title}</h2>
      <a href="${link}" class="card__link">${linkText}</a>
    </div>
  `;
}

module.exports = Card;
