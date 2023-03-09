# Pagination

A simple library to generate an array of string that represents the pagination.

## Motivation

There are lots of UI libraries that render one component, normally they are in some form, strict to changes. This library give you only the necessary values to build your own pagination component. Lifting up any burden on writing logic to generate the current pages and numbers.

Other motivation is that many pagination elements does not calculate the skip correctly creating some inconsistent page number like `1,..., 3, 4, ..., 10`, the space between '1' and '3' could be the number '2'

## The approach

Instead of rendering the pagination based in how many items you want to see on your pagination component, this library focus on rendering the pages sided with the current page.

## How to use

```js
const pagination = generatePagination({ current: 5, end: 10 });

console.log(pagination); // ['1', '...', '4', '5', '6, '...', '10']
```
