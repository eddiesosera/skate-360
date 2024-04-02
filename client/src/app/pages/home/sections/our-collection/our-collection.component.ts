import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../components/inputs/button/button.component';
import { dummdata } from './dummy data';
import Masonry from 'masonry-layout';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../../../components/data-display/product-card/product-card.component';
import { ProductDataService } from '../../../../services/component/product-data.service';
import { GridlayoutComponent } from '../../../../components/data-display/gridlayout/gridlayout.component';
import { SkateboardService } from '../../../../services/data/skateboard.service';
import { Skateboard } from '../../../../models/functions/data/skateboard.model';

@Component({
  selector: 'app-our-collection',
  standalone: true,
  imports: [CommonModule, GridlayoutComponent, ProductCardComponent, ButtonComponent],
  templateUrl: './our-collection.component.html',
  styleUrl: './our-collection.component.css'
})
export class OurCollectionComponent implements OnInit {
  skateboardCollection: any = []

  constructor(private skateboardData: SkateboardService) { }

  ngOnInit(): void {
    this.skateboardData.getAllSkateboards().subscribe((skateboards) => {
      this.skateboardCollection = skateboards;
      console.log(skateboards)
    }
    )
  }

  // this.dataService.setData({ key: 'value' });


}
