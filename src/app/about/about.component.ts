import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about: any = {
    "name": "Muhammad Shehriyar Qureshi",
    "status": "Full Stack Software Engineer",
    "workPreference":
      `
    I love work, but only if you allow me to come to work wearing a trouser and
    shirt. Can't code if I'm not comfortable.
    `,
    "introduction":
      `
    I've been learning and coding for over the past 2 years. I started learning
    with Python and then worked with Java. Now, I'm working with both Java and
    Angular. I love being a Back-End Engineer but I'm now becoming comfortable
    with Front-End. So now I'm a Full Stack Software Engineer.
    `
  };

  frontendSkills: any = [
    "Angular",
    "HTML",
    "CSS",
    "TypeScript",
    "pyGTK"
  ];

  backendSkills: any = [
    "Java",
    "Spring Boot",
    "Spring Security",
    "Python",
    "JDBC",
    "Hibernate ORM",
  ];

  databaseSkills: any = [
    "PostgreSQL",
    "SQLite3",
    "PostGIS",
    "pgAdmin"
  ];

  otherSkills: any = [
    "RESTful Web Services",
    "Geographic Information System",
    "Leaflet",
    "Linux",
    "Bash Scripting",
    "Version Control (Git/GitHub/Bitbucket)",
    "Apache Tomcat",
    "JSON",
    "XML",
    "Regular Expressions",
    "Vim/Neovim"
  ];

  workExperience: any = [
    {
      "name": "TPL Maps (Private) Ltd",
      "role": "Full Stack Software Engineer",
      "date": "April 2019 - Present",
      "website": "https://tplmaps.com",
      "image": "assets/images/tplmaps_logo.png",
      "workImage": "assets/images/tplmaps_work.jpg",
      "description":
        `
      I joined as a Back-End Software Engineer but I was given the option to
      try out Front-End development which I accepted. Currently, I'm working as
      the sole Front-End developer on one of our projects, with occasional help
      from other Front-End developers.
      `,
      "technologies": [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Angular v7",
        "HTML",
        "CSS",
        "Leaflet"
      ]

    },
    {
      "name": "Ufone",
      "role": "Software Developer Intern",
      "date": "December 2018 - February 2019",
      "website": "https://www.ufone.com",
      "image": "assets/images/ufone_logo.jpg",
      "workImage": "assets/images/ufone_work.jpg",
      "description":
        `
      I joined as a Software Developer Intern. I designed and implemented the
      GSMA Mobile Connect Profile prototype. I built the base in Java and
      Jersey API.
      `,
      "technologies": [
        "Java",
        "Jersey API"
      ]
    },
    {
      "name": "PTCL",
      "role": "Software Developer Intern",
      "date": "September 2018 - November 2018",
      "website": "https://ptcl.com.pk",
      "image": "assets/images/ptcl_logo.png",
      "workImage": "assets/images/ptcl_work.jpg",
      "description":
        `
      I joined as a Software Developer Intern. I learned to create web
      applications using Java, JavaServer Faces and Spring Security.
      `,
      "technologies": [
        "Java",
        "Spring Security",
        "JavaServer Faces"
      ]
    }
  ];

  laptopSetup: any = {
    "operatingSystem": "btw I use Arch Linux",
    "textEditor": "Neovim",
    "IDE": "Netbeans for Java, VS Code for Angular",
    "desktopEnvironment": "Gnome 3"
  }

  constructor() { }

  ngOnInit() {
  }

}
