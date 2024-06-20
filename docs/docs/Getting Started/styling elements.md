---
sidebar_position: 3
---

### styling with style method

style method is used to assign styles to dominityElements in bulk 
```js

el('div').style({
    backgroundColor:'red',
    padding:'3rem',
    display:'flex',
    'background-image':'url()'
})

```
they take in an object and allows you to style components directly from the js file 
you could either use camelCased props or use properties as strings

### using a class based css framework 

you are free to use any class based css framework like tailwind or synxia
which makes it a lot more easier to write css in the js file itself 

### using style to get computed style

you can also use style method to get a computed style of an element by using only first argument and providing the property as a string

```js

let buttonColor=Button().style('background-color')

```
