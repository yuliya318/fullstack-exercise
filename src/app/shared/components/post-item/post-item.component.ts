import { Component, Input } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'fe-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {
  @Input() post: Post;

  constructor() { }

}
