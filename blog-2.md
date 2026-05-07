# কীভাবে Generics reusable এবং strictly typed code তৈরি করতে সাহায্য করে TypeScript-এ?

## Introduction

TypeScript-এর সবচেয়ে powerful feature গুলোর মধ্যে Generics অন্যতম। Generics ব্যবহার করে আমরা এমন function, component, বা class তৈরি করতে পারি যেগুলো বিভিন্ন ধরনের data নিয়ে কাজ করতে পারে, কিন্তু তারপরও type safety বজায় থাকে।

সাধারণভাবে বলতে গেলে, Generics আমাদের reusable code লিখতে সাহায্য করে without losing strict typing।

এই ব্লগে আমরা জানবো:

- Generics কী
- কেন Generics প্রয়োজন
- কীভাবে এটি reusable code তৈরি করে
- কীভাবে type safety বজায় রাখে
- কয়েকটি practical example

---

# Generics কী?

Generics হলো TypeScript-এর এমন একটি feature যেখানে আমরা dynamic type ব্যবহার করতে পারি।

এখানে type আগে থেকে fixed থাকে না। বরং function call করার সময় TypeScript automatically type determine করে নেয়।

## Simple Generic Syntax

```ts
function getValue<T>(value: T) {
  return value;
}
```

এখানে `T` একটি generic type।

এটি যেকোনো type represent করতে পারে।

---

# Generics কেন প্রয়োজন?

ধরুন আমরা এমন একটি function বানাতে চাই যা যেকোনো ধরনের value return করবে।

Generics ছাড়া অনেক সময় `any` ব্যবহার করতে হয়।

## Without Generics

```ts
function getValue(value: any) {
  return value;
}
```

এখানে সমস্যা হলো:

- Type safety নেই
- ভুল method ব্যবহার করলেও TypeScript error দিবে না
- Runtime error হওয়ার সম্ভাবনা বাড়ে

---

# Generics কীভাবে Type Safety বজায় রাখে?

Generics একই সাথে flexibility এবং type safety দেয়।

## Example Using Generics

```ts
function getValue<T>(value: T) {
  return value;
}

const result = getValue<string>("Naim");
```

এখানে TypeScript জানে `result` একটি string।

তাই string related method safely ব্যবহার করা যাবে।

```ts
console.log(result.toUpperCase());
```

---

# Different Data Types এর সাথে কাজ করা

Generics এর সবচেয়ে বড় সুবিধা হলো একই function বিভিন্ন type এর data handle করতে পারে।

## Example

```ts
function showData<T>(data: T) {
  return data;
}

console.log(showData<string>("TypeScript"));
console.log(showData<number>(100));
console.log(showData<boolean>(true));
```

একই function:

- string
- number
- boolean

সব ধরনের data নিয়ে কাজ করছে।

---

# Reusable Code তৈরি করা

Generics ব্যবহার করলে একই logic বারবার লিখতে হয় না।

এটি code duplication কমায় এবং code clean রাখে।

## Example

```ts
function createArray<T>(value: T) {
  return [value];
}

const number = createArray<number>(10);
const name = createArray<string>("Naim");
```

এখানে একই function different type এর array তৈরি করছে।

---

# Generic Array Example

```ts
function getFirstElement<T>(arr: T[]) {
  return arr[0];
}

const firstNumber = getFirstElement([1, 2, 3]);
const firstName = getFirstElement(["Naim", "Rahim"]);
```

এখানে:

- প্রথম call এ TypeScript `T` কে number হিসেবে ধরেছে
- দ্বিতীয় call এ string হিসেবে ধরেছে

এটাই Generics-এর power।

---

# Generics এর Benefits

## ✅ Reusable Code

একই function বা component বারবার ব্যবহার করা যায়।

## ✅ Strong Type Safety

ভুল type ব্যবহার করলে TypeScript error দেখায়।

## ✅ Cleaner Code

বারবার একই logic লিখতে হয় না।

## ✅ Better Developer Experience

Auto suggestion এবং IntelliSense আরও ভালো কাজ করে।

---

# বাস্তব জীবনে Generics কোথায় ব্যবহার হয়?

Generics অনেক জায়গায় ব্যবহার করা হয়:

- React components
- API response handling
- Utility functions
- Arrays and objects
- Custom hooks
- Data management libraries

বিশেষ করে বড় project এ Generics code maintain করা অনেক সহজ করে দেয়।

---

# Conclusion

Generics TypeScript-এর একটি অত্যন্ত গুরুত্বপূর্ণ feature যা reusable এবং scalable code লিখতে সাহায্য করে।

এটি একই সাথে flexibility এবং strict type safety নিশ্চিত করে। ফলে একই function বিভিন্ন ধরনের data handle করতে পারে without losing type information।

বড় project এ clean, reusable, এবং maintainable code লেখার জন্য Generics একটি essential concept।