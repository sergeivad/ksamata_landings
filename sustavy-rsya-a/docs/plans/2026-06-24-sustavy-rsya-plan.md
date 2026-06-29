# Sustavy RSYA Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Создать новый лендинг `sustavy_rsya` (восстановление суставов и позвоночника, спикер Данила Сусак) как копию шаблона `tirol_rsya` с зелёной палитрой, контентом по ТЗ и двумя новыми секциями.

**Architecture:** Vite-проект. `index.html` (мета/Метрика) + `src/main.js` (JS: карусель, попап, аккордеон) + `src/hero.js` (рендер секций строками) + `src/styles.css` (стили, CSS-переменные) + `tests/hero.test.js` (vitest/jsdom). Виджет GetCourse (inline + popup) с плейсхолдер-ID.

**Tech Stack:** Vite 8, vitest 4, jsdom, vanilla JS, чистый CSS.

## Global Constraints

- Базовая папка нового проекта: `/Users/sergeielkin/dev/ksamata/Ksamata/Lends/sustavy_rsya` (далее — «корень проекта»). Все пути ниже — относительно корня проекта, если не указано иное.
- Vite `base`: `/rsya/sustavy/a/`
- `package.json` name: `sustavy_rsya`
- Node 22 (`.nvmrc`, `engines`)
- GetCourse/Метрика ID — плейсхолдеры с пометкой `TODO` (заказчик даст позже). НЕ выдумывать реальные ID.
- Юр-данные (footer) сохранить как в шаблоне: ООО «КСАМАТА», ИНН 9709073598, КПП 770901001, ОГРН 1217700369358, адрес, support@ksamata.ru.
- Язык контента — русский, тексты — точно по ТЗ/исходнику.
- Палитра — зелёная (шалфейно-зелёные акценты, зелёные CTA).
- Каждая задача завершается `npm run build` (или тестами) без ошибок. Коммит — в локальный git нового проекта.

---

### Task 1: Создать копию проекта и переконфигурировать

**Files:**
- Create (copy): весь `tirol_rsya/` → `sustavy_rsya/` (без `.git`, `node_modules`, скриншотов `.codex-*.png`)
- Modify: `vite.config.js`, `package.json`, `index.html`
- Delete: `public/assets/*` (старые ассеты щитовидки), `docs/plans/*` кроме новых sustavy-доков

- [ ] **Step 1: Скопировать проект**

```bash
cd /Users/sergeielkin/dev/ksamata/Ksamata/Lends
rsync -a --exclude='.git' --exclude='node_modules' --exclude='.codex-*.png' --exclude='.DS_Store' tirol_rsya/ sustavy_rsya/
cd sustavy_rsya
rm -f .codex-*.png
```

- [ ] **Step 2: Переконфигурировать vite.config.js**

Заменить строку `base: '/rsya/tirol/a/',` на `base: '/rsya/sustavy/a/',`.

- [ ] **Step 3: Переконфигурировать package.json**

Заменить `"name": "tirol_rsya"` → `"name": "sustavy_rsya"`, `"description": ...` → `"description": "Landing page for Sustavy RSYA campaign"`.

- [ ] **Step 4: Очистить старые ассеты и планы**

```bash
cd /Users/sergeielkin/dev/ksamata/Ksamata/Lends/sustavy_rsya
rm -f public/assets/*
rm -f docs/plans/2026-04-*.md docs/plans/2026-06-24-sustavy-rsya-design.md docs/plans/2026-06-24-sustavy-rsya-plan.md 2>/dev/null || true
```
Затем скопировать актуальные дизайн+план в новый проект:
```bash
cp ../tirol_rsya/docs/plans/2026-06-24-sustavy-rsya-design.md docs/plans/
cp ../tirol_rsya/docs/plans/2026-06-24-sustavy-rsya-plan.md docs/plans/
```

- [ ] **Step 5: git init + первый коммит**

