import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PostsModule } from './posts/posts.module';
import { ContentTypeInterceptor } from './core/content-type.interceptor';
import { GalleryModule } from './gallery/gallery.module';
import { HomeModule } from './home/home.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    HomeModule,
    PostsModule,
    GalleryModule,
    ContactUsModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: ContentTypeInterceptor,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
