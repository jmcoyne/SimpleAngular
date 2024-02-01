

import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {CommonModule} from "@angular/common";
import {Data} from '../model'
import {tests} from "../../assets/test";

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-problem2',
  templateUrl: './problem2.component.html',
  styleUrl: './problem2.component.css',
})

export class Problem2Component {
  data:Data[] = []

  public url: string = '/api/etc/test.json'
  constructor(private http: HttpClient) {}
  ngOnInit(){
   this.data  = tests.tests
  }


}
