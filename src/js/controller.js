//!imports

import 'core-js/stable'
import { async } from 'regenerator-runtime';
import 'regenerator-runtime/runtime'
import * as modle from './modle.js'
import recipeView from './views/recipeView.js'
import SearchView from './views/searchView.js'





String.prototype.toDomElement = function () {

  const  wrapper = document.createElement('div');
  wrapper.innerHTML = this;
  return wrapper;
};



const controlRecipe=async function(){

  try{
  
    const id=window.location.hash.slice(1);
    if(!id)return;
    recipeView.renderSpiner();
    await modle.loeadRecipe(id);//in the modele
    recipeView.render(modle.state.recipe);// in the view
  }
  catch(err){
    recipeView.renderError();

  }


}



const controlSearchResults=async function(){
 
try{
  const query=SearchView.getQuery();
  if(!query)return; 

  await modle.loadSearchResults(query);

  // rendring results
  // here
  console.log(modle.state.search.results);






}catch(err){
console.error(err);
}

}
// test
// controlSearchResults()






const init =function(){
  
  recipeView.addHandlerRender(controlRecipe);
  SearchView.addHandlerSearch(controlSearchResults)


}
init()
