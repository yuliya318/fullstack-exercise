import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts.service';
import { GalleryService } from 'src/app/shared/services/gallery.service';
import { Observable } from 'rxjs';
import { Post } from '../shared/models/post.model';
import { Photo } from '../shared/models/photo.model';

@Component({
  selector: 'fe-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public posts$: Observable<Array<Post>>;
  public photos$: Observable<Array<Photo>>;

  constructor(
    private postsService: PostsService,
    private galleryService: GalleryService
  ) {}

  ngOnInit(): void {
    this.getPosts();
    this.getPhotos();
  }

  private getPosts(): void {
    this.posts$ = this.postsService.getPosts(10);
    
  }

  private getPhotos(): void {
    this.photos$ = this.galleryService.getPhotos(10);
  }

}
