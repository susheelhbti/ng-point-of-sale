import { Component, OnInit } from '@angular/core';
import { faSearch, faPlusCircle, faTimesCircle, faCheckCircle, faMinusCircle } from '@fortawesome/pro-light-svg-icons';
import { PosService } from 'src/app/services/pos.service';
import { NotificationService } from 'src/app/services/notification.service'

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit {
  public icon = {
    faSearch,
    faPlusCircle,
    faTimesCircle,
    faCheckCircle,
    faMinusCircle
  };
  public items: Array<any>;
  public orders: Array<any>;
  public totalPrice: number;


  constructor(
    private posService: PosService,
    private notificationService: NotificationService) {

  }

  ngOnInit() {
    this.loadItems()
  }

  public loadItems(): void {
    this.notificationService.alert('info', 'Waiting for the items to be loaded')
    this.posService.getItems().subscribe(dataArray => {
      this.items = dataArray.map(item => item.payload.doc.data());
      this.notificationService.alert('success', 'Items successfully loaded')
    })
  }

  public addToOrder(item: object): void {
    this.posService.addToOrder(item);
    this.loadOrders();
  }

  public loadOrders(): void {
    this.posService.loadOrders().subscribe(orderArray => {
      this.orders = orderArray.map(item => item.payload.doc.data());
    });
  }

  public checkOutOrder(): void {
    this.posService.checkOutOrder();
    this.orders = [];
    this.notificationService.alert('success', `Successfully Purchased Order(s)`);
  }

  public cancelOrder(): void {
    this.posService.cancelOrder();
    this.orders = [];
    this.notificationService.alert('error', `Cancelled Order`);
  }

  public searchItem(item: string): void {
    if (item) {
      this.notificationService.alert('info', `Feature is currently not working. Here's ${item} take it with you.`)
    } else {
      this.notificationService.alert('info', `Feature is currently not working.`)
    }
  }

  public addItem(): void {
    this.notificationService.alert('info', `Feature is currently not working. Wag makulit.`)
  }

}
