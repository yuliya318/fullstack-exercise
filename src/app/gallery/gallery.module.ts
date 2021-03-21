import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { SharedModule } from '../shared/shared.module';
import { PhotoCardLargeComponent } from './photo-card-large/photo-card-large.component';


@NgModule({
  declarations: [GalleryComponent, PhotoCardLargeComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [GalleryComponent]
})
export class GalleryModule { }
