import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly year = new Date().getFullYear();
  readonly name = 'Vishal Narayan Singh';
  readonly email = 'vishalnarayansingh12@gmail.com';
  readonly github = 'https://github.com/vishalnsin';
  readonly linkedin = 'https://linkedin.com/in/vishal-narayan-singh-64488225b/';
  // readonly resume = '/assets/Vishal Resume.pdf';
  readonly resume = '/Vishal_Narayan_Singh_NZ_Resume.pdf';


  menuOpen = false;
  theme: 'light' | 'dark' = 'light';


  private viewport = inject(ViewportScroller);

  constructor() {
    let saved: string | null = null;
    try { saved = localStorage.getItem('theme'); } catch { /* storage unavailable */ }
    const dark = saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    this.setTheme(dark ? 'dark' : 'light');
    this.viewport.setOffset([0, 72]);
  }

  toggleTheme(): void {
    this.setTheme(this.theme === 'dark' ? 'light' : 'dark');
    try { localStorage.setItem('theme', this.theme); } catch { /* storage unavailable */ }
  }

  private setTheme(t: 'light' | 'dark'): void {
    this.theme = t;
    document.documentElement.setAttribute('data-theme', t);
  }
}