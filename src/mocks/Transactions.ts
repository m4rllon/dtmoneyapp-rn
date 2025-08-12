import { TransactionListProps, TransactionType } from "@/Interfaces/Transaction";

export const transactions:TransactionListProps[] = [
    {
        id: 1,
        type: TransactionType.WITHDRAWA,
        name: 'Hamburguer',
        value: 59.00,
        tag: 'Alimentação',
        date: new Date()
    },
    {
        id: 2,
        type: TransactionType.DEPOSIT,
        name: 'Computador',
        value: 1000,
        tag: 'Venda',
        date: new Date()
    },
    {
        id: 3,
        type: TransactionType.WITHDRAWA,
        name: 'Aluguel do apartamento',
        value: 1200,
        tag: 'Casa',
        date: new Date()
    },
    {
        id: 4,
        type: TransactionType.DEPOSIT,
        name: 'Desenvolvimento de site',
        value: 8000,
        tag: 'Venda',
        date: new Date()
    },
]