```bash
cd /Users/sergeielkin/dev/ksamata/Ksamata/Lends/sustavy_rsya
git init
git add -A
git commit -m "chore: scaffold sustavy_rsya from tirol_rsya template"
```
Expected: коммит создан, рабочее дерево чистое.

---

### Task 2: Скачать ассеты с исходника и из ТЗ

**Files:**
- Create: `public/assets/*.png|jpg` (изображения)
- Reference: ТЗ-картинки уже распакованы в `/tmp/tz_unpacked/word/media/image1..9.png`

- [ ] **Step 1: Получить полноразмерные URL картинок исходника**

Запросить HTML `https://t.sustavy-spina.ru/spb` и собрать полные (без `-/resize/20x/`) URL `static.tildacdn.com` для: фото спикера (Данила Сусак), карточек симптомов/результатов (если есть), отзывов, рендеров подарков. Сохранить список в заметку.

- [ ] **Step 2: Скачать изображения исходника**

```bash
cd /Users/sergeielkin/dev/ksamata/Ksamata/Lends/sustavy_rsya/public/assets
# для каждого собранного URL:
curl -fsSL -o speaker-danila.jpg "<full tilda url>"
# ... остальные
```
Имена файлов — осмысленные kebab-case (`speaker-danila.jpg`, `gift-checklist.png`, `gift-videocourse.png`, `review-1.png`, `reason-1.png`, `reason-2.png` и т.д.).

- [ ] **Step 3: Скопировать картинки из ТЗ**

```bash
cd /Users/sergeielkin/dev/ksamata/Ksamata/Lends/sustavy_rsya/public/assets
cp /tmp/tz_unpacked/word/media/image1.png tz-gifts-pair.png
cp /tmp/tz_unpacked/word/media/image2.png tz-gifts-boxes.png
cp /tmp/tz_unpacked/word/media/image4.png tz-speaker-bio.png
cp /tmp/tz_unpacked/word/media/image5.png tz-speaker-pose.png
cp /tmp/tz_unpacked/word/media/image6.png tz-review.png
cp /tmp/tz_unpacked/word/media/image7.png tz-speaker-card.png
cp /tmp/tz_unpacked/word/media/image8.png tz-two-reasons.png
```
(image3 — аккордеон, image9 — форма; это эталоны вёрстки, не нужны как файлы.)

- [ ] **Step 4: Проверить и закоммитить**

```bash
cd /Users/sergeielkin/dev/ksamata/Ksamata/Lends/sustavy_rsya
ls -la public/assets/
git add -A && git commit -m "assets: add sustavy/spine images from source and TZ"
```
Expected: файлы на месте, ненулевого размера.

**Примечание:** если для карточек симптомов/результатов на исходнике подходящих фото нет — оставить эти карточки текстовыми (по ТЗ), фото не обязательны.

---

### Task 3: Зелёная палитра (styles.css)

**Files:**
- Modify: `src/styles.css`

- [ ] **Step 1: Найти цветовые токены**

В `src/styles.css` найти определения акцентных/CTA цветов (берри/красные) — переменные в `:root` и/или хардкод hex в кнопках, бейджах, рамках, заголовках.

- [ ] **Step 2: Перекрасить в зелёную гамму**

Заменить акцент на шалфейно-зелёный, CTA — на зелёный градиент. Рекомендуемые значения:
- `--accent` / основной зелёный: `#5f8f4e`
- тёмный зелёный (заголовки/лейблы): `#3f6b34`
- CTA-градиент: `linear-gradient(180deg, #7fae62 0%, #5f8f4e 100%)`
- мягкий фон-свечение: зелёные полупрозрачные тона вместо розовых
Сохранить тёплый светлый фон страницы. Текст заголовков оставить тёмным для читабельности.

- [ ] **Step 3: Проверить сборку**

```bash
cd /Users/sergeielkin/dev/ksamata/Ksamata/Lends/sustavy_rsya
npm install
npm run build
```
Expected: build OK.

