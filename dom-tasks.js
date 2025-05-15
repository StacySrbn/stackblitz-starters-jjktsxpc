// 1. Пошук в DOM
// task 1.1 Знайдіть та поверніть елемент заголовок з id="header".
export function getHeader() {}

// task 1.2. Знайдіть всі елементи списків на сторінці, поверніть HTMLCollection
export function getListItems() {}

// task 1.3. Знайдіть всі елементи вкладених списків на сторінці, поверніть NodeList
export function getNestedListItems() {}

// task 1.4. Перший параграф на сторінці
export function getFirstPara() {}

// task 1.5. Посилання на task2.html
export function getTask2Link() {}

// task 1.6. Батьківський елемент типу ul посилання на task2.html
export function getParentUlOfTask2Link() {}

// task 1.7. Перший елемент списку у todo-list
export function getFirstItemInTodoList() {}

// task 1.8. Останній елемент списку у todo-list
export function getLastItemInTodoList() {}

//2. Властивості та атрибути
// task 2.1. Отримати текст заголовка з id="header"
export function getHeaderText() {}

//task 2.2. Змінити текст першого параграфа на "Оновлений параграф".
export function updateFirstParagraph() {}

//task 2.3. Отримати значення атрибута href для посилання з текстом "Задача 2".
export function getTask2Href() {}

//task 2.4. Додати клас highlight до всіх елементів з класом item
export function highlightItems() {}

//task 2.5: Перевірити, чи є атрибут target у посилання з текстом "Задача 3", і якщо його немає, додати зі значенням _blank.
export function ensureTask3Target() {}

//3. Створення та видалення елементів
//task 3.1: Динамічно створити новий елемент <div> з класом "item" текстом "Елемент 3" та додати його після <div class="item">Елемент 2</div>.
export function createItemDiv() {}

//task 3.2: Створити новий елемент списку <li> з текстом "Новий елемент" та додати його до існуючого списку з id="todo-list".
export function addListItem() {}

//task 3.3: Видалити перший елемент списку <li> з id="todo-list".
export function removeFirstListItem() {}

//task 3.4: Створити новий елемент <p> з текстом "Важливе повідомлення" та вставити його перед елементом з id="header"
export function insertParagraphBeforeHeader() {}

//task 3.5: Видалити всі елементи з класом item з документа.
export function removeAllItems() {}
