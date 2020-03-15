export class Item {
  itemCode: string;
  name: string;
  cost: number;
  costPerPiece: number;
  sellingPricePerPiece: number;
  netWeight: number;
  quantity: number;
  expiryDate?: Date;
  image?: string;
  description?: string;
  status: boolean;
  barCode?: string;
}
