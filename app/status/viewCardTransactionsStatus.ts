import { EmiTransaction } from "../models/emi-transaction";
export class ViewCardTransactionsStatus{
    status: string;
    message:string;
    transactions: Array<EmiTransaction>;
}