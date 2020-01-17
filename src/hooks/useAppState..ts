import React from 'react';

import { AppStateContext } from "../contexts/AppStateContext";

export const useAppState = () => {
    return React.useContext(AppStateContext);
}