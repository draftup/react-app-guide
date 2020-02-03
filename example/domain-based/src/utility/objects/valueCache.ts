export type ValueCache<ValueType> = {
    value: ValueType;
    invalidated: boolean;
}

export const createValueCache = <ValueType>(initialValue: ValueType): ValueCache<ValueType> => ({
    value: initialValue,
    invalidated: false
});

export const modifyValueCache = <ValueType>(valueCache: ValueCache<ValueType>) => ({
    return() {
        return valueCache;
    },
    invalidate() {
        return modifyValueCache({
            ...valueCache,
            invalidated: true
        })
    },
    setValue(nextValue: ValueType) {
        return modifyValueCache({
            ...valueCache,
            value: nextValue,
            invalidated: false
        })
    }
})