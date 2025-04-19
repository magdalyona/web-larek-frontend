import { Api, ApiListResponse} from "./base/api";
import { IOrder, IOrderResult, IProduct } from "../types";

// Интерфейс для работы с API   
export interface ILarekApi {
  readonly cdn: string;

  getProductList: () => Promise<IProduct[]>;
  getProduct: (id: string) => Promise<IProduct>;
  orderDataProducts: (order: IOrder) => Promise<IOrderResult>;
}

// Класс для работы с API   
export class LarekApi extends Api implements ILarekApi {
  readonly cdn: string;

  constructor(cdn: string, baseUrl: string, options?: RequestInit) {
    super(baseUrl, options)
    this.cdn = cdn;
  }

  // Получение списка продуктов
  getProductList(): Promise<IProduct[]> {
		return this.get('/product').then((data: ApiListResponse<IProduct>) =>
			data.items.map((item) => ({
			  ...item,
				image: this.cdn + item.image,
			}))
		);
	}

    // Получение продукта по id
  getProduct(id: string): Promise<IProduct> {
		return this.get(`/product/${id}`).then((item: IProduct) => ({
			...item,
			image: this.cdn + item.image,
		}));
	}

    // Отправка заказа
  orderDataProducts(order: IOrder): Promise<IOrderResult> {
    return this.post('/order', order).then((data: IOrderResult) => data);
  }
}
