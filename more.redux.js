const redux = require('redux')

//here i am defined all rules to do working function with redux
function CounterState (state=1, action){
      switch(action.type){
          case'INCREMENT':
            return state + action.value
          case 'DECREMENT':
            return state + action.value
      }
      return state
}

function CaugetState(){
    console.log(story.getState())
}

// this is very interesting story is very imporant
const story = redux.createStore(CounterState)
// remember i have subscribe story alwatys
story.subscribe(CaugetState)

// create variable to adding value or decrement value
const increment = {type:"INCREMENT", value:7}
const decrement = {type:"DECREMENT", value:5}