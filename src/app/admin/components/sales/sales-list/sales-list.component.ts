import { Component, OnInit } from '@angular/core';
import { SaleOrder } from '../../../../core/models/sale-order.model';
import { SaleService } from '../../../../core/services/sale/sale.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {
  dataSource: any;
  sales: SaleOrder[] = [];
  displayedColumns: string[] = ['id', 'amount', 'totalAmount', 'date', 'client', 'user'];

  constructor(
    private saleService: SaleService
  ) {   }
  getAllRims() {
    this.saleService.getAllSales().subscribe(data => {
      this.sales = data;
      this.dataSource = data;
      console.log(data);
    });
  }

  ngOnInit() {
    this.getAllRims();
  }

}
