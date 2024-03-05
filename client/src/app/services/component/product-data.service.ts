import { Injectable } from '@angular/core';
import { ProductData } from '../../models/components/data-display/product-data.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  // Subscribe to changes
  private sharedDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  sharedData$: Observable<any> = this.sharedDataSubject.asObservable();

  constructor() { }

  private data: ProductData = {
    // Temporary dummy data. Final version will be 0 or  ''
    id: 0,
    type: 'Classic',
    craftedBy: 'Eddie',
    price: 0,
    location: 'Johanessburg'
  };

  setData(data: ProductData): void {
    this.data = data;
  }

  getData(): ProductData {
    return this.data;
  }
}
