
export type Form<ValuesType, ValidationErrorType> = {
    values: ValuesType;
    validationErrors: Set<ValidationErrorType>;
    submitted: boolean;
    touched: boolean;
}