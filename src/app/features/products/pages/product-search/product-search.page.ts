import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { fromEvent, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/core/models/product.model';
import { ProductHttpService } from 'src/app/core/services/http/product-http.service';

@Component({
  selector: 'product-search',
  templateUrl: './product-search.page.html',
  styleUrls: ['./product-search.page.scss']
})
export class ProductSearchPage implements AfterViewInit, OnDestroy {

  @ViewChild('input')
  input?: ElementRef;
  products?: Product[];
  searchTerm?: string;

  private inputTypeSubscription?: Subscription;

  constructor(
    private productHttpService: ProductHttpService // Use this service to get products
  ) { }

  ngAfterViewInit() {
    this.bindProductsSearchOnInputType();
  }

  ngOnDestroy() {
    this.inputTypeSubscription?.unsubscribe();
  }

  private bindProductsSearchOnInputType() {
    this.inputTypeSubscription = fromEvent(this.input?.nativeElement, 'keyup').pipe(
      switchMap(
        () =>  {
          if (!this.searchTerm || this.searchTerm.length < 3) { return of<Product[]>([]); }
          return this.productHttpService.getProducts(this.searchTerm);
        }
      )
    ).subscribe(products => {
      this.products = products;
    }, err => {
      // TODO: show error
    });
  }

}
