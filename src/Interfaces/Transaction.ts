export enum TransactionType {
    WITHDRAWA,
    DEPOSIT
}

export interface TransactionProps {
    type: TransactionType;
    name: string;
    value: number;
    tagId: string;
    date: Date;
}

export interface TransactionListProps extends TransactionProps{
    id: number;
}