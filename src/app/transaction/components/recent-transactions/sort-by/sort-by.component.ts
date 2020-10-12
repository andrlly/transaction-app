import { Component, Input } from '@angular/core';
import { ITransaction } from '@transactionModule/interfaces/transaction.interface';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.css']
})
export class SortByComponent {
  @Input() transactions: ITransaction[];

  public onSortToggle(event): void {
    const htmlEl: HTMLElement = event.target;
    htmlEl.classList.toggle('up');
  }

}
