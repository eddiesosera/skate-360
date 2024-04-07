import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../components/inputs/button/button.component';
import { CommonModule } from '@angular/common';
import { SkateboardService } from '../../../../services/data/skateboard.service';
import { EditSkateboardConfigService } from '../../../../services/page/craft/edit-skateboard-config.service';
import { StockNeeded } from '../../../../models/functions/data/stockNeeded';
import { StockNeededService } from '../../../../services/data/stock-needed.service';

@Component({
  selector: 'app-craft-skateboard',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './craft-skateboard.component.html',
  styleUrl: './craft-skateboard.component.css'
})
export class CraftSkateboardComponent implements OnInit {
  skateboardRecipe: any;
  skateboardForm: any;
  price: any;
  skateboardQty: number = 1

  selectedItems = [
    {
      name: 'board',
      quantity: 1,
    },
    {
      name: 'trucks',
      quantity: 2,
    },
    {
      name: 'wheels',
      quantity: 4,
    },
    {
      name: 'bearings',
      quantity: 4,
    },
    {
      name: 'skin',
      quantity: 4,
    },
  ];

  constructor(private stockneeded: StockNeededService, private form: EditSkateboardConfigService,
    private skateboard: SkateboardService) { }

  ngOnInit(): void {
    this.form.skateboardForm.subscribe(frm => this.skateboardForm = frm)
    this.stockneeded.getSingleStockNeeded(this.skateboardForm?.stockNeeded)
      .subscribe(recipe => {
        // this.skateboardRecipe = recipe; 
        console.log(recipe);
        this.price = recipe?.price;
        this.selectedItems[0].quantity = recipe.board_type
        this.selectedItems[1].quantity = recipe.trucks
        this.selectedItems[2].quantity = recipe.wheels
        this.selectedItems[3].quantity = recipe.bearings
        this.selectedItems[4].quantity = recipe.board_skin
      });
  }

  setQty(e: any) {
    this.form.setSkateboardQuantity(e.target.value);
    this.skateboardQty = e.target.value
    // console.log(e.target.value)
  }

  createSkateboard() {
    for (let index = 0; index < this.skateboardQty; index++) {
      // index++
      this.skateboard.createSkateboard(this.skateboardForm).subscribe(created => {
        console.log("Success: " + JSON.stringify(created));
        console.log("Amount of times looped: " + index)
      })

    }

  }
}
