import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public frontendSkills = [
    "Angular",
    "HTML",
    "CSS",
    "pyGTK"
  ];

  public backendSkills = [
    "Java",
    "Spring Boot",
    "Spring Security",
    "Python",
    "JDBC",
    "Hibernate ORM",
  ];

  public databaseSkills = [
    "PostgreSQL",
    "SQLite",
    "PostGIS",
    "pgAdmin"
  ];

  public otherSkills = [
    "RESTful Web Services",
    "Geographic Information System",
    "Linux",
    "Bash Scripting",
    "Version Control (Git/Github/Bitbucket)",
    "Apache Tomcat",
    "JSON",
    "XML",
    "Regular Expressions",
    "Vim"
  ]

  constructor() { }

  ngOnInit() {
  }

}
