import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../inputs/button/button.component';
import { SkateboardService } from '../../../../services/data/skateboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-options',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './card-options.component.html',
  styleUrl: './card-options.component.css'
})
export class CardOptionsComponent implements AfterViewInit {
  @Input() itemId: any;
  isOptionVisible: boolean = false;

  constructor(private skateboardService: SkateboardService, private router: Router) {

  }

  ngAfterViewInit(): void {

  }

  viewOptions() {
    this.isOptionVisible = !this.isOptionVisible
  }

  edit() {
    this.router.navigate(['/craft/edit', this.itemId]);
  }

  delete() {
    this.skateboardService.deleteSkateboard(this.itemId)
  }

}
