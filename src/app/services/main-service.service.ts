import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";

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
}
