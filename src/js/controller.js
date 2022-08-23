 //!imports

import 'core-js/stable'
import 'regenerator-runtime/runtime'
import * as modle from './modle.js'
import recipeView from './views/recipeView.js'
import SearchView from './views/searchView.js'
import  results from './views/resultsView.js'
import paginationView from './views/paginationView.js';
import resultsView from './views/resultsView.js'
import bookmarkView from './views/bookmarkView.js'


// hot loeading
// if(module.hot){
//   module.hot.accept();
// }




String.prototype.toDomElement = function () {

  const  wrapper = document.createElement('div');
  wrapper.innerHTML = this;
  return wrapper;
};



const controlRecipes=async function(){

  try{
  
    const id=window.location.hash.slice(1);
    if(!id)return;
    recipeView.renderSpiner();
    resultsView.update(modle.getSearchResultsPage())
    await modle.loeadRecipe(id);//in the modele
    recipeView.render(modle.state.recipe);// in the view
    bookmarkView.update(modle.state.bookmarks)
    // console.log(modle.state.bookmarks);
  }
  catch(err){
    console.error(err);
    recipeView.renderError();

  }


}



const controlSearchResults=async function(){
 
try{
  results.renderSpiner();
  const query=SearchView.getQuery();
  if(!query)return; 

  await modle.loadSearchResults(query);
  results.render(modle.getSearchResultsPage());

paginationView.render(modle.state.search)
}catch(err){
console.error(err);
}

}

const controlPagination=function(goToPage)
{
  // console.log("🚀 ~ file: controller.js ~ line 68 ~ goToPage", goToPage)
  results.render(modle.getSearchResultsPage(goToPage));
  paginationView.render(modle.state.search)

// modle.state.search.page=

}

const controlServings=function(newServings){

// update the recipe serings (in state)
modle.updateServings(newServings)
// update thre recipe view

// recipeView.render(modle.state.recipe);// in the view
recipeView.update(modle.state.recipe);// in the view

}
const controllAddBookmark=function(){

  // console.log(modle.state.recipe.bookmarked);
if(modle.state.recipe.bookmarked)modle.deleteBookmark(modle.state.recipe.id)
else modle.addBookmark(modle.state.recipe);

  recipeView.update(modle.state.recipe);

  bookmarkView.render(modle.state.bookmarks);
  
}
const controlBookMakrks=function(){

  bookmarkView.render(modle.state.bookmarks)  
 

}

const init =function(){
  
  bookmarkView.addHandlerInit(controlBookMakrks)
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerbookmark(controllAddBookmark);
  SearchView.addHandlerSearch(controlSearchResults)
  paginationView.addHandlerClick(controlPagination)


}
init()
