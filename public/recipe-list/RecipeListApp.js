import Component from '../Component.js';
import Header from '../common/Header.js';
import RecipeList from './RecipeList.js';
import Loading from '../common/Loading.js';
import { getRecipes } from '../services/recipe-api.js';
import Footer from '../common/Footer.js';

class RecipeListApp extends Component {
  onRender(dom) {
    const header = new Header({
      title: 'Cook With JBJ'
    });
    dom.prepend(header.renderDOM());

    const loading = new Loading({ loading: true });
    dom.appendChild(loading.renderDOM());

    const list = new RecipeList({ recipes: [] });
    const main = dom.querySelector('main');
    main.appendChild(list.renderDOM());

    const footer = new Footer();
    main.appendChild(footer.renderDOM());


    try {
      getRecipes().then(recipes => {
        list.update({ recipes });
      });
    }

    catch (err) {
      console.log('load recipes failed', err);
    }

    finally {
      loading.update({ loading: false });
    }


  }

  renderHTML() {
    return `
      <div>
        <main></main>
      </div>
      `;
  }
}

export default RecipeListApp;
