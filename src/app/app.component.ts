import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './components/news-list/news-list.component';
import { CategoryNavComponent } from './components/category-nav/category-nav.component';
import { ThreeBackgroundComponent } from './components/three-background/three-background.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    NewsListComponent, 
    CategoryNavComponent,
    ThreeBackgroundComponent
  ],
  template: `
    <app-three-background></app-three-background>
    <div class="min-h-screen relative">
      <header class="bg-white/90 dark:bg-gray-800/90 shadow-md backdrop-blur-sm">
        <div class="container mx-auto px-4 py-6">
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">NY Times News Portal</h1>
        </div>
      </header>
      <app-category-nav></app-category-nav>
      <main class="container mx-auto py-8">
        <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class App {
  title = 'NY Times News Portal';
}