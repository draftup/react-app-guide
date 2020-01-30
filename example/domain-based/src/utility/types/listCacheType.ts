export type ListCache<ItemType> = {
    byPage: Map<number, ItemType[]>;
    invalidatedPages: Set<number>;
}
