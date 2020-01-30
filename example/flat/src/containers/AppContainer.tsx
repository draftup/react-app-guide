import React from 'react';

import { StoreProvider } from 'providers/StoreProvider';
import { ViewContainer } from 'containers/ViewContainer';

export const AppContainer = () => {
    return(
        <StoreProvider>
            <ViewContainer />
        </StoreProvider>
    )
}