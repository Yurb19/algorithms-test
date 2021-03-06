const Constrains = require("./Constrains.class");

class Util extends Constrains {
  filterByValue(array = [], key = "") {
    this._isArrayOfObjects(array);

    const filteredArray = array.filter((object) => object.hasOwnProperty(key));
    return filteredArray;
  }

  find(array = [], value = "") {
    this._isArray(array);
    for (let element of array) {
      if (element === value) return element;
    }

    return undefined;
  }

  findInObj(array = [], key = "", value = "") {
    this._isArrayOfObjects(array);

    for(let object of array){
      let hasKey = object.hasOwnProperty(key);
      let hasValue = object[key] === value;
      if(hasKey && hasValue) return object;
    }

    return {};
  }

  removeVowels(string = "") {
    this._isString(string);

    const stringWithoutVowels = string.replace(/[aeiou]/gi, "").toLowerCase();
    return stringWithoutVowels;
  }

  doubleOddNumbers(array = []) {
    this._isArrayOfNumbers(array);

    const oddNumbers = array.filter((number) => number % 2 != 0);
    const doubledOddNumbers = oddNumbers.map((number) => number * 2);

    return doubledOddNumbers;
  }

  extractKey(array = [], key = "") {
    this._isArrayOfObjects(array);

    let arrayOfValues = [];

    for (let object of array) {
      if (object.hasOwnProperty(key)) 
        arrayOfValues.push(object[key]);
    }

    return arrayOfValues;
  }

  extractValue(array = [], key = "") {
    //! Same as extractKey but use diferent methods

    this._isArrayOfObjects(array);

    const filteredArray = array.filter((object) => {
      return object.hasOwnProperty(key);
    });

    const arrayOfValues = filteredArray.map((object) => object[key]);

    return arrayOfValues;
  }

  vowelCount(string = "") {
    this._isString(string);

    const countedVowels = {};

    for (let letter of string) {
      letter = letter.toLowerCase();

      let letterIsVowel = /[aeiou]/i.test(letter);

      if (letterIsVowel) {
        if (!countedVowels.hasOwnProperty(letter)) {
          // * if letter doesn't exist in Object
          countedVowels[letter] = 1;
        } else {
          countedVowels[letter]++;
        }
      }
    }

    return countedVowels;
  }

  hasNoDuplicates(array = []) {
    this._isArray(array);

    let arrayCopy = [];

    for (let element of array) {
      if (arrayCopy.includes(element)) return false;

      arrayCopy.push(element);
    }

    return true;
  }

  addKeyAndValue(array = [], key = "", value = "") {
    this._isArrayOfObjects(array);

    const newArray = array.map((object) => {
      object[key] = value;
      return object;
    });

    return newArray;
  }

  partition(array = [], callback = (element) => {}) {
    this._isArray(array);
    let partitionedArray = [[], []];

    for (let element of array) {
      const result = callback(element);

      result
        ? partitionedArray[0].push(element)
        : partitionedArray[1].push(element);
    }

    return partitionedArray;
  }

  hasCertainKey(array = [], key = "") {
    this._isArrayOfObjects(array);

    for (let object of array) {
      let hasKey = object.hasOwnProperty(key);
      if (!hasKey) {
        return false;
      }
    }

    return true;
  }
}

module.exports = Util;
