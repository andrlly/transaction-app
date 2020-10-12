import { Component, Input } from '@angular/core';
import { ITransaction } from '@transactionModule/interfaces/transaction.interface';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.css']
})
export class TransactionItemComponent {
  @Input() transaction: ITransaction;
}
