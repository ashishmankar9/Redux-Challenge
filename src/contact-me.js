const { createStore } = require("redux")

const initialState = {
  profile: {
    gender: "female",
    name: {
      title: "mrs",
      first: "dânia",
      last: "da mota"
    },
    phone: "015394 16261",
    cell: "0757-275-048",
    location: {
      street: "2591 rua pará ",
      city: "teixeira de freitas",
      state: "mato grosso",
      postcode: 31682
    },
    currentPlan: "free",
    upgraded: false,
    relationship_actions: {
      se: "6e344ff4f1940c62fc2f7dd2f116696a",
      contacts_status: "not_contacted",
      contactstatus_title: "Show All",
      call_sms: "CALL / SMS",
      can_cancel: false,
      can_send_reminder: true,
      no_action: true,
      maybe_action: true,
      can_chat: false
    }
  },
  plans: [
    {
      id: "33453ttt",
      name: "gold",
      cost: 3500
    },
    {
      id: "334545tt",
      name: "silver",
      cost: 2500
    }
  ]
};

/* 
create an toggle action to toggle the can_chat  flag
You should be able to turn the flag from true to false to true again etc.
*/

const TOGGLE_CHAT = 'TOGGLE_CHAT'

const toggleChat = () => {

  return {

    type : TOGGLE_CHAT,
    payload : ""

  }

}

const relationshipActions = initialState.profile.relationship_actions
/* 
Write a reducer to handle the above action
Make sure to update immutably
*/

function reducer(state = relationshipActions, action){

  switch(action.type){

    case TOGGLE_CHAT:
      return {

        can_chat : !state.can_chat

      }

    default : 
      return state
  }

}

/* 
  create a store with the initial data above and the action
*/

const store = createStore(reducer)

/* 
  Fire the action
*/

store.dispatch(toggleChat())

/* 
expected output: modified nextState
the store via store.getState() 
*/

console.log(store.getState());

store.dispatch(toggleChat())

console.log(store.getState());
