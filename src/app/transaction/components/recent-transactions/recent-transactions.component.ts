import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ITransaction } from '@transactionModule/interfaces/transaction.interface';
import { TransactionsDataService } from '@transactionModule/services/transactions-data.service';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css']
})
export class RecentTransactionsComponent implements OnInit {
  public transactions$: Observable<ITransaction[]>;

  constructor(
    private transactionsDS: TransactionsDataService,
  ) { }

  ngOnInit(): void {
    this.transactionsDS.getTransactions()
      .pipe(take(1))
      .subscribe(transactions => {
        this.transactionsDS.setTransactions(transactions);
      }
    );
    this.transactions$ = this.transactionsDS.transactions$;
  }

}
