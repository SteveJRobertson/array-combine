# array-combine

Helper library for handling multiple array datasets

## Prerequisites

These tools assume the structure of the data to be combined is as follows:

```js
const arrayData = [
  [
    ['Heading 1', 12],
    ['Heading 2', 23],
    ['Heading 3', 653],
    ['Heading 4', 584]
  ],
  [
    ['Heading 1', 45],
    ['Heading 3', 88],
    ['Heading 4', 78],
    ['Heading 5', 567]
  ]
]

const combinedData(arrayCombine)
```

The combined output will be:

```js
[
  ['Heading 1', 12, 45],
  ['Heading 2', 23, 0],
  ['Heading 3', 653, 88],
  ['Heading 4', 584, 78],
  ['Heading 5', 0, 567]
]
```

Note the zero values added where a record is not present in one of the arrays.

A custom blank value can also be specified.

```js
const blankValue = 'X'
const combinedData(arrayCombine, blankValue)
```

The output will look like this:

```js
[
  ['Heading 1', 12, 45],
  ['Heading 2', 23, 'X'],
  ['Heading 3', 653, 88],
  ['Heading 4', 584, 78],
  ['Heading 5', 'X', 567]
]
```