- [ ] **Step 4: Закоммитить**

```bash
git add src/styles.css && git commit -m "style: switch palette to green (sustavy theme)"
```

---

### Task 4: Hero (БЛОК 1)

**Files:**
- Modify: `src/hero.js` (константы `conditions`, `actions`, `gifts`, функция `renderHero` — eyebrow/title/lead)

**Interfaces:**
- Produces: `renderHero()` возвращает HTML, содержащий новые тексты hero.

- [ ] **Step 1: Обновить тексты hero**

В `renderHero`:
- eyebrow: `Бесплатная онлайн-программа по восстановлению здоровья суставов и позвоночника`
- title (h1): `Ищу 4-х женщин и мужчин, которые устали от болей в суставах, скованности в спине, прострелов в пояснице и ограничений в движении`
- lead: `За 5 дней разберём причины болей и пути восстановления без таблеток и операций.`
- Заголовки панелей: `Курс именно для тех, кто:` (вместо «Какие условия?») и `Что нужно сделать?` (вместо «Что делать?»)

- [ ] **Step 2: Обновить списки**

```js
const conditions = [
  'Хочет вернуть подвижность и избавиться от хронической боли в суставах и позвоночнике.',
  'Устал ходить по врачам и пить таблетки, а результата всё нет.',
  'Ищет способ восстановиться без уколов, мазей и операций.',
];

const actions = [
  'Зарегистрироваться на бесплатный 5-дневный онлайн-курс с Данилой Сусаком.',
  'Ознакомиться с методами восстановления суставов и позвоночника.',
  'Получить пошаговый план восстановления без лекарств.',
];

const gifts = [
  'Чек-лист «Как выбрать правильную обувь для здоровья суставов».',
  'Гид/Видеокурс «Секреты сохранения здоровья суставов и спины при уборке и готовке дома».',
];
```
Заголовок блока подарков: `Регистрируйтесь прямо сейчас и заберите подарки`. Текст CTA-кнопки hero: `Зарегистрироваться` (оставить).

- [ ] **Step 3: Сборка**

Run: `npm run build` — Expected: OK.

- [ ] **Step 4: Commit**

```bash
git add src/hero.js && git commit -m "feat(hero): block 1 content for sustavy"
```

---

### Task 5: Course-offer (БЛОК 2)

**Files:**
- Modify: `src/hero.js` (`renderSecondScreen`, константа `doctorImageUrl`)

- [ ] **Step 1: Обновить контент секции**

В `renderSecondScreen`:
- chip: `Бесплатный 5-дневный онлайн-курс` / `· Живые эфиры`
- title: `ДВИЖЕНИЕ` / `БЕЗ БОЛИ И ОГРАНИЧЕНИЙ`
- text: `Система быстрого восстановления суставов и позвоночника` + строка `Без мазей · Без уколов · Без лекарств и операций · Дома · Даже в 70–80 лет`
- gift-блок: `Получите ДВА ПОДАРКА сразу после регистрации!` (оставить смысл)
- price-card: label `Участие в 5-дневном курсе`, old `3 000 ₽`, new `БЕСПЛАТНО`
- кнопка: `Стать участником бесплатно`
- `doctorImageUrl` → фото Данилы (`tz-speaker-card.png` или скачанное `speaker-danila.jpg`)

- [ ] **Step 2: Сборка** — Run: `npm run build` — Expected: OK.

- [ ] **Step 3: Commit**

```bash
git add src/hero.js && git commit -m "feat(course-offer): block 2 content for sustavy"
```

---

### Task 6: Speaker-intro — Данила Сусак (БЛОК 3, часть 1)

**Files:**
- Modify: `src/hero.js` (`renderSpeakerScreen`, `speakerFacts`, `speakerPortraitUrl`)

- [ ] **Step 1: Обновить данные спикера**

