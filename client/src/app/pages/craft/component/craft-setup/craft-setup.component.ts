import { Component, Input, OnInit } from '@angular/core';
import { SkateboardService } from '../../../../services/data/skateboard.service';
import { EditSkateboardConfigService } from '../../../../services/page/craft/edit-skateboard-config.service';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from '../../../../components/inputs/dropdown/dropdown.component';
import { ButtonComponent } from '../../../../components/inputs/button/button.component';
import { User } from '../../../../models/functions/data/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-craft-setup',
  standalone: true,
  imports: [CommonModule, ButtonComponent, DropdownComponent],
  templateUrl: './craft-setup.component.html',
  styleUrl: './craft-setup.component.css',
})
export class CraftSetupComponent implements OnInit {
  @Input() isVisible = true;
  loggedInUser?: User;
  isDropdownVisible = false;
  isButtonVisible = false;
  skateboardForm: any;
  selectedSkateboardType: any;
  skateboardTypes = [
    {
      id: 1,
      name: 'Classic board',
      avatar:
        '../../../../../assets/img/inventory/selected/classic_board_board.png',
    },
    {
      id: 2,
      name: 'Long board ',
      avatar:
        '../../../../../assets/img/inventory/selected/long_skateboard_board.png',
    },
    {
      id: 3,
      name: 'Old School board',
      avatar:
        '../../../../../assets/img/inventory/selected/oldschool_board_board.png',
    },
  ];

  skateboardVariant = [
    {
      id: 1,
      label: 'Standard',
      action: () => {
        alert('yes');
      },
    },
    {
      id: 2,
      label: 'Permium',
      action: () => {
        alert('yes');
      },
    },
  ];
  skateboardVariantLabel = this.skateboardVariant[0].label + ' board';

  constructor(
    private editSkateboard: EditSkateboardConfigService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editSkateboard.skateboardForm.subscribe(
      (form) => (this.skateboardForm = form)
    );
  }

  setSkateForm(type: any) {
    console.log('Clicked  skate type');
    this.skateboardForm.configuration.board_type = type.id;
    this.editSkateboard.setSkateboardForm(this.skateboardForm);
    this.selectedSkateboardType = 'Classic board';
    this.isButtonVisible = true;
  }

  submitSetup() {
    this.isVisible = false;
  }

  backPage() {
    history.back();
  }
}
