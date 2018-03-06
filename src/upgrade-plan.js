const { createStore } = require("redux");

const redux = require("redux");

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
    upgraded: false
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
create an action to upgrade the user's current plan.
*/

const UPGRADETOGOLD = "UPGRADETOGOLD"
const UPGRADETOSILVER = "UPGRADETOSILVER"

const updateCurrentPlan = (plan) => {
  return{
    type : plan,
    payload : {
      upgraded: true
    }
  }
}

/* 
Write a reducer to handle the above action
Make sure to update both the plan and set the upgraded flag to true
*/

function reducer(state = initialState, action){

  switch(action.type){

    case UPGRADETOGOLD :
      return {
        ...state,
        profile : {
          ...state.profile,
          currentPlan : 'gold',
          upgraded : action.payload.upgraded
        }
      }

      case UPGRADETOSILVER :
      return {
        ...state,
        profile : {
          ...state.profile,
          currentPlan : 'silver',
          upgraded : action.payload.upgraded
        }
      }
      
    default :
      return state

  }

}

/* create a store with the initial data above and the action */
const store = redux.createStore(reducer)
/* 
  Fire the action
*/

store.dispatch(
  updateCurrentPlan(UPGRADETOSILVER)
)
/* 
expected output: modified nextState
the store via store.getState() 
*/

console.log(store.getState());
