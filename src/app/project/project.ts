import { Component, computed, signal } from '@angular/core';

type Filter = 'All' | 'Work' | 'Personal';

interface Project {
  id: string;
  title: string;
  kind: 'Work' | 'Personal';
  period: string;
  overview: string;
  role: string;
  stack: string[];
  features: string[];
  engineering: string[];
  results: string[];
  github?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Projects {
  readonly filters: Filter[] = ['All', 'Work', 'Personal'];
  readonly active = signal<Filter>('All');

  readonly projects: Project[] = [
    {
      id: 'mining-management-system',
      title: 'Mining Management System',
      kind: 'Work',
      period: 'Jul 2025 – Present',
      overview:
        'A management system built at Minedge that replaces scattered records with one application. Operators and managers track vehicle trips, fuel use, paperwork and workshop jobs from a single dashboard.',
      role: 'Software Development Engineer: backend APIs, Angular front end and database integration.',
      stack: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'SQL', 'MongoDB', 'JWT'],
      features: [
        'Trip tracking for vehicles and loads',
        'Fuel management and fuel tracking module',
        'Document handling for vehicle and trip paperwork',
        'Garage operations and vehicle maintenance module',
        'Responsive dashboards for managers and operators',
        'Role-based screens and actions',
      ],
      engineering: [
        'RESTful APIs in Spring Boot, structured for scale and high availability.',
        'SQL and MongoDB used together so each kind of data sits in the store that suits it.',
        'JWT authentication with role-based access control (RBAC).',
        'Angular and TypeScript front end tuned for dashboard performance.',
      ],
      results: [
        'API response time reduced by 30%',
        'Operational downtime reduced by 25% through fuel and maintenance modules',
      ],
    },
    {
      id: 'car-rental-application',
      title: 'Car Rental Application',
      kind: 'Personal',
      period: 'Academic project',
      overview:
        'A web application where customers browse cars and book them, and administrators manage the fleet and reservations.',
      role: 'Solo developer: database design, REST APIs and front end.',
      stack: ['Java', 'SQL', 'HTML', 'CSS', 'JavaScript'],
      features: [
        'User registration and account management',
        'Car listings with availability',
        'Booking flow and booking management',
        'Admin tools to manage vehicles',
      ],
      engineering: [
        'REST APIs for users, bookings and car listings.',
        'Relational schema designed for efficient data handling.',
      ],
      results: ['Complete booking lifecycle from search to confirmation'],
      github: 'https://github.com/vishalnsin',
    },
    {
      id: 'airline-reservation-system',
      title: 'Airline Reservation System',
      kind: 'Personal',
      period: 'Academic project',
      overview:
        'An airline booking system where passengers search flights, choose seats and receive a PNR, built with a focus on data consistency.',
      role: 'Solo developer: booking logic, authentication and database optimization.',
      stack: ['Java', 'SQL', 'HTML', 'CSS', 'JavaScript'],
      features: [
        'Flight search',
        'Booking with PNR generation',
        'Real-time seat availability',
        'Authentication for passengers',
      ],
      engineering: [
        'Booking logic that keeps seat counts correct as reservations are made.',
        'Database design optimized for performance and data consistency.',
      ],
      results: ['End-to-end booking with a unique PNR for every reservation'],
      github: 'https://github.com/vishalnsin',
    },
    {
      id: 'curiousjr-frontend-work',
      title: 'CuriousJr Frontend Work',
      kind: 'Work',
      period: 'May 2023 – Aug 2023',
      overview:
        'Internship work at CuriousJr (Powered by PW) focused on responsive layouts and page speed across devices and browsers.',
      role: 'Frontend Developer Intern.',
      stack: ['HTML5', 'CSS3', 'JavaScript', 'Flexbox', 'Grid'],
      features: [
        'Responsive pages for mobile, tablet and desktop',
        'Cross-browser compatibility',
        'Consistent user experience across devices',
      ],
      engineering: [
        'Flexbox and Grid layouts replaced fragile positioning.',
        'Rendering and load-time optimizations.',
      ],
      results: ['Layout inconsistencies reduced by 40%', 'Load time reduced by 20%'],
    },
  ];

  readonly list = computed(() =>
    this.active() === 'All' ? this.projects : this.projects.filter((p) => p.kind === this.active()),
  );
}