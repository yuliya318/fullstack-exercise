import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Photo } from '../models/photo.model';

@Injectable()
export class GalleryService {
    constructor(private http: HttpClient) {}

  getPhotos(limit: number): Observable<Array<Photo>> {
    const fullUrl = `${environment.apiUrl}photos?_limit=${limit}`;
    return this.http.get(fullUrl).pipe((response: any) => response);
  }
}