//Quick program to check if parentheses are balanced in a string
//

class ParenthesesChecker {
  types(){
    return {
      '[': {position: 'open', type: 'brace'},
      ']': {position: 'closed', type: 'brace'},
      '{': {position: 'open', type: 'curly'},
      '}': {position: 'closed', type: 'curly'},
      '(': {position: 'open', type: 'parentheses'},
      ')': {position: 'closed', type: 'parentheses'},
    };
  }

  check(string){
    let types = this.types();
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
}

let checker = new ParenthesesChecker();
console.log(checker.check("{}()"));
console.log(checker.check("{})"));
console.log(checker.check("[]{}()"));
console.log(checker.check("[{}]()"));
