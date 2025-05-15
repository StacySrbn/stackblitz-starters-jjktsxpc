import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

import {
  getHeader,
  getListItems,
  getNestedListItems,
  getFirstPara,
  getTask2Link,
  getParentUlOfTask2Link,
  getFirstItemInTodoList,
  getLastItemInTodoList,
  getHeaderText,
  updateFirstParagraph,
  getTask2Href,
  highlightItems,
  ensureTask3Target,
  createItemDiv,
  addListItem,
  removeFirstListItem,
  insertParagraphBeforeHeader,
  removeAllItems,
} from '../dom-tasks.js';

const html = fs.readFileSync('./index.html', 'utf-8');
const dom = new JSDOM(html);
global.document = dom.window.document;

describe('1. Пошук в DOM', () => {
  test('getHeader повертає елемент з id="header"', () => {
    const header = getHeader();
    expect(header).not.toBeNull();
    expect(header.tagName).toBe('H1');
    expect(header.textContent).toBe('Заголовок');
  });

  test('getListItems повертає всі елементи li на сторінці', () => {
    const listItems = getListItems();
    expect(Object.prototype.toString.call(listItems)).toBe(
      '[object HTMLCollection]'
    );
    expect(listItems.length).toBe(5);
  });

  test('getNestedListItems повертає всі вкладені елементи li', () => {
    const nestedListItems = getNestedListItems();
    expect(Object.prototype.toString.call(nestedListItems)).toBe(
      '[object NodeList]'
    );
    expect(nestedListItems.length).toBe(2);
    expect(nestedListItems[0].textContent).toBe('Підзадача 1');
    expect(nestedListItems[1].textContent).toBe('Підзадача 2');
  });

  test('getFirstPara повертає перший параграф на сторінці', () => {
    const firstPara = getFirstPara();
    expect(firstPara).not.toBeNull();
    expect(firstPara.tagName).toBe('P');
    expect(firstPara.textContent).toBe('Перший параграф');
  });

  test('getTask2Link повертає посилання на task2.html', () => {
    const task2Link = getTask2Link();
    expect(task2Link).not.toBeNull();
    expect(task2Link.getAttribute('href')).toBe('task2.html');
    expect(task2Link.textContent).toBe('Задача 2');
  });

  test('getParentUlOfTask2Link повертає батьківський ul для посилання на task2.html', () => {
    const parentUl = getParentUlOfTask2Link();
    expect(parentUl).not.toBeNull();
    expect(parentUl.tagName).toBe('UL');
    expect(parentUl.parentElement.tagName).toBe('BODY');
  });

  test('getFirstItemInTodoList повертає перший елемент списку у todo-list', () => {
    const firstItem = getFirstItemInTodoList();
    expect(firstItem).not.toBeNull();
    expect(firstItem.textContent).toContain('Задача 1');
  });

  test('getLastItemInTodoList повертає останній елемент списку у todo-list', () => {
    const lastItem = getLastItemInTodoList();
    expect(lastItem).not.toBeNull();
    expect(lastItem.textContent).toContain('Задача 3');
  });
});

describe('2.  Властивості та атрибути', () => {
  test('getHeaderText повертає текст заголовка', () => {
    expect(getHeaderText()).toBe('Заголовок');
  });

  test('updateFirstParagraph змінює текст першого параграфа', () => {
    updateFirstParagraph();
    expect(document.querySelector('p').textContent).toBe('Оновлений параграф');
  });

  test('getTask2Href повертає href для посилання "Задача 2"', () => {
    expect(getTask2Href()).toBe('task2.html');
  });

  test('highlightItems додає клас highlight до всіх елементів з класом item', () => {
    highlightItems();
    document.querySelectorAll('.item').forEach((item) => {
      expect(item.classList.contains('highlight')).toBe(true);
    });
  });

  test('ensureTask3Target додає атрибут target зі значенням _blank до посилання "Задача 3", якщо його немає', () => {
    ensureTask3Target();
    const link = document.querySelector('a[target="_blank"]');
    expect(link.textContent).toBe('Задача 3');
  });
});

describe('3. Створення та видалення елементів', () => {
  test('createItemDiv додає div з класом container до тіла документа', () => {
    createItemDiv();
    const div = document.querySelectorAll('div.item')[2];
    expect(div).not.toBeNull();
    expect(div.tagName).toBe('DIV');
    expect(div.className).toBe('item');
    expect(div.textContent).toBe('Елемент 3');
  });

  test('addListItem додає новий li до списку todo-list', () => {
    addListItem();
    const ul = document.getElementById('todo-list');
    const li = ul.lastElementChild;
    expect(li).not.toBeNull();
    expect(li.tagName).toBe('LI');
    expect(li.textContent).toBe('Новий елемент');
  });

  test('removeFirstListItem видаляє перший li з списку todo-list', () => {
    const ul = document.getElementById('todo-list');
    const len = ul.children.length;
    removeFirstListItem();
    expect(ul.children.length).toBe(len - 1);
    expect(ul.children[0].textContent.trim().startsWith('Задача 2')).toBe(true);
  });

  test('insertParagraphBeforeHeader вставляє параграф перед заголовком', () => {
    insertParagraphBeforeHeader();
    const header = document.getElementById('header');
    const p = header.previousElementSibling;
    expect(p).not.toBeNull();
    expect(p.tagName).toBe('P');
    expect(p.textContent).toBe('Важливе повідомлення');
  });

  test('removeAllItems видаляє всі елементи з класом item', () => {
    removeAllItems();
    const items = document.querySelectorAll('.item');
    expect(items.length).toBe(0);
  });
});
