import React from 'react';

import { useAppDispatch } from './useAppDispatch';
import { useServiceAdapter } from './useServiceAdapter';

export const useServiceLayer = () => {
    const dispatch = useAppDispatch();

    const adapter = useServiceAdapter();

    const idleOperations = useIdleOperations();

    React.useEffect(() => { 
        idleOperations.forEach((operation) => {
            const inProcessOperation = modifyOperation(operation)
                .setStatus('IN_PROCESS')
                .done();

            dispatch(inProcessOperation);
        })

        adapter(dispatch)(idleOperations);
    },[idleOperations, dispatch, adapter])
}