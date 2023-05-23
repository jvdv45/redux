// https://www.youtube.com/watch?v=7bMTJxvEJiE

import { createStore } from "redux";

const initialState = {
    result: 1,
    lastValues: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                //override old properties
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            state.lastValues.push(action.payload);
            break;
        case "SUBTRACT":
            state = {
                ...state,
                //override old properties
                result: state.result - action.payload,
                //push in an immutable way
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }
    return state;
};

const store = createStore(reducer);

//whenever store is updated fire callback
store.subscribe(() => {
    console.log("Updates", store.getState());
});

//dispatch() passes to the action (type) and the value (payload) to the reducer
store.dispatch({
    type: "ADD",
    payload: 10
});

store.dispatch({
    type: "SUBTRACT",
    payload: 2
});