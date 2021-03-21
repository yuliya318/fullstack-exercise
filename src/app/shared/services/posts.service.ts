import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(limit: number): Observable<Array<Post>> {
    const fullUrl = `${environment.apiUrl}posts?_limit=${limit}`;
    return this.http.get(fullUrl).pipe((response: any) => response);
  }

  createPost(post: Post): Observable<any> {
    const fullUrl = `${environment.apiUrl}posts`;
    return this.http.post(fullUrl, post);
  }
}

