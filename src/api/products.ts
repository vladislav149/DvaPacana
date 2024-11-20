import {MY_PRODUCTS, PRODUCTS} from '@/data'
import type {Product} from '@/types'

const TIME_DELAY = 300

const products = {
  getMyProducts() {
    return new Promise<Product[]>(resolve => {
      setTimeout(() => {
        resolve(MY_PRODUCTS)
      }, TIME_DELAY)
    })
  },
  getProducts() {
    return new Promise<Product[]>(resolve => {
      setTimeout(() => {
        resolve(PRODUCTS)
      }, TIME_DELAY)
    })
  },
}

export default products
