import { createContext, useState } from "react";
import { useDisplayReducer } from "../reducer";


export const DisplayContext = createContext({});

export const DisplayContextProvider = ({ children }) => {
    const { state, dispatch } = useDisplayReducer();

    const contextData = {
        state,
        dispatch
    }

    return <DisplayContext.Provider value={contextData}>{children}</DisplayContext.Provider>
};



