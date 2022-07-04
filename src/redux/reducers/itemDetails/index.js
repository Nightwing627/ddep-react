// **  Initial State
const initialState = {
    itemDetails: ""
  }
  
  const itemDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ITEM_DETAILS_DATA":
        return { ...state, itemDetails: action.data }
      default:
        return state
    }
  }
  
  export default itemDetailsReducer
  