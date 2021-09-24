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
    if (marks >= 35 && marks <= 39) {
      return 4;
    } else if (marks >= 40 && marks <= 49) {
      return 5;
    } else if (marks >= 50 && marks <= 59) {
      return 6;
    } else if (marks >= 60 && marks <= 69) {
      return 7;
    } else if (marks >= 70 && marks <= 79) {
      return 8;
    } else if (marks >= 80 && marks <= 89) {
      return 9;
    } else if (marks >= 90 && marks <= 100) {
      return 10;
    } else if (marks > 100) {
      return this.getPoints((marks * 100) / 200);
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
    this.marks = [];
    this.selectedObject = this.textTypes[index.selectedIndex];
    if (this.selectedObject.key == '1') {
      this.selectedSem = this.firstSem;
    } else if (this.selectedObject.key == '2') {
      this.selectedSem = this.secondSem;
    } else if (this.selectedObject.key == '3') {
      this.selectedSem = this.thirdSem;
    } else if (this.selectedObject.key == '4') {
      this.selectedSem = this.fourthSem;
    } else if (this.selectedObject.key == '5') {
      this.selectedSem = this.fifthSem;
    } else if (this.selectedObject.key == '6') {
      this.selectedSem = this.sixthSem;
    } else if (this.selectedObject.key == '7') {
      this.selectedSem = this.seventhSem;
    } else if (this.selectedObject.key == '8') {
      this.selectedSem = this.eighthSem;
    } else {
      this.selectedSem = null;
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
  fifthSem = [
    {
      code: '17CS51',
      subject: 'MGMT. and Entrepreneurship',
      marks: '',
      credit: 4,
    },
    {
      code: '17CS52',
      subject: 'Computer Networks',
      marks: '',
      credit: 4,
    },
    {
      code: '17CS553',
      subject: 'Advanced Java and J2EE',
      marks: '',
      credit: 3,
    },
    {
      code: '17CS53',
      subject: 'Database Management System',
      marks: '',
      credit: 4,
    },
    {
      code: '17CS54',
      subject: '.NET framework',
      marks: '',
      credit: 3,
    },
    {
      code: '17CS54',
      subject: 'Automata Theory',
      marks: '',
      credit: 4,
    },
    {
      code: '17CSL57',
      subject: 'Computer Network Lab',
      marks: '',
      credit: 2,
    },
    {
      code: '17CSL58',
      subject: 'DBMS laboratory',
      marks: '',
      credit: 2,
    },
  ];
  sixthSem = [
    {
      code: '17CS651',
      subject: 'Data Mining and Warehousing',
      marks: '',
      credit: 3,
    },
    {
      code: '17CS61',
      subject: 'CryptoGraphy and Cyber law',
      marks: '',
      credit: 4,
    },
    {
      code: '17CS62',
      subject: 'Computer Graphics and visulization',
      marks: '',
      credit: 4,
    },
    {
      code: '17CS63',
      subject: 'System Software and compiler Design',
      marks: '',
      credit: 4,
    },
    {
      code: '17CS664',
      subject: 'Python application Programming',
      marks: '',
      credit: 3,
    },
    {
      code: '17CS64',
      subject: 'Operating Systems',
      marks: '',
      credit: 4,
    },
    {
      code: '17CSL67',
      subject: 'System Software Lab',
      marks: '',
      credit: 2,
    },
    {
      code: '17CSL68',
      subject: 'Computer Graphics lab',
      marks: '',
      credit: 2,
    },
  ];
  seventhSem = [
    {
      code: '17CS71',
      subject: 'Web technology',
      marks: '',
      credit: 4,
    },
    {
      code: '17CS742',
      subject: 'Cloud computing',
      marks: '',
      credit: 3,
    },
    {
      code: '17CS72',
      subject: 'Advanced computer architecture',
      marks: '',
      credit: 4,
    },
    {
      code: '17CS753',
      subject: 'Digital Image Processing',
      marks: '',
      credit: 3,
    },
    {
      code: '17CS73',
      subject: 'Machine Learning',
      marks: '',
      credit: 4,
    },
    {
      code: '17CSL76',
      subject: 'Machine learning Lab',
      marks: '',
      credit: 2,
    },
    {
      code: '17CSL77',
      subject: 'Web Technology Lab',
      marks: '',
      credit: 2,
    },
    {
      code: '17CSP78',
      subject: 'Project work Phase I',
      marks: '',
      credit: 2,
    },
  ];
  eighthSem = [
    {
      code: '17CS81',
      subject: 'Internet Of things',
      marks: '',
      credit: 4,
    },
    {
      code: '17CS832',
      subject: 'User Interface Design',
      marks: '',
      credit: 3,
    },
    {
      code: '17CS82',
      subject: 'Big data Analytics',
      marks: '',
      credit: 4,
    },
    {
      code: '17CS84',
      subject: 'Internship/Professional Practice',
      marks: '',
      credit: 2,
    },
    {
      code: '17CSP85',
      subject: 'Project work Phase II',
      marks: '',
      credit: 6,
    },
    {
      code: '17CSS86',
      subject: 'Seminar',
      marks: '',
      credit: 1,
    },
  ];
}
