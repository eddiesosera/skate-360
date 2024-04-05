import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-option-card',
  standalone: true,
  imports: [],
  templateUrl: './tool-option-card.component.html',
  styleUrl: './tool-option-card.component.css'
})
export class ToolOptionCardComponent implements OnInit {
  @Input() url = ''
  @Input() option: any
  @Input() position: any

  ngOnInit(): void {
    if (this.option.avatar === "white") {
      this.url = '../../../../../../../assets/img/inventory/options/color/white.png'
    } else if (this.option.avatar === "yellow") {
      this.url = '../../../../../../../assets/img/inventory/options/color/yellow.png'
    } else if (this.option.avatar === "red") {
      this.url = '../../../../../../../assets/img/inventory/options/color/red.png'
    } else if (this.option.avatar === "black") {
      this.url = '../../../../../../../assets/img/inventory/options/color/black.png'
    }
  }

}
