# Mastia
Mastia

Проект сверстан по методологии БЭМ. Вспомогательные технологии: pug для шаблонов и less для файлов стилей.

Структура проекта:

bem/
  ability/
    ability.less
    ability.pug
  button.less
  map.less
  ...
data/
  blog.pug
  services.pug
  projects.pug
img/
  ...
js/
  link.js
  map.js
  ...
style/
  less-abstract/
    __normalize.less
    __var.less
  css/
    normalize.css
    style.css
  less/
    style.less
bem
Здесь расположены блоки в терминах БЭМ. Одному блоку соответствует своя папка, имя которой = имени блока.
Разметка реализована в технологии pug, стили разметки - в технологии less.
Некоторые блоки расположены вне своей папки так как имеют только одну технологию реализации - less.

data
Здесь в технологии pug собраны массивы данных чтобы разгрузить шаблоны в БЭМ и отделить данные от представления.

img
Статические файлы для разметки.

style/css
Файл normalize.css это стандартный сброс стилей, а style.css компилируемый файл сборщиком.

style/less
В файле style.less явно указаны все зависимости проекта в технологии less. 
С помощью сборщика этот файл компилируется в /style/css/style.css и подключается в конечном варианте html файла.

style/less-abstract
В файле __normalize.less хранятся пользовательские стили которые не вошли ни в один блок в терминах БЭМ, 
а в __var.less хранятся глобальные переменные которые затем используются в технологии less.

index.pug
Описание разметки в технологии pug

index.html
Компилируемый файл, итоговая страница. С нее можно переходить на другие страници проекта.
