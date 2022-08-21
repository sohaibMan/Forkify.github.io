import { async } from "regenerator-runtime"

export const state={
    recipe:{},
};


export const loeadRecipe=async function(id){

        try{
        const res=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
        const data=await res.json()
        if(!res.ok) throw new Error(`Opps ${data.message} , Error code ${res.status}`);
        
        // console.log(data.data);
        // console.log(data.recipe);
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
        }
        
        
};