import React from 'react';

import { AppDispatchContext } from "../contexts/AppDispatchContext";

export const useAppDispatch = () => {
    return React.useContext(AppDispatchContext);
}