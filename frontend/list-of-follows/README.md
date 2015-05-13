### FrontEnd Challenge

# List of Follows

#### Goal

Convert an interface drawn on Photoshop to a rich client-side web interface. 
This interface is a simple list of follows that a single user has on his personal area. It can be downloaded [here](http://invis.io/a/681JJDB2M7GHK).

We'll mainly evaluate the compliance with the technological requirements, the code quality and the solution modularity and extensability.

#### Technological Requirements

* The given solution must use:
    - HTML5 
    - JavaScript/JQuery
    - [Sass] 
    - [Bootstrap 3.0] 
    - [React]  with the [Flux] architecture 
    - Any other javascript library that could improve the solution

* The given solution must be a closest math of the given drawing (on a pixel scale)

* The sort and search functionality included showed in the drawing must be implemented. 

* The solution should be extendable in order to add other visualization types of the same follow list, e.g. Grid visualization. 

#### Suggestions

* User the [Reflux] library to get a cleaner and faster implementation of the Flux architecture.

* Use a JSON with dummy data for each follow, assuming that the list of follows data came from a Followprice API.

[React]:https://facebook.github.io/react/
[Flux]:https://facebook.github.io/flux/docs/overview.html
[ReFlux]:https://github.com/spoike/refluxjs
[Bootstrap 3.0]:http://getbootstrap.com/
[Sass]:http://sass-lang.com/