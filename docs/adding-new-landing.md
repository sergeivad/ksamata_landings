# Как добавить новый лендинг

## Общая схема

Все лендинги хранятся в одном репозитории: **sergeivad/ksamata_landings**

Каждый лендинг — отдельная папка в корне репозитория. Каждая папка — самостоятельный Vite-проект со своим `package.json`, `vite.config.js` и т.д.

```
ksamata_landings/
  tirol-rsya-a/
  tirol-rsya-b/
  новый-лендинг/
```

## Правило нейминга папок

Формат: `{проект}-{канал}-{вариант}`

Примеры:
- `tirol-rsya-a` — проект Tirol, канал РСЯ, вариант A
- `tirol-rsya-b` — проект Tirol, канал РСЯ, вариант B
- `zkt-search-a` — проект ЗКТ, канал поиск, вариант A

Только латиница, строчные буквы, дефис как разделитель.

## Шаги: создание нового лендинга

### 1. Создать папку в репозитории

```bash
cd ksamata_landings
mkdir название-лендинга
cd название-лендинга
```

### 2. Инициализировать проект

```bash
npm init -y
npm install --save-dev vite
```

Отредактировать `package.json`:
```json
{
  "name": "название-лендинга",
  "version": "1.0.0",
  "type": "module",
  "engines": { "node": "22" },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### 3. Настроить vite.config.js

Создать `vite.config.js` с нужным `base` путём. Этот путь должен совпадать с тем, который будет указан в домене Dokploy:

```js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/путь/к/лендингу/',
});
```

Например, если лендинг будет доступен по адресу `land.ksamata.ru/rsya/zkt/a`, то:
```js
base: '/rsya/zkt/a/',
```

### 4. Создать файлы лендинга

Минимальная структура:
```
название-лендинга/
  index.html
  vite.config.js
  package.json
  src/
    style.css
    main.js
  public/
    (картинки и статика)
```

### 5. Проверить локально

```bash
npm run dev      # запустить dev-сервер
npm run build    # собрать для продакшена
npm run preview  # проверить собранную версию
```

### 6. Запушить в репозиторий

```bash
cd ..  # вернуться в корень монорепо
git add название-лендинга/
git commit -m "feat: add название-лендинга landing"
git push
```

## Шаги: подключение в Dokploy

### 1. Создать новое приложение (Application)

- Зайти в Dokploy: https://panel.ksamata.ru
- Открыть проект **Landings**
- Нажать **Create Service** → **Application**
- Назвать по имени папки (например, `zkt-rsya-a`)

### 2. Настроить Source

- **Source Type:** GitHub
- **Repository:** `ksamata_landings`
- **Branch:** `main`
- **Build Path:** `/название-лендинга` (с косой чертой в начале)

### 3. Настроить Build

- **Build Type:** Nixpacks
- **Publish Directory:** `dist`

### 4. Настроить Environment Variables (если нужно)

- Добавить `NIXPACKS_NODE_VERSION=22` (если Dokploy не подхватывает из `engines`)

### 5. Настроить домен

- Перейти в **Domains**
- Добавить домен:
  - **Host:** `land.ksamata.ru`
  - **Path:** `/путь/к/лендингу` (например, `/rsya/zkt/a`)
  - **HTTPS:** включить
  - **Certificate:** Let's Encrypt
  - **Strip Path:** включить (важно!)
  - **Port:** 80

### 6. Настроить Watch Paths

- Перейти в **Advanced** → **Watch Paths**
- Добавить: `название-лендинга/**`
- Это гарантирует, что деплой запустится только при изменениях в папке этого лендинга

### 7. Задеплоить

- Нажать **Deploy** или сделать пуш в папку лендинга — автодеплой сработает автоматически

### 8. Проверить

- Открыть `https://land.ksamata.ru/путь/к/лендингу/` в браузере
- Убедиться, что страница загружается корректно, стили и скрипты на месте

## Частые проблемы

**Страница открывается, но без стилей/скриптов:**
Проверить, что `base` в `vite.config.js` совпадает с `path` в настройках домена Dokploy. Оба должны заканчиваться на `/`.

**Деплой не запускается при пуше:**
Проверить, что `Watch Paths` настроен правильно (формат: `название-папки/**`).

**Ошибка сборки:**
Проверить, что `engines.node` в `package.json` указывает на `"22"`, и/или добавить env-переменную `NIXPACKS_NODE_VERSION=22`.
