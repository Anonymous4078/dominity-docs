---
sidebar_position: 2
---

### using dominityRouter

for router setup let the main js file linked to your html ,and create a new router

```js title='app.js'
import page1 from 'page1.js';
import page1 from 'page1.js';

let router = new DominityRouter();
router.defaultPath = '/path' //this is important
  .register('/path', page1)
  .register('/path2', page2);
```

it is imported to registert the route with pages and also set a default path
default path is the path choosen when the page loads for the first time
there is a third argument that can be used as a callback when the route is loaded

### using methods to route

router object has several methods that are useful `routeTo()` method takes in the path as string and routes you to the given path

`replaceRoute()` is similiar to routeTo but it replaces the current state , this is useful when u dont want users to go back to the previous state by using browser navigation keys

### using pageLayout

`pageLayout` property of router allows us to set the element in which router loads the elements on to by default it is automatically created as a div but you can set any element you like , this allows you to have some fixed content on your page even tho the router is active like a navbar

remember you have to pass in a dominityElement to the pageLayout using $el() or stored reference to any created elements
