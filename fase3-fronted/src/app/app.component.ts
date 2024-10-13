import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GraphComponent } from './components/graph/graph.component';
import { RealTimeDataComponent } from './components/real-time-data/real-time-data.component';
import { DataProjectionComponent } from './components/data-projection/data-projection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GraphComponent, DataProjectionComponent ,RealTimeDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fase3-fronted';
}
