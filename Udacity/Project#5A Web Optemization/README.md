## Website Performance Optimization portfolio project

This is the 5th project of Udacity Front End Development Nano Degree Program which aims to enhance developer's skills in optimizing a portfolio website performance.

### Getting started

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

#### Part 1: Optimize PageSpeed Insights score for index.html
Things I have done while optimize index.html page, included:
1- Replacing Google fonts link with a WebFontLoader script, check [Web Font Loader](https://github.com/typekit/webfontloader).  
2- Relocating all scripts to be at the bottom of Body container.
3- Mining linked CSS files and inlining them to avoid render blocking.
4- For (print.css), Media Query has been used to avoid render blocking.
5- Optimizing all images using different tools such as [Optimizilla.com](http://optimizilla.com/) and place them back in index.html.


#### Part 2: Optimize Frames per Second in pizza.html
To optimize views/pizza.html, we need to modify views/js/main.js until our frames per second rate is 60 fps or higher.

##### Part 2-A: Optimize pizza.html
Things I have done while optimize pizza.html page, included:
1- Optimizing main image using [Optimizilla.com](http://optimizilla.com/) and place it back in pizza.html.
2- Mining linked CSS files and inlining some of them to avoid render blocking.

##### Part 2-B: Optimize FPS rate in pizza.html
Things I have done while optimize main.js file, included:
1- Replacing all querySelector() and querySelectorAll() with getElementsByClassName() and getElementsById() since they are much faster.
2- Modifying updatePositions():
* Replaced document.scrollTop with window.pageYOffset and move it outside the for loop.
* Declaring all variables at the beginning of the for loop not inside it.  



### Useful Resources

* [Required project assets](https://github.com/udacity/frontend-nanodegree-mobile-portfolio)
* [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
