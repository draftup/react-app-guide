// @flow strict

type AsyncEventPending<NameType, MetaType>= {
    name: NameType;
    status: 'PENDING';
    meta: MetaType;
}

type AsyncEventReject<NameType, MetaType>= {
    name: NameType;
    status: 'REJECTED';
    error: Error;
    meta: MetaType;
}

type AsyncEventResolved<NameType, MetaType, ValueType>= {
    name: NameType;
    status: 'RESOLVED';
    value: ValueType;
    meta: MetaType;
}

export type AsyncEvent<NameType, MetaType, ValueType> =
    | AsyncEventPending<NameType, MetaType>
    | AsyncEventReject<NameType, MetaType>
    | AsyncEventResolved<NameType, MetaType, ValueType>;

export type ValueCache<ValueType> = {
    value: ValueType;
    invalidated: boolean;
}

export type CollectionCache<IdType, ItemType> = {
    byId: Map<IdType, ItemType>;
    invalidatedIds: Set<IdType>;
}

export type ListCache<ItemType> = {
    byPage: Map<number, ItemType[]>;
    invalidatedPages: Set<number>;
}

export type Form<ValuesType, ValidityType> = {
    values: ValuesType;
    validity: Set<ValidityType>;
    submitted: boolean;
    touched: boolean;
}

export type Dispatch<EventType> = (event: EventType) => void;

export type ServiceAdapter<EventType, OperationType> =
    (dispatch: Dispatch<EventType>) => 
        (operations: OperationType[]) => void;