//PRODUCT LISTING EXCERCISE
//task 1
const hide = document.querySelector('.coltitle');
window.onload = (event) => {
hide.style.display = 'none'
};

//task 2
const banner = document.querySelector('.image-element__wrap');
banner.style.height = '20vh';

//task 3
/*provide 2 aditional scenarios that could be A/B tested on this page to help a prospective customer convert to a sale.
Scenario one - I would make the banner smaller and make the text of ‘everything up to 40% off’ more visible. I would also, but not at the same time for testing purposes, take away the text of 'All Sex Toys'. My hypothesis in this scenario being that it would take the user less time to navigate to the products.
Scenario two - Make the filter button more prominent in comparison to the most reviews drop down menu.
My hypothesis being, based on the heat map it is clicked double the amount as the reviews button and if more prominent would allow users to more quickly access their product of choice. 
*/

//PRODUCT DETAIL EXCERCISE
//task 1
const primaryLogo = document.querySelector('.primary-logo');
window.onload = (event) => {
    primaryLogo.style.display = 'none';
    };

const searchBar = document.querySelector('.c-header__search');
// first I did this inline, like I did above, but this is not consistent with the code on the website.
// searchBar.style.width = '60%';
// searchBar.style.position = 'absolute';
// searchBar.style.top = 0;
// searchBar.style.left = 20%;

//then I tried to use the global variable, getCompetuedStyle. This allows me to access the property, but not change it
const style = getComputedStyle(searchBar);
//this was my way of trouble shooting if an element did not change on the website, if I changed its property.
style.top 

// another way I would go about this, if I had access to the css files would be: 
searchBar.classList.add('test');
// my test would have css code attached to it that looked like this: 
// * There would have to be an adjustment of media queries involved here that would make it responsive. 
.test{
    width: 60%;
    position: absolute;
    top: 0;
    left: 20%;
}

// a more complicated way, that I think although the above ways are effective would be the direction I would want to go in the future, currently though I am creating an array with an object in it that is defining the new styles which I would like to implement. Then I am looping over those styles and assigning new values. 
const newStyles = [{
    "width": "60%",
    "position": "absolute",
    "top": "0",
    "left": "20%"
  }];
  // forEach new style set the value of the searchBar above to the new values. 
  newStyles.forEach(({ prop, value }) => {
    searchBar.style[prop] = value;
  });

//challenges faced 
// It was hard for me to decide the best way to go about this. I wanted to provide my thought process behind the different ways shown to show diverse learning. Important to note that I would never inline style!

// task 2
// first way 
// although not dry, effective
const price = document.querySelector('.current_price');
price.style.position = 'absolute';
price.style.top = '-200px';
price.style.right = '10px';
price.style.fontWeight = 'bold';
price.style.color = '#1aaf1e';

// rationale
// I considered placing the price ontop of the image, with a green square border around it like the branding of ‘add to cart’ but this took away from the branding on the image of Lelo. I tested the price on the left side of the page as well, but it felt too crowded and heavy. 

// CONVERSION FUNNEL
//task 1
//  I believe that Simpli should focus on basket abandonment to imporve your conversion rate. This graph shows that only 6% of users go on to the check out. 
// task 2
    /*I would like to test the following:Basket abandonment: I would like to test through an email reminder, reminding users that they have a product in their cart. If Simpli kept track of this during a sale time I would like to test making an email campaign that let users know that the item that was in their cart now had a discount. 
    Bounce rate of users initally coming to the site: I would like to think about intuitive and accessible navigation. I would test this through micro A/B testing and heat mapping. 
    The priority of this would come from what was most important to the marketing team but would ultimately depend on Simpli’s organizational sturucture.
    If I were to assume that the top priority was overall conversions I would start with cart abandoment - as less people make it to the cart the A/B testing would be more effective/ less time consuming/ produce faster results.
    If I was testing the checkout I would like to test how the products are laid out: grid? consistency with sizing of the add and subtract buttons, making the total savings larger, moving the checkout button up, taking away the 'go to cart' button.
    */
//task 3
/*
structuring of a test:
observation: based on the graph above there is a high abandoment of the basket without proceeding to checkout. 
hypothesis: if the checkout cart icon was in the bottom right hand corner when you scrolled it would remind users that there was something in their cart. 
variations: I would have two varations of this. 50% of users would see the page as is, this would allow a control group for our test to be run against. I would have the other 50% see the cart at the bottom right hand corner. This test would run for two weeks, and would run for the full two weeks to ensure the test was viable. I would want this test to be statistically signifigant. In order to see this I would want to see a 5% increase in folks heading to the checkout. 
If there are currently (at tiem of snapshot) 14,612 folks with sessions that have items in their baskets I would want to show these folks two different screens. 7,306 would see the site as is and 7,306 would see the site with the cart checkout button on the bottom right when they scrolled. To be statistically signifigant the sessions that went to check out from the testing group would have to be 803 (11% heading to checkout). I would assume that the control group would stay at 6% heading to the checkout. If this test worked I would write up a conclusion outlining the test and why it worked for the marketing, design and engineering team.
*/
