import Component from '../Component.js';
import Header from '../common/Header.js';
import RecipeList from './RecipeList.js';
import Loading from '../common/Loading.js';
import Filter from '../recipe-list/Filter.js';
import { getRecipes } from '../services/recipe-api.js';
import Footer from '../common/Footer.js';

class RecipeListApp extends Component {
  onRender(dom) {
    const header = new Header({
      title: 'Cook With JBJ'
    });
    dom.prepend(header.renderDOM());

    const main = dom.querySelector('main');
    const filter = new Filter({ recipes: [] });
    main.appendChild(filter.renderDOM());

    const list = new RecipeList({ recipes: [] });

    main.appendChild(list.renderDOM());

    const loading = new Loading({ loading: true });
    dom.appendChild(loading.renderDOM());


    const footer = new Footer();
    dom.appendChild(footer.renderDOM());

    async function loadRecipes() {
      const recipes = await getRecipes();
      list.update({ recipes });
      loading.update({ loading: false });
    }

    loadRecipes();

    window.addEventListener('hashchange', () => {
      loadRecipes();
    });
  }

  renderHTML() {
    return `
      <div>
        <main></main>
      `;
  }
}

export default RecipeListApp;
