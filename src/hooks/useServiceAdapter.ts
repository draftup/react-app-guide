import React from 'react';

import { ServiceAdapterContext } from "../contexts/ServiceAdapterContext";

export const useServiceAdapter = () => {
    return React.useContext(ServiceAdapterContext);
}