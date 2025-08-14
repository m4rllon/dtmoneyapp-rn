import { TransactionType } from "@/Interfaces/Transaction";

export const getTypeTransaction = (isDeposit:boolean, isWhidrawa:boolean) => {
    if(isDeposit) return TransactionType.DEPOSIT
    else if(isWhidrawa) return TransactionType.WITHDRAWA
    else return null
}