 //!imports

import 'core-js/stable'
import { async } from 'regenerator-runtime';
import 'regenerator-runtime/runtime'
import * as modle from './modle.js'
import recipeView from './views/recipeView.js'
import SearchView from './views/searchView.js'
import  results from './views/resultsView.js'
import paginationView from './views/paginationView.js';

// hot loeading
// if(module.hot){
//   module.hot.accept();
// }




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
  results.renderSpiner();
  const query=SearchView.getQuery();
  if(!query)return; 

  await modle.loadSearchResults(query);
  results.render(modle.getSearchREsultsPage());

paginationView.render(modle.state.search)
}catch(err){
console.error(err);
}

}
// test
// controlSearchResults()
const controlPagination=function(goToPage)
{
  // console.log("🚀 ~ file: controller.js ~ line 68 ~ goToPage", goToPage)
  results.render(modle.getSearchREsultsPage(goToPage));
   paginationView.render(modle.state.search)

// modle.state.search.page=



}


const init =function(){
  
  recipeView.addHandlerRender(controlRecipe);
  SearchView.addHandlerSearch(controlSearchResults)
  paginationView.addHandlerClick(controlPagination)


}
init()
