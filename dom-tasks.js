// 1. Пошук в DOM
// task 1.1 Знайдіть та поверніть елемент заголовок з id="header".
export function getHeader() {
    return document.getElementById("header");
  }
  
  // task 1.2. Знайдіть всі елементи списків на сторінці, поверніть HTMLCollection
  export function getListItems() {
    return document.getElementsByTagName("li");
  }
  
  // task 1.3. Знайдіть всі елементи вкладених списків на сторінці, поверніть NodeList
  export function getNestedListItems() {
    return document.querySelectorAll("ul ul li");
  }
  
  // task 1.4. Перший параграф на сторінці
  export function getFirstPara() {
    return document.querySelector("p");
  }
  
  // task 1.5. Посилання на task2.html
  export function getTask2Link() {
    return Array.from(document.getElementsByTagName("a")).find(
      (a) => a.textContent.trim() === "Задача 2"
    );
  }
  
  // task 1.6. Батьківський елемент типу ul посилання на task2.html
  export function getParentUlOfTask2Link() {
    const link = getTask2Link();
    return link?.closest("ul") || null;
  }
  
  // task 1.7. Перший елемент списку у todo-list
  export function getFirstItemInTodoList() {
    const list = document.getElementById("todo-list");
    return list?.firstElementChild || null;
  }
  
  // task 1.8. Останній елемент списку у todo-list
  export function getLastItemInTodoList() {
    const list = document.getElementById("todo-list");
    return list?.lastElementChild || null;
  }
  
  // 2. Властивості та атрибути
  // task 2.1. Отримати текст заголовка з id="header"
  export function getHeaderText() {
    const header = document.getElementById("header");
    return header?.textContent || "";
  }
  
  // task 2.2. Змінити текст першого параграфа на "Оновлений параграф".
  export function updateFirstParagraph() {
    const p = document.querySelector("p");
    if (p) p.textContent = "Оновлений параграф";
  }
  
  // task 2.3. Отримати значення атрибута href для посилання з текстом "Задача 2".
  export function getTask2Href() {
    const link = getTask2Link();
    return link?.getAttribute("href") || "";
  }
  
  // task 2.4. Додати клас highlight до всіх елементів з класом item
  export function highlightItems() {
    document.querySelectorAll(".item").forEach((el) => el.classList.add("highlight"));
  }
  
  // task 2.5: Перевірити, чи є атрибут target у посилання з текстом "Задача 3", і якщо його немає, додати зі значенням _blank.
  export function ensureTask3Target() {
    const link = Array.from(document.getElementsByTagName("a")).find(
      (a) => a.textContent.trim() === "Задача 3"
    );
    if (link && !link.hasAttribute("target")) {
      link.setAttribute("target", "_blank");
    }
  }
  
  // 3. Створення та видалення елементів
  // task 3.1: Створити <div class="item">Елемент 3</div> після <div class="item">Елемент 2</div>.
  export function createItemDiv() {
    const newDiv = document.createElement("div");
    newDiv.className = "item";
    newDiv.textContent = "Елемент 3";
  
    const items = document.querySelectorAll("div.item");
    const secondItem = Array.from(items).find((el) => el.textContent.trim() === "Елемент 2");
    if (secondItem && secondItem.parentNode) {
      secondItem.parentNode.insertBefore(newDiv, secondItem.nextSibling);
    }
  }
  
  // task 3.2: Створити <li>Новий елемент</li> в список з id="todo-list".
  export function addListItem() {
    const list = document.getElementById("todo-list");
    if (list) {
      const li = document.createElement("li");
      li.textContent = "Новий елемент";
      list.appendChild(li);
    }
  }
  
  // task 3.3: Видалити перший елемент <li> з id="todo-list".
  export function removeFirstListItem() {
    const list = document.getElementById("todo-list");
    if (list && list.firstElementChild) {
      list.removeChild(list.firstElementChild);
    }
  }
  
  // task 3.4: Створити <p>Важливе повідомлення</p> перед елементом з id="header"
  export function insertParagraphBeforeHeader() {
    const p = document.createElement("p");
    p.textContent = "Важливе повідомлення";
    const header = document.getElementById("header");
    if (header && header.parentNode) {
      header.parentNode.insertBefore(p, header);
    }
  }
  
  // task 3.5: Видалити всі елементи з класом item з документа.
  export function removeAllItems() {
    document.querySelectorAll(".item").forEach((el) => el.remove());
  }
  