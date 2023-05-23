// https://www.youtube.com/watch?v=ZKCYqJu4n3s

import { createStore } from "redux";

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            state = state + action.payload;
            break;
        case "SUBTRACT":
            break;
    }
    return state;
};

const store = createStore(reducer, 1);

//whenever store is updated fire callback
store.subscribe(() => {
    console.log("Updates", store.getState());
});

//dispatch() passes to the action (type) and the value (payload) to the reducer
store.dispatch({
    type: "ADD",
    payload: 10
});