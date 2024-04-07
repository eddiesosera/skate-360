import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Muuri from 'muuri'
import { ButtonComponent } from '../../components/inputs/button/button.component';
import { EditorComponent } from './windows/editor/editor.component';
import { ToolOptionComponent } from './windows/tool-option/tool-option.component';
import { ConfigureToolOptionComponent } from './windows/configure-tool-option/configure-tool-option.component';
import { SelectedItemComponent } from './windows/selected-item/selected-item.component';
import { CraftSkateboardComponent } from './windows/craft-skateboard/craft-skateboard.component';
import { CraftSetupComponent } from './component/craft-setup/craft-setup.component';
import { CraftSuccessComponent } from './component/craft-success/craft-success.component';
import { User } from '../../models/functions/data/user.model';
import { EditSkateboardView } from '../../services/page/craft/edit-skateboard-view.service';
import { EditSkateboardConfigService } from '../../services/page/craft/edit-skateboard-config.service';

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
    CraftSetupComponent,
    ButtonComponent
  ],
  templateUrl: './craft.component.html',
  styleUrl: './craft.component.css'
})
export class CraftComponent implements OnInit, AfterViewChecked {
  grid: any;
  dragContainer: any;
  itemContainers: any[] = [];
  columnGrids: any[] = [];
  boardGrid: any;

  loggedInUser?: User;
  loggedInState: any

  constructor(private router: Router, private editSkateboard: EditSkateboardConfigService) { }

  ngOnInit() {
    // If user not logged in route to onboarding
    let userParsed = JSON.parse(localStorage.getItem('loggedInUser')!)
    this.loggedInUser = JSON.parse(userParsed.user);

    console.log(this.loggedInState);
    this.loggedInState = localStorage.getItem('isLoggedIn');

    this.editSkateboard.skateboardForm.subscribe((form) => {
      this.loggedInState = localStorage.getItem('isLoggedIn')
      console.log(JSON.parse(this.loggedInState));
      if (this.loggedInState === 'false') {
        this.router.navigate(['/onboarding']);
      }
    });
  }

  ngAfterViewChecked(): void {
    console.log(this.loggedInState);
  }

}