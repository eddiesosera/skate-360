import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import Muuri from 'muuri'

@Component({
  selector: 'app-craft',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './craft.component.html',
  styleUrl: './craft.component.css'
})
export class CraftComponent implements OnInit {
  grid: any;

  ngOnInit() {
    this.grid = new Muuri('.grid', {
      dragEnabled: true, // Enable dragging
      layout: {
        fillGaps: true // Fill gaps in layout
      }
    });
  }
}