/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* A test to make sure that the allFeeds variable has been defined
         * and that it is not empty. Experiment with this before we get started
         * on the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* A test that loops through each feed in the allFeeds object and
         * ensures it has a URL defined and that the URL is not empty.
         */
         it('URLs are defined', function() {
            allFeeds.forEach(function(feed){
               expect(feed.url).toBeDefined();
               expect(feed.url).not.toBe('');
            });
         });

        /*  A test that loops through each feed in the allFeeds object and
         *  ensures it has a name defined and that the name is not empty.
         */
         it('Names are defined', function() {
            allFeeds.forEach(function(feed){
               expect(feed.name).toBeDefined();
               expect(feed.name).not.toBe('');
               expect(typeof feed.name).toBe("string");
            });
         });
      });


    /* A new test suite named "The menu" */
      describe('The menu', function() {

        /* A test that ensures the menu element is hidden by default.
         */
         it('Body tag contains "menu-hidden"', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* A test that ensures the menu changes visibility when the menu icon
          * is clicked. This test have two expectations: does the menu
          * display when clicked and does it hide when clicked again.
          */

          it('Body tag flips its class name "menu-hidden"', function() {

             $('.menu-icon-link').click();
             expect($('body').hasClass('menu-hidden')).not.toBe(true);

             $('.menu-icon-link').click();
             expect($('body').hasClass('menu-hidden')).toBe(true);
          });

   });


   /* A new test suite named "Initial Entries" */
      describe('Initial Entries', function() {
      /* A test that ensures when the loadFeed function is called and completes
       * its work, there is at least a single .entry element within the .feed
       * container. Note, loadFeed() is asynchronous so this test will require
       * the use of Jasmine's beforeEach and asynchronous done() function.
       */
           beforeEach(function(done) {
               loadFeed(0, function() {
                   done(); // required condition
               });
            });

            it('Feed container has 1 entry atleast', function() {
               expect( $('.feed .entry').length ).toBeGreaterThan(0);
            });
	     });


    /* A new test suite named "New Feed Selection" */
      describe('New Feed Selection', function() {

        /* A test that ensures when a new feed is loaded by the loadFeed
         * function that the content actually changes. Note, loadFeed() is
         * asynchronous.
         */
         var firstFeed;
         beforeEach(function(done) {
            loadFeed(0, function() {
               firstFeed = $('.feed').html();
               loadFeed(1, function() {
                  done();  // required condition
               });
            });
         });

         it("Load content has been changed", function(done) {
            var secondFeed = $('.feed').html();
            expect(firstFeed).not.toBe(secondFeed);
            done();  // required condition
         });
      });
}());
