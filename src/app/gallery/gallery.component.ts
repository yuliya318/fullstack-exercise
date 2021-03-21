import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../shared/models/photo.model';
import { GalleryService } from '../shared/services/gallery.service';

@Component({
  selector: 'fe-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public photos$: Observable<Array<Photo>>;

  constructor(private galleryService: GalleryService) { }

  public getPhotos(limit: number): void {
    this.photos$ = this.galleryService.getPhotos(limit);
  }

  ngOnInit(): void {
    this.getPhotos(30);
  }

}
