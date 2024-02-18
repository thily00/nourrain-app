export type GuirkPricingItem = {
  id: number;
  amount: number;
  euro_price: number;
};

export type CreateCheckout = {
  client_secret: string;
}
