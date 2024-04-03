import { Component } from '@angular/core';
import { SelectedItemComponent } from '../selected-item/selected-item.component';
import { ThreeObjectComponent } from '../../../../components/craft/three-object/three-object.component';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [ThreeObjectComponent, SelectedItemComponent],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {

}
