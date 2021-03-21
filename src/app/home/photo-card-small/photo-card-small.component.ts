import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/shared/models/photo.model';

@Component({
  selector: 'fe-photo-card-small',
  templateUrl: './photo-card-small.component.html',
  styleUrls: ['./photo-card-small.component.scss']
})
export class PhotoCardSmallComponent {
  @Input() photo: Photo;

  constructor() { }

}
