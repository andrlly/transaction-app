import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ColorCircleModule } from 'ngx-color/circle';
import { SearchPipe } from '@sharedModule/pipes/search.pipe';
import { SortDirective } from '@sharedModule/directives/sort.directive';

@NgModule({
  declarations: [
    SearchPipe,
    SearchPipe,
    SortDirective,
  ],
  exports: [
    SearchPipe,
    SortDirective,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    ColorCircleModule,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    ColorCircleModule
  ]
})
export class SharedModule { }
