import { NgModule } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

import { routes } from './routes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
