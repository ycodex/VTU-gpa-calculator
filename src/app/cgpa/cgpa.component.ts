import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cgpa',
  templateUrl: './cgpa.component.html',
  styleUrls: ['./cgpa.component.css'],
})
export class CgpaComponent implements OnInit {
  sem1: number = 0;
  sem2: number = 0;
  sem3: number = 0;
  sem4: number = 0;
  sem5: number = 0;
  sem6: number = 0;
  sem7: number = 0;
  sem8: number = 0;
  sum: number = 0;
  flag: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  Calculate() {
    if (
      this.sem1 < 0 ||
      this.sem1 > 10 ||
      this.sem2 < 0 ||
      this.sem2 > 10 ||
      this.sem3 < 0 ||
      this.sem3 > 10 ||
      this.sem4 < 0 ||
      this.sem4 > 10 ||
      this.sem5 < 0 ||
      this.sem5 > 10 ||
      this.sem6 < 0 ||
      this.sem6 > 10 ||
      this.sem7 < 0 ||
      this.sem7 > 10 ||
      this.sem8 < 0 ||
      this.sem8 > 10
    ) {
      this.flag = true;
      return;
    }
    this.sum =
      (this.sem1 +
        this.sem2 +
        this.sem3 +
        this.sem4 +
        this.sem5 +
        this.sem6 +
        this.sem7 +
        this.sem8) /
      8;
    console.log(this.sem1);
  }
}
