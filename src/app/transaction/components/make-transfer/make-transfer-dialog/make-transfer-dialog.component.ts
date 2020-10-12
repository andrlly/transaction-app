import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ColorEvent } from 'ngx-color';

import { TransactionType } from '@transactionModule/enums/transaction-type.enum';
import { ITransaction } from '@transactionModule/interfaces/transaction.interface';

@Component({
  selector: 'app-make-transfer-dialog',
  templateUrl: './make-transfer-dialog.component.html',
  styleUrls: ['./make-transfer-dialog.component.css']
})
export class MakeTransferDialogComponent implements OnInit {
  public transferForm: FormGroup;
  public logoImage: string | ArrayBuffer;
  public transactionTypes: { name: TransactionType }[] = [
    {name: TransactionType.Salaries},
    {name: TransactionType.CardPayment},
    {name: TransactionType.OnlineTransfer},
    {name: TransactionType.Transaction},
  ];

  constructor(
    public dialogRef: MatDialogRef<MakeTransferDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { merchantName: string, amount: number }
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  public handleFileInput(event): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.logoImage = reader.result;
      this.transferForm.get('logo').setValue(this.logoImage);
    };
  }

  public onMakeTransfer(): void {
    this.dialogRef.close(this.transferForm.value as ITransaction);
  }

  public onNoClick(): void {
    this.dialogRef.close(false);
  }

  public onChangeCategoryCodeComplete(event: ColorEvent): void {
    this.transferForm.get('categoryCode').setValue(event.color.hex);
  }

  private initForm(): void {
    this.transferForm = new FormGroup({
      merchantName: new FormControl(this.data.merchantName, [Validators.required]),
      amount: new FormControl(this.data.amount, [Validators.required]),
      categoryCode: new FormControl('', [Validators.required]),
      logo: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
    });
  }

}
