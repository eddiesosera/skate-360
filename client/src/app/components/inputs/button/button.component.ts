import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  @Input() type: 'sharp' | 'round' = 'sharp';
  @Input() variant: 'fill' | 'outline' = 'outline';
  @Input() accent: 'dark' | 'light' | 'red' = 'dark';
  @Input() width: any = 'fit-content';
  @Input() height: any = 'fit-content';
  @Input() padding: any = '10px 15px';
  @Input() gap: number = 0;
  @Input() custom: any;
}
