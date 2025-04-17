# TypeScript + Vue.js E-Commerce App

Этот проект разработан с нуля как демонстрация моих навыков во фронтенд-разработке на **Vue 3**, **TypeScript** и **Vite**. Приложение представляет собой простой интернет-магазин с интеграцией с **Ecwid API**, возможностью просмотра категорий и товаров, добавлением товаров в корзину, оформлением заказа и базовой навигацией.

## Демо

Проект задеплоен на GitHub Pages:  
[https://merivardanyan.github.io/TypeScript-and-Vue.js-V2.0/](https://merivardanyan.github.io/TypeScript-and-Vue.js-V2.0/)

## Основной функционал

- Получение категорий и товаров из Ecwid REST API
- Навигация по категориям, отображение описаний и списка товаров
- Добавление товаров в корзину и изменение количества
- Подсчет итогов (количество и общая сумма)
- Оформление заказа и отображение подтверждения
- Чистка корзины
- Локальное хранение корзины (localStorage)
- Работа с Vue Router
- Разделение логики: API, хуки, компоненты

## 🛠 Используемые технологии

- **Vue 3 + Vite**
- **TypeScript**
- **Ecwid API**
- **Vue Router**
- **Composition API**
- **GitHub Pages** (для деплоя)

## Структура проекта

- `src/components` — переиспользуемые компоненты (ProductCard, CartItem и др.)
- `src/composables` — кастомные хуки (useCart, useProducts, useCategories)
- `src/api` — отдельный файл с логикой API-запросов
- `src/pages` — основные страницы приложения
- `src/styles` — глобальные стили

## Установка и запуск

```bash
git clone https://github.com/merivardanyan/TypeScript-and-Vue.js-V2.0.git
cd TypeScript-and-Vue.js-V2.0
npm install
npm run dev
