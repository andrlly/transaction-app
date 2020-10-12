import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { TransactionWrapperComponent } from './components/transaction-wrapper/transaction-wrapper.component';
import { MakeTransferComponent } from './components/make-transfer/make-transfer.component';
import { RecentTransactionsComponent } from './components/recent-transactions/recent-transactions.component';
import { HeaderComponent } from './components/transaction-wrapper/header/header.component';
import { SearchComponent } from './components/recent-transactions/search/search.component';
import { SortByComponent } from './components/recent-transactions/sort-by/sort-by.component';
import { TransactionItemComponent } from './components/recent-transactions/transaction-item/transaction-item.component';
import { MakeTransferDialogComponent } from './components/make-transfer/make-transfer-dialog/make-transfer-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    TransactionWrapperComponent,
    MakeTransferComponent,
    RecentTransactionsComponent,
    HeaderComponent,
    SearchComponent,
    SortByComponent,
    TransactionItemComponent,
    MakeTransferDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    TranslateModule
  ],
  entryComponents: [
    MakeTransferDialogComponent
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}
  ],
})
export class TransactionModule { }


