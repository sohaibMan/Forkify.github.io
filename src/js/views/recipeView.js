

import { Fraction } from 'fractional';
// console.log(Fraction);
import icons from 'url:../../img/icons.svg'


class RecipeView{

    #parentElment=document.querySelector('.recipe')
    #data;

render(data){
this.#data=data;
this.#claer()

this.#parentElment.insertAdjacentHTML('afterbegin',this.#gernerateMarkup());
    // const  recipe=await fetchRecipe(id);

    // cooking_time: 45
// id: "5ed6604591c37cdc054bc886"
// image_url: "http://forkify-api.herokuapp.com/images/FlatBread21of1a180.jpg"
// ingredients: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
// publisher: "My Baking Addiction"
// servings: 4
// source_url: "http://www.mybakingaddiction.com/spicy-chicken-and-pepper-jack-pizza-recipe/"
// title: "Spicy Chicken and Pepper Jack Pizza"

// recipeContainer.innerHTML=markup;

}

#claer(){
    this.#parentElment.innerHTML='';
}

#gernerateMarkup(){

    return  `
    <figure class="recipe__fig">
      <img src="${this.#data.image_url}" alt="${this.#data.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this.#data.title}</span>
      </h1>
    </figure>


    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this.#data.cooking_time}</span>
        <span class="recipe__info-text">minutes</span>
 
</div>
 
     
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this.#data.servings}</span>
        <span class="recipe__info-text">servings</span>
    
        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${icons}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${icons}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>
    

      <div class="recipe__user-generated">
        <svg>
          <use href="${icons}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${icons}#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>
    
    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">

 ${
    this.#data.ingredients.map(this.#generateMarkupIngredient).join(' ')
}
 
        
      </ul>
    </div>
    
    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this.#data.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this.#data.source_ur}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    

    `    
}
 renderSpiner()
{
    this.#claer();

  const markup=` 
  <div class='spinner'>
  <svg>
  <use href="${icons}#icon-loader"></use>
  </svg>
  </div> 

`
this.#parentElment.insertAdjacentElement('beforeend',markup.toDomElement());
// console.log(markup);

// parentEl.insertAdjacentHMTM
// parentEl.innerHTML=+markup;
}

#generateMarkupIngredient(ing){
    
    return` <li class="recipe__ingredient">
    <svg class="recipe__icon">
      <use href="${icons}#icon-check"></use>
    </svg>
    <div class="recipe__quantity">${ing.quantity ? new Fraction(ing.quantity).toString() :''}
    </div>
    <div class="recipe__description">
      <span class="recipe__unit">${ing.unit}</span>
      ${ing.description}
    </div>
    </li>
    `
}


}


export default new RecipeView() ;