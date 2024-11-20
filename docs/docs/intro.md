---
sidebar_position: 1
---

## Getting Started

Let's get started by creating a new site with Dominity, and learning to add it to our project.

## Add Dominity using a CDN

Add Dominity using CDN to your HTML file, by copy pasting the following code block

```html
<script src="https://cdn.jsdelivr.net/gh/atoms19/dominity.js@latest/dist/dominity.min.js"></script>
```

Now you can use Dominity functions in all the script tags or js file linked after this script tag

:::tip[Choosing the right CDN]

You may not want all the features of Dominity in some cases, so depending on needs of your project, choose the ideal `<script>` tag that offers what you need.

### Minified Version

This version is an even lighter version of Dominity that strips away the routing feature and many other not so used methods of dominityElements

```html
<script src="https://cdn.jsdelivr.net/gh/atoms19/dominity.js@latest/dist/dominity-lite.min.js"></script>
```

### ESM version

This is a CDN that is supposed to be used in the js file linked through a script tag with `type="module"`
this version allows you to import only what you want from Dominity

```js title='app.js'
import {
  el,
  reactable,
} from 'https://cdn.jsdelivr.net/gh/atoms19/dominity.js@latest/dist/dominity-esm.js';
```

this version will not pollute the window but youll have to import the needed functions on the top of each component or page you make

:::success modules

for dominity to have components in different files then you must use `type='module'` on the main script tag after the dominity cdn
, you could define the structure of your app or routes in the js file that is linked through this script tag and keep other js files for each component or a page

:::
