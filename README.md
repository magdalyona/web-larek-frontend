# Проектная работа "Web-ларек" - 

этот интернет-магазин для веб-разработчиков предлагает удобный каталог товаров, корзины и процесс оформления заказа с поэтапной проверкой введенных данных.

## Стек: 

HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/scss/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```

# Архитектура приложения 

Проект построен на основе архитектурного паттерна MVP (Model-View-Presenter), благодаря чему достигается низкая связанность компонентов и возможность легко масштабировать систему.

MVP - это архитектурная модель, которая разделяет приложение на три основных слоя:

- Model (Модель) - отвечает за управление данными и бизнес-логику приложения;

- View (Представление) - отвечает за отображение данных для пользователей;

- Presenter (Представитель) - это промежуточный слой между Model и View, который обрабатывает действия пользователя поступающие из View и обновляя данные в Model, а также отслеживает изменения в Model и своевременно обновляет интерфейс View.


## Базовый код

### Class API

Базовый класс API обеспечивает функциональность для работы сервера (отправка и получение запросов). 

#### Свойства:

    - baseUrl: базовый URL для работы с API.
    - options: объект с настройками для HTTP-запроса.

#### Методы: 

    - handleResponse: обрабатывает ответ от API, преобразует и возвращает его.
    - get: выполняет GET-запрос по указанному URL.
    - post: выполняет POST-запрос по указанному URL.

### Class EventEmitter

Брокер событий используется в presenter для отправления событий и подписки на события, происходящие в системе. Класс используется для связи слоя данных и представления.

#### Свойства:

    - events: хранит события и их подписчиков.

#### Методы: 

    - on() - устанавливает обработчик на указанное событие;
    - off() - удаляет обработчик с указанного события;
    - emit() - инициирует событие с указанными данными;
    - onAll() - устанавливает обработчик для всех событий;
    - offAll() - все обработчики событий срабатывают;
    - trigger() - создает функцию-триггер, которая инициирует указанное событие при вызове;

### Class Component

Абстрактный класс, предоставляющий базовые методы для работы с DOM-элементами и управления их состоянием.

constructor(container: HTMLElement) - контейнер, который является корневым DOM-элементом, в который будет помещен компонент.

#### Методы: 

    - toggleClass(element: HTMLElement, className: string, force?: boolean) - переключает класс элемента;
    - protected setText(element: HTMLElement, value: unknown) - устанавливает текстовое содержимое;
    - setDisabled(element: HTMLElement, state: boolean) - устанавливает состояние блокировки;
    - protected setHidden(element: HTMLElement) - скрывает элемент;
    - protected setVisible(element: HTMLElement) - показывает элемент;
    - protected setImage(element: HTMLImageElement, src: string, alt?: string) - установить изображение с алтернативным текстом;
    - render(data?: Partial): HTMLElement - возвращает DOM-элемент;



## Model (Модели данных) 

### Class LarekApi

### Class AppData

## View (Представления)

### Class Page

### Class Prodeuct

### Class Basket

### Class FormOrder

### Class FormContacts

### Class Modal

### Class Success

### Class Form



## Presenter (Взаимодействие компонентов) 

Код, описывающий взаимодействие представления и данных между собой находится в файле index.ts, выполняющем роль презентера.
Взаимодействие осуществляется за счет событий генерируемых с помощью брокера событий и обработчиков этих событий, описанных в index.ts
В index.ts сначала создаются экземпляры всех необходимых классов, а затем настраивается обработка событий.

## События в приложении

- modal:open - открытие модального окнаж.
- modal:close - закрытие модального окна.
- 


