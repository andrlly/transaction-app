import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITransaction, ITransactionRequest } from '@transactionModule/interfaces/transaction.interface';
import { map } from 'rxjs/operators';
import { Mappers } from '@sharedModule/utils/mappers';
import { environment } from '@environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TransactionsApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllTransactions(): Observable<ITransaction[]> {
    return this.http.get<ITransaction[]>(`${environment.apiUrl}?_sort=dates.valueDate&_order=desc`)
      .pipe(
        map(res => Mappers.mapTransactionArrayToITransactionArray(res))
      );
  }

  public addTransaction(transaction: ITransaction): Observable<ITransaction> {
    const transactionRequest: ITransactionRequest = Mappers.mapITransactionToITransactionRequest(transaction);
    return this.http.post<ITransaction>(`${environment.apiUrl}`, transactionRequest)
      .pipe(
        map(res => Mappers.mapTransactionToITransaction(res))
      );
  }
}
