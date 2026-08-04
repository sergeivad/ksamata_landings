# sustavy-nr-a — копия лендинга суставов под канал ВК NR

Дата: 2026-08-04

## Задача

Отдельная посадочная для трафика ВК от подрядчика NR, чтобы заявки этого канала
отделялись от инхаусовых на уровне GetCourse-виджета, а не только по UTM.

## Решение

Побайтовая копия `sustavy-inhouse-a` (вёрстка, стили, ассеты, тесты) с четырьмя отличиями:

| Что | inhouse | nr |
|---|---|---|
| папка / `package.json → name` | `sustavy-inhouse-a` | `sustavy-nr-a` |
| `vite.config.js → base` | `/inhouse/sustavy/a/` | `/nr/sustavy/a/` |
| `hero.js → gcWidgetId` | `1636670` | `1638481` |
| `hero.js → gcWidgetScriptId`, `main.js` фолбэк | `6f6a484d…` | `d7eadd017d92dbf286f77da8102c37dceaa3cda9` |

Хост виджета не хардкодится: `gc.${getRootDomain()}` → на `land.ksamata.ru` даёт
`gc.ksamata.ru`. Это соответствует правилу «домен виджета обязан совпадать с доменом
лендинга» и совпадает с тегом, выданным заказчиком.

`tests/hero.test.js` содержит id виджета в трёх ассертах — они обновлены вместе с кодом.
Тест здесь работает как страховка от расхождения кода и разметки канала.

## Аналитика

Счётчик Яндекс.Метрики и пиксель Top.Mail.Ru **не проставлены** — под канал заводятся
отдельные от инхауса (`111156061` / `3783693`), id ожидаются от заказчика. В `index.html`
на их месте стоит TODO. Поставить до старта открутки, иначе трафик пойдёт без статистики.

## Деплой

Dokploy, проект Landings, environment `production` (`r32FsmBy31z__FdAQ-cWV`):

- application `sustavy-nr-a` (`3lxyPnXtZu_hLVJ9s8Dp6`)
- source: github `sergeivad/ksamata_landings`, branch `main`, buildPath `/sustavy-nr-a`,
  watchPaths `sustavy-nr-a/**`, trigger `push`
- build: nixpacks, publishDirectory `dist`, env `NIXPACKS_NODE_VERSION=22`
- домен: `land.ksamata.ru` + path `/nr/sustavy/a`, port 80, https letsencrypt, stripPath

`base` абсолютный, поэтому traefik-редирект no-slash → slash (нужный `sustavy-rsya-a`
с его относительным `base: './'`) здесь не требуется.
