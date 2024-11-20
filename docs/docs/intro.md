---
sidebar_position: 1
---

# Installation

Let's setup **Dominity in less than a minutes**.

## Getting Started

Get started by **creating a new site with dominity** , lets learn to add Dominity to our oroject first.

## Add Dominity to your site with CDN

add dominity cdn your html file , by copy pasting the following code block

```html
<script src="https://cdn.jsdelivr.net/gh/atoms19/dominity.js@latest/dist/dominity.min.js"></script>
```

this is the easiest way to use dominity is with cdn its size is smaller than `10kB` smaller than bootstrap or jquery,
now u can use dominity functions in all the script tags or js file linked after this script tag

## Choosing the right CDN

You may not want all the features of Dominity sometimes, so depending on your project needs choose the ideal script tag that offers what you seek

### lite version

this version is an even lighter version of dominity that strips away the routing feature and many other not so used methods of dominityElements

```html
<script src="https://cdn.jsdelivr.net/gh/atoms19/dominity.js@latest/dist/dominity-lite.min.js"></script>
```

### Esm version

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
