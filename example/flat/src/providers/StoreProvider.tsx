import React from 'react';

import { AppStateContext } from "contexts/AppStateContext";
import { AppDispatchContext } from "contexts/AppDispatchContext";
import { createAppState } from 'creators/createAppState';
import { appStateReducer } from 'reducers/appStateReducer';

type Props = {
    children: React.ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
    const [state, dispatch] = React.useReducer(appStateReducer, null, createAppState);

    return(
        <AppDispatchContext.Provider value={dispatch}>
            <AppStateContext.Provider value={state}>
                {children}
            </AppStateContext.Provider>
        </AppDispatchContext.Provider>
    )
}