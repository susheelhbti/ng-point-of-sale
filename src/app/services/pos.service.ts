import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PosService implements OnInit {
  public order = this.firestore.collection.length - 2;
  public itemDoc: any;
  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
  }

  public getItems() {
    return this.firestore.collection('items').snapshotChanges();
  }

  public loadOrders() {
    return this.firestore.collection(`orders-${this.order + 1}`).snapshotChanges();
  }

  public addToOrder(item: object): void {
    this.firestore.collection(`orders-${this.order + 1}`).add(item);
  }

  public checkOutOrder(): void {
    this.order = this.order + 1;
  }

  public async cancelOrder(): Promise<any> {
    this.itemDoc = this.firestore.collection(`orders-${this.order + 1}`);
    const qry: firebase.firestore.QuerySnapshot = await this.firestore.collection(`orders-${this.order + 1}`).ref.get();
    qry.forEach(doc => doc.ref.delete());
  }

  public removeToOrder(item: object): void {

  }
}
