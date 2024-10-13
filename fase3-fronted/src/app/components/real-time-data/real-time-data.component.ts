import { Component } from '@angular/core';

@Component({
  selector: 'app-real-time-data',
  standalone: true,
  imports: [],
  templateUrl: './real-time-data.component.html',
  styleUrl: './real-time-data.component.css'
})
export class RealTimeDataComponent {
  temperature = 12;
  humidity = 70;
  proximity = 10; 
  airQuality = 134;
  brightness = 74;
}
