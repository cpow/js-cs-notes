//Quick program to check if parentheses are balanced in a string
//

function parenthesesChecker(string) {
  let types = {
      '[': {position: 'open', type: 'brace'},
      ']': {position: 'closed', type: 'brace'},
      '{': {position: 'open', type: 'curly'},
      '}': {position: 'closed', type: 'curly'},
      '(': {position: 'open', type: 'parentheses'},
      ')': {position: 'closed', type: 'parentheses'},
    };

  let currentStack = [];

  for(let i = 0; i < string.length; i++){
    let currentBrace = string[i];
    let braceInfo = types[currentBrace];

    if (braceInfo.position === 'closed'){
      let lastBrace = currentStack.pop();

      if (!(lastBrace)){
        return false;
      }
      if (!(lastBrace.position === 'open' && lastBrace.type === braceInfo.type)){
        return false;
      }

    } else {
      currentStack.push(braceInfo);
    }
  }

  return !currentStack.length;
}

console.log(parenthesesChecker("{}()"));
console.log(parenthesesChecker("{})"));
console.log(parenthesesChecker("[]{}()"));
console.log(parenthesesChecker("[{}]()"));
