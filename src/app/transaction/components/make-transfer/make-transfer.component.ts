import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';

import { TransactionsDataService } from '@transactionModule/services/transactions-data.service';
import { ITransaction } from '@transactionModule/interfaces/transaction.interface';
import { MakeTransferDialogComponent } from './make-transfer-dialog/make-transfer-dialog.component';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.css']
})
export class MakeTransferComponent {
  public toAccount = new FormControl('', [Validators.required]);
  public amount = new FormControl('', [Validators.required]);

  constructor(
    public transactionDS: TransactionsDataService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  public onMakeTransferOpenDialog(): void {

    if (this.checkTotalBalance()) {
      return this.openSnackBar('Your balance should not be less than -$500', 'close');
    }

    const dialogRef = this.dialog.open(MakeTransferDialogComponent, {
      width: '350px',
      height: '500px',
      data: {...{merchantName: this.toAccount.value, amount: this.amount.value}}
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe((transaction: ITransaction) => {
      if (transaction) {
        this.addTransaction(transaction);
        this.toAccount.reset();
        this.amount.reset();
      }
    });
  }

  private addTransaction(transaction: ITransaction): void {
    this.transactionDS.addTransaction(transaction).pipe(take(1)).subscribe((result: ITransaction) => {
      const newTransactions: ITransaction[] = [result, ...this.transactionDS.transactions];
      this.transactionDS.setTransactions(newTransactions);
      this.transactionDS.updateTotalBalance(result.amount);
    });
  }

  private checkTotalBalance(): boolean {
    return ((this.transactionDS.totalBalance - this.amount.value) <= -500);
  }

  private openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
