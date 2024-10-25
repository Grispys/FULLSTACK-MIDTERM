const { Restaurants, Cuisines } = require("./utils/data");
const express = require('express');
const path = require('path');
const { generateRandomMenuItem, generateMenu, selectRandomCuisine } = require("./utils/restaurantUtils");

const app = express();
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
  app.get('/restaurant', (request, response) => {
    const restaurantId = request.query.restaurantId;
    console.log(`restaurantId: ${restaurantId}`);
    switch(restaurantId){
      case 'the-gourmet-bistro':
        console.log(restaurantData[0])
        break;
      case 'spicy-kitchen':
        console.log(restaurantData[1])
        break;
      case 'healthy-eats':
        console.log(restaurantData[2])
        break;
      case 'comfort-diner':
        console.log(restaurantData[3])
        break;
      case 'sweet-tooth-bakery':
        console.log(restaurantData[4])
        break;
      default:
    }
    response.render('restaurant', {restaurantId})
  });

  //Add any other required routes here

  app.get("/alerts",(request, response)=>{
    response.render('alerts');
  });

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});