import Component from '../Component.js';

class Filter extends Component {
  renderHTML() {
    return /*html*/ `
      <form class = "search-form">
                <label>Search: <input type="text" name ="search"></label>
                <label>Choose a type of cuisine:<select class="type" name = "type">
                    <option value="">All Types!</option>
                    <option value="Italian">Italian</option>
                    <option value="Mexican">Mexican</option>
                    <option value="American">American</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Korean">Korean</option>
                    <option value="Thai">Thai</option>
                    <option value="Vietnamese">Vietnamese</option>
                    <option value="Indian">Indian</option>
                    <option value="Middle Eastern">Middle Eastern</option>
                    <option value="Russian">Russian</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="Jewish">Jewish</option>
                    <option value="Central American and Carribbean">Central American and Carribbean</option>
                    <option value="Hawaiian">Hawaiian</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Other">Other</option>
                </select></label>
                
                <label>Minimum Speed: <input type="text" name="speed"></label>
                <label>Minimum Attack: <input type="text" name="attack"></label>
                <label>Minimum Defense: <input type="text" name="defense"></label>
                <button>Get My Pokemon!</button>
                <button><a href = "../pokedex.html">Reset Your Search</a></button>
            </form>
    `
  }
}

export default Filter;
