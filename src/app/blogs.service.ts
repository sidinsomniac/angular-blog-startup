import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IBlog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private _url = "https://api.myjson.com/bins/178xnk";

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<IBlog[]> {
    return this.http.get<IBlog[]>(this._url).pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(error:  HttpErrorResponse) {
    return throwError(error.message || "Server error");
  }
}

// Original data
// [
//   {
//     "id": 1,
//     "url": "sands",
//     "created": "Thu Jan 03 2019 03:40:00 AM GMT+5:30",
//     "lastModified":"1 day ago",
//     "tags":["gadget","tech"],
//     "author":"red",
//     "category":"Tech",
//     "views":540,
//     "title":"The Sands of Time",
//     "description":"Hipster ipsum dolor amet quinoa four loko keytar celiac copper mug jean shorts. Palo santo put a bird on it af, tofu skateboard cred 3 wolf moon lo-fi brooklyn vape humblebrag celiac gastropub fixie air plant."
//   },
//   {
//     "id": 2,
//     "url": "dormammu",
//     "created": "Fri Jan 04 2019 02:05:00 AM GMT+5:30",
//     "tags":["showerthought","history","foodforthought"],
//     "author":"blue",
//     "category":"Informative",
//     "views":270,
//     "title":"The Plague of Dormammu",
//     "description":"Bacon ipsum dolor amet picanha turducken shoulder, buffalo filet mignon ball tip shankle brisket biltong pork chop frankfurter ribeye. Pancetta kielbasa shoulder salami."
//   },
//   {
//     "id": 3,
//     "url": "extraordinary",
//     "created": "Sat Jan 05 2019 08:35:00 PM GMT+5:30",
//     "lastModified":"Today",
//     "tags":["lol","lmao","rofl"],
//     "author":"green",
//     "category":"Entertainment/Comedy",
//     "views":110,
//     "title":"The Extraordinary Set of Events",
//     "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum unde rerum in porro voluptatum illo debitis libero molestiae minima alias."
//   }
// ]
