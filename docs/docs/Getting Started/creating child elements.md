---
sidebar_position: 2

---

### making child elements

child elements are created using `._el()` method of dominityElements ,this method is identical to `el()` function

```js
 el('div').
    _el('h1','i am title')

```
### chaining children

you can chain `._el()` to itself and create a child inside a child and so on , it is recomended to use intendation to make code readable

```js
 el('div').
    _el('h1','i am title').
        _el('span','dominity',{class:'bold'})

```
### closing an element

closing a tag is fundamental , cause lets say u have a div and u have created a child title and u want another child sub title inside the div but when u chain 
`.-el()` again you get a child inside of the title so how do we close the title we can use the `.$end()`  method this will allow us to chain `._el()` to parent again

_here is an example_
```js
 el('div').
    _el('h1','i am title').$end().
    _el('h3','i am subtitle')

```

as u can see we went back to working with parent div when we chain `$end()` 
we will talk more about chaining end to return to working with parent later on , so lets just put it out there

 **its better to close all children of the parent and not close the parent**

```js
 el('div').
    _el('h1','i am title').$end().
    _el('h3','i am subtitle').$end()

```

### acessing child elements 

you can use `child(n)` method to get nth child indexing starts from 0

or you can select a child that matches a specific query from the parent uisnf `$_el()` and passing in the query