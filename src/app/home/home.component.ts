import { Component, OnInit, SimpleChanges } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { async, delay } from 'q';
import { Observable, of, Subscription } from 'rxjs';

declare var TypeIt: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subscription: Subscription;

  typeComplete = false;

  projects: any = [
    {
      name: 'historia',
      type: 'Open Source',
      description: `A python program that uses python's built-in sqlite3
      module to implement support for temporal tables in SQLite`,
      link: 'https://www.github.com/ShehriyarQureshi/historia',
      image: 'assets/images/temporal-table.png'
    },
    {
      name: 'Tuition Manager',
      type: 'Open Source',
      image: 'assets/images/tuition-manager.png',
      description: `This was my first ever big programming project. I started
      learning to code in Python and I developed this project to get an
      understanding of programming basics and how I/O and stuff works`,
      link: 'https://www.github.com/ShehriyarQureshi/tuition-manager'
    },
    {
      name: 'employeeManager',
      type: 'Open Source',
      image: 'assets/images/employeeManager.png',
      description: `My first Java program that uses JSF, Hibernate & Spring
      Security. Not proud of it except those Pokemon`,
      link: 'https://www.github.com/ShehriyarQureshi/employeeManager'

    },
    {
      name: 'Mobile Connect Profile',
      type: 'Open Source',
      description: `Designed & Developed the base for GSMA Mobile Connect Profile prototype`,
      link: 'https://www.github.com/ShehriyarQureshi/mobile-connect-profile',
      image: 'assets/images/gsma-mobile-connect.jpg'
    }
  ];

  constructor(public about: AboutComponent) {
  }

  ngOnInit() {
    this.typeTitle();
    // this.typeWhatIDo();
  }

  goToLink(link: string): void {
    window.open(link);
  }

  what(event: any): void {
    console.log('hi', event);
  }

  public typeTitle(): void {
    const typeTitle = new TypeIt('#title', {
      strings: this.about.about.status,
      speed: 70,
      waitUntilVisible: true,
      lifeLike: true,
      cursorChar: '_',
      afterComplete: (instance) => {
        this.typeWhatIDo();
      }
    }).go();

  }

  public typeWhatIDo(): void {
    const typeDeliverables = new TypeIt('#deliverables', {
      speed: 50,
      waitUntilVisible: true,
      lifeLike: true,
      cursorChar: '_',
      afterComplete: (instance) => {
        this.typeComplete = true;
      }
    })
      .type('I create ')
      .pause(500)
      .type('websites,')
      .pause(1500)
      .delete(9)
      .type('web applications,')
      .pause(1500)
      .delete(17)
      .type('desktop applications,')
      .pause(1500)
      .delete(28)
      .type('develop Software')
      .pause(500)
      .type('.');

    typeDeliverables.go();
  }
}
