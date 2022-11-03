## How to install ?( you need *nodejs* to bo installed (*npm* is included in node) )

<br/>

```
git clone https://github.com/sohaibMan/Forkify.github.io.git
cd Forkify.github.io.git
npm i && npm start
```

Forkify API v2 Documentation

@jonasschmedtman
This API provides recipes for building the forkify project in Jonas Schmedtmann's Complete JavaScript Course.

Important details
Search terms are limited. Search for "pizza" or another meal from this list ⟶ Search queries
Supports up to 100 API requests per hour
Only 1 API key request per hour
API key


Get all recipes/Create recipe
Allowed methods:GETPOST

GET: Returns a list of recipes for a specific search query

POST: Creates a new recipe

Path:https://forkify-api.herokuapp.com/api/v2/recipes

Parameters
Parameter	Required	Description
search	Yes	Search text. For example search=pizza
key	Yes (forPOST)	The ForkifyAPI key
Example URL: https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>

Get recipe/Delete recipe
Allowed methods:GETDELETE

GET: Returns a single recipe

DELETE: Deletes a single recipe associated with provided API key

Path:https://forkify-api.herokuapp.com/api/v2/recipes/:id

Parameters
Parameter	Required	Description
id	Yes	The id of the recipe to be fetched or deleted (part of URL)
key	Yes(forDELETE)	The ForkifyAPI key
Example URL:https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886?key=<insert your key>

#Available search queries

carrot
broccoli
asparagus
cauliflower
corn
cucumber
green pepper
lettuce
mushrooms
onion
potato
pumpkin
red pepper
tomato
beetroot
brussel sprouts
peas
zucchini
radish
sweet potato
artichoke
leek
cabbage
celery
chili
garlic
basil
coriander
parsley
dill
rosemary
oregano
cinnamon
saffron
green bean
bean
chickpea
lentil
apple
apricot
avocado
banana
blackberry
blackcurrant
blueberry
boysenberry
cherry
coconut
fig
grape
grapefruit
kiwifruit
lemon
lime
lychee
mandarin
mango
melon
nectarine
orange
papaya
passion fruit
peach
pear
pineapple
plum
pomegranate
quince
raspberry
strawberry
watermelon
salad
pizza
pasta
popcorn
lobster
steak
bbq
pudding
hamburger
pie
cake
sausage
tacos
kebab
poutine
seafood
chips
fries
masala
paella
som tam
chicken
toast
marzipan
tofu
ketchup
hummus
chili
maple syrup
parma ham
fajitas
champ
lasagna
poke
chocolate
croissant
arepas
bunny chow
pierogi
donuts
rendang
sushi
ice cream
duck
curry
beef
goat
lamb
turkey
pork
fish
crab
bacon
ham
pepperoni
salami
ribs

#mvc 
