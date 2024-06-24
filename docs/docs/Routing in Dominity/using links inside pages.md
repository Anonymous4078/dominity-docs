---
sidebar_position: 3
---

### the link component

for links to work inside routes they need to call `routeTo()` function on click
you can easily use a component provided by router called `Link()`


```js title='homePage.js'

function home(r){

    return el('div').
                _el('h1','welcome home page').$end().
                _el(r.Link('link','/search')).$end().

}
```
link component is just a modified anchor tag and u can wrap any element you want with it 
its first parameter is the text on the link and second is the path and third is wethere the link has to be replaced or not

### getting search queries in page

most of the time we rely on search queries for getting information for rendering the page this can easily be done using `getQueries()` method of router this will return an object of all search queries and its value on the link

```js title='searchPage.js'
function searchPage(r){
 let q=r.getQueries().q //like /search?q=
 return el('section'). 
            _el('h1',"search results for :"+q).$end().animate({
                opacity:[0,1]
            },0.3,'ease-in')


}

export default searchPage
```
:::tip
we are also animating a simple page transition here
:::