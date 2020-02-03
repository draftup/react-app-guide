
type InitialFormStatus = 'CREATED';

type NextFormStatus = 'SUBMITTED' | 'REJECTED' | 'ACCEPTED';

export type FormStatus = InitialFormStatus | NextFormStatus;

export type Form<ValuesType, ValidationErrorType> = {
    values: ValuesType;
    validationErrors: ValidationErrorType[];
    status: FormStatus;
}

export const createForm = <ValuesType, ValidationErrorType>(initialValues: ValuesType): Form<ValuesType, ValidationErrorType> => ({
    values: initialValues,
    validationErrors: [],
    status: 'CREATED',
});

export const modifyForm = <ValuesType, ValidationErrorType>(form: Form<ValuesType, ValidationErrorType>) => ({
    return() {
        return form;
    },
    setValues(nextValues: ValuesType) {
        return modifyForm({
            ...form,
            values: nextValues,
        })
    },
    setValidationErrors(nextValidationErrors: ValidationErrorType[]) {
        return modifyForm({
            ...form,
            validationErrors: nextValidationErrors
        })
    },
    setStatus(nextStatus: FormStatus) {
        validateFormStatusTransition(form.status, nextStatus);

        return modifyForm({
            ...form,
            status: nextStatus
        })
    }
})

const validateFormStatusTransition = (prevStatus: FormStatus, nextStatus: FormStatus) => {
    switch(nextStatus) {
        case 'SUBMITTED': {
            if (prevStatus !== 'CREATED' && prevStatus !== 'REJECTED') {
                throw new IllegalFormStatusTransition();
            }

            break;
        }
        case 'ACCEPTED':
        case 'REJECTED': {
            if (prevStatus !== 'SUBMITTED') {
                throw new IllegalFormStatusTransition();
            }

            break;
        }
        default:
            throw new IllegalFormStatusTransition();
    }
}

class IllegalFormStatusTransition extends TypeError {
}