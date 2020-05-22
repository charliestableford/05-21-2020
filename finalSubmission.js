//PRODUCT LISTING EXCERCISE
//Task 1
const hide = document.querySelector('.coltitle');
window.onload = (event) => {
hide.style.display = 'none'
};

//Task 2
const banner = document.querySelector('.image-element__wrap');
banner.style.height = '20vh';

//Task 3
/*provide 2 aditional scenarios that could be A/B tested on this page to help a prospective customer convert to a sale.
Scenario one - I would make the banner smaller and make the text of ‘everything up to 40% off’ more visible. I would also, but not at the same time for testing purposes, take away the text of 'All Sex Toys'. My hypothesis in this scenario being that it would take the user less time to navigate to the products.
Scenario two - Make the filter button more prominent in comparison to the most reviews drop down menu.
My hypothesis being, based on the heat map it is clicked double the amount as the reviews button and if more prominent would allow users to more quickly access their product of choice in mobile view.
*/

//PRODUCT DETAIL EXCERCISE
//Task 1
const primaryLogo = document.querySelector('.primary-logo');
window.onload = (event) => {
    primaryLogo.style.display = 'none';
    };

let searchBar = document.querySelector('.c-header__search');
// First I did this inline, like I did above, but this is not consistent with the code on the website.
searchBar.style.width = '60%';
searchBar.style.position = 'absolute';
searchBar.style.top = 0;
searchBar.style.left = '20%';

//Then I tried to use the global variable, getCompetuedStyle. This allows me to access the property, but not change it
const style = getComputedStyle(searchBar);
//This was my way of trouble shooting if an element did not change on the website, if I changed its property.
style.top 

// Another way I would go about this, if I create a ner variable in the css files would be: 
searchBar.classList.add('test');
// My test would have css code attached to it that looked like this: 
// * There would have to be an adjustment of media queries involved here that would make it responsive. 
.test{
    width: 60%;
    position: absolute;
    top: 0;
    left: 20%;
}

// A more complicated way, that I think although the above ways are effective would be the direction I would want to go in the future (read: this does not work), currently though I am creating an array with an object in it that is defining the new styles which I would like to implement. Then I am looping over those styles and assigning new values. 
// const newStyles = [{
//     "width": "60%",
//     "position": "absolute",
//     "top": "0",
//     "left": "20%"
//   }];
//   // forEach new style set the value of the searchBar above to the new values. 
//   newStyles.forEach(({ prop, value }) => {
//     searchBar.style[prop] = value;
//     // console.log(value, prop);
//   });

// I am aware that this is defined above but wanted to show that I am aware that this small function would be seperate in this scenario.
let searchBar = document.querySelector('.c-header__search');
function variantOne(searchBar){
    searchBar.classList.add('.test');
}

//Challenges faced 
// I started with going about this as I had done in the previous tasks, but I wanted to show diverse learning so I went about it the second way. But when testing I could not implelement this so it was more of a theory. The third way I was tryingto create an array of an obj and then loop over it and create new values for the searchBar variable defined above. I also thought about making this into a function. The last small function is to demonstrate thought process if this were a testing scenario. It would be easiest for traffic to be pointed in one direction through a function if they wanted to see the screen without the logo and a smaller search bar and the control group to reamin the same. 
// One last way to go about this would be building an alternative html with back ticks and ES6. If placed in a function, x amount of viewers would see this and y amount of viewers would see the page as is.
// I always try to start out with something that I know will work within my time frame before doing something that I am not as comfortable with because I always want something that is functioning to fall back on. I also would go by the companies best practices on this!

// Task 2
// First way 
// Although not dry, effective
const price = document.querySelector('.current_price');
price.style.position = 'absolute';
price.style.top = '-200px'; // I will defend the use of negative margins! 
price.style.fontWeight = 'bold';
price.style.color = '#1aaf1e';

// Into a function - this is assuming that the code above is not here as you cannot define something twice with const. 
const price = document.querySelector('.current-price');
console.log(price);
function priceVariant(price){   
   // console.log(price);
   price.style.position = 'absolute';
   price.style.top = '-200px';
   price.style.right = '10px';
   price.style.fontWeight = 'bold';
   price.style.color = '#1aaf1e';
}
// Rationale
// I considered placing the price ontop of the image, with a green square border around it like the branding of ‘add to cart’ but this took away from the branding on the image of Lelo. I tested the price on the left side of the page as well, but it felt too crowded and heavy. 

// CONVERSION FUNNEL
//Task 1
//  I believe that Simpli should focus on basket abandonment to imporve your conversion rate. This graph shows that only 6% of users go on to the check out. 
// Task 2
    /*I would like to test the following:Basket abandonment: I would like to test through an email reminder, reminding users that they have a product in their cart. If Simpli kept track of this during a sale time I would like to test making an email campaign that let users know that the item that was in their cart now had a discount. 
    Bounce rate of users initally coming to the site: I would like to think about intuitive and accessible navigation. I would test this through micro A/B testing and heat mapping. 
    The priority of this would come from what was most important to the marketing team but would ultimately depend on Simpli’s organizational sturucture.
    If I were to assume that the top priority was overall conversions I would start with cart abandoment - as less people make it to the cart the A/B testing would be more effective/ less time consuming/ produce faster results.
    If I was testing the checkout I would like to test how the products are laid out: grid? consistency with sizing of the add and subtract buttons, making the total savings larger, moving the checkout button up, taking away the 'go to cart' button.
    */
//Task 3
/*
Structuring of a test:

Observation: Based on the graph depicted there is a high abandoment of the basket without proceeding to checkout. 
Hypothesis: If the checkout cart icon was in the bottom right hand corner when you scrolled it would remind users that there was something in their cart. 
Variations: There would be two varations of this. 50% of users would see the page as is, this would allow a control group for our test to be run against. I would have the other 50% see the cart at the bottom right hand corner. 
This test would run for two weeks. Important to note that every test that I run will run for the entire time laid as out to make sure it is viable. 
I would also want this test to be statistically signifigant. In order to see this I would want to see a 5% increase in folks heading to the checkout. 
    Population: Our population are users that have added something to their cart.
    Sample: This represents the participants in the test, the folks who are visiting the site and adding an item to their cart for the duration og the test. Our test is attempting to estimate the behaviour of our sample population. The two groups (control and sample) will have an identical experience other than the movement of the cart icon on scroll. 
    Predicted outcomes: 
        1) Our test runs and there is a 5% increase in checkouts. 
        2) There is no detectable difference and our test fails - back to the drawing board!
        3) There is an increase in checkouts but our test does not see it. Maybe run again with a higher margin.
        4) There is no increase but the test believes there was. Was the sample size predicative of the entire population? Was that able to be measured within a 2 week time span?
    I would use a sample size caluculator to measure the sample size needed. This will take the baseline conversion rate (I would want to set this at 5%). I would want the statistical signifgance to be high 90%-95%. If there was a baseline conversion rate of 5% and a minimum detectable effect of 1% we will need a sample size of 12,866. If, based on the past statistics of the website (as the graph shown in the test does not show time), the number needed to be tested was too high I would decrease the statistical power and increase the minimum detectable effect - allowing for more error but a smaller population test size. 
    If the baseline conversion rate was at 5% then, based on the graph, I would want the test group to have an increased checkout rate of 11% minimum while the control group stayed at 6% of folks heading to the checkout page. 
    If this test worked, and the expected outcome of having a 5% increase was reached the test would be a success.
    Regardless of the success of the test I would write up a conclusion outlining the test for the marketing, design and engineering team.
*/
