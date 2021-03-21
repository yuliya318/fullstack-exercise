import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';



@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule
  ],
  exports: [ContactUsComponent]
})
export class ContactUsModule { }
