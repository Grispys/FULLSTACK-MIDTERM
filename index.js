const { Restaurants, Cuisines } = require("./utils/data");
const express = require('express');
const path = require('path');
const { generateMenu, selectRandomCuisine, coinFlip } = require("./utils/restaurantUtils");

const app = express();
// i turned restaurantdata into a constant array instead of var {}. made more sense so i can have both a string name to be displayed and the actual menu
// and have both be corelated. correlated? correllated? 

// menu is generated on startup AND stays consistent per view instance. reload the page itself? menu wont change. youd have to reload this js for it to get a new set! neato
const restaurantData = [
  {
    theGourmetBistro : generateMenu(selectRandomCuisine()),
    name: "The Gourmet Bistro"

  },
  {
    spicyKitchen : generateMenu(selectRandomCuisine()),
    name: "Spicy Kitchen"
  },
  {
    healthyEats : generateMenu(selectRandomCuisine()),
    name: "Healthy Eats"
  },
  {
    comfortDiner : generateMenu(selectRandomCuisine()),
    name: "Comfort Diner"
  },
  { 
  sweetTooth : generateMenu(selectRandomCuisine()),
  name: "Sweet Tooth Bakery"
  }

]; 

let gourmetAlerts;
let spicyAlerts;
let healthyAlerts;
let comfortAlerts;
let sweetAlerts;
if(coinFlip() == 1){
    gourmetAlerts = restaurantData[0]["theGourmetBistro"].menu[0].dish.name
}else{
  gourmetAlerts = "No current Dish of the Day."
}

if(coinFlip() == 1){
  spicyAlerts = restaurantData[1]["spicyKitchen"].menu[0].dish.name
}else{
  spicyAlerts = "No current Dish of the Day."
}

if(coinFlip() == 1){
  healthyAlerts = restaurantData[2]["healthyEats"].menu[0].dish.name
}else{
  healthyAlerts = "No current Dish of the Day."
}

if(coinFlip() == 1){
  comfortAlerts = restaurantData[3]["comfortDiner"].menu[0].dish.name
}else{
  comfortAlerts = "No current Dish of the Day."
}

if(coinFlip() == 1){
  sweetAlerts = restaurantData[4]["sweetTooth"].menu[0].dish.name
}else{
  sweetAlerts = "No current Dish of the Day."
}
// and listen man. i know this looks like a really lazy way to generate the dishes of the day for the menu alert page. and it is. i am tired.
// also it's up here instead of in the app.get so that the dishes of the day don't change between page refresh, only between server instance. 


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

/**
 * GET /
 * Renders the homepage that lists cities and restaurant names.
 */

// the stuff i added here is just for the random food to display on the home screen. takes a string from restaurantNames and uses with randomNum to get a random restaurant selected
// that gets put into the other 3 variables to pick the name, desc, and price. also used to show where the menu item came from. and it all works flawlessly! and looks ugly
// and yeah, the item it displays on the home screen, you WILL find if you visit that restaurants menu page
app.get('/', (request, response) => {
  const restaurantNames = [
    "theGourmetBistro",
    "spicyKitchen",
    "healthyEats",
    "comfortDiner",
    "sweetTooth"
  ];
  let randomNum = Math.floor(Math.random() * restaurantNames.length);
  let restaurantName = restaurantNames[randomNum]
  let randomItem = restaurantData[randomNum][restaurantName].menu[randomNum].dish.name
  let randomDesc = restaurantData[randomNum][restaurantName].menu[randomNum].dish.description
  let randomPrice = restaurantData[randomNum][restaurantName].menu[randomNum].dish.price
    response.render('index', { restaurants: Restaurants, randomItem, randomDesc, randomPrice, restaurantData, restaurantName});
  });
  
  /**
   * GET /restaurant/:name
   * Displays a specific restaurant's random menu.
   * The cuisine is randomly selected and a menu is generated based on it.
   */


  // i use a switch case here which looks at the selected item from the drop down menu. depending on that, it sets the display variable to be the correct set of menu items
  // i can then use stuff like .item or .special in the restaurant.ejs to access specific parts of specific menus. im a genuiys :)
  app.get('/restaurant', (request, response) => {
    const restaurantId = request.query.restaurantId;
    let display;
    let cuisine;
    console.log(`restaurantId: ${restaurantId}`);
    switch(restaurantId){
      case 'the-gourmet-bistro':
        cuisine = (restaurantData[0].theGourmetBistro.restaurant)
        display = (restaurantData[0].theGourmetBistro.menu)
        break;
      case 'spicy-kitchen':
        cuisine = (restaurantData[1].spicyKitchen.restaurant)
        display = (restaurantData[1].spicyKitchen.menu)
        break;
      case 'healthy-eats':
        cuisine = (restaurantData[2].healthyEats.restaurant)
        display = (restaurantData[2].healthyEats.menu)
        break;
      case 'comfort-diner':
        cuisine = (restaurantData[3].comfortDiner.restaurant)
        display = (restaurantData[3].comfortDiner.menu)
        break;
      case 'sweet-tooth-bakery':
        cuisine = (restaurantData[4].sweetTooth.restaurant)
        display = (restaurantData[4].sweetTooth.menu)
        break;
      default:
    }
    response.render('restaurant', {restaurantId, display, cuisine})
  });

  //Add any other required routes here

  app.get("/alerts",(request, response)=>{

    response.render('alerts', {gourmetAlerts, spicyAlerts, healthyAlerts, comfortAlerts, sweetAlerts});
  });

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});