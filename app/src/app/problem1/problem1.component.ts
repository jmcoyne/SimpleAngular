// Interview problem one

import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import {CommonModule} from "@angular/common";
import {Data} from '../model'
import {tests} from "../../assets/test";

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-problem1',
  templateUrl: './problem1.component.html',
  styleUrl: './problem1.component.css',
})

export class Problem1Component {

  public url: string = '/api/etc/test.json'
  constructor(private http: HttpClient) {}
  ngOnInit(){}

  getData() {
    return this.http.get<Data>(this.url).pipe(
      catchError(this.handleError) // then handle the error
    )
  }

  processData(){
    // Write code in order to handle the response that comes back from the initial call
    // Then print the JSON field "test" in the html of this component.
  }

  private handleError(error: HttpErrorResponse) {
      if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error)
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, body was: `,
          error.error
        )
      }
      // Return an observable with a user-facing error message.
      return throwError(
        () => new Error('Something bad happened; please try again later.')
      )
    }
}
