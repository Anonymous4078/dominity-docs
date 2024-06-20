---
sidebar_position: 1
---

### making pages

pages are components that encapsulate the entire content of a route of your website they are made just like the components but these page components are passed into a router so they get access to the router object and its methods through its first parameter

```js title="homePage.js"

import coursel from 'coursel.js'
import hero from 'hero.js'

function homePage(router){

   return el('div').
            _el(coursel()).$end().
            _el(hero()).$end()
}

export default homePage
```




