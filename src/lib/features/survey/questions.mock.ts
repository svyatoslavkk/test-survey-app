import type { Question } from "./types";

export const mockQuestions: Question[] = [
  {
    id: "q1",
    index: 1,
    subIndex: 1,
    number: "1",
    title:
      "Скажите, пожалуйста, как часто Вы покупаете шоколадные батончики / молочный шоколад / шоколадные конфеты?",
    type: "radio",
    options: [
      { id: "q1_1", text: "Раз в неделю и чаще" },
      { id: "q1_2", text: "Раз в 2-3 недели" },
      { id: "q1_3", text: "Раз в месяц" },
      { id: "q1_4", text: "Раз в 2-3 месяца" },
      { id: "q1_5", text: "Раз в 4-6 месяцев" },
      { id: "q1_6", text: "1-2 раза в год" },
      { id: "q1_7", text: "Реже чем раз в год" },
      { id: "q1_8", text: "Затрудняюсь ответить / Не помню" },
    ],
    shareLink: true,
    required: true,
  },
  {
    id: "q2",
    index: 2,
    subIndex: 1,
    number: "2",
    title:
      "Какие факторы влияют на Ваш выбор при покупке шоколадных изделий? (Выберите все подходящие варианты)",
    type: "checkbox",
    options: [
      { id: "q2_1", text: "Цена" },
      { id: "q2_2", text: "Бренд" },
      {
        id: "q2_3",
        text: "Состав (наличие/отсутствие определенных ингредиентов)",
      },
      { id: "q2_4", text: "Вкус" },
      { id: "q2_5", text: "Упаковка" },
      { id: "q2_6", text: "Акции и скидки" },
      { id: "q2_7", text: "Рекомендации друзей/знакомых" },
      { id: "q2_8", text: "Реклама" },
      { id: "q2_9", text: "Другое" },
    ],
    required: false,
  },
  {
    id: "q3",
    index: 3,
    subIndex: 1,
    number: "3",
    title: "Какой тип шоколада Вы предпочитаете?",
    type: "radio",
    options: [
      { id: "q3_1", text: "Молочный" },
      { id: "q3_2", text: "Темный" },
      { id: "q3_3", text: "Белый" },
      { id: "q3_4", text: "С добавками (орехи, фрукты и т.д.)" },
      { id: "q3_5", text: "Не имеет значения" },
    ],
    required: true,
  },
];
