// import { some } from 'core-js/core/array';
import {API_URL,API_KEY} from './config.js'
import {RESULTS_PER_PAGE} from './config.js'
import {getJSON,sentJSON} from './helpers.js';

if(module.hot){
  module.hot.accept()
}
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
     
    const data=await getJSON(`${API_URL}/${id}?key=${API_KEY}`);
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
const data= await getJSON(`${API_URL}?search=${query}&key=${API_KEY}`)
state.search.results=data.data.recipes;
state.search.page=1;



  }
  catch(err){
    throw err;
  }
}
export const getSearchResultsPage=function(page=state.search.page){
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
  // here
  localStorage.setItem('bookmarks',JSON.stringify(state.bookmarks));

}


export const addBookmark=function(recipe){
// add bookmark
state.bookmarks.push(recipe)
// console.log(state.bookmarks);
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
export const uploadRecipe=async function(newrecipe){
  // our api  data 
  /*
{publisher: 'The Pioneer Woman', ingredients: Array(13), source_url: 'http://thepioneerwoman.com/cooking/2012/03/seafood-pasta/', image_url: 'http://forkify-api.herokuapp.com/images/seafoodpasta5075.jpg', title: 'Seafood Pasta', …}
bookmarked: false
cooking_time: 75
id: "5ed6604591c37cdc054bcc54"
image_url: "http://forkify-api.herokuapp.com/images/seafoodpasta5075.jpg"
ingredients: (13) [{{quantity: 2, unit: 'tbsps', description: 'butter'}}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
publisher: "The Pioneer Woman"
servings: 4
source_url: "http://thepioneerwoman.com/cooking/2012/03/seafood-pasta/"
title: "Seafood Pasta"
}
*/
 //our form data 
/*
cookingTime: "23"
image: "TEST"
ingredient-1: "0.5,kg,Rice"
ingredient-2: "1,,Avocado"
ingredient-3: ",,salt"
ingredient-4: ""
ingredient-5: ""
ingredient-6: ""  
publisher: "TEST"
servings: "23"
sourceUrl: "TEST"
title: "TEST"
*/
try{



const ingredients=Object.entries(newrecipe)
                        .filter(([el,data])=>el.startsWith('ingredient') && data!=='')
                         .map(([el,data])=>{
                          // console.log(data);
                         const ing=[quantity,unit,description]= data.split(",").map(el=>el.trim())
                        //  const ing=[quantity,unit,description]= data.replaceAll(' ','').split(",")
                         if (ing.length!==3) throw new Error("oops the ingredintes format is not rescepted please try again withFormat: 'Quantity,Unit,Description'")
                         return {quantity:quantity ?+quantity:null,unit,description};
                        }

                        )


                        const recipe={
                          publisher: newrecipe.publisher, 
                          source_url: newrecipe.sourceUrl, 
                          image_url:newrecipe.sourceUrl , 
                          title:newrecipe.title,
                          bookmarked: true,
                          // id: "5ed6604591c37cdc054bcc54 ",
                          ingredients: ingredients,
                          cooking_time:+newrecipe.cookingTime,
                          servings:+newrecipe.servings
                        }
                      const responde=await  sentJSON(`${API_URL}?key=${API_KEY}`,recipe);                      
                      
state.recipe=responde.data.recipe
console.log(state.recipe);
addBookmark(state.recipe)

// that will add some other elemnts to the state but that is not a prbolme at all




// ([element,value])=>console.log(element,value)
//map(entry=>console.log(entry))
//data.replaceAll(' ','').split(","))

// first make a table like this ingredients: (13) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

}
catch(err){
  console.error(err);
// throw new Error('Opps the ingredetinds format is not recpeted please try again with this format Format:Quantity,Unit,Description')
}


}

const init=function(){

const storage=localStorage.getItem('bookmarks');
if(storage)state.bookmarks=JSON.parse(storage)
}
init();