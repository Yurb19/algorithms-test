class Constrains {
  _isArrayOfObjects(array) {
    this._isArray(array);

    array.forEach((object) => {
      if (object.constructor !== Object)
        throw new TypeError(
          `Array must contain only object value types, instead got ${typeof object}`
        );
    });
  }

  _isArrayOfNumbers(array){
    this._isArray(array);

    array.forEach((number) => {
      if (typeof number != 'number')
        throw new TypeError(
          `Array must contain only number value types, instead got ${typeof object}`
        );
    });
  }

  _isArray(array){
    const isArray = Array.isArray(array);
    if(!isArray)
        throw new TypeError(`Variable must be an array, instead got ${typeof array}`);
  }

  _isString(string){
    if(typeof string != 'string')
      throw new TypeError(`Variable must be type string, instead got ${typeof string}`);
  }
}

module.exports = Constrains;