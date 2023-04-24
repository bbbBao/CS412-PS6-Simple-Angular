// src/app/app.component.ts
import { Component } from '@angular/core';
import { MOCK_DATA } from './data.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any[] | null = null;
  title = 'PS6';
  fetchData(): void {
    // Simulate fetching data from the backend
    setTimeout(() => {
      this.data = MOCK_DATA;
    }, 1000);
  }
}