```js
const speakerFacts = [
  'Сертифицированный инструктор оздоровительной гимнастики цигун (Яншен цигун)',
  'Автор и основатель оздоровительного центра «Ksamata»',
  'Методист-разработчик эффективных программ восстановления и реабилитации для лиц пожилого возраста',
  'Сертифицированный специалист остеопатии',
  'Приглашённый эксперт на телепередачи про здоровье',
];
```
В `renderSpeakerScreen`: title `Позвольте представиться`; badge name `Данила Сусак,`; badge note `Чемпион мира по оздоровительному цигун`; alt портрета `Данила Сусак`; `speakerPortraitUrl` → `tz-speaker-pose.png` (или `speaker-danila.jpg`).

- [ ] **Step 2: Сборка** — Run: `npm run build` — Expected: OK.

- [ ] **Step 3: Commit**

```bash
git add src/hero.js && git commit -m "feat(speaker): Danila Susak intro (block 3.1)"
```

---

### Task 7: Symptom-grid (БЛОК 3, часть 2)

**Files:**
- Modify: `src/hero.js` (`symptomCards`, `renderSymptomGridScreen` — заголовок/CTA)

- [ ] **Step 1: Обновить заголовок и CTA секции**

В `renderSymptomGridScreen`: заголовок `За 10 лет я помог более 1 000 000 мужчин и женщин, которые устали от…`; текст CTA `Регистрируйтесь на курс прямо сейчас и получите возможность вернуть лёгкость движения и жизнь без боли`; кнопка `Получить доступ бесплатно`.

- [ ] **Step 2: Обновить карточки (6 проблем)**

```js
const symptomCards = [
  { image: asset('<photo or placeholder>'), text: 'Болей в коленях и скованности по утрам' },
  { image: asset('<...>'), text: 'Прострелов и боли в пояснице' },
  { image: asset('<...>'), text: 'Болей в плечах и шее' },
  { image: asset('<...>'), text: 'Болей при ходьбе в тазобедренных суставах' },
  { image: asset('<...>'), text: 'Хронической ломоты и скованности в движении' },
  { image: asset('<...>'), text: 'Бесконечных врачей, уколов и таблеток без результата' },
];
```
Если фото нет — убрать `image`/`<img>` из `renderSymptomCards` и сделать текстовые карточки (заголовок + текст), сетка 3×2.

- [ ] **Step 3: Сборка** — Run: `npm run build` — Expected: OK.

- [ ] **Step 4: Commit**

```bash
git add src/hero.js && git commit -m "feat(symptoms): block 3.2 problems grid"
```

---

### Task 8: Benefits-grid (БЛОК 4)

**Files:**
- Modify: `src/hero.js` (`benefitCards`, `renderBenefitsGridScreen`)

- [ ] **Step 1: Обновить заголовок и CTA**

Заголовок: `На программе подробно разберём, как восстановить суставы и позвоночник, чтобы вы могли:`; текст CTA `Регистрируйтесь прямо сейчас, получите пошаговую методику восстановления суставов и позвоночника БЕЗ ЛЕКАРСТВ`; кнопка `Получить доступ бесплатно`.

- [ ] **Step 2: Обновить карточки (6 результатов)**

```js
const benefitCards = [
  { image: asset('<...>'), text: 'Вставать утром без боли и не думать, как встать с кровати' },
  { image: asset('<...>'), text: 'Легко надевать носки, завязывать шнурки и без страха поднимать с пола игрушки внуков' },
  { image: asset('<...>'), text: 'С удовольствием пойти на прогулку или в магазин без мыслей о расстоянии' },
  { image: asset('<...>'), text: 'Спать на любом боку и просыпаться отдохнувшим и полным сил' },
  { image: asset('<...>'), text: 'Спокойно доставать самые высокие полки в шкафу без боли в плечах' },
  { image: asset('<...>'), text: 'Жить без таблеток и уколов — помогать своему телу быть здоровым даже через 10–20 лет' },
];
```
Та же логика по фото/тексту, что в Task 7.

