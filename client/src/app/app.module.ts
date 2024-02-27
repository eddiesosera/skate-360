// app.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPopperModule } from 'ngx-popper';

@NgModule({
  declarations: [
    // Other components, directives, pipes
  ],
  imports: [
    CommonModule,
    RouterModule, // Import RouterModule if you use router-related functionality
    NgxPopperModule.forRoot()
    // Other modules
  ],
  exports: [
    // Other components, directives, pipes to be used in other modules
  ]
})
export class AppModule { }
