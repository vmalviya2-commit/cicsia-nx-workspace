import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  selector: 'app-root',
  template: `
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
      <!-- Header -->
      <header class="bg-white shadow-sm dark:bg-gray-800 transition-colors duration-200 relative">
        <div class="absolute right-4 top-4">
          <button 
            (click)="toggleDarkMode()"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <span class="sr-only">Toggle dark mode</span>
            <svg 
              *ngIf="!isDarkMode"
              xmlns="http://www.w3.org/2000/svg" 
              class="h-5 w-5 text-gray-800" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
              />
            </svg>
            <svg 
              *ngIf="isDarkMode"
              xmlns="http://www.w3.org/2000/svg" 
              class="h-5 w-5 text-gray-200" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" 
              />
            </svg>
          </button>
        </div>
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <h1 class="text-2xl font-bold text-gray-900 dark:text-white">{{ title }}</h1>
            </div>
            <div class="flex items-center space-x-4">
              <button 
                *ngFor="let tab of navigationTabs" 
                (click)="activeTab = tab"
                [class]="'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ' + 
                  (activeTab === tab 
                    ? 'bg-gray-900 text-white dark:bg-gray-700' 
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700')"
              >
                {{ tab }}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <!-- Main Content -->
      <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Welcome Section -->
        <div class="px-4 py-6 sm:px-0">
          <div class="bg-white overflow-hidden shadow rounded-lg dark:bg-gray-800 transition-colors duration-200">
            <div class="p-6">
              <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Welcome to {{ title }}</h2>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                This is a modern Angular application built with Nx and styled with Tailwind CSS.
              </p>
              
              <!-- Features Grid -->
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div *ngFor="let feature of features" 
                     class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg hover:shadow-md transition-all duration-200 transform hover:scale-105">
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">{{ feature.title }}</h3>
                  <p class="text-gray-600 dark:text-gray-300">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <!-- Footer -->
      <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12 transition-colors duration-200">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p class="text-center text-gray-500 dark:text-gray-400 text-sm">
            © {{ currentYear }} {{ title }}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  title = 'Angular Web Application';
  currentYear = new Date().getFullYear();
  navigationTabs = ['Home', 'Features', 'About'];
  activeTab = 'Home';
  isDarkMode = false;

  ngOnInit() {
    // Check system preference for dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.toggleDarkMode(true);
    }

    // Listen for system dark mode changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      this.toggleDarkMode(e.matches);
    });
  }

  toggleDarkMode(value?: boolean) {
    this.isDarkMode = value ?? !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  features = [
    {
      title: 'Modern Architecture',
      description: 'Built with Angular and Nx for scalable enterprise applications.'
    },
    {
      title: 'Responsive Design',
      description: 'Fully responsive layout that works seamlessly on all devices.'
    },
    {
      title: 'Tailwind CSS',
      description: 'Styled with Tailwind CSS for rapid UI development.'
    },
    {
      title: 'Component-Based',
      description: 'Modular architecture with reusable components.'
    },
    {
      title: 'Performance',
      description: 'Optimized for speed and efficiency.'
    },
    {
      title: 'Developer Experience',
      description: 'Great DX with hot reload and modern tooling.'
    }
  ];
}
