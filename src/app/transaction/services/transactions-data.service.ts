import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TransactionsApiService } from './transactions-api.service';
import { ITransaction } from '@transactionModule/interfaces/transaction.interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionsDataService {

  constructor(
    private transactionApi: TransactionsApiService
  ) {
    this.initTotalBalance();
  }

  private _transactions: BehaviorSubject<ITransaction[]> = new BehaviorSubject([]);
  public readonly transactions$: Observable<ITransaction[]> = this._transactions.asObservable();

  private _totalBalance: BehaviorSubject<number> = new BehaviorSubject(5824);
  public readonly totalBalance$: Observable<number> = this._totalBalance.asObservable();

  public get transactions(): ITransaction[] {
    return this._transactions.getValue();
  }

  get totalBalance(): number {
    return this._totalBalance.getValue();
  }

  public setTransactions(transactions: ITransaction[]): void {
    this._transactions.next(transactions);
  }

  public getTransactions(): Observable<any> {
    return this.transactionApi.getAllTransactions();
  }

  public addTransaction(transaction: ITransaction): Observable<ITransaction> {
    return this.transactionApi.addTransaction(transaction);
  }

  public updateTotalBalance(amount: number): void {
    const newBalance = this.totalBalance - amount;
    this.setTotalBalance(newBalance);
  }

  private setTotalBalance(value: number): void {
    localStorage.setItem('balance', JSON.stringify(value));
    this._totalBalance.next(value);
  }

  private initTotalBalance(): void {
    let balanceStorage;
    let balance;
    balanceStorage = localStorage.getItem('balance');
    balance = balanceStorage ? JSON.parse(balanceStorage) : null;
    localStorage.setItem('balance', balance);

    if (balance) {
      this.setTotalBalance(balance);
    }
  }

}
