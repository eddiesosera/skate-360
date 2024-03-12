import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-configure-tool-option',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './configure-tool-option.component.html',
  styleUrls: ['./configure-tool-option.component.css']
})
export class ConfigureToolOptionComponent {
  sliderticks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  sliderValue = 5

  constructor() {

  }

  changeValue(e: any) {
    this.sliderValue = e.target.value
    // console.log(this.sliderValue)
  }

  getSliderColor(): string {
    // Change the color based on the slider value
    return `linear-gradient(to right, #FD1313 ${this.sliderValue * 10}%, #2E3232 ${this.sliderValue * 10}%)`;
  }

  updateSliderColor(): void {
    // No need to do anything here, as ngModelChange will automatically trigger the color update
  }
}
