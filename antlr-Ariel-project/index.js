import antlr4 from 'antlr4';
import fs from 'fs';
import  MiniLangLexer  from './generated/MiniLangLexer.js';
import  MiniLangParser  from './generated/MiniLangParser.js';

class SyntaxErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
    this.errors = [];
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    this.errors.push(`Línea ${line}, columna ${column}: ${msg}`);
  }
}

const input = fs.readFileSync('input.txt', 'utf8');
const chars = new antlr4.InputStream(input);
const lexer = new MiniLangLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MiniLangParser(tokens);

const errorListener = new SyntaxErrorListener();
parser.removeErrorListeners();
parser.addErrorListener(errorListener);

parser.buildParseTrees = true;
const tree = parser.program();

if (errorListener.errors.length > 0) {
  console.error("❌ Errores sintácticos:");
  errorListener.errors.forEach(err => console.error(err));
} else {
  console.log("✅ Entrada válida. Árbol:");
  console.log(tree.toStringTree(parser.ruleNames));
}
