import { async } from "regenerator-runtime"
import {API_URL} from './config.js'
import {getJSON} from './helpers.js';

export const state={
    recipe:{},
};


export const loeadRecipe=async function(id){

        try{
     
    const data=await getJSON(`${API_URL}/${id}`);
    const {recipe} = data.data; 
    state.recipe=recipe;
        // state.recipe=recipe
        // image_url: "http://forkify-api.herokuapp.com/images/FlatBread21of1a180.jpg"
        // ingredients: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
        // publisher: "My Baking Addiction"
        // servings: 4
        // source_url: "http://www.mybakingaddiction.com/spicy-chicken-and-pepper-jack-pizza-recipe/"
        // title: "Spicy Chicken and Pepper Jack Pizza"
        }
        catch(err){

          console.log(err);

          // error handling
        }
        
        
};