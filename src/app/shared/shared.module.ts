import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryService } from './services/gallery.service';
import { PostsService } from './services/posts.service';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { PostItemComponent } from './components/post-item/post-item.component';

@NgModule({
  declarations: [MenuComponent, PostItemComponent],
  imports: [CommonModule, RouterModule],
  exports: [MenuComponent, PostItemComponent],
  providers: [PostsService, GalleryService],
})
export class SharedModule {}
