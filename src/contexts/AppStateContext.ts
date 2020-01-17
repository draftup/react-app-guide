import React from 'react';

import { AppState } from '../types/app';

export const AppStateContext = React.createContext<null | AppState>(null);