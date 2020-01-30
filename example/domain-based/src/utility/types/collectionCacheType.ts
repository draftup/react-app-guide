
export type CollectionCache<IdType, ItemType> = {
    byId: Map<IdType, ItemType>;
    invalidatedIds: Set<IdType>;
}