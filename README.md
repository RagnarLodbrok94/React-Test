# React-Test

## Задача

1. [X] Использовать `<input type="text">`
2. [X] Компонент должен корректно работать при наличии 2-х или более экземпляров на странице
3. [X] Компонент должен поддерживать числа с плавающей запятой
4. [X] Компонент должен иметь визуальные стрелочки "вверх" и "вниз", которые работают аналогично стандартному `<input type="number">`.
5. [X] Компонент должен поддерживать увеличение и уменьшение значение при нажатии на клавиши "Arrow up" и "Arrow down". Если при нажатии зажат "Shift" значение изменяется на 10.
6. [X] Компонент не должен давать возможность ввести что либо отличное от цифры или ".". Больше 1 символа "." в значении быть не должно.
7. [ ] Компонент должен корректно принимать и обрабатывать следующие props:
  * [X] value - значение в инпуте
  * [X] min - минимальное значение
  * [X] max - максимальное значение
  * [ ] onChange - callback функция, которая вызывается в случае изменения значения в инпуте. В качестве параметра приходит новое значение.


## Итог (как если бы в новую компанию брали)

- нерабочие npm-скрипты: **build**, **test**, **eject**
- ненужный файл **app.js**
- закоментированный код в **index.js**
- можно было и поставить `cursor: pointer` ховеры на стрелочках инпутов
- не выполнен колбек `onChange`
- есть проблемы с именованием методов класса (`handleKey` - воспринимается как "кнопка обработчик" а не "обработчик кнопки")
- [здесь](#L33) явная ошибка, значение повторно преобразовывается к числу, хотя [ранее](#L22) уже преобразовывалось к числу с плавающей запятой, да и есть сомнения касателньо логики работы
- `handleKey` было бы лучше применить `switch()`
- повсеместное забывание о точке с запятой в конце строки
