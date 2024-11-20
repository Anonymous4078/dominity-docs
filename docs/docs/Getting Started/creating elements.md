---
sidebar_position: 1
---

### making elements

to create elements we use `el()` function

```js
el('div'); // this creates a <div></div> in the body
```

### hello world with dominity

lets start our journey with Dominity.js by making a hello world program
go to your js file and type

```js
el('h1', 'hello world');
```

if you see a hello world text on running the code , dominity is working properly and you are ready to start
as you might have realised already second parameter of el function is the text inside the h1 tag

### setting attributes

attributes of the element can go into the third parameter ,as an object of key value pairs

```js
el('button', 'hello', { tabindex: '0', 'aria-label': 'click me' });
```

### attributes for elements without text

some elements might not have text inside them , so u can directly enter the attributes as the 2nd argument

```js
el('input', { value: 2, max: 100, min: 1, type: 'range' });
```

### selecting elements

you can select an element using `$el()` and passing in the query
or u can select all of the elements with that query using `$$el()` this is equivalent of querySelector all in dominity

```js
let btn = $el('#button');

btn.text('woah'); //updating the text of button using dominity

let btns = $$el('buttons');

btns.forEach((btn) => {
  btn.style('background', 'blue');
}); //styling all buttons on the website blue
```

### storing reference in variables

All Dominity elements can technically be stored in variables this allows us to update or make changes to them in the code at a later point of time
even the reference of elements you created can be stored in a variable

```js
let btn = el('button', 'hello');

btn.onClick(() => {}); //adding a click event listener on stored reference
```
