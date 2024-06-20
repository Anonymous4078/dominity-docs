---
sidebar_position: 3
---

### when to use linked reactables

linked reactables are linked 2 ways that means when one is modified other is affected and vice versa you can link n number of reactables to behave this way

this is useful when 2 items are interconvertable , you can do this by usign `.link()` method of the reactables it takes in the parent element to be linked to as the first argument and 2 converter functions as second and third these functions establish the relation btw parent and child and child to parent 

```js

let name=reactable('vishal')

let nameAsArray=reactable().link(name,(v)=>{
return v.join('') // this is how nameAsArray's parent name relates to this 
},(v)=>{
return Array.from(v) //this is how nameAsArray relates itself from parent
})


```

you can link more reactables to the name we just made and all of them will be interlinked 


