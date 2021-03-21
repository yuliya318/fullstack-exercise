import { Component, Input } from '@angular/core';
import { Photo } from 'src/app/shared/models/photo.model';

@Component({
  selector: 'fe-photo-card-large',
  templateUrl: './photo-card-large.component.html',
  styleUrls: ['./photo-card-large.component.scss']
})
export class PhotoCardLargeComponent {
  @Input() photo: Photo;

  constructor() { }

}
