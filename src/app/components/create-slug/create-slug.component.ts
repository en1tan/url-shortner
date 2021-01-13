import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-slug',
  templateUrl: './create-slug.component.html',
  styleUrls: ['./create-slug.component.scss']
})
export class CreateSlugComponent implements OnInit {

  createSlugForm: FormGroup;
  isLoading: boolean;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createSlugForm = this.fb.group({
      url: ['', [Validators.required, Validators.pattern(/^(https:|http:|ftp:|www\.)\S*/)]]
    })
  }

  onSubmit(): void {
    this.isLoading = true;
    console.log(
      this.createSlugForm.value
    );
  }

}
