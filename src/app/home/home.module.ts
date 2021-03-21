import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { PhotoCardSmallComponent } from './photo-card-small/photo-card-small.component';


@NgModule({
  declarations: [HomeComponent, PhotoCardSmallComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomeComponent],
})
export class HomeModule {}