- [ ] **Step 3: Сборка** — Run: `npm run build` — Expected: OK.

- [ ] **Step 4: Commit**

```bash
git add src/hero.js && git commit -m "feat(benefits): block 4 results grid"
```

---

### Task 9: Reviews (БЛОК 5)

**Files:**
- Modify: `src/hero.js` (`reviewImages`, `renderReviewsShowcase` — заголовок)

- [ ] **Step 1: Обновить заголовок и список отзывов**

Заголовок: `Смотрите, как может измениться ваша жизнь после программы по естественному восстановлению суставов и позвоночника`. `reviewImages` → массив скачанных отзывов (`review-1.png`, …) и/или `tz-review.png`. Сохранить минимум 1 изображение, чтобы карусель работала.

- [ ] **Step 2: Сборка** — Run: `npm run build` — Expected: OK.

- [ ] **Step 3: Commit**

```bash
git add src/hero.js && git commit -m "feat(reviews): block 5 testimonials"
```

---

### Task 10: Registration-gifts showcase (БЛОК 6)

**Files:**
- Modify: `src/hero.js` (`renderRegistrationGiftsSection` или новый `renderGiftsShowcaseSection`)

**Решение:** разделяем подарки (popup-CTA) и финальную форму. БЛОК 6 — showcase подарков с кнопкой-попапом; инлайн-виджет переносится в БЛОК 9 (Task 13).

- [ ] **Step 1: Переработать секцию подарков**

Сделать секцию «Регистрируйтесь на бесплатный курс прямо сейчас и заберите подарки» с двумя подарками (визуал из `tz-gifts-boxes.png`):
- `ПОДАРОК 1 — ЧЕК-ЛИСТ «Как выбрать правильную обувь для здоровья суставов»`
- `ПОДАРОК 2 — Гид/Видеокурс «Секреты сохранения здоровья суставов и спины при уборке и готовке дома»`
Убрать инлайн `data-gc-inline-widget` из этой секции. Добавить кнопку-попап `Забрать подарки` с `data-gc-popup-trigger` и `data-gc-script`.

- [ ] **Step 2: Сборка** — Run: `npm run build` — Expected: OK.

- [ ] **Step 3: Commit**

```bash
git add src/hero.js && git commit -m "feat(gifts): block 6 gifts showcase with popup CTA"
```

---

### Task 11: Program accordion (БЛОК 7) — новая секция

**Files:**
- Modify: `src/hero.js` (новая `renderProgramSection`, массив `programDays`), `src/main.js` (логика аккордеона), `src/styles.css` (стили), `tests/hero.test.js`

**Interfaces:**
- Produces: HTML с `data-program-accordion`, строки `data-program-item` с кнопкой `data-program-toggle` (`aria-expanded`) и панелью `data-program-panel`. `renderProgramDays(items)` рендерит строки.

- [ ] **Step 1: Написать падающий тест**

В `tests/hero.test.js`:
```js
test('program section renders 5 days with toggles', () => {
  document.body.innerHTML = renderHero();
  const items = document.querySelectorAll('[data-program-item]');
  expect(items.length).toBe(5);
  expect(document.body.innerHTML).toContain('Программа бесплатного оздоровительного онлайн-курса');
  const firstToggle = document.querySelector('[data-program-toggle]');
  expect(firstToggle.getAttribute('aria-expanded')).toBe('false');
});
```

- [ ] **Step 2: Запустить тест — убедиться, что падает**

Run: `npm test -- hero.test.js`
Expected: FAIL (нет `[data-program-item]`).

- [ ] **Step 3: Реализовать секцию в hero.js**

