import view from './view';

class addRecipeView extends view {
  _parentElment = document.querySelector('.upload');//form
  _winodw = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnwOpen = document.querySelector('.nav__btn--add-recipe');
  _btnwClose = document.querySelector('.btn--close-modal');
  _simpleMsg ='Recipe was succefffully uploded ';
  _errorMsg = 'opps , cannot upload because bad connection your recipe please retry again  ';
  constructor() {
    super();

    this._addHandelShowWindow();
    this._addHandelHideWindowWindow();

  }
  _gernerateMarkup() {
    return `
    <div class="upload__column">
    <h3 class="upload__heading">Recipe data</h3>
    <label>Title</label>
    <input value="pizza marocain" required name="title" type="text" />
    <label>URL</label>
    <input value="https://"  name="sourceUrl" type="text" />
    <label>Image URL</label>
    <input value="https://"  name="image" type="text" />
    <label>Publisher</label>
    <input value="SOHAIB MANAH" required name="publisher" type="text" />
    <label>Prep time</label>
    <input value="23" required name="cookingTime" type="number" />
    <label>Servings</label>
    <input value="23" required name="servings" type="number" />
  </div>

  <div class="upload__column">
    <h3 class="upload__heading">Ingredients</h3>
    <label>Ingredient 1</label>
    <input
      value="0.5,kg,Rice"
      type="text"
      required
      name="ingredient-1"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
    <label>Ingredient 2</label>
    <input
      value="1,,Avocado"
      type="text"
      name="ingredient-2"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
    <label>Ingredient 3</label>
    <input
      value=",,salt"
      type="text"
      name="ingredient-3"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
    <label>Ingredient 4</label>
    <input
      type="text"
      name="ingredient-4"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
    <label>Ingredient 5</label>
    <input
      type="text"
      name="ingredient-5"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
    <label>Ingredient 6</label>
    <input
      type="text"
      name="ingredient-6"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
  </div>

  <button class="btn upload__btn">
    <svg>
      <use href="src/img/icons.svg#icon-upload-cloud"></use>
    </svg>
    <span>Upload</span>
  </button>
    `
  }
render(){
  this._claer()
this._parentElment.insertAdjacentHTML('afterbegin',this._gernerateMarkup());
}
_showWindow(){
 
  this.render()
  this.togglerWindow()
 
}

_addHandelShowWindow(){

this._btnwOpen.addEventListener('click',this._showWindow.bind(this))
  }

addHandelUpload(handler){
  
    this._parentElment.addEventListener('submit',function(e){
    
    
      e.preventDefault();
    const dataArr=[...new FormData(this)]
    const data=Object.fromEntries(dataArr);
    handler(data);
// console.log(this._parentElment);

  // _addHandelHideWindowWindow().bind(this);
  })


 
  }

_addHandelHideWindowWindow(){
this._btnwClose.addEventListener('click',this.togglerWindow.bind(this))
this._overlay.addEventListener('click',this.togglerWindow.bind(this))
  }
  togglerWindow(){
    this._overlay.classList.toggle('hidden')
    this._winodw.classList.toggle('hidden')
}



}
export default new addRecipeView();
