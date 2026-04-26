const DEFAULT_PRICE_GROUPS = [
  {
    id: "body-hardware",
    title: "Аппаратный массаж по телу",
    badge: "Тело",
    items: [
      { name: "Вакуумно-роликовый массаж, LPG", duration: "30 мин", price: "1 200 ₽" },
      { name: "Вакуумно-роликовый массаж, LPG", duration: "40 мин", price: "1 500 ₽" },
      { name: "Вакуумно-роликовый массаж, LPG", duration: "60 мин", price: "2 000 ₽" },
      { name: "Горячий вакуум", duration: "30 мин", price: "1 200 ₽" },
      { name: "Горячий вакуум", duration: "40 мин", price: "1 500 ₽" },
      { name: "Биофатон", duration: "30 мин", price: "900 ₽" },
      { name: "Биофатон", duration: "40 мин", price: "1 200 ₽" },
      { name: "Кавитация (1 зона)", duration: "30 мин", price: "1 200 ₽" },
      { name: "Вибромассаж", duration: "40 мин", price: "1 200 ₽" },
      { name: "RF-лифтинг (1 зона)", duration: "30 мин", price: "1 200 ₽" },
      { name: "Виброкомпрессионный массаж", duration: "40 мин", price: "1 700 ₽" },
      { name: "Виброкомпрессионный массаж", duration: "60 мин", price: "2 500 ₽" },
      { name: "Виброкомпрессионный массаж", duration: "90 мин", price: "3 500 ₽" },
      { name: "Миостимуляция", duration: "30 мин", price: "900 ₽" }
    ]
  },
  {
    id: "face-hardware",
    title: "Аппаратный массаж лица",
    badge: "Лицо",
    items: [
      { name: "Вакуумно-роликовый массаж LPG", duration: "25 мин", price: "1 800 ₽" },
      { name: "Виброкомпрессионный массаж", duration: "25 мин", price: "1 800 ₽" },
      { name: "RF-лифтинг", duration: "35 мин", price: "2 000 ₽" }
    ]
  },
  {
    id: "manual-massage",
    title: "Ручной массаж",
    badge: "Тело и лицо",
    items: [
      { name: "Лицо", duration: "40 мин", price: "1 800 ₽" },
      { name: "Спина", duration: "40 мин", price: "1 300 ₽" },
      { name: "Общий массаж тела", duration: "60 мин", price: "2 200 ₽" },
      { name: "Общий массаж тела", duration: "90 мин", price: "3 200 ₽" },
      { name: "Шейно-воротниковая зона", duration: "30 мин", price: "1 000 ₽" }
    ]
  },
  {
    id: "sugaring-women",
    title: "Депиляция воском / шугаринг",
    badge: "Женский прайс",
    items: [
      { name: "Бикини классика", duration: "20 мин", price: "900 ₽" },
      { name: "Бикини глубокое", duration: "40 мин", price: "1 000 ₽" },
      { name: "Подмышки", duration: "15 мин", price: "300 ₽" },
      { name: "Ноги до колена", duration: "35 мин", price: "900 ₽" },
      { name: "Ноги полностью", duration: "45 мин", price: "1 300 ₽" },
      { name: "Руки до локтя", duration: "30 мин", price: "700 ₽" },
      { name: "Руки полностью", duration: "40 мин", price: "900 ₽" },
      { name: "Усики", duration: "10 мин", price: "300 ₽" },
      { name: "Лицо", duration: "20 мин", price: "500 ₽" },
      { name: "Спина", duration: "40 мин", price: "1 000 ₽" },
      { name: "Живот", duration: "20 мин", price: "500 ₽" },
      { name: "Ягодицы", duration: "20 мин", price: "600 ₽" },
      { name: "Комплекс: подмышки, бикини, ноги до колен", duration: "1 ч 10 мин", price: "2 000 ₽" },
      { name: "Комплекс: подмышки, бикини, ноги полностью", duration: "1 ч 30 мин", price: "2 300 ₽" }
    ]
  },
  {
    id: "sugaring-men",
    title: "Мужской шугаринг / воск",
    badge: "Мужской прайс",
    items: [
      { name: "Спина", duration: "30 мин", price: "1 500 ₽" },
      { name: "Подмышки", duration: "15 мин", price: "400 ₽" },
      { name: "Живот", duration: "30 мин", price: "1 000 ₽" },
      { name: "Бикини глубокое", duration: "40 мин", price: "1 500 ₽" },
      { name: "Грудь", duration: "30 мин", price: "1 000 ₽" }
    ]
  },
  {
    id: "face-care",
    title: "Уходовые процедуры лица",
    badge: "Уход",
    items: [
      { name: "Ультразвуковая чистка", duration: "1 ч 30 мин", price: "2 700 ₽" },
      { name: "Альгинатная маска", duration: "40 мин", price: "1 500 ₽" },
      { name: "Гипсовая маска", duration: "40 мин", price: "1 500 ₽" },
      { name: "Карбокситерапия", duration: "40 мин", price: "2 500 ₽" },
      { name: "Кислородное пробуждение", duration: "50 мин", price: "2 000 ₽" },
      { name: "Омоложение", duration: "1 ч", price: "3 000 ₽" }
    ]
  },
  {
    id: "elos",
    title: "Лазерная эпиляция ELOS",
    badge: "Лазер",
    items: [
      { name: "Комплекс: бикини, подмышки", duration: "30 мин", price: "2 500 ₽" },
      { name: "Комплекс: усики, бикини, подмышки, ноги до колен", duration: "50 мин", price: "3 800 ₽" },
      { name: "Комплекс: бикини, подмышки, ноги полностью, руки полностью", duration: "1 ч 20 мин", price: "4 700 ₽" },
      { name: "Глубокое бикини", duration: "20 мин", price: "1 700 ₽" },
      { name: "Глубокое бикини (муж)", duration: "30 мин", price: "2 000 ₽" },
      { name: "Бикини классика", duration: "15 мин", price: "1 400 ₽" },
      { name: "Бедра", duration: "20 мин", price: "1 400 ₽" },
      { name: "Ноги полностью", duration: "40 мин", price: "2 600 ₽" },
      { name: "Ноги до колен", duration: "20 мин", price: "1 600 ₽" },
      { name: "Подмышки", duration: "10 мин", price: "700 ₽" },
      { name: "Руки до локтя", duration: "20 мин", price: "1 100 ₽" },
      { name: "Руки полностью", duration: "30 мин", price: "1 600 ₽" },
      { name: "Усики", duration: "10 мин", price: "500 ₽" },
      { name: "Подбородок, шея", duration: "20 мин", price: "600 ₽" },
      { name: "Ягодицы", duration: "20 мин", price: "1 000 ₽" },
      { name: "Спина", duration: "30 мин", price: "1 600 ₽" },
      { name: "Поясница", duration: "15 мин", price: "800 ₽" },
      { name: "Подмышки (муж)", duration: "15 мин", price: "800 ₽" }
    ]
  },
  {
    id: "photorejuvenation",
    title: "Фотоомоложение и дополнительные процедуры",
    badge: "Эстетика",
    items: [
      { name: "Фотоомоложение: лоб", duration: "15 мин", price: "1 500 ₽" },
      { name: "Фотоомоложение: щеки", duration: "20 мин", price: "3 000 ₽" },
      { name: "Фотоомоложение: подбородок", duration: "15 мин", price: "2 500 ₽" },
      { name: "Фотоомоложение: шея", duration: "15 мин", price: "2 000 ₽" },
      { name: "Фотоомоложение: лицо полностью", duration: "30 мин", price: "7 000 ₽" },
      { name: "Фотоомоложение: декольте", duration: "20 мин", price: "4 000 ₽" },
      { name: "Фотоомоложение: живот", duration: "20 мин", price: "4 000 ₽" },
      { name: "Фотоомоложение: кисти рук", duration: "20 мин", price: "3 000 ₽" },
      { name: "Удаление сосудов и пигментных пятен", duration: "по объему", price: "от 2 000 ₽" },
      { name: "Лечение акне и рубцов", duration: "по объему", price: "от 2 000 ₽" },
      { name: "Спа-процедура: обертывание с термоодеялом", duration: "1 ч", price: "3 000 ₽" },
      { name: "Обертывание", duration: "40 мин", price: "2 000 ₽" }
    ]
  }
];

const PRICE_STORAGE_KEY = "irina_price_groups_v1";

function getPriceGroups() {
  try {
    const raw = localStorage.getItem(PRICE_STORAGE_KEY);
    if (!raw) return DEFAULT_PRICE_GROUPS;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return DEFAULT_PRICE_GROUPS;
    return parsed;
  } catch (error) {
    return DEFAULT_PRICE_GROUPS;
  }
}

function savePriceGroups(groups) {
  localStorage.setItem(PRICE_STORAGE_KEY, JSON.stringify(groups));
}

function resetPriceGroups() {
  localStorage.removeItem(PRICE_STORAGE_KEY);
}