Добавить массив:
```js
const programDays = [
  { day: 'ДЕНЬ 1', theme: 'Фундамент и главный секрет здоровья суставов и позвоночника', points: [
    'Причины артрозов в пожилом возрасте',
    'Методы восстановления при болях в спине после 50 лет',
    'Четыре шага к устранению боли',
    '10 ошибок, ведущих к проблемам с суставами и позвоночником',
    'Как избежать операции',
  ] },
  { day: 'ДЕНЬ 2', theme: 'Суставы без болей — пошаговый план от проблем в суставах (колени, таз, плечи, стопы)', points: [
    'Как запустить естественное восстановление суставов',
    'Возвращение гибкости после 60',
    'Что делать при подагре',
    'Как остановить разрушение суставов',
    '5 мифов, мешающих восстановлению',
  ] },
  { day: 'ДЕНЬ 3', theme: 'Позвоночник без болей — пошаговый план от болей и проблем в позвоночнике', points: [
    'Как защитить позвоночник',
    'Лечение грыжи без операции',
    'Методы устранения протрузий',
    'Что делать при сколиозе',
    'Ошибки, ведущие к заболеваниям',
  ] },
  { day: 'ДЕНЬ 4', theme: 'Экстренная помощь — методы быстрого снятия боли в суставах и спине', points: [
    'Шесть факторов воспалительной боли',
    'Снятие боли без лекарств',
    'Протоколы для шеи и плеч',
    'Универсальные решения при боли в спине',
    'Опасность бесконтрольного приёма лекарств',
  ] },
  { day: 'ДЕНЬ 5', theme: 'Пошаговый план восстановления после травм и операций', points: [
    'Методика восстановления при хронических травмах',
    'Возвращение подвижности после операций',
    'Коррекция осанки',
    'Ускорение движения после операции',
    'Восстановление чувствительности конечностей',
  ] },
];

const renderProgramDays = (items) =>
  items
    .map(
      (item, index) => `
        <div class="program__item" data-program-item>
          <button
            class="program__head"
            type="button"
            data-program-toggle
            aria-expanded="false"
            aria-controls="program-panel-${index}"
          >
            <span class="program__day">${item.day}.</span>
            <span class="program__theme">ТЕМА ДНЯ: «${item.theme}»</span>
            <span class="program__icon" aria-hidden="true">+</span>
          </button>
          <div class="program__panel" id="program-panel-${index}" data-program-panel hidden>
            <ul class="program__points">
              ${item.points.map((p) => `<li>${p}</li>`).join('')}
            </ul>
          </div>
        </div>
      `,
    )
    .join('');

function renderProgramSection() {
  return `
    <section class="program" aria-labelledby="program-title">
      <div class="program__shell">
        <h2 class="program__title" id="program-title">Программа бесплатного оздоровительного онлайн-курса</h2>
        <div class="program__list" data-program-accordion>
          ${renderProgramDays(programDays)}
        </div>
        <div class="program__cta">
          <a class="program__button" href="#" data-gc-script="${gcScriptUrl}" data-gc-widget="pending" data-gc-popup-trigger>
            Получить доступ бесплатно
          </a>
        </div>
      </div>
    </section>
  `;
}
```
Вставить `${renderProgramSection()}` в `renderHero` после секции подарков (БЛОК 6), перед two-reasons.

- [ ] **Step 4: Запустить тест — убедиться, что проходит**

Run: `npm test -- hero.test.js` — Expected: PASS.

- [ ] **Step 5: Добавить логику аккордеона в main.js**

В конец `src/main.js` (перед/после загрузки виджета):
```js
const programToggles = app.querySelectorAll('[data-program-toggle]');
programToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    const panel = toggle.parentElement.querySelector('[data-program-panel]');
    toggle.setAttribute('aria-expanded', String(!expanded));
    if (panel) {
      if (expanded) {
        panel.setAttribute('hidden', '');
      } else {
        panel.removeAttribute('hidden');
      }
    }
    toggle.closest('[data-program-item]')?.classList.toggle('is-open', !expanded);
  });
});
```

- [ ] **Step 6: Стилизовать аккордеон (styles.css)**

