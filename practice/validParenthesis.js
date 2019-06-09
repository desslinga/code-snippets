/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let sl = stack[stack.length - 1], si = s[i];
    if (si === '[' || si === '(' || si === '{') stack.push(si)
    else if ((si === ']' && sl !== '[') ||
             (si === ')' && sl !== '(') ||
             (si === '}' && sl !== '{')) return false;
    else stack.pop();
  }
  return stack.length === 0;
};
