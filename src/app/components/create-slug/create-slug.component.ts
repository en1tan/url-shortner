import { Component, OnInit } from '@angular/core';
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
  constructor(private fb: FormBuilder, private mainService: MainService) { }

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
    this.mainService.generateSlug(this.createSlugForm.value).subscribe((res: any) => {
      if (res !== 'error') {
        console.log("successful")
        console.log(res);

      }
    })
  }

}
