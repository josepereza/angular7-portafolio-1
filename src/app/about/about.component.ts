import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about: any = {
    "name": "Muhammad Shehriyar Qureshi",
    "status": "Self-Taught Software Developer"
  };

  frontendSkills: any = [
    "Angular",
    "HTML",
    "CSS",
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
    "SQLite",
    "PostGIS",
    "pgAdmin"
  ];

  otherSkills: any = [
    "RESTful Web Services",
    "Geographic Information System",
    "Linux",
    "Bash Scripting",
    "Version Control (Git/GitHub/Bitbucket)",
    "Apache Tomcat",
    "JSON",
    "XML",
    "Regular Expressions",
    "Vim"
  ];

  workExperience: any = [
    {
      "name": "TPL Maps (Private) Ltd",
      "role": "Full Stack Software Engineer",
      "date": "April 2019 - Present",
      "website": "https://tplmaps.com"
    },
    {
      "name": "Ufone",
      "role": "Software Developer Intern",
      "date": "December 2018 - February 2019",
      "website": "https://www.ufone.com"
    },
    {
      "name": "PTCL",
      "role": "Software Developer Intern",
      "date": "September 2018 - November 2018",
      "website": "https://ptcl.com.pk"
    }
  ];

  laptopSetup: any = {
    "operatingSystem": "btw I use Arch Linux",
    "textEditor": "Neovim",
    "IDE": "Netbeans for Java, VSCode for Angular",
    "desktopEnvironment": "Gnome 3"
  }

  constructor() { }

  ngOnInit() {
  }

}
