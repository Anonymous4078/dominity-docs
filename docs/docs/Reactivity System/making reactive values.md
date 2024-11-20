---
sidebar_position: 1
---

### why make values reactable

for dominity elements to automatically update or react to values you will have to convert the values to reactables first
reactables are exactly what they sound like they are values that elements can react to

you can make values reactable ie reactive value by wrapping the value in `reactable()` function

```js
let count = reactable(0);
```

here count is reactive value
you could pass any literal in `reactable()` function and make them a reactive varible

### setting and getting

unlike normal variables variables that store reactable values have two methods `.set()` and `.get()` to modify and get the value of the reactable

```js
let count = reactable(0);
count.set(1);

console.log(count.get());
```

sets the value of count

you can also access the value of a reactable through `.value` property and this is useful when u want to set or modify the value without notifying the subscribers

### subscribers

subscribers are functions that run when the reactable is modified with `.set()` method to add a new subscriber we can use the `.subscribe()` method , this method takes in a function

```js
let count = reactable(0);

count.subscribe(() => {
  console.log(count.value);
});
```

now each time the value of count is updated it will call our subscriber function , a reactable can have a large number of subscribers

you can remove a subscriber function using `.unsubscribe()` method and passing in the function to be removed
this will no longer trigger the function when the value of reactable updates
