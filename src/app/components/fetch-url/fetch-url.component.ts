import { Component, Input, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-fetch-url',
  templateUrl: './fetch-url.component.html',
  styleUrls: ['./fetch-url.component.scss']
})
export class FetchUrlComponent implements OnInit {
  urls: string[] = []

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.getAllSlugs();
  }

  getAllSlugs() {
    this.mainService.getAllSlugs().subscribe((res: any) => {
      this.urls = res.data;

    })
  }

  fetchUrl(slug: string) {
    this.mainService.fetchUrl(slug).subscribe((res: any) => {
      console.log(res);
    });
  }

}
