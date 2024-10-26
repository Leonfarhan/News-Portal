import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-category-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  animations: [
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  template: `
    <nav class="bg-white dark:bg-gray-800 shadow-md mb-6 p-4" @fadeSlideIn>
      <ul class="flex space-x-4 overflow-x-auto">
        <li *ngFor="let category of categories">
          <a [routerLink]="['/category', category.id]"
             routerLinkActive="text-blue-600 dark:text-blue-400"
             class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
            {{category.name}}
          </a>
        </li>
      </ul>
    </nav>
  `
})
export class CategoryNavComponent {
  categories = [
    { id: 'home', name: 'Home' },
    { id: 'world', name: 'World' },
    { id: 'technology', name: 'Technology' },
    { id: 'science', name: 'Science' },
    { id: 'health', name: 'Health' },
    { id: 'politics', name: 'Politics' }
  ];
}