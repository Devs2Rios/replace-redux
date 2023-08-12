import { useState, useEffect } from "react";

let globalState = {};
let listeners = []; // Array of functions to call when the global state changes.
let actions = {};

// This function is used to update the global state and shouldListen optimizes re-rendering
export const useStore = (shouldListen = true) => {
    // Using useState initializes the global state just once
    // and re-render at every state change,
    // then we can just use the setState function to update it.
    const setState = useState(globalState)[1],
        dispatch = (actionIdentifier, payload) => {
            const newState = actions[actionIdentifier](globalState, payload);
            // The action updates the state.
            globalState = { ...globalState, ...newState };
            // Notify all the listeners and update the state.
            for (const listener of listeners) listener(globalState);
        };

    useEffect(() => {
        // Add a listener to the global state
        // and call the setState function to update it.
        if (shouldListen) listeners.push(setState);
        return () => {
            // Remove the listener from the global state
            // and remove it from the listeners array.
            if (shouldListen)
                listeners = listeners.filter((li) => li !== setState);
        };
    }, [setState, shouldListen]);

    return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
    // Here we initialize the global state and actions.
    if (initialState) globalState = { ...globalState, ...initialState };
    actions = { ...actions, ...userActions };
};