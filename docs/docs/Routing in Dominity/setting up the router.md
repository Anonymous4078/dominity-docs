---

sidebar_position: 2

---


### using dominityRouter

for router setup let the main js file linked to your html ,and create a new router


```js title='app.js'

import page1 from 'page1.js'
import page1 from 'page1.js'


let router=new DominityRouter()
router.defaultPath='/path' //this is important
.register('/path',page1)
.register('/path2',page2)
```

it is imported to registert the route with pages and also set a default path
default path is the path choosen when the page loads for the first time 


### using methods to route

router object has several methods that are useful `routeTo()` method takes in the path as string and routes you to the given path

`replaceRoute()` is similiar to routeTo but it replaces the current state , this is useful when u dont want users to go back to the previous state by using browser navigation keys


