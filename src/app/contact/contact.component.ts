import { Component, OnInit, ViewChild } from '@angular/core';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  links: any = {
    "github": "https://github.com/ShehriyarQureshi",
    "medium": "https://medium.com/@Shehriyar.Qureshi",
    "linkedin": "https://www.linkedin.com/in/sshehriyar/",
    "email": "mailto:SShehriyar266@gmail.com",
  }

  constructor(public about: AboutComponent) { }

  ngOnInit() {
  }

}
