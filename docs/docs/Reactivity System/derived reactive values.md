---
sidebar_position: 2
---

derived values are dependant on another reactable ,ie their value changes when their parent ie the value which it is derived from changes

you can make a reactable a derived reactable by using the `.deriveFrom()` method which takes in the reactable to be derived from as the first argument and the derivation function as the second u can access the value of reactable which we are deriving from passed function
and return value of the function will be the value of the derived reactable

```js
let name=reactable('vishal')

let nameAsList=reactable().deriveFrom(name,(value)=>{
return Array.from(value)
})

```

:::tip

you can use an array of reactables as the first parameter  of the `.deriveFrom()` method to make the reactable dependant to two or more reactables simultaneously

:::