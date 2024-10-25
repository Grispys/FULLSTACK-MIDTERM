const { Restaurants, Cuisines } = require("./utils/data");
const express = require('express');
const path = require('path');
const { generateMenu, selectRandomCuisine } = require("./utils/restaurantUtils");

const app = express();
// i turned restaurantdata into a constant array instead of var {}. made more sense so i can have both a string name to be displayed and the actual menu
// and have both be corelated. correlated? correllated? 

// menu is generated on startup AND stays consistent per view instance. reload the page itself? menu wont change. youd have to reload this js for it to get a new set! neato
// i couldnt think of any better way to display what kind of cuisine that 

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

]; //This should be populated soon

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

/**
 * GET /
 * Renders the homepage that lists cities and restaurant names.
 */

// the stuff i added here is just for the random food to display on the home screen. takes a string from restaurantNames and uses with randomNum to get a random restaurant selected
// that gets put into the other 3 variables to pick the name, desc, and price. also used to show where the menu item came from. and it all works flawlessly! and looks ugly
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
  let randomItem = restaurantData[randomNum][restaurantName][1].dish.name
  let randomDesc = restaurantData[randomNum][restaurantName][1].dish.description
  let randomPrice = restaurantData[randomNum][restaurantName][1].dish.price
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
    response.render('alerts');
  });

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});