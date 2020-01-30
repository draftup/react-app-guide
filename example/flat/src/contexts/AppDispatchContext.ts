import React from 'react';

import { AppDispatch } from 'types/appTypes';

export const AppDispatchContext = React.createContext<AppDispatch>(() => {});