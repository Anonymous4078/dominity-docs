for reactable objects and list we have a few methods that will come in use and certain things to take not of

### reactable lists

```js
let menu = reactable(['fish', 'chicken', 'vegetables']);

menu.value.push('pickle'); //this will update the list but none of the subscribers will be notified

menu.set([...menu.value, 'pickle']); //this will notify the subscribers
```

### reactable objects

`setProp()` can be used to set properties of reactable objects

```js
let books = reactable({
  count: 100,
  authors: 1000,
  collection: [],
  rating: 1,
});

books.value['rating'] = 2; //this wont notify subscribers

books.setProp('rating', 2);
```

:::info

you can manually trigger all subscribers using `.update()` method , this is really useful incase of arrays and objects since when u modify them u can manually tell everyone that it has been modified , this is what set method and setprop does internally

```js
books.value.price += 200;
books.update();

readingList.value.push(book);
readingList.update();
```

:::
