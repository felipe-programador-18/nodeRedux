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