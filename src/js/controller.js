

//!imports
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import * as modle from './modle.js'
import recipeView from './views/recipeView.js'

String.prototype.toDomElement = function () {

  const  wrapper = document.createElement('div');
  wrapper.innerHTML = this;
  return wrapper;
};






// https://forkify-api.herokuapp.com/v2


///////////////////////////////////////


const controlRecipe=async function(){

  try{

  
    const id=window.location.hash.slice(1);
    if(!id)return;
    recipeView.renderSpiner();
    await modle.loeadRecipe(id);//in the modele
    recipeView.render(modle.state.recipe);// in the view

  
// renderSpiner(recipeContainer);

// console.log(modle);
// const { recipe } = modle.state
// console.log("🚀 ~ file: controller.js ~ line 100 ~ controlRecipe ~ recipe",recipe)

const evnets=['load','hashchange']
evnets.forEach(ev=>window.addEventListener(ev,controlRecipe));


    

  }
  catch(err){
console.error(err);
  }


}


controlRecipe()

 