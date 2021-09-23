import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { observable } from 'rxjs';
@Component({
  selector: 'app-sgpa',
  templateUrl: './sgpa.component.html',
  styleUrls: ['./sgpa.component.css'],
})
export class SgpaComponent implements OnInit {
  constructor() {}
  marks: any = new Array(10);
  selectedSem: any;
  ngOnInit(): void {}
  selectedObject: any;
  textTypes = [
    { key: '0', value: 'Select semester' },
    { key: '1', value: '1st Semester' },
    { key: '2', value: '2nd Semester' },
    { key: '3', value: '3rd Semester' },
    { key: '4', value: '4th Semester' },
    { key: '5', value: '5th Semester' },
    { key: '6', value: '6th Semester' },
    { key: '7', value: '7th Semester' },
    { key: '8', value: '8th Semester' },
  ];

  getPoints(marks: number): number {
    if (marks >= 50 && marks <= 59) {
      return 6;
    } else if (marks >= 60 && marks <= 69) {
      return 7;
    } else if (marks >= 70 && marks <= 79) {
      return 8;
    } else if (marks >= 80 && marks <= 89) {
      return 9;
    } else if (marks >= 90 && marks <= 100) {
      return 10;
    }
    return 0;
  }
  creditSum: number = 0;
  obtainedCredits: number = 0;
  sgpa: number = 0;
  index: number = 0;
  calculate() {
    this.creditSum = 0;
    // this.obtainedCredits = 0;
    for (let i of this.selectedSem) {
      this.creditSum += i.credit;
      this.obtainedCredits += i.credit * this.getPoints(this.marks[this.index]);
      this.index++;
    }

    console.log(this.marks);
    console.log(this.obtainedCredits);
    console.log(this.creditSum);
    this.sgpa = this.obtainedCredits / this.creditSum;
  }

  handleChange(index: any) {
    // console.log(this.textTypes[index.selectedIndex]);
    this.selectedObject = this.textTypes[index.selectedIndex];
    if (this.selectedObject.key == '1') {
      this.selectedSem = this.firstSem;
    } else if (this.selectedObject.key == '2') {
      this.selectedSem = this.secondSem;
    } else if (this.selectedObject.key == '3') {
      this.selectedSem = this.thirdSem;
    } else if (this.selectedObject.key == '4') {
      this.selectedSem = this.fourthSem;
    }
  }
  firstSem = [
    {
      code: '17MAT11',
      subject: 'Engineering Mathematics I',
      marks: '',
      credit: 4,
    },
    {
      code: '17PHY12',
      subject: 'Engineering Physics',
      marks: '',
      credit: 4,
    },
    {
      code: '17CIV13',
      subject: 'Civil Engineering',
      marks: '',
      credit: 4,
    },
    {
      code: '17EME14',
      subject: 'Mechanical Engineering',
      marks: '',
      credit: 4,
    },
    {
      code: '17ELE15',
      subject: 'Electrical Engineering',
      marks: '',
      credit: 4,
    },
    {
      code: '17WSL16',
      subject: 'Workshop Practice',
      marks: '',
      credit: 2,
    },
    {
      code: '17PHYL17',
      subject: 'Physics Lab',
      marks: '',
      credit: 2,
    },
  ];
  secondSem = [
    {
      code: '17MAT21',
      subject: 'Engineering Mathematics II',
      marks: '',
      credit: 4,
    },
    {
      code: '17CHE22',
      subject: 'Engineering Chemistry',
      marks: '',
      credit: 4,
    },
    {
      code: '17PCD23',
      subject: 'Programming in C and DS',
      marks: '',
      credit: 4,
    },
    {
      code: '17CED24',
      subject: 'Computer Aided Drawing',
      marks: '',
      credit: 4,
    },
    {
      code: '17ELN25',
      subject: 'Basic Electronics',
      marks: '',
      credit: 4,
    },
    {
      code: '17CPL26',
      subject: 'Computer Programming Lab',
      marks: '',
      credit: 2,
    },
    {
      code: '17CHEL27',
      subject: 'Engineering Chemistry Lab',
      marks: '',
      credit: 2,
    },
  ];
  thirdSem = [
    {
      code: '17MAT31',
      subject: 'Engineering Mathematics III',
      marks: '',
      credit: 4,
    },
    {
      code: '17CS32',
      subject: 'Analog and Digital Electronics',
      marks: '',
      credit: 4,
    },
    {
      code: '17CS33',
      subject: 'Data Structures and Application',
      marks: '',
      credit: 4,
    },
    {
      code: '17CS34',
      subject: 'Computer Organization',
      marks: '',
      credit: 4,
    },
    {
      code: '17CS35',
      subject: 'Unix and Shell Programming',
      marks: '',
      credit: 3,
    },
    {
      code: '17CS36',
      subject: 'Discrete Mathematics',
      marks: '',
      credit: 4,
    },
    {
      code: '17CSL37',
      subject: 'ADE Laboratory',
      marks: '',
      credit: 2,
    },
    {
      code: '17CSL38',
      subject: 'DataStructures Lab',
      marks: '',
      credit: 2,
    },
    {
      code: '17KKM39',
      subject: 'Kannada Manasu',
      marks: '',
      credit: 1,
    },
  ];
  fourthSem = [
    {
      code: '17MAT41',
      subject: 'Engineering Mathematics IV',
      marks: '',
      credit: 4,
    },
    {
      code: '17CS42',
      subject: 'Object Oriented Programming',
      marks: '',
      credit: 4,
    },
    {
      code: '17CS43',
      subject: 'Design and Analysis of Algorithms',
      marks: '',
      credit: 4,
    },
    {
      code: '17CS44',
      subject: 'Microprocessors and Microcontrollers',
      marks: '',
      credit: 4,
    },
    {
      code: '17CS45',
      subject: 'Sofware Engineering',
      marks: '',
      credit: 3,
    },
    {
      code: '17CS46',
      subject: 'Data Communication',
      marks: '',
      credit: 4,
    },
    {
      code: '17CSL47',
      subject: 'DAA Laboratory',
      marks: '',
      credit: 2,
    },
    {
      code: '17CSL48',
      subject: 'Microprocessors Lab',
      marks: '',
      credit: 2,
    },
    {
      code: '17CPJ49',
      subject: ' Const. of India',
      marks: '',
      credit: 1,
    },
  ];
}
