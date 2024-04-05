import { Component, OnInit } from '@angular/core';
import { SkateboardService } from '../../../services/data/skateboard.service';
import { CommonModule } from '@angular/common';
import { GridlayoutComponent } from '../../../components/data-display/gridlayout/gridlayout.component';
import { ProductCardComponent } from '../../../components/data-display/product-card/product-card.component';
import { ButtonComponent } from '../../../components/inputs/button/button.component';

@Component({
  selector: 'app-account-collection',
  standalone: true,
  imports: [CommonModule, GridlayoutComponent, ProductCardComponent, ButtonComponent],
  templateUrl: './account-collection.component.html',
  styleUrl: './account-collection.component.css'
})
export class AccountCollectionComponent implements OnInit {
  skateboardCollection: any = []

  constructor(private skateboardData: SkateboardService) { }

  ngOnInit(): void {
    this.skateboardData.getAllSkateboards().subscribe((skateboards) => {
      this.skateboardCollection = skateboards;
      console.log(skateboards)
    }
    )
  }
}
