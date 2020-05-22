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
//provide 2 aditional scenarios that could be A/B tested on this page to help a prospective customer convert to a sale.
//scenario one - make banner smaller and make the text of everything up to 40% off more visible, take away the text of 'all sex toys'. My hypothesis being that it is wasted space and takes the user longer to get to the products. 
//scenario two - Make the filter button more prominent than the most reviews drop down. My hypothesis being, based on the heat map it is clicked doulbe the amount as the reviews button and if more prominent would allow users to mpre quickly access the product of choice. 

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
// other places that I considered putting it were ontop of the image with a square border around it, to mimic the rest of the site, but this would be too close to the logo of lelo. I also considered putting it to the left of the page above the reviews but it felt too crowded.

// CONVERSION FUNNEL
//task 1
// I believe that you should focus on your basket abandonment to imporve your conversion rate. This graph shows me that only 6% of users go on to the check out. 
// task 2
// I would like to test:
    /* basket abandonment: through an email reminder, that folks have something in their cart, if we kept track of this during a sale time making an email campaign that let users know that whatever was in their cart now had a discount. 
    the bounce rate of users initally coming to the site: thinking about intuitive navigation. I would do this through micro A/B testing, heat mapping. The priority of this would come from what was most important to the marketing team. If I were to assume that this was overall conversions I would start with cart abandoment as less people make it there the A/B testing would be more effective/ less time consuming/ produce faster results.
    If I was testing the checkout I would like to test how the products are laid out: grid? consistency with sizing of the add and subtract buttons, making the total savings larger, moving the checkout button up, taking away the 'go to cart' - as I believe I am already in the cart.
    */
//task 3
/*
structuring of a test:
observation: based on the graph above there is a high abandoment of the basket without proceeding to checkout. 
hypothesis: if the checkout cart icon was in the bottom right hand corner when you scrolled it would remind users that there was something in their cart. 
variations: I would have two varations of this. 50% of users would see the page as is, this would allow a control group for our test to be run against. I would have the other 50% see the cart at the bottom right hand corner. This test would run for two weeks, and would run for the full two weeks to ensure the test was viable. 
*/
