const { Cuisines, Dishes } = require("../../utils/data");
const { generateRandomMenuItem, generateMenu, selectRandomCuisine } = require("../../utils/restaurantUtils");

describe('Restaurant Functions', () => {
    test('Tests that generateRandomMenuItem correctly makes an item', () => {
      let randomCuisine = selectRandomCuisine()
      let randomItem = generateRandomMenuItem(randomCuisine)
      let expectedFormat ={
        dish: {
          name: expect.any(String),  // i also tried forever to get this to look for a specific item with its name and matchin description and price and i just couldnt
                                     // do it. i'm sorry. but hey, atleast it tests that what it generates is an object that matches this structure.
          description: expect.any(String),
          price: expect.any(Number)
        },
        // right quick, i'm going to be honest, I hate regex. I googled how to make a regex
        // that accepts a specific string or an empty one. I know, i should know regex off
        // the top of my head like every good programmer (sarcasm) but i caved into google.
        // forgive me
        special: expect.stringMatching(/^(Daily Special!!!)?$/)
        
      }
      expect(randomItem).toMatchObject(expectedFormat)
    });

    describe('generateMenu', () => {
      // Test implementations go here
    });

    test('Tests that selectRandomCuisine correctly picks 1 of 5 random cuisines from the Cuisines array', () => {
      let randomCuisine = selectRandomCuisine();
      let availableResults = ['italian','indian','chinese','vegan','mexican',]
      expect(availableResults).toContain(randomCuisine);
    });
});
