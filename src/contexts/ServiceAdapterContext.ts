import React from 'react';

import { ServiceAdapter } from "../types/utils";
import { AppDispatch, AppEvent } from "../types/app";

const fallbackAdapter = (dispatch: AppDispatch) => (operations: AppOperation[]) => {

}

export const ServiceAdapterContext = React.createContext<ServiceAdapter<AppEvent, AppOperation>>(fallbackAdapter);
