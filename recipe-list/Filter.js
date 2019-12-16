import Component from '../Component.js';

class Filter extends Component {

  onRender(form) {
    const ingredientsSearchInput = form.querySelector('input[name=search]');
    const typeOptions = form.querySelectorAll('select[name=type]');

    function updateControls() {
      const queryString = window.location.hash.slice(1);
      const searchParams = new URLSearchParams(queryString);

      ingredientsSearchInput.value = searchParams.get('ingredient') || '';
      const type = searchParams.get('type');
      if (type) {
        typeOptions.forEach(typeOption => {
          typeOption.selected === typeOption.value;
        });
      }
    }
    window.addEventListener('hashchange', () => {
      updateControls();
    });


    form.addEventListener('submit', event => {
      event.preventDefault();
      const formData = new FormData(form);

      const queryString = window.location.hash.slice(1);
      const searchParams = new URLSearchParams(queryString);

      searchParams.set('ingredients', formData.get('search'));
      searchParams.set('type', formData.get('type'));

      window.location.hash = searchParams.toString();
    });
  }


  renderHTML() {
    return /*html*/ `
      <form class = "search-form">
                <label>Search: <input type="text" name ="search"></label>
                <label>Choose a category of cuisine:<select class="type" name = "type">
                    <option value="">All Categories!</option>
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
                <section class = 'buttons'>
                  <button>Get My Recipes</button>
                  <button><a href = "/">Reset Your Search</a></button>
                </section>
            </form>
    `;
  }
}

export default Filter;
