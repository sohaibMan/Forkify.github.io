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

// here

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
    resultsView.update(modle.getSearchREsultsPage())
    await modle.loeadRecipe(id);//in the modele
    recipeView.render(modle.state.recipe);// in the view
    bookmarkView.update(modle.state.bookmarks)
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
  results.render(modle.getSearchREsultsPage());

paginationView.render(modle.state.search)
}catch(err){
console.error(err);
}

}

const controlPagination=function(goToPage)
{
  // console.log("🚀 ~ file: controller.js ~ line 68 ~ goToPage", goToPage)
  results.render(modle.getSearchREsultsPage(goToPage));
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
  // recipeView.render(modle.state.recipe);

  bookmarkView.update(modle.state.bookmarks);
  
}
const controlBookMakrks=function(){

  // console.log(modle.state.bookmarks);
  bookmarkView.render(modle.state.bookmarks)  

}

const init =function(){
  
  bookmarkView.addHandlerInit(controlBookMakrks)
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHanglerUpdateServings(controlServings);
  recipeView.addHanglerbookmark(controllAddBookmark);
  SearchView.addHandlerSearch(controlSearchResults)
  paginationView.addHandlerClick(controlPagination)


}
init()
