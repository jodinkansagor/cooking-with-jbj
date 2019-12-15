import Component from '../Component.js';

class RecipeDetail extends Component {

  renderHTML() {
    const recipe = this.props.recipe;
    console.log(recipe.attempts);
    return /*html*/ `
      <div class = "recipe-detail">
        <h1>${recipe.name}</h2>
          
          <img src = "${recipe.imageURL}" />
          <h3>Ingredients: ${recipe.ingredients.map(ingredient => {
    return `${ingredient.name}: ${ingredient.amount} ${ingredient.measurements}`;
  })}</h3>

    <h3>Attempts: ${recipe.attempts.map(attempt => {
    return `${attempt.month}-${attempt.day}-${attempt.year}: ${attempt.notes} Rating: ${attempt.rating}`;
  })}</h3>
    <h3>${recipe.type}</h3>
    `;
  }
}

export default RecipeDetail;
