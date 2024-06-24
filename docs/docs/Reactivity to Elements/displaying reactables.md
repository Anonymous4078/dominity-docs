---
sidebar_position: 2

---


dominity uses templates to display reacable values, you can chain the `reactTo()` method of dominityElement and pass in the value u want it to react to  

```js

let name=reactable('vishal').as('name')

el('h1','my name is {{name}}').reactTo(name)


```

due to limitation of dominity an element's text can only react to one reactable at the moment if u want multiple u could store an object as a reactable like

```js
let user=reactable({
    name:'woah',
    age:90

}).as('u')

el('h2','hello i am {{u.name}} and i am {{u.age}} years old').reactTo(user)

```

or use iline tags which include one reactable at a time , note this limitation will be fixed in the later updates

we have learnt the basics enough for us to built a counter using dominity
### counter example


```js

function Counter() {
  let count = reactable(0).as('count');

  return el('div').
             _el('p', "count: {{count}}").reactTo(count).$end().
             _el('button', "increment").onClick(() => {
                    count.set(count.value + 1);
            }).$end().
            _el('button', 'decrement').onClick(() => {
                    count.set(count.value - 1);
            }).$end()

}


```

