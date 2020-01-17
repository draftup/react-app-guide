import React from 'react';

import { AppDispatch } from '../types/app';

export const AppDispatchContext = React.createContext<AppDispatch>(() => {});