import { Component } from '@angular/core';
import { Order } from '../order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  orders: Order[] = [
    new Order('ORD123', 'Fab Zone Party wear Womens Designer'),
    new Order('ORD124', 'Mens Hiking Trousers NH100 Grey'),

  ]


}
