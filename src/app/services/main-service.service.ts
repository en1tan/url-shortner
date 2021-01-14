import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  generateSlug(url: string): Observable<string> {
    return this.http.post('http://localhost:3000/slug/new/', url).pipe(
      tap((res: any) => {
        console.log(res);

      })
    )
  }

  fetchUrl(slug: string): Observable<string> {
    return this.http.get(`http://localhost:3000/url/${slug}`).pipe(
      tap((res: any) => {
        console.log(res);
      })
    )
  }

  getAllSlugs(): Observable<string[]> {
    return this.http.get('http://localhost:3000/url/all').pipe(
      tap((res: any) => {
        console.log(res);

      })
    )
  }
}
