import Component from '../Component.js';

class RecipeDetail extends Component {

  renderHTML() {
    const recipe = this.props.recipe;
    console.log(recipe.ingredients[0].name);
    return /*html*/ `
      <div class = "recipe-detail">
        <h1>${recipe.name}</h2>
          <h3>${recipe.type}</h3>
          <img src = "${recipe.imageURL}" />
          <h3>${recipe.ingredients.map(ingredient => {
    return `${ingredient.name}: ${ingredient.amount} ${ingredient.measurements}`;})}</h3>
    `;
  }
}

export default RecipeDetail;
