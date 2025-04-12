

// Интерфейсы для модели данных
export interface IProduct {
	id: string;
  title: string;
	description?: string;
  price: number | null;
  category?: string;
	image?: string;	
}

// Интерфейс для действий компонента 
export interface IActions {
    onClick: (event: MouseEvent) => void;
  }

// Интерфейс для состояния всего приложения
export interface IAppState {
    catalog: IProduct[];
    basket: TBasket;
    preview: string | null;
    order: TOrder;
  
    formErrors: TFormErrors;
  
    setProducts(items:IProduct[]):void;
    addProductBasket(item:IProduct):void;
    deleteProductBasket(item: IProduct): void;
    setPreview(item: IProduct): void;
    checkIdInbasket(item: IProduct): void;
    clearBasket():void;
  
    checkValidAddress():void;
    checkValidContact():void;
    clearInputOrder():void;
    setOrderField(field: keyof TOrder, value: string): void;
    setContactsField(field: keyof TOrder, value: string): void;
  }

// Интерфейс для заказа
export interface IOrder {
    payment: string;
    address: string;
    email: string;
    phone: string;
    total: number;
    items: string[];
  }
  
// Интерфейс для результата заказа
export interface IOrderResult { 
    total: number;
    id: string;
  }

// Тип для ошибок формы
export type TFormErrors = Partial<Record<keyof IOrder, string>>;

// Тип для формы заказа 
export type TOrderForm = Pick<IOrder, 'payment' | 'address'>;

// Тип для формы контактов      
export type TContactsForm = Pick<IOrder, 'email' | 'phone'>;

// Тип для заказа
export type TOrder = Omit<IOrder, 'items' | 'total'>;

// Тип для корзины
export type TBasket = Pick<IOrder, 'items' | 'total'>;