import { Component, OnInit, Input } from '@angular/core';
import { faPlusCircle, faMinusCircle } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @Input() orders;
  @Input() totalPrice: number = 0;

  public icon = {
    faPlusCircle,
    faMinusCircle
  }

  constructor() { }

  ngOnInit() {
  }



}
