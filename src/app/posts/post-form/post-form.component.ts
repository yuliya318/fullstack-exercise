import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'fe-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  @Input() editStatus: boolean;
  @Input() editingPost: Post;
  @Output() formSubmit = new EventEmitter<Post>();
  @Output() hidePostModal = new EventEmitter();

  public form: FormGroup;
  public title: string;
  public body: string;
  get formControls(): any {
    return this.form.controls;
  }

  public onSubmit(): void {
    if (this.editStatus) {
      const editedPost = { ...this.editingPost, ...this.form.value };
      this.submitFormData(editedPost);
    } else {
      const newPost = { ...this.form.value, userId: 1 };
      this.submitFormData(newPost);
    }
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      title: [this.editingPost.title, [Validators.required]],
      body: [this.editingPost.body, [Validators.required]],
    });
  }

  private submitFormData(post: Post): void {
    this.formSubmit.emit(post);
    this.hidePostModal.emit();
    this.form.reset();
  }
}
