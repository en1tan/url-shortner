import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  @Output() updateUrls: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  generateSlug(url: string): Observable<string> {
    return this.http.post('http://localhost:3000/slug/new/', url).pipe(
      tap((res: any) => {
        if (res.success) {
          console.log("Slug added successfully");

        }
      })
    )
  }

  fetchUrl(slug: string): Observable<string> {
    return this.http.get(`http://localhost:3000/${slug}`).pipe(
      tap((res: any) => {
      })
    )
  }

  getAllSlugs(): Observable<string[]> {
    return this.http.get('http://localhost:3000/all').pipe(
      tap((res: any) => {

      })
    )
  }
}
