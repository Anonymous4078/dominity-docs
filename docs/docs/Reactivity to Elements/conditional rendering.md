---
sidebar_position: 4
---

you can tell an element to be rendered or not based on a condition that is stored in a reactable , this is useful for hiding and showing an element based on some condition

```js
let authenticated = reactable(true);

//assume homemenu is a component made with dominity

homeMenu().showIf(authenticated);
```

`showIf()` method takes in a reactable as its first value and hides and displays the content based on the truthiness of the reactable value
:::note
`showIf()` uses css to hide and show elements the element isnt rendered but it is still present in the domtree
:::

### more conditions

`showIf()` methods first argument only accepts a reactable this leads to some interesting behaviour
suppose we want the menu to be rendered when we are not authenticated

```js
homeMenu().showIf(!authenticated); //this will not work

homeMenu().showIf(authenticated, (v) => !v); //this will work
```

the second parameter accepts a byprocess function that allows us to check for complex conditions or even simple ones , this is a much more general solution **return value of byprocess function u define is the value that is being checked for in the end**

## render if

this is a method that achives true conditional rendering of an element where the element is taken out of the dom tree and re rendered `renderIf()` method takes exactly the same first two parameters as `showIf()` but there is an extra third paameter which helps us specify a container element where the rendered block will get added to on re rendering
