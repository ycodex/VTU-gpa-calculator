import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cgpa',
  templateUrl: './cgpa.component.html',
  styleUrls: ['./cgpa.component.css'],
})
export class CgpaComponent implements OnInit {
  sem1: String = '';
  sem2: String = '';
  sem3: String = '';
  sem4: String = '';
  sem5: String = '';
  sem6: String = '';
  sem7: String = '';
  sem8: String = '';
  sum: number = 0;
  flag: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  Calculate() {
    if (
      Number(this.sem1) < 0 ||
      Number(this.sem1) > 10 ||
      Number(this.sem2) < 0 ||
      Number(this.sem2) > 10 ||
      Number(this.sem3) < 0 ||
      Number(this.sem3) > 10 ||
      Number(this.sem4) < 0 ||
      Number(this.sem4) > 10 ||
      Number(this.sem5) < 0 ||
      Number(this.sem5) > 10 ||
      Number(this.sem6) < 0 ||
      Number(this.sem6) > 10 ||
      Number(this.sem7) < 0 ||
      Number(this.sem7) > 10 ||
      Number(this.sem8) < 0 ||
      Number(this.sem8) > 10
    ) {
      this.flag = true;
      return;
    }
    this.sum =
      (Number(this.sem1) +
        Number(this.sem2) +
        Number(this.sem3) +
        Number(this.sem4) +
        Number(this.sem5) +
        Number(this.sem6) +
        Number(this.sem7) +
        Number(this.sem8)) /
      8;
    console.log(this.sem1);
  }
}
