---
sidebar_position: 6
---

### Using `animate()` method

You can quickly animate any property using `<DominityElement>.animate()`.

It takes the following arguments:
1. `object` - An object with properties to be animated
2. `duration` - Time in seconds
3. `timingFn` - The timing function
4. `callback` - An optional callback you can call after the end of the animation

```js
el('h1', 'I will be animated!').animate(
  {
    opacity: ['0', '1'], // Arrays can be used like [startValue, endValue] for any property
    transform: 'translateX(-100%)',
  },
  0.25,
  'ease-in',
);
```
