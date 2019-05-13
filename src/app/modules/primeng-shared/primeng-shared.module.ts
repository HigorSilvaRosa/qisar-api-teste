import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    MenuModule,
    TableModule,
  ],
  exports: [
    MenuModule,
    TableModule,
  ]
})
export class PrimengSharedModule { }
