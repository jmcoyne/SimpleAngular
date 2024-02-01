import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  {Problem1Component} from "./problem1/problem1.component";
import  {Problem2Component} from "./problem2/problem2.component";
import {Problem3Component} from "./problem3/problem3.component";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {HomeComponent} from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Problem1Component, Problem2Component, Problem3Component, MatTabGroup, MatTab, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Wyebot Interview Test';

  ngOnInit(){}
}
