// import { some } from 'core-js/core/array';
import {API_URL} from './config.js'
import {APY_KEY} from './config.js'
import {RESULTS_PER_PAGE} from './config.js'
import {getJSON} from './helpers.js';

export const state={
    recipe:{},
    search:{
      query:'',
      results:[],
      resultsPerPage:RESULTS_PER_PAGE,
      page:1,
    },
    bookmarks:[],
   
};
export const loeadRecipe=async function(id){

        try{
     
    const data=await getJSON(`${API_URL}/${id}`);
    const {recipe} = data.data; 
    state.recipe=recipe;
if(state.bookmarks.some(bookmark=>bookmark.id===recipe.id))state.recipe.bookmarked=true;
 else state.recipe.bookmarked=false;



        // state.recipe=recipe
        // image_url: "http://forkify-api.herokuapp.com/images/FlatBread21of1a180.jpg"
        // ingredients: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
        // publisher: "My Baking Addiction"
        // servings: 4
        // source_url: "http://www.mybakingaddiction.com/spicy-chicken-and-pepper-jack-pizza-recipe/"
        // title: "Spicy Chicken and Pepper Jack Pizza"
        }
        catch(err){

       throw err;

        }
        
        
};
export const loadSearchResults=async function(query){
  try{
// console.log(query);
// if(!query)return;
state.search.query=query;
const data= await getJSON (`${API_URL}?search=${query}&key=${APY_KEY}`)
state.search.results=data.data.recipes;
state.search.page=1;



  }
  catch(err){
    throw err;
  }
}
export const getSearchREsultsPage=function(page=state.search.page){
// page 1 => 0 -9
// page 2 => 10 -19
// start=(page-1)*10;
// end=start+9;
state.search.page=page;
const start=(page-1)*state.search.resultsPerPage,end=start+state.search.resultsPerPage;
// slice doesnt slice the last one (end)
// console.log(start,end);
return state.search.results.slice(start,end);
}
export const updateServings=function(newServings){

  // witch side effecy
  // newquatity=quantity*(newServings/Servings)
state.recipe.ingredients.forEach(ing =>ing.quantity*=(newServings/state.recipe.servings)
);

state.recipe.servings=newServings;

}
const persistBookmarks=function(){
  localStorage.setItem('bookmarks',JSON.stringify(state.bookmarks));
}


export const addBookmark=function(recipe){
// add bookmark
state.bookmarks.push(recipe)
//mark currenct recips as bookmarked

if(recipe.id===state.recipe.id)state.recipe.bookmarked=true;
// console.log(state);
persistBookmarks()
} 


export const deleteBookmark=function(id){
  // console.log('delted');
  const index=state.bookmarks.findIndex(el=>el.id===id)
  state.bookmarks.splice(index,1) 
  if(id===state.recipe.id)state.recipe.bookmarked=false;
  
  persistBookmarks()
} 

const init=function(){

const storage=localStorage.getItem('bookmarks');
if(storage)state.bookmarks=JSON.parse(storage)

}
init();