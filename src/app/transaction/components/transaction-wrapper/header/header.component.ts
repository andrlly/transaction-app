import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TransactionsDataService } from '@transactionModule/services/transactions-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    public translatesService: TranslateService,
    public transactionDS: TransactionsDataService
  ) {}

  public switchLang(lang: string) {
    this.translatesService.use(lang);
  }
}
