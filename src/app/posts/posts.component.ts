import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { Post } from '../shared/models/post.model';
import { PostsService } from '../shared/services/posts.service';

@Component({
  selector: 'fe-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit, OnDestroy {
  public posts: Array<Post>;
  public modalRef: BsModalRef;
  public editStatus = false;
  public post: Post = {
    id: 0,
    title: '',
    body: '',
    userId: 1,
  };

  private getPostsSubscribtion: Subscription;
  private createPostSubscribtion: Subscription;
  private postIndex: number;

  constructor(
    private postsService: PostsService,
    private modalService: BsModalService
  ) {}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public onSubmit(post: Post): void {
    this.editStatus ? this.updatePost(post) : this.createPost(post);
  }

  public changeEditStatus(post: Post, index: number): void {
    this.editStatus = !this.editStatus;
    this.post = post;
    this.postIndex = index;
  }

  public saveDeletingPostIndex(index: number): void {
    this.postIndex = index;
  }

  public deletePost(): void {
    this.posts.splice(this.postIndex, 1);
  }

  ngOnInit(): void {
    this.getPosts();
  }

  ngOnDestroy(): void {
    this.getPostsSubscribtion.unsubscribe();
    this.createPostSubscribtion.unsubscribe();
  }

  private getPosts(): void {
    this.getPostsSubscribtion = this.postsService
      .getPosts(50)
      .subscribe((posts) => (this.posts = posts));
  }

  private createPost(post: Post) {
    this.createPostSubscribtion = this.postsService
      .createPost(post)
      .subscribe((post) => {
        this.posts.unshift(post);
        console.log(post);
      });
  }

  private updatePost(post: Post) {
    this.posts.splice(this.postIndex, 1, post);
    this.editStatus = !this.editStatus;
    this.post = {
      id: 0,
      title: '',
      body: '',
      userId: 1,
    };
  }
}
