import { Cart } from '../models/cart.modal';
import {httpClient} from './http';

interface AddCartParams {
    book_id : number;
    quantity: number;
}

export const addCart = async(params : AddCartParams)=>{
    const response = await httpClient.post("/carts",params);
    return response.data;
}

export const fetchCart = async()=>{
    const response = await httpClient.get<Cart[]>("/carts");
    return response.data;
}

export const deleteCart = async(cartId: number)=>{
    const response = await httpClient.delete<Cart[]>(`/carts/${cartId}`);
    console.log(response)
    return response.data;
}