const { test, expect } = require("@jest/globals");
const Util = require("../Util.class");
const util = new Util();

// * globals

const arrayOfObjects = [
  { first: "Elie", last: "Schoppik" },
  { first: "Tim", last: "Garcia", isCatOwner: true },
  { first: "Matt", last: "Lane" },
  { first: "Colt", last: "Steele", isCatOwner: true },
  { first: "Perez", last: "Urbina", isCatOwner: false },
];

const arrayOfNames = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isEven = (val) => {
  return val % 2 === 0;
};

const isLongerThanThreeCharacters = (val) => {
  return val.length > 3;
};

// * Tests

test("filter by Value", () => {
  expect(util.filterByValue(arrayOfObjects, "isCatOwner")).toEqual([
    { first: "Tim", last: "Garcia", isCatOwner: true },
    { first: "Colt", last: "Steele", isCatOwner: true },
    { first: "Perez", last: "Urbina", isCatOwner: false },
  ]);
});

test("find the first value", () => {
  expect(util.find(arrayOfNumbers, 7)).toBe(7);
  expect(util.find(arrayOfNumbers, 18)).toBe(undefined);
});

test("find first value in object", () => {
  expect(util.findInObj(arrayOfObjects, "isCatOwner", true)).toEqual({
    first: "Tim",
    last: "Garcia",
    isCatOwner: true,
  });
  expect(util.findInObj(arrayOfObjects, "last", "Ramirez")).toEqual({});
});

test("removeVowels", () => {
  expect(util.removeVowels("Royner")).toMatch(/rynr/);
  expect(util.removeVowels()).toBe("");
});

test("doubleOddNumbers", () => {
  expect(util.doubleOddNumbers(arrayOfNumbers)).toEqual([2, 6, 10, 14, 18]);
  expect(util.doubleOddNumbers([4, 4, 4, 4])).toEqual([]);
});

test("extractKey", () => {
  expect(util.extractKey(arrayOfNames, "name")).toEqual([
    "Elie",
    "Tim",
    "Matt",
    "Colt",
  ]);
  expect(util.extractKey(arrayOfNames)).toEqual([]);
});

test("extractValue", () => {
  expect(util.extractValue(arrayOfNames, "name")).toEqual([
    "Elie",
    "Tim",
    "Matt",
    "Colt",
  ]);
  expect(util.extractKey(arrayOfNames)).toEqual([]);
});

test("vowelCount", () => {
  expect(util.vowelCount("Royner")).toEqual({ o: 1, e: 1 });
  expect(util.vowelCount("hmmm")).toEqual({});
  expect(util.vowelCount("I Am awesome and so are you")).toEqual({
    i: 1,
    a: 4,
    e: 3,
    o: 3,
    u: 1,
  });
});

test("hasNoDuplicates", () => {
  expect(util.hasNoDuplicates([1, 2, 3, 2])).toBeFalsy();
  expect(util.hasNoDuplicates(arrayOfNumbers)).toBeTruthy();
});

test("addKeyAndValue", () => {
  expect(util.addKeyAndValue(arrayOfNames, "title", "Instructor")).toEqual([
    { title: "Instructor", name: "Elie" },
    { title: "Instructor", name: "Tim" },
    { title: "Instructor", name: "Matt" },
    { title: "Instructor", name: "Colt" },
  ]);
});

test("partition", () => {
  expect(util.partition(arrayOfNumbers, isEven)).toEqual([
    [2, 4, 6, 8],
    [1, 3, 5, 7, 9],
  ]);

  let names = ["Elie", "Colt", "Tim", "Matt"];
  expect(util.partition(names, isLongerThanThreeCharacters)).toEqual([
    ["Elie", "Colt", "Matt"],
    ["Tim"],
  ]);
});

test("hasCertainKey", () => {
    expect(util.hasCertainKey(arrayOfObjects, 'isCatOwner')).toBeFalsy();
    expect(util.hasCertainKey(arrayOfObjects, 'first')).toBeTruthy();
});
