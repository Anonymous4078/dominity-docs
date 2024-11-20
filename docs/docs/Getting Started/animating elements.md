---
sidebar_position: 6
---

### using animate method

you can swiftly animate any property using the `.animate()` method of domintyElement,

it takes in an object with properties to be animated as first argument and time in seconds as the second argument third argument is the timing function and fourth is an optional callback you can call after the end of the animation

```js
el('h1', 'i will be animated').animate(
  {
    opacity: ['0', '1'], //arrays can be used to say like [startval, endval] for any prop
    transform: 'translateX(-100%)',
  },
  0.25,
  'ease-in',
);
```
