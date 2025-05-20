grammar MiniLang;

// Reglas del parser
program: statement*;

statement
    : arrayDeclaration
    | forStatement
    | consoleStatement
    | assignmentStatement
    ;

arrayDeclaration
    : LET Identifier ASSIGN LBRACK expressionList? RBRACK SEMI
    ;

expressionList
    : expression (COMMA expression)*
    ;

forStatement
    : FOR LPAREN assignmentStatement SEMI expression SEMI assignmentStatement RPAREN block
    ;

assignmentStatement
    : Identifier ASSIGN expression
    ;

consoleStatement
    : CONSOLE DOT LOG LPAREN expression RPAREN SEMI
    ;

block
    : LBRACE statement* RBRACE
    ;

expression
    : expression op=(LT | GT | LE | GE | EQ | NEQ) expression   # RelExpr
    | expression op=(ADD | SUB) expression                     # AddSubExpr
    | expression op=(MUL | DIV) expression                     # MulDivExpr
    | Identifier LBRACK expression RBRACK                      # ArrayAccessExpr
    | Identifier                                               # IdExpr
    | Number                                                   # NumberExpr
    | LPAREN expression RPAREN                                 # ParensExpr
    ;

term
    : Identifier
    | Number
    | LPAREN expression RPAREN
    ;

// Reglas del lexer
LET: 'let';
FOR: 'for';
CONSOLE: 'console';
LOG: 'log';
DOT: '.';
SEMI: ';';
COMMA: ',';
ASSIGN: '=';
LBRACK: '[';
RBRACK: ']';
LBRACE: '{';
RBRACE: '}';
LPAREN: '(';
RPAREN: ')';

ADD: '+';
SUB: '-';
MUL: '*';
DIV: '/';
LT : '<';
GT : '>';
LE : '<=';
GE : '>=';
EQ : '==';
NEQ: '!=';

Identifier: [a-zA-Z] [a-zA-Z0-9_]*;
Number: [0-9]+;

WS: [ \t\r\n]+ -> skip;