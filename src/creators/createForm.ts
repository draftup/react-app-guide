import { Form } from "../types/utils";

export const createForm = <ValuesType, ValidityType> (initialValues: ValuesType): Form<ValuesType, ValidityType> => ({
    values: initialValues,
    validity: new Set<ValidityType>(),
    touched: false,
    submitted: false
})