
export type CollectionCache<IdType, ItemType> = {
    byId: Map<IdType, ItemType>;
    invalidatedIds: Set<IdType>;
}

export const createCollectionCache = <IdType, ItemType>(): CollectionCache<IdType, ItemType> => ({
    byId: new Map(),
    invalidatedIds: new Set()
});

export const createCollectionCacheModifier = <IdType, ItemType>(collectionCache: CollectionCache<IdType, ItemType>) => ({
    return() {
        return collectionCache;
    },
    invalidateId(id: IdType) {
        const nextInvalidatedIds = new Set(collectionCache.invalidatedIds);

        nextInvalidatedIds.add(id);

        return createCollectionCacheModifier({
            ...collectionCache,
            invalidatedIds: nextInvalidatedIds
        })
    },
    setItem(id: IdType, item: ItemType) {
        const nextById = new Map(collectionCache.byId);

        nextById.set(id, item);

        const nextInvalidatedIds = new Set(collectionCache.invalidatedIds);

        nextInvalidatedIds.delete(id);

        return createCollectionCacheModifier({
            ...collectionCache,
            byId: nextById,
            invalidatedIds: nextInvalidatedIds
        })
    }
})