const redux = require('redux')
function conterState(state = 1, action){
      switch(action.type){
          case'INCREMENT':
          return state + action.value
          case 'DECREMENT':
          return state - action.value
      }
      return state
}

function alterstory(){
    console.log(story.getState())
}

// theorical that reading all about code this story subscribe
const story = redux.createStore(conterState)
story.subscribe(alterstory)


// is very interesting because is started with state 1 he working together with
// first state received value five and stay six, but receive decrement and end stay two 
const increment = {type:'INCREMENT', value:5}
const decrement={type:'DECREMENT', value:4}

story.dispatch(increment)
story.dispatch(decrement)