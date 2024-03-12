## regex-js

.

## Usage

```js
import regexJs from "regex-js";
```

```js
  const re1 = /https:\/\/www\.google\.com\//gi;
  // /https:\/\/www\.google\.com\//gi

  const pattern = regexJs.escape("https://www.google.com/");
  const flags = "gi";
  const re2 = new RegExp(pattern, flags);
  // /https:\/\/www\.google\.com\//gi

  const re3 = regexJs.join([re1, re2]);
  // /https:\/\/www\.google\.com\/|https:\/\/www\.google\.com\//gi
```
