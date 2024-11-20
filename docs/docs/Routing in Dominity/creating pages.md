---
sidebar_position: 1
---

### Making pages

Pages are components that encapsulate the entire content of a route of your website. They are made just like the components but these page components are passed into a router so they get access to the router object and its methods through its first parameter.

```js title="homePage.js"
import coursel from 'coursel.js';
import hero from 'hero.js';

function homePage(router) {
  return el('div')._el(coursel()).$end()._el(hero()).$end();
}

export default homePage;
```

:::warning[Client side router]

Client side router is only worth it for small progressive web apps with a few routes as it prevents page reloads and creates an app like experience,
it is not recommended for large projects if u dont want router use `lite-version` or `no-router` version

:::
