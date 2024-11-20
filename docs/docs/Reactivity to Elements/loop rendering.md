---
sidebar_position: 5
---

when u have to render a list of items best way to avoid work is make a loop and iterate over the data
dominity allows you to do just that with the `loops()` method of dominityElements

loops basically takes in the reactable and allows u to call a function where u get value of item and parent element

```js
let menu = reactable(['egg', 'chicken', 'beef', 'barbeque', 'lamb']);

el('ul').loops(menu, (item, parent) => {
  parent._el('li', item);
});
```

this list will dynamically get rerenderd when you make a change in the menu

lets now make a searchable list with all our knowledge

### search filter component example

```js
function filterSearch() {
  let search = reactable('');
  let items = ['potatoes', 'chicken', 'rice', 'bread'];

  let filteredItems = reactable().deriveFrom(search, (val) => {
    return items.filter((i) => i.startsWith(val));
  });

  return el('div')
    ._el('input', '', {
      placeHolder: 'search in filter',
      type: 'search',
    })
    .model(search)
    .$end()
    ._el('ul')
    .loops(filteredItems, (item, parent) => {
      parent._el('li', item);
    })
    .$end();
}
```
