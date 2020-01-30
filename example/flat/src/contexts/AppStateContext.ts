import React from 'react';

import { AppState } from 'types/appTypes';

export const AppStateContext = React.createContext<null | AppState>(null);