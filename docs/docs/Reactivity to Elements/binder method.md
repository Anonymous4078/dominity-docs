---
sidebar_position: 2
---
# binder method

despite the vague sounding name binder is one of the most useful methods on a dominityElement,
binder is basically binding a function that operates on the element in accordance to a reactable value change 

```js
let data=reactable({
//...
})

el('div').binder(data,(self,value)=>{
 self.text('i am '+value.name)

 self.style('color',value.color)

})

```
binder is freedom and it allows you to do whatever you like to an element when any of the reactable you wish to link it to changes
internally binder is also leveraging the `subscribe()` method of an element 




