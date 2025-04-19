import { IProduct, IActions } from "../types";
import { Component } from "./base/Сomponent";
import { ensureElement } from "../utils/utils";
import { categories } from "../utils/constants";


// Класс для работы с продуктом
export class Product extends Component<IProduct> {
  protected _title: HTMLElement;
  protected _description: HTMLElement;
  protected _image: HTMLImageElement;
  protected _price: HTMLElement;
  protected _category: HTMLElement;
  protected _button: HTMLButtonElement;
  protected _indexElement: HTMLElement;

  // Конструктор класса 
  constructor(container: HTMLElement, actions?: IActions) {
    super(container);

		this._title = ensureElement<HTMLElement>('.card__title', container);
		this._price = ensureElement<HTMLImageElement>('.card__price', container);
        this._image = container.querySelector('.card__image');
		this._category = container.querySelector('.card__category');
		this._button = container.querySelector('.card__button');
        this._description = container.querySelector('.card__text');
	    this._indexElement = container.querySelector('.basket__item-index');

    if (actions?.onClick) {
      if (this._button) {
        this._button.addEventListener('click', actions.onClick);
      } else {
        container.addEventListener('click', actions.onClick);
      }
    }
  }
  

  set description(value: string) {
    this.setText(this._description, value);
  }

  set index(value: number) {
     this._indexElement.textContent = (value + 1).toString();
  }

  set id(value: string) {
    this.container.dataset.id = value;
  }

  get id(): string {
    return this.container.dataset.id || '';
  }

  set title(value: string) {
    this.setText(this._title, value);
  }

  get title(): string {
    return this._title.textContent || '';
  }

  set image(value: string) {
    this.setImage(this._image, value, this.title)
  }

  set price(value: string) {
    this.setText(this._price, value ? `${value} синапсов` : 'Бесценно');
    if (this._button) {
      this._button.disabled = !value;
    }
  }

  get price(): string {
    return this._price.textContent || '';
  }

  set category(value: string) {
    this.setText(this._category, value);
    if (this._category) {
      Array.from(this._category.classList).forEach(className => {
        if (className.startsWith('card__category_')) {
          this._category.classList.remove(className);
        }
      });
      const categoryClass = categories.get(value) ? categories.get(value) : 'other';
      this._category.classList.add(`card__category_${categoryClass}`);
    }
  }
  
  get category(): string {
    return this._category.textContent || '';
  }

  set button(value: string) {
    this.setText(this._button, value);
  }
}
