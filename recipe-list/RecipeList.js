import Component from '../Component.js';
import RecipeItem from './RecipeItem.js';

class RecipeList extends Component {
  onRender(dom) {
    const recipes = this.props.recipes;

    recipes.forEach(recipe => {
      const props = { recipe };
      const recipeItem = new RecipeItem(props);
      const recipeItemDOM = recipeItem.renderDOM();
      dom.appendChild(recipeItemDOM);
    });
  }

  renderHTML() {
    return `
      <section class="recipe-list" id="recipe-list>
        <ul class="recipes" id="recipes"></ul>
      </section>
        `;
  }

}

export default RecipeList;
