import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    {
      id: '1',
      title: 'Camiseta',
      description: 'Con esta increíble camiseta de la platzi conf colombia llevaras puesto contigo el #NuncaPararDeAprender',
      image: 'assets/img/camiseta.png',
      price: 20000,
      discount: true,
      percentaje: 20,
      images: ['assets/img/hoodie.png', 'assets/img/stickers2.png', 'assets/img/mug.png', 'assets/img/stickers1.png'],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['#80a735', '#327580']
    },
    {
      id: '2',
      title: 'Caqueta',
      description: 'con esta increible cahqueta o hoodie con el logo de platzi aguataras todas tus madrugadas mientras #nuncaParasDeAprender',
      image: 'assets/img/hoodie.png',
      price: 35000,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['#80a735', '#327580']
    },
    {
      id: '3',
      title: 'Mug',
      description: 'Increible mug blanco con el logo de platzi',
      image: 'assets/img/mug.png',
      price: 16000,
      discount: true,
      percentaje: 18,
      sizes: ['U'],
      colors: ['#80a735', '#fff', '#63eaff']
    },
    {
      id: '4',
      title: 'Pin',
      description: 'LLeva a Platzi junto a tu corazon y nunca pares de aprender',
      image: 'assets/img/pin.png',
      price: 5000,
      images: ['assets/img/hoodie.png', 'assets/img/mug.png'],
      sizes: ['U'],
      colors: ['#80a735']
    },
    {
      id: '5',
      title: 'Stickers Logo Platzi',
      description: 'Stickers o pegatin con el logo de Platzi',
      image: 'assets/img/stickers1.png',
      price: 4000,
      discount: true,
      percentaje: 10,
      sizes: ['U'],
      colors: ['#80a735']
    },
    {
      id: '6',
      title: 'Stickers Nunca Pares de Aprender',
      description: 'Stickers o pegatin con el slogan de Nunca Pares de Aprender',
      image: 'assets/img/stickers2.png',
      price: 4000,
      sizes: ['U'],
      colors: ['#80a735']
    },
    {
      id: '7',
      title: 'Camiseta',
      description: 'Camiseta con el logo de platzi',
      image: 'assets/img/camiseta.png',
      price: 20000,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['#80a735', '#327580']
    },
    {
      id: '8',
      title: 'hoodie',
      description: 'Cahqueta o Hoodie con el logo de platzi color azul',
      image: 'assets/img/hoodie.png',
      price: 35000,
      discount: true,
      percentaje: 10,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['#80a735', '#327580']
    },
    {
      id: '9',
      title: 'Mug',
      description: 'Increible mug blanco con el logo de platzi',
      image: 'assets/img/mug.png',
      price: 16000,
      sizes: ['U'],
      colors: ['#fff', '#63eaff']
    },
    {
      id: '10',
      title: 'Pin',
      description: 'LLeva a Platzi junto a tu corazon y nunca pares de aprender',
      image: 'assets/img/pin.png',
      price: 5000,
      discount: true,
      percentaje: 25,
      sizes: ['U'],
      colors: ['#80a735']
    },
    {
      id: '11',
      title: 'Stickers Logo Platzi',
      description: 'Stickers o pegatin con el logo de Platzi',
      image: 'assets/img/stickers1.png',
      price: 4000,
      sizes: ['U'],
      colors: ['#80a735']
    },
    {
      id: '12',
      title: 'Stickers Nunca Pares de Aprender',
      description: 'Stickers o pegatin con el slogan de Nunca Pares de Aprender',
      image: 'assets/img/stickers2.png',
      price: 4000,
      discount: true,
      percentaje: 50,
      sizes: ['U'],
      colors: ['#80a735']
    },
  ];
  constructor() { }

  getAllproducts() {
    return this.products;
  }
  getAllProductsDiscount(){
    return this.products.filter((item) => item.discount);

  }

  getIdProduct(id: string) {
    return this.products.find((item) => item.id === id);
  }
  searchTitleProducts(title: string) {
    console.log(title)
    return this.products.filter((item) => item.title.toLowerCase().includes(title.toLowerCase()));
  }

  createProduct(product: Product) {
    return this.products.push(product);
  }

  updateProduct() {
    /* pendiente por emplementar */
  }
  deleteIdProduct(id: string) {
    return this.products.filter((item) => item.id !== id);
  }

}
