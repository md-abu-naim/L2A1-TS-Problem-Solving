# কেন `any` কে Type Safety Hole বলা হয় এবং `unknown` কেন নিরাপদ? — Type Narrowing Explained

## Introduction

TypeScript মূলত JavaScript-এর একটি powerful superset যা আমাদের কোডে type safety নিশ্চিত করতে সাহায্য করে। এর ফলে development এর সময় অনেক ভুল আগে থেকেই ধরা যায় এবং runtime error কমে আসে।

তবে TypeScript-এ কিছু type আছে যেগুলো ব্যবহার করার সময় সতর্ক থাকা প্রয়োজন। এর মধ্যে সবচেয়ে বেশি আলোচিত দুটি type হলো `any` এবং `unknown`।

`any` অনেক flexible হলেও এটি TypeScript-এর type checking system কে প্রায় অকার্যকর করে দেয়। অন্যদিকে `unknown` আমাদেরকে safer way তে unpredictable data handle করতে সাহায্য করে।

এই ব্লগে আমরা জানবো:

- কেন `any` কে “type safety hole” বলা হয়
- `unknown` কেন safer choice
- Type Narrowing কী
- কীভাবে type narrowing ব্যবহার করতে হয়

---

# `any` কী?

`any` এমন একটি type যা TypeScript-এর type checking বন্ধ করে দেয়। অর্থাৎ variable এ যেকোনো ধরনের value রাখা যায় এবং TypeScript কোনো error দেখাবে না।

## Example of `any`

```ts
let value: any = "Hello TypeScript";

value = 100;
value = true;

console.log(value.toUpperCase());
```

উপরের example এ `value` কখনো string, কখনো number, আবার boolean হচ্ছে। কিন্তু TypeScript কোনো warning দিচ্ছে না।

এখানে সমস্যা হলো:

```ts
value.toUpperCase()
```

যদি `value` string না হয়, তাহলে runtime এ error হতে পারে।

---

# কেন `any` কে “Type Safety Hole” বলা হয়?

TypeScript-এর সবচেয়ে বড় সুবিধা হলো type safety। কিন্তু `any` ব্যবহার করলে সেই protection আর কাজ করে না।

এ কারণেই `any` কে “type safety hole” বলা হয়।

কারণ এটি TypeScript-এর safety system এর মধ্যে একটি “hole” বা ফাঁক তৈরি করে যেখানে ভুল type ব্যবহৃত হলেও compiler কিছু বলে না।

## Example

```ts
const userData: any = 50;

console.log(userData.toUpperCase());
```

এখানে `userData` আসলে number।

কিন্তু আমরা string method ব্যবহার করছি।

TypeScript error দেখাচ্ছে না, কিন্তু runtime এ application crash করতে পারে।

---

# `unknown` কী?

`unknown` এমন একটি type যা unpredictable data store করতে পারে, তবে `any` এর মতো unsafe নয়।

এখানে TypeScript আপনাকে value ব্যবহার করার আগে তার type check করতে বাধ্য করবে।

## Example of `unknown`

```ts
const value: unknown = "TypeScript";

console.log(value.toUpperCase());
```

উপরের code এ TypeScript error দেখাবে।

কারণ `unknown` type এর value সরাসরি ব্যবহার করা যায় না।

---

# `unknown` কেন safer?

`unknown` safer কারণ এটি developer কে value ব্যবহার করার আগে type verify করতে বাধ্য করে।

এতে accidental mistake এবং runtime error অনেক কমে যায়।

## Correct Way

```ts
const value: unknown = "TypeScript";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

এখানে প্রথমে check করা হয়েছে `value` string কিনা।

তারপর safely `toUpperCase()` ব্যবহার করা হয়েছে।

---

# Type Narrowing কী?

Type Narrowing হলো কোনো variable-এর actual type check করে সেটিকে আরও specific type এ convert করার process।

সহজভাবে বললে:

TypeScript যখন বুঝতে পারে variable আসলে কোন type, তখন সেই type অনুযায়ী safe operation করতে দেয়।

---

# Type Narrowing Example

```ts

const data: unknown = "Hello Naim";

if (typeof data === "string") {
  console.log(data.length);
}
```

এখানে:

- প্রথমে `data` এর type ছিল `unknown`
- `typeof` check করার পরে TypeScript বুঝেছে এটি string
- এরপর safely `.length` ব্যবহার করা গেছে

এটাই type narrowing।

---

# আরও একটি Example

```ts
function getValue(value: unknown) {
  if (typeof value === "number") {
    console.log(value.toFixed(2));
  } else {
    console.log("Value is not a number");
  }
}

getValue(10);
```

এখানে function প্রথমে check করছে `value` number কিনা।

যদি number হয় তাহলে `toFixed()` ব্যবহার করছে।

এটি runtime error কমাতে সাহায্য করে।

---

# `any` vs `unknown`

| Feature                | any  | unknown |
| ---------------------- | ---- | ------- |
| Type Safety            | ❌ নেই | ✅ আছে    |
| Any operation allowed  | ✅ হ্যাঁ | ❌ না     |
| Runtime error risk     | ⚠️ বেশি | ✅ কম    |
| Type checking required | ❌ না  | ✅ হ্যাঁ    |

---

# কখন `unknown` ব্যবহার করা ভালো?

`unknown` সাধারণত ব্যবহার করা হয় যখন data সম্পর্কে আগে থেকে নিশ্চিত হওয়া যায় না।

যেমন:

- API response
- User input
- External library data
- Dynamic content

## Example

```ts
const fetchData = async (): Promise<unknown> => {
  const response = await fetch("https://api.example.com");
  return response.json();
};
```

এখানে API থেকে কী data আসবে তা নিশ্চিত না হওয়ায় `unknown` safer choice।

---

# Conclusion

`any` ব্যবহার করলে TypeScript-এর type safety প্রায় নষ্ট হয়ে যায়, যার কারণে runtime error হওয়ার সম্ভাবনা বেড়ে যায়। এ কারণেই `any` কে “type safety hole” বলা হয়।

অন্যদিকে `unknown` developer কে type check করতে বাধ্য করে এবং safer coding practice নিশ্চিত করে।

এছাড়া type narrowing ব্যবহার করে আমরা dynamic data আরও নিরাপদভাবে handle করতে পারি।

তাই সম্ভব হলে `any` এড়িয়ে `unknown` ব্যবহার করাই ভালো practice।
