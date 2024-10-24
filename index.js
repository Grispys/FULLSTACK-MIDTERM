const { Restaurants, Cuisines } = require("./utils/data");
const express = require('express');
const path = require('path');
const { generateRandomMenuItem, generateMenu, selectRandomCuisine } = require("./utils/restaurantUtils");

const app = express();
let restaurantData = {}; //This should be populated soon

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

/**
 * GET /
 * Renders the homepage that lists cities and restaurant names.
 */
app.get('/', (request, response) => {
  let randomCuisine = selectRandomCuisine()
  let randomItem = generateRandomMenuItem(randomCuisine);
    response.render('index', { restaurants: Restaurants, randomItem, randomCuisine});
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
        todayCuisine = selectRandomCuisine();
        generateMenu(todayCuisine)
        break;
      case 'spicy-kitchen':
        todayCuisine = selectRandomCuisine();
        generateMenu(todayCuisine)
        break;
      case 'healthy-eats':
        todayCuisine = selectRandomCuisine();
        generateMenu(todayCuisine)
        break;
      case 'comfort-diner':
        todayCuisine = selectRandomCuisine();
        generateMenu(todayCuisine)
        break;
      case 'sweet-tooth-bakery':
        todayCuisine = selectRandomCuisine();
        generateMenu(todayCuisine)
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