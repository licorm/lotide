# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @licorm/lotide`

**Require it:**

`const _ = require('@licorm/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: will return the head of the array of numbers (element at index 0)
* `tail(array)`: will return the tail of the array of numbers (all elements excluding element at index 0)
* `middle(array)`: will return the value at the middle index of any array, if the array has an even amount of values it will return two middle values.
* `flatten(array)`: when given an array with a one level of nested arrays, will return the array as a single-level array.
* `countOnly(allItems, itemsToCount)`: Takes in a collection of items as an array and an object determining which items in our array to count, and return a count of each of the items chosen to count.
* `countLetters(string)`: takes in a sentence as a string and returns a count of each of the letters in the string.
* `letterPositions(sentence)`: takes in a sentence as a string and returns all the indices that each letter occurs in.
* `findKeyByValue(object, search)`: takes in an object and a value. It scans the object and returns the first key which contains the given value. If no key contains that value, it returns undefined.
* `eqArrays(arr1, arr2)`: compares if two arrays are a perfect match