Добавить стили `.program`, `.program__item` (белая карточка, рамка, скругление), `.program__head` (flex, кнопка), `.program__day` (зелёный, жирный), `.program__theme`, `.program__icon` (круглая кнопка «+», поворот в «×»/«–» при `.is-open`), `.program__panel`, `.program__points`. Адаптив: на mobile уменьшить шрифты/отступы.

- [ ] **Step 7: Сборка + тесты**

Run: `npm run build && npm test` — Expected: build OK, тесты PASS.

- [ ] **Step 8: Commit**

```bash
git add src/hero.js src/main.js src/styles.css tests/hero.test.js
git commit -m "feat(program): block 7 course program accordion"
```

---

### Task 12: Two-reasons (БЛОК 8) — новая секция

**Files:**
- Modify: `src/hero.js` (новая `renderTwoReasonsSection`), `src/styles.css`, `tests/hero.test.js`

- [ ] **Step 1: Написать падающий тест**

```js
test('two-reasons section renders two cards', () => {
  document.body.innerHTML = renderHero();
  expect(document.body.innerHTML).toContain('2 причины');
  const cards = document.querySelectorAll('[data-reason-card]');
  expect(cards.length).toBe(2);
});
```
Run: `npm test -- hero.test.js` — Expected: FAIL.

- [ ] **Step 2: Реализовать секцию**

```js
const reasons = [
  { image: asset('reason-1.png'), text: 'Упражнения в видеокурсах не требуют специальных приспособлений и делаются в домашних условиях' },
  { image: asset('reason-2.png'), text: 'Упражнения доступны даже в 70–80 лет. Получите возможность много двигаться и не мучиться от болей в коленях и позвоночнике' },
];

function renderTwoReasonsSection() {
  return `
    <section class="two-reasons" aria-labelledby="two-reasons-title">
      <div class="two-reasons__shell">
        <h2 class="two-reasons__title" id="two-reasons-title">2 причины, почему этот бесплатный онлайн-курс доступен каждому</h2>
        <div class="two-reasons__grid">
          ${reasons
            .map(
              (r) => `
                <article class="two-reasons__card" data-reason-card>
                  <div class="two-reasons__media"><img src="${r.image}" alt="" /></div>
                  <p class="two-reasons__text">${r.text}</p>
                </article>
              `,
            )
            .join('')}
        </div>
        <div class="two-reasons__cta">
          <a class="two-reasons__button" href="#" data-gc-script="${gcScriptUrl}" data-gc-widget="pending" data-gc-popup-trigger>
            Стать участником за 0 руб
          </a>
        </div>
      </div>
    </section>
  `;
}
```
Вставить `${renderTwoReasonsSection()}` в `renderHero` после program, перед финальной регистрацией. Если файлов `reason-1/2.png` нет — использовать кадры из `tz-two-reasons.png` или нейтральные плейсхолдеры.

Run: `npm test -- hero.test.js` — Expected: PASS.

- [ ] **Step 3: Стили**

`.two-reasons`, `.two-reasons__grid` (2 колонки desktop/tablet, стек mobile), `.two-reasons__media` (круглое фото), `.two-reasons__text`, центрированная `.two-reasons__button`.

- [ ] **Step 4: Сборка + тесты** — Run: `npm run build && npm test` — Expected: OK/PASS.

- [ ] **Step 5: Commit**

```bash
git add src/hero.js src/styles.css tests/hero.test.js
git commit -m "feat(two-reasons): block 8 accessibility reasons section"
```

---

### Task 13: Final registration (БЛОК 9) + порядок секций

**Files:**
- Modify: `src/hero.js` (`renderHero` — порядок секций; финальная секция с инлайн-виджетом)

- [ ] **Step 1: Финальная секция регистрации**

Оставить/перенести инлайн GetCourse-виджет в финальную секцию `final-registration`: заголовок `…остался 1 шаг`, под ним `data-gc-inline-widget` (как в исходном `renderRegistrationGiftsSection`, но только виджет, без подарочных карточек — карточки уже в БЛОК 6). Можно переиспользовать существующую разметку виджета.

