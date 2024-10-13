import { Component } from '@angular/core';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-data-projection',
  standalone: true,
  imports: [NgbDatepickerModule, NgbAlertModule, FormsModule, JsonPipe],
  templateUrl: './data-projection.component.html',
  styleUrl: './data-projection.component.css'
})

export class DataProjectionComponent {
  today = new Date();
  
  temperature = 12;
  humidity = 70;
  airQuality = 134;
  brightness = 74;
  
  model: NgbDateStruct = { year: this.today.getFullYear(), month: this.today.getMonth()+1, day: this.today.getDate() };;
}
