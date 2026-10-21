import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [RouterLink],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  readonly p = {
    name: 'Vishal Narayan Singh',
    role: 'Software Development Engineer',
    location: 'Chandigarh, India',
    email: 'vishalnarayansingh12@gmail.com',
    github: 'https://github.com/vishalnsin',
    linkedin: 'https://linkedin.com/in/vishal-narayan-singh-64488225b/',
    // resume: '/Vishal_Resume.pdf',
    resume: '/Vishal_Narayan_Singh_NZ_Resume.pdf',
    headline: 'I build the software that keeps mines moving.',
    intro:
      'Java, Spring Boot and Angular developer at Minedge. I design REST APIs and dashboards for trip tracking, fuel and garage operations, with secure access and fast data retrieval.',
    about:
      'I completed my B.Tech in Computer Science and Engineering at Bengal College of Engineering and Technology, Durgapur, and started as a front-end intern before moving to full-stack work. Today I build backend services in Java and Spring Boot, responsive Angular interfaces, and data layers on SQL and MongoDB.',
  };

  readonly modules = [
    { name: 'Trips', note: 'Vehicle and load tracking' },
    { name: 'Fuel', note: 'Issue and consumption records' },
    { name: 'Documents', note: 'Vehicle and trip paperwork' },
    { name: 'Garage', note: 'Maintenance and repair jobs' },
  ];

  readonly skills = [
    { group: 'Languages', items: ['Java', 'SQL', 'JavaScript', 'TypeScript'] },
    { group: 'Frameworks', items: ['Spring Boot', 'Angular'] },
    { group: 'Databases', items: ['MySQL', 'MongoDB'] },
    { group: 'Tools', items: ['Git', 'Redis', 'Apache Kafka', 'REST APIs', 'Postman'] },
    { group: 'Concepts', items: ['Data Structures', 'OOPs', 'Microservices', 'RESTful APIs'] },
  ];

  readonly jobs = [
    {
      company: 'Minedge',
      role: 'Software Development Engineer',
      period: 'Jul 2025 – Present',
      stack: ['Java', 'Spring Boot', 'SQL', 'MongoDB', 'Angular', 'TypeScript'],
      points: [
        'Built a Mining Management System for trip tracking, fuel management, document handling and garage operations.',
        'Designed scalable REST APIs with Spring Boot, reducing response time by 30%.',
        'Created backend services in Java and Spring Boot for efficient data processing and high availability.',
        'Developed a responsive Angular and TypeScript UI that improved user experience and dashboard performance.',
        'Integrated SQL and MongoDB for optimized storage and faster data retrieval.',
        'Shipped fuel tracking and vehicle maintenance modules, reducing operational downtime by 25%.',
        'Applied JWT authentication and role-based access control (RBAC) for secure access.',
      ],
    },
    {
      company: 'CuriousJr (Powered by PW)',
      role: 'Frontend Developer Intern',
      period: 'May 2023 – Aug 2023',
      stack: ['HTML', 'CSS', 'JavaScript'],
      points: [
        'Built and maintained responsive pages with HTML5, CSS3 and JavaScript, consistent across browsers and devices.',
        'Used Flexbox and Grid to cut layout inconsistencies across mobile, tablet and desktop by 40%.',
        'Contributed to performance work that improved rendering speed and reduced load time by 20%.',
      ],
    },
  ];

  readonly education = [
    { school: 'Bengal College of Engineering and Technology, Durgapur', degree: 'B.Tech, Computer Science and Engineering', period: 'Jun 2021 – Jun 2025', score: 'CGPA 7.6 / 10' },
    { school: 'Maharaja College, Arrah', degree: 'Intermediate', period: 'Jun 2017 – Jun 2019', score: '68%' },
    { school: 'Delhi Model Public School, Arrah', degree: 'Matriculation', period: 'Jun 2016 – Jun 2017', score: 'CGPA 8 / 10' },
  ];

  ngOnInit(): void {
    this.title.setTitle('Vishal Narayan Singh | Java & Angular Software Engineer');
    this.meta.updateTag({
      name: 'description',
      content:
        'Portfolio of Vishal Narayan Singh, Software Development Engineer at Minedge. Java, Spring Boot, Angular, SQL and MongoDB projects, experience and resume.',
    });
  }
}