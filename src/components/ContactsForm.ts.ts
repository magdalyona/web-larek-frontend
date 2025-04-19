import { Form } from "./common/Form";
import { TContactsForm } from "../types";
import { IEvents } from "./base/events";

// Класс для работы с формой контактов          
export class ContactsForm extends Form<TContactsForm>{
  constructor(container: HTMLFormElement, events: IEvents) {
    super(container, events);
  }

  // Установка значения для поля телефон
  set phone(value: string) {
    (this.container.elements.namedItem('phone') as HTMLInputElement).value = value;
  }

  // Установка значения для поля email  
  set email(value: string) {
    (this.container.elements.namedItem('email') as HTMLInputElement).value = value;
  }
}