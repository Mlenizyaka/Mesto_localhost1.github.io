# Локальный сервер для проекта Mesto

V0.0.2

Сервер написан на Express.js

## Чтобы запустить сервер

- команда `npm run start` запускает сервер на `localhost:3000`;
- команда `npm run dev` запускает сервер на `localhost:3000` с хот релоудом;

## API

- Запрос `GET localhost:3000/users` возвращает JSON-список всех пользователей;
- Запрос `GET localhost:3000/cards` возвращает JSON-список всех карточек;
- Запрос `GET localhost:3000/users/userId` возвращает JSON-пользователя;
- Запрос на несуществующий адрес вернет API возвращает `404 статус ответа` и `JSON: { "message": "Запрашиваемый ресурс не найден" }`;
- Запрос несуществующего пользователя вернет `404 статус ответа` и `JSON: { "message": "Нет пользователя с таким id" }`.
