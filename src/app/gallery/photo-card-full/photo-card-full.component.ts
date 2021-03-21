import { Component, Input } from '@angular/core';
import { Photo } from 'src/app/shared/models/photo.model';

@Component({
  selector: 'fe-photo-card-full',
  templateUrl: './photo-card-full.component.html',
  styleUrls: ['./photo-card-full.component.scss']
})
export class PhotoCardFullComponent {
  @Input() photo: Photo;

  constructor() { }

}
