export type ListCache<ItemType> = {
    byPage: Map<number, ItemType[]>;
    invalidatedPages: Set<number>;
}

export const createListCache = <ItemType>(): ListCache<ItemType> => ({
    byPage: new Map(),
    invalidatedPages: new Set()
});

export const modifyListCache = <ItemType>(listCache: ListCache<ItemType>) => ({
    return() {
        return listCache;
    },
    invalidatePage(page: number) {
        const nextInvalidatedPages = new Set(listCache.invalidatedPages);

        nextInvalidatedPages.add(page);

        return modifyListCache({
            ...listCache,
            invalidatedPages: nextInvalidatedPages
        })
    },
    setPageItems(page: number, items: ItemType[]) {
        const nextByPage = new Map(listCache.byPage);

        nextByPage.set(page, items);

        const nextInvalidatedPages = new Set(listCache.invalidatedPages);

        nextInvalidatedPages.delete(page);

        return modifyListCache({
            ...listCache,
            byPage: nextByPage,
            invalidatedPages: nextInvalidatedPages
        })
    }
})