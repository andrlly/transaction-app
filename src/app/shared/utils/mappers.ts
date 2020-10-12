import { ITransaction, ITransactionRequest } from '@transactionModule/interfaces/transaction.interface';

export class Mappers {
  public static mapTransactionToITransaction(transaction: any): ITransaction {
    return {
      id: Math.random(),
      merchantName: transaction.merchant.name,
      amount: transaction.transaction.amountCurrency.amount,
      currencyCode: transaction.transaction.amountCurrency.currencyCode,
      categoryCode: transaction.categoryCode,
      date: transaction.dates.valueDate,
      type: transaction.transaction.type,
      creditDebitIndicator: transaction.transaction.creditDebitIndicator,
      accountNumber: transaction.merchant.accountNumber,
      logo: transaction.logo || '../../../assets/images/7-eleven.png'
    } as ITransaction;
  }

  public static mapTransactionArrayToITransactionArray(transactions: any[]): ITransaction[] {
    return transactions.map(transaction => this.mapTransactionToITransaction(transaction));
  }

  public static mapITransactionToITransactionRequest(transaction: ITransaction): ITransactionRequest {
    return {
      id: Math.random(),
      categoryCode: transaction.categoryCode,
      dates: {
        valueDate: Date.now(),
      },
      transaction: {
        amountCurrency: {
          amount: transaction.amount,
          currencyCode: transaction.currencyCode || '$',
        },
        type: transaction.type,
        creditDebitIndicator: transaction.creditDebitIndicator || 'DBIT'
      },
      merchant: {
        name: transaction.merchantName,
        accountNumber: transaction.accountNumber || 'SI64397745065188826'
      },
      logo: transaction.logo
    } as ITransactionRequest;
  }
}
