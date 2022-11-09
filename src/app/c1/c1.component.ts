import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  public liczba1 !: number;
  public liczba2 !: number;
  public wynik !: number;
  constructor() {
    this.liczba1 = 0;
    this.liczba2 = 0;
    this.wynik = 0; }
  
  dodaj(): void {
      console.log("dodaj");
      this.wynik = this.liczba1 + this.liczba2;
  }
  ngOnInit(): void {
  }
}
