import { Component } from '@angular/core';
import { SelectedItemComponent } from '../selected-item/selected-item.component';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [SelectedItemComponent],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {

}
