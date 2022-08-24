//!imports

import 'regenerator-runtime/runtime';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import SearchView from './views/searchView.js';
import results from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import resultsView from './views/resultsView.js';
import bookmarkView from './views/bookmarkView.js';
import addRecipeView from './views/addrecipeView';
import addrecipeView from './views/addrecipeView';
import {MODAL_TIMEOUT_SEC} from './config';

// hot loeading
// if(module.hot){
//   module.hot.accept();
// }

String.prototype.toDomElement = function () {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = this;
  return wrapper;
};

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpiner();
    resultsView.update(model.getSearchResultsPage());
    await model.loeadRecipe(id); //in the modele
    recipeView.render(model.state.recipe); // in the view
    bookmarkView.update(model.state.bookmarks);
    // console.log(model.state.bookmarks);
  } catch (err) {
    // console.error(err);
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    results.renderSpiner();
    const query = SearchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);
    results.render(model.getSearchResultsPage());

    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (goToPage) {
  // console.log("🚀 ~ file: controller.js ~ line 68 ~ goToPage", goToPage)
  results.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);

  // model.state.search.page=
};

const controlServings = function (newServings) {
  // update the recipe serings (in state)
  model.updateServings(newServings);
  // console.log(newServings);
  // update thre recipe view

  // recipeView.render(model.state.recipe);// in the view
  recipeView.update(model.state.recipe); // in the view


  // !here
};
const controllAddBookmark = function () {
  // console.log(model.state.recipe.bookmarked);
  if (model.state.recipe.bookmarked)
    model.deleteBookmark(model.state.recipe.id);
  else model.addBookmark(model.state.recipe);

  recipeView.update(model.state.recipe);

  bookmarkView.render(model.state.bookmarks);
};
const controlBookMakrks = function () {
  bookmarkView.render(model.state.bookmarks);
};
const controladdRecipeView =async function (newrecipe) {
  // console.log(newrecipe);
  try{
   
    addRecipeView.renderSpiner()
    await  model.uploadRecipe(newrecipe)
    recipeView.render(model.state.recipe)
    // addRecipeView.render(model.state.recipe)//worng
    bookmarkView.render(model.state.bookmarks);
    addrecipeView.renderMessage()
    // change id in url
    window.history.pushState(null,'',`#${model.state.recipe.id}`)
    setTimeout(() => {
      addrecipeView.togglerWindow()
    },MODAL_TIMEOUT_SEC*1000);

    // console.log(model.state.recipe);
  }
  catch(err){
    addrecipeView.renderError()
    //! we should reset the form inthe casee of the  fail of  the uploaed and in the succes also
  }
  // upload the recipe data to the api 
}; 

const init = function () {
 
  bookmarkView.addHandlerInit(controlBookMakrks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerbookmark(controllAddBookmark);
  SearchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandelUpload(controladdRecipeView);
};
init();
