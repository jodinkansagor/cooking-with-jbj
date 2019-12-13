import Component from '../Component.js/index.js';
import Header from '../public/common/Header.js.js';
import RecipeList from './RecipeList.js.js';
import Loading from '../public/common/Loading.js.js';
import { getRecipes } from '../services/recipe-api.js';

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

    try {
      getRecipes().then(recipes => {
        list.update({ recipes });
      });
    }

    catch(err) {
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
