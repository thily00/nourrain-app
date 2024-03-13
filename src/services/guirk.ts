import axiosRequest from "@/services/axiosRequest";
import {AxiosResponse} from "axios";
import {CreateCheckout, GuirkPricingItem} from "@/types/api";

export function getAllGuirkPricingItems(): Promise<AxiosResponse<GuirkPricingItem[]>> {
  return axiosRequest.get('/guirk/all');
}

export function createCheckout(guirkPricingItemId: number): Promise<AxiosResponse<CreateCheckout>> {
  return axiosRequest.post('/guirk/create-checkout', { id: guirkPricingItemId });
}

export function add (id: number){
  return axiosRequest({ method: 'PATCH', url: `/nourrain/increment?id=${id}` })
}