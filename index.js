'use strict';

const FLAGS = [
  "d", // hasIndices
  "g", // global
  "i", // ignoreCase
  "m", // multiline
  "s", // dotAll
  "u", // unicode
  "v", // unicodeSets
  "y", // sticky
]

function escapePattern(str) {
  return str.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&');
}

function joinRegExps(regexps) {
  const patterns = [];
  const flags = [];

  for (const re of regexps) {
    patterns.push(re.source);

    const _flags = re.flags.split("");
    for (const flag of _flags) {
      if (flag && flags.indexOf(flag) === -1) {
        flags.push(flag);
      }
    }
  }

  return RegExp(patterns.join("|"), flags.join(""));
}

export default {
  join: joinRegExps,
  escape: escapePattern,
}
