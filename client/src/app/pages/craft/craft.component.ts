import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import Muuri from 'muuri'
import { ButtonComponent } from '../../components/inputs/button/button.component';
import { EditorComponent } from './windows/editor/editor.component';
import { ToolOptionComponent } from './windows/tool-option/tool-option.component';
import { ConfigureToolOptionComponent } from './windows/configure-tool-option/configure-tool-option.component';
import { SelectedItemComponent } from './windows/selected-item/selected-item.component';
import { CraftSkateboardComponent } from './windows/craft-skateboard/craft-skateboard.component';

@Component({
  selector: 'app-craft',
  standalone: true,
  imports: [
    RouterLink,
    EditorComponent,
    SelectedItemComponent,
    CraftSkateboardComponent,
    ToolOptionComponent,
    ConfigureToolOptionComponent,
    ButtonComponent
  ],
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
    }).on('dragEnd', function (item, event) {
      console.log(event);
      console.log(item);
    });;


  }
}