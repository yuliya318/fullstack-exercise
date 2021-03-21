import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { SharedModule } from '../shared/shared.module';
import { PhotoCardFullComponent } from './photo-card-full/photo-card-full.component';


@NgModule({
  declarations: [GalleryComponent, PhotoCardFullComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [GalleryComponent]
})
export class GalleryModule { }
