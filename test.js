import regexJs from "./index.js";

;(function() {
  const re1 = /https:\/\/www\.google\.com\//gi;
  const re2 = new RegExp(regexJs.escape("https://www.google.com/"), "gi");

  console.log(re1)
  console.log(re2)

  const re3 = regexJs.join([re1, re2]);
  console.log(re3)
})();