import React from 'react';

import { AppStateContext } from "../contexts/AppStateContext";
import { AppDispatchContext } from "../contexts/AppDispatchContext";
import { appReducer } from "../reducers/appReducer";
import { createAppState } from '../creators/createAppState';

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(appReducer, null, createAppState);

    return(
        <AppDispatchContext.Provider value={dispatch}>
            <AppStateContext.Provider value={state}>
                {children}
            </AppStateContext.Provider>
        </AppDispatchContext.Provider>
    )
}