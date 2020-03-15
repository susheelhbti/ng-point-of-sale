import { Component, OnInit, Input } from '@angular/core';
import { faImage } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item;

  public icon = {
    faImage,
  }

  constructor() { }

  ngOnInit() {
  }


}
