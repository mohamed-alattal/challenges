#(F1) Follows Over Time Graph
A store with a followprice button has access to a store application where among other stuff they can access a simple dashboard with useful information (number of followers, the most followed products, etc). 
An useful insight for stores is the possibility to check the progress of the number of follows of their products.

## The Problem
*Example:*

Eglobal sent a newsletter for its whole subscribers announcing the Followprice feature. After this marketing action they want to know if the number of the follows increased and if is it worth to make this kind of publicity.

Take in consideration:
- The graph must show the number of follows during the time.
- The built component must be reusable for other data (example: progress of sent notifications over time)
- Must be possible to see different views of the progress: daily, weekly and monthly.
- You may use [json server](https://github.com/typicode/json-server) to simulate an API call.
- Automated tests are valued.


## Background information

Example of a received data:
```
{
  follows:[
    {
      date: "15/04/2016",
      count: 4
    },
    {
      date: "14/04/2016",
      count: 9
    },
    {
      date: "13/04/2016",
      count: 2
    },
    {
      date: "10/04/2016",
      count: 14
    }
  ]
}
```

Feel free to explore the Followprice Store App and make your challenge fit better into it:
* Store app URL: http://stage.followprice.co:8080/
* Login: please ask us

## Other Requirements
Altough our challenges are technology agnostic and you are free to use whatever you want, we strongly recommend to use the techs we use on our stack and solutions with it will be valued.

Recommended technologies:
- HTML5
- [SASS](http://sass-lang.com/)
- [Bootstrap](http://getbootstrap.com/) 
- Javascript (if [ES6](http://es6-features.org/) bonus)
- [D3](https://d3js.org/) (if [reactd3](http://www.reactd3.org/) bonus)
- [React](https://facebook.github.io/react/) (bonus)
- [Redux](http://redux.js.org/index.html) (bonus)

In this challenge we recomend you to create a simple __React__ Component (or more than one if you think it would make sense) and make use of __reactd3__ to build the graph. Using React+Redux would be a great bonus.

Usefull links:
- [CSS & SASS guidelines](https://github.com/airbnb/css)
- [Javascript guidelines](https://github.com/airbnb/javascript)
- [Why react?](https://facebook.github.io/react/docs/why-react.html)
- [Redux documentation](http://redux.js.org/index.html)
- [Learn redux by Dan Abramov](https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree)
