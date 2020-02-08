export type ValueCache<ValueType> = {
    value: ValueType;
    invalidated: boolean;
}

export const createValueCache = <ValueType>(initialValue: ValueType): ValueCache<ValueType> => ({
    value: initialValue,
    invalidated: false
});

export const createValueCacheModifier = <ValueType>(valueCache: ValueCache<ValueType>) => ({
    return() {
        return valueCache;
    },
    invalidate() {
        return createValueCacheModifier({
            ...valueCache,
            invalidated: true
        })
    },
    setValue(nextValue: ValueType) {
        return createValueCacheModifier({
            ...valueCache,
            value: nextValue,
            invalidated: false
        })
    }
})