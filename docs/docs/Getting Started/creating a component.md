### functions as components

whole point of writing elements in javascript is to make them reusable , by making reusable parts called components which has its own logic and template

```js
function cardComponent() {
  return el('div')._el('h1', 'hello world').$end();
}
```

:::info

notice that we are using the convention of closing all child elements except for the parent, this is important for the proper functioning of component
:::

### passing props

props are any parameter u define on the function header it can be anything that affects the component or can even be child components

```js
function cardComponent(title) {
  return el('div')._el('h1', title).$end();
}
```

as u can see the title is now dynamic and can be whatever value u pass while rendering the component

### rendering components

components are created when u call the function , u can call the function how many times as u prefer and it will make that much components

```js
cardComponent('i am the heading');
```

while calling u can pass all the props that are required by your component

### rendering component as child

for this we use `_el()` and call the component function inside the parenthesis alongside its props

```js
el('section')._el(cardComponent('your new title')).$end();
```

:::note using `_el()` to append elements
`_el()` is not only capable of creating children elements it can also append elements when it recives a Dominity element (or a variable that stores one)

:::

## component as a file

you could technically import and export components and have them made in their own js file

**if u dont understand this fully dont panic , we havent learnt everything yet revisit this example after u complete a few more sections, for now focus on the importing mechanics**

```js title='components/Dropdown.js'
function Dropdown(name, itemsList) {
  let open = reactable(false);

  return el('div')
    ._el('button', name)
    .onClick(() => {
      open.set(!open.get());
    })
    .$end()
    ._el('ul')
    .loops(itemsList, (item, parent) => {
      parent._el('li')._el('a', { href: itemsList.link });
    })
    .showIf(open)
    .$end();
}

export default Dropdown;
```

you can import this component and use this in other components or pages

```js title='app.js'
import Dropdown from 'components/Dropdown.js';

el('nav')._el(Dropdown('account')).$end();
```

:::tip classes as components

when a component has a lot of features you can make a class based component that has methods aswell
:::
