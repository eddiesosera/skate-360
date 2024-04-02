import { Injectable } from '@angular/core';
import { ProductData } from '../../models/components/data-display/product-data.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Skateboard } from '../../models/functions/data/skateboard.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  // Subscribe to changes
  private sharedDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  sharedData$: Observable<any> = this.sharedDataSubject.asObservable();

  constructor() { }

  private data: ProductData = {
    id: 0,
    type: '',
    craftedBy: '',
    avatar: '',
    price: 0,
    location: ''
  };

  setData(data: ProductData): void {
    this.data = data;
  }

  getData(): ProductData {
    return this.data;
  }
}
