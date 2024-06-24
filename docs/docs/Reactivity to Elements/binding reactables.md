---
sidebar_position: 3

---

### binding values 

you often have to get values from user inputs and bind them to a variable or vice versa this is where `model()` method of dominity comes in 

```js
let name=reactable('')

el('input',{placeHolder:'enter your name',type:'text'}).model(name)

```

this will bind the inputs value to the name reactable whenever it updates 
it works with all types of inputs including select and checkboxes

### throttle and debounce 

you can add throttle or debounce as the second optional parameter to delay the effects of model

```js
let name=reactable('')

el('input',{placeHolder:'enter your name',type:'text'}).model(name,{throttle:0.2})

```

```js
let name=reactable('')

el('input',{placeHolder:'enter your name',type:'text'}).model(name,{debounce:0.2})

``` 

### lazy 

lazy is another option that enables model to only take place when there is a focus change , this is useful if u dont want realtime value updation 

```js 
let name=reactable('')

el('input',{placeHolder:'enter your name',type:'text'}).model(name,{lazy:true})

``` 
:::warning

throttle,debounce,lazy are in beta stages and isnt available yet

:::