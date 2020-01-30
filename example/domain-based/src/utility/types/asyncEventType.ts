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
