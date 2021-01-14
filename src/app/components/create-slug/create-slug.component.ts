import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-create-slug',
  templateUrl: './create-slug.component.html',
  styleUrls: ['./create-slug.component.scss']
})
export class CreateSlugComponent implements OnInit {

  createSlugForm: FormGroup;
  isLoading: boolean;
  errorMsg: string;
  generatedSlug: string;

  constructor(private fb: FormBuilder, private mainService: MainService) { }

  ngOnInit(): void {
    this.createSlugForm = this.fb.group({
      url: ['', [Validators.required, Validators.pattern(/^(https:|http:|ftp:|www\.)\S*/)]]
    })
  }

  onSubmit(): void {
    this.isLoading = true;
    this.mainService.generateSlug(this.createSlugForm.value).subscribe((res: any) => {
      this.createSlugForm.reset();
      if (res !== 'error') {
        this.isLoading = false;
        this.generatedSlug = `https://localhost/${res.data}/`;
      } else {
        this.isLoading = false;
        this.errorMsg = res.msg;
      }
    })
  }

}
