class Constrains {
  _checkArrayOfObjects(array) {
    array.forEach((object) => {
      if (typeof object != "object")
        throw new TypeError(
          `Array must contain only object value types, instead got ${typeof object}`
        );
    });
  }

  _isObject(array){
    if(typeof array != 'object')
        throw new TypeError(`Variable must be an array, instead got ${typeof array}`);
  }

  _isString(string){
    if(typeof string != 'string')
      throw new TypeError(`Variable must be type string, instead got ${typeof string}`);
  }
}

module.exports = Constrains;