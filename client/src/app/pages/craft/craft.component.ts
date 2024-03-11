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
  dragContainer: any;
  itemContainers: any[] = [];
  columnGrids: any[] = [];
  boardGrid: any;

  ngOnInit() {
    this.dragContainer = document.querySelector('.drag-container');

    this.itemContainers = Array.from(document.querySelectorAll('.dashboard-window-content'));

    this.itemContainers.forEach((container: any) => {
      const grid = new Muuri(container, {
        items: '.dashboard-window-content-item',
        dragEnabled: true,
        dragSort: () => this.columnGrids,
        dragContainer: this.dragContainer,
        dragAutoScroll: {
          targets: (item: any) => [
            { element: window, priority: 0 },
            { element: item.getGrid().getElement().parentNode, priority: 1 },
          ]
        }
      })
        .on('dragInit', (item: any) => {
          item.getElement().style.width = item.getWidth() + 'px';
          item.getElement().style.height = item.getHeight() + 'px';
        })
        .on('dragReleaseEnd', (item: any) => {
          item.getElement().style.width = '';
          item.getElement().style.height = '';
          item.getGrid().refreshItems([item]);

          console.log(item);
        })
        .on('layoutStart', () => {
          grid.refreshItems().layout();
        });

      this.columnGrids.push(grid);
    });

    this.grid = new Muuri('.dashboard', {
      dragEnabled: false,
      layout: {
        fillGaps: true
      }
    }).on('dragEnd', (item, event) => {
      console.log(event);
      console.log(item);
    });
  }
}