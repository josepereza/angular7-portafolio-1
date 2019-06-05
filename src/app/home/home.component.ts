import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToLink(param: String): void {
    console.log(param);
    if (param == "tuition-manager") {
    window.open("https://www.github.com/ShehriyarQureshi/tuition-manager");
    } else if (param == "employee-manager") {
    window.open("https://www.github.com/ShehriyarQureshi/employeemanager");
    } else if (param == "mobile-connect-profile") {
    window.open("https://link.medium.com/fQWJhKOsgX");
    } else if (param == "historia") {
    window.open("https://www.github.com/ShehriyarQureshi/historia");
    }
  }
}
