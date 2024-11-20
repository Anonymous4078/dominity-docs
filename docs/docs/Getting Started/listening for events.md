---
sidebar_position: 4
---

### checking for click events

click events are the most commonly used u can easily chain `.onClick()` method to check for a click event

```js

el('button','click me').onClick((self,e)=>{
//first parameter self is a reference to the element itself, second parameter is event object

    console.log('i have been clicked')
    self.text('i have been clicked")
})


```

you can access the element itself and the event from the passed down function as its parameters

### checking for other events

for checking for other events we can use the `checkFor()` method and specify the event as the first parameter

```js
el('div').checkFor('mousemove', (e) => {
  //something
});
```

you can access the event as first argument from the function passed

### hold event

hold events enables you to check for press and hold ,for this first you have to use `enableHold()` method to allow checking for hold you can also specify the time you would want the element to be held to register a hold event (in seconds)

you can then use `checkFor()` to check for the event named 'hold' and take action accordingly

```js
el('button', 'click me')
  .enableHold(0.7)
  .checkFor('hold', () => {
    console.log('you pressed and hold the button');
  });
```

:::tip contextmenu api in pc
it is recommended to use contextmenu event along with prevent default for larger screens like in a pc, you can use dominityies helper function `getDeviceType()` to check the device
:::

### keyboard event

:::info
this is in the works
:::

:::danger
`enableHold()` method ,`onkey()` isnt included in the lite version, neither are helpers like `getDeviceType()`
:::

## causing event

you can cause an event to happen on an element by using the `causeEvent()` method and specifiying the event name in the parameter

## causing custom events

you might have to define your own events to get pass information from children to parent this can be done by `causeCustomEvent()` method and this takes in event name as first argument and second argument is an object containing data that can be accessed through `e.detail` from the eventListener

example **if u dont understand this dont panic , we havent learnt everything yet revisit this example after u complete a few more sections**

```js title='search.js'
function search() {
  let val = reactable('');
  return el('div')
    ._el('input', { type: 'text' })
    .model(val)
    .$end()
    ._el('button', 'search')
    .$end()
    .binder(val, (s, a) => {
      s.causeCustomEvent('search', {
        val: a,
      });
    });
}
export default search;
```

```js title='app.js'
import search from '/components/search.js';

function home(r) {
  qparam = reactable('');

  return el('div')
    ._el('h1', 'welcome {{q}}')
    .reactTo(qparam)
    .$end()
    ._el(
      search().checkFor('search', (e) => {
        qparam.set(e.detail.val);
      }),
    )
    .$end();
}
export default home;
```
