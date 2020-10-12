import { TransactionType } from '@transactionModule/enums/transaction-type.enum';

export interface ITransaction {
  id: number;
  date: number;
  amount: number;
  currencyCode: string;
  type: TransactionType;
  merchantName: string;
  accountNumber: string;
  creditDebitIndicator: string;
  categoryCode: string;
  logo: string;
}

export interface ITransactionRequest {
  categoryCode: string;
  dates: {
    valueDate: number;
  };
  transaction: {
    amountCurrency: {
      amount: number,
      currencyCode: string
    },
    type: TransactionType,
    creditDebitIndicator: string
  };
  merchant: {
    name: string,
    accountNumber: string
  };
}
