export type ValueCache<ValueType> = {
    value: ValueType;
    invalidated: boolean;
}