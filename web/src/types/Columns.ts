export type Columns = Array<Column>

export interface Column {
    id: string,
    title: string,
    deleteTime?: any,
    creationTime?: string,
    updateTime?: string,
    cards: Array<Card>
    userId: string,
}

export interface Card {
    cardId: string,
    title: string,
    description: string,
    tags: string,
    priority: string,
    columnId: string,
    deleteTime: any,
    creationTime: string,
    updateTime: string,
}