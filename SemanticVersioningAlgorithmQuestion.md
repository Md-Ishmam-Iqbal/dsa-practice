# Semantic Versioning Algorithm Question

## Problem Statement

You are given an array of version strings representing semantic versions. Each version string consists of three non-negative integers separated by dots, representing the major, minor, and patch versions respectively. Your task is to implement a function `semanticVersioning` to find and return the highest version according to semantic versioning rules.

Feel free to look up the semantic versioning rules.
The semantic_versioning.test.js file has some examples for inputs and outputs.

## Function Signature

```javascript
/**
 * Finds and returns the highest version according to semantic versioning rules.
 * @param {string[]} input - An array of version strings.
 * @returns {string} - The highest version.
 */
function semanticVersioning(input) {
  // Your implementation here
}
```

## Constraints

- The input array contains at most 10^4 elements.
- Each version string consists of three non-negative integers separated by dots.
- The major, minor, and patch numbers are non-negative integers less than 10^4.
- All versions follow semantic versioning rules.

## My Solution

You can find my solution in the file semantic_versioning_solution.js and it is tested in the semantic_versioning.test.js. Feel free to add your own tests to identify fail cases and let me know. In the same light, any observation that can improve the algorithm would be greatly appreciated.
