export type Columns = Array<Column>

export interface Column {
    title: string,
    card: Array<Card>
}

export interface Card {
    title: string,
    discription: string,
    tags: string,
    priority: string
}