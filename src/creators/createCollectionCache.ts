import { CollectionCache } from "../types/utils";

export const createCollectionCache =<KeyType, ItemType> (): CollectionCache<KeyType, ItemType> => ({
    byId: new Map<KeyType, ItemType>(),
    invalidatedIds: new Set<KeyType>()
})