- [ ] **Step 2: Зафиксировать порядок в renderHero**

Порядок: hero → course-offer → speaker-intro → symptom-grid → benefits-grid → reviews-showcase → registration-gifts (БЛОК 6) → program (БЛОК 7) → two-reasons (БЛОК 8) → final-registration (БЛОК 9) → footer → gc-popup.

- [ ] **Step 3: Сборка + тесты** — Run: `npm run build && npm test` — Expected: OK/PASS.

- [ ] **Step 4: Commit**

```bash
git add src/hero.js && git commit -m "feat(registration): block 9 final inline form + section order"
```

---

### Task 14: index.html — title, мета, плейсхолдер Метрики

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Обновить title/description и Метрику**

- `<title>` → `Движение без боли и ограничений`
- `<meta name="description">` → краткое описание лендинга суставов
- Счётчик Яндекс.Метрики: заменить id `103639274` на плейсхолдер с комментарием `<!-- TODO: заменить на ID Метрики лендинга «суставы» -->` (в `ym(...)`, в `tag.js?id=`, в `<noscript>`). НЕ оставлять чужой рабочий счётчик щитовидки.

- [ ] **Step 2: Пометить GetCourse-плейсхолдеры в hero.js**

Над `gcScriptUrl`/`gcPopupScriptUrl`/`gcWidgetScriptId` добавить комментарий `// TODO: заменить id=1465148 на ID курса «суставы» (GetCourse)`.

- [ ] **Step 3: Сборка** — Run: `npm run build` — Expected: OK.

- [ ] **Step 4: Commit**

```bash
git add index.html src/hero.js && git commit -m "chore: title, meta, TODO placeholders for metrika/getcourse"
```

---

### Task 15: Финальная ревизия тестов и сборки

**Files:**
- Modify: `tests/hero.test.js`

- [ ] **Step 1: Обновить остальные тесты под новый контент**

Пройти по `tests/hero.test.js`: заменить устаревшие ассерты (заголовки щитовидки, имя «Алена Гусева», тексты CTA) на новые (суставы, «Данила Сусак», новые CTA). Сохранить тесты функций `getTomorrowMoscowLabel`, `getRootDomain`, `getFooterLegalLinks`.

- [ ] **Step 2: Прогон всех тестов**

Run: `npm test` — Expected: все PASS.

- [ ] **Step 3: Финальная сборка**

Run: `npm run build` — Expected: OK, без предупреждений о битых ассетах.

- [ ] **Step 4: Визуальная проверка**

Run: `npm run preview`, открыть в браузере, проверить все 9 блоков, зелёную палитру, работу попапа, аккордеона, карусели, адаптив (mobile/desktop).

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "test: update suite for sustavy content; final build verification"
```

---

## Self-Review

**Spec coverage:** БЛОК 1→Task 4; БЛОК 2→Task 5; БЛОК 3→Task 6+7; БЛОК 4→Task 8; БЛОК 5→Task 9; БЛОК 6→Task 10; БЛОК 7→Task 11; БЛОК 8→Task 12; БЛОК 9→Task 13; footer→сохранён (Task 1); палитра→Task 3; ассеты→Task 2; размещение/конфиг→Task 1; интеграции-плейсхолдеры→Task 14; тесты→Task 11,12,15. Все разделы спеки покрыты.

**Placeholders:** GC/Метрика ID — намеренные TODO (по требованию заказчика). `<photo or placeholder>` в карточках — явно описана развилка (фото с исходника или текстовые карточки). Не плейсхолдеры-провалы.

**Type consistency:** `renderProgramSection`/`renderProgramDays`/`programDays`, `renderTwoReasonsSection`/`reasons`, data-атрибуты `data-program-item`/`data-program-toggle`/`data-program-panel`, `data-reason-card` — согласованы между hero.js, main.js и тестами.
