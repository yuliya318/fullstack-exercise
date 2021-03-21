import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../shared/models/post.model';
import { PostsService } from '../shared/services/posts.service';

@Component({
  selector: 'fe-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit, OnDestroy {
  // public posts$: Observable<Array<Post>>;
  public posts: Array<Post>;
  private getPostsSubscribtion: Subscription;
  private createPostSubscribtion: Subscription;
  post = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  ngOnDestroy(): void {
    this.getPostsSubscribtion.unsubscribe();
  }

  private getPosts(): void {
    // this.posts$ = this.postsService.getPosts(10);
    this.getPostsSubscribtion = this.postsService
      .getPosts(10)
      .subscribe((posts) => (this.posts = posts));
  }

  public createPost() {
    this.createPostSubscribtion = this.postsService
      .createPost(this.post)
      .subscribe((post) => this.posts.push(post));
  }
}
