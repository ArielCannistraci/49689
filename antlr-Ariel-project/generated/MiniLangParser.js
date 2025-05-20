// Generated from c:/Users/Ariel/Desktop/49689/antlr-Ariel-project/MiniLang.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiniLangListener from './MiniLangListener.js';
import MiniLangVisitor from './MiniLangVisitor.js';

const serializedATN = [4,1,27,118,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,5,0,22,8,0,10,0,12,0,25,9,
0,1,1,1,1,1,1,1,1,3,1,31,8,1,1,2,1,2,1,2,1,2,1,2,3,2,38,8,2,1,2,1,2,1,2,
1,3,1,3,1,3,5,3,46,8,3,10,3,12,3,49,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,5,7,75,8,
7,10,7,12,7,78,9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
8,3,8,94,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,105,8,8,10,8,12,8,108,
9,8,1,9,1,9,1,9,1,9,1,9,1,9,3,9,116,8,9,1,9,0,1,16,10,0,2,4,6,8,10,12,14,
16,18,0,3,1,0,19,24,1,0,15,16,1,0,17,18,122,0,23,1,0,0,0,2,30,1,0,0,0,4,
32,1,0,0,0,6,42,1,0,0,0,8,50,1,0,0,0,10,60,1,0,0,0,12,64,1,0,0,0,14,72,1,
0,0,0,16,93,1,0,0,0,18,115,1,0,0,0,20,22,3,2,1,0,21,20,1,0,0,0,22,25,1,0,
0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,1,1,0,0,0,25,23,1,0,0,0,26,31,3,4,2,0,
27,31,3,8,4,0,28,31,3,12,6,0,29,31,3,10,5,0,30,26,1,0,0,0,30,27,1,0,0,0,
30,28,1,0,0,0,30,29,1,0,0,0,31,3,1,0,0,0,32,33,5,1,0,0,33,34,5,25,0,0,34,
35,5,8,0,0,35,37,5,9,0,0,36,38,3,6,3,0,37,36,1,0,0,0,37,38,1,0,0,0,38,39,
1,0,0,0,39,40,5,10,0,0,40,41,5,6,0,0,41,5,1,0,0,0,42,47,3,16,8,0,43,44,5,
7,0,0,44,46,3,16,8,0,45,43,1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,0,
0,0,48,7,1,0,0,0,49,47,1,0,0,0,50,51,5,2,0,0,51,52,5,13,0,0,52,53,3,10,5,
0,53,54,5,6,0,0,54,55,3,16,8,0,55,56,5,6,0,0,56,57,3,10,5,0,57,58,5,14,0,
0,58,59,3,14,7,0,59,9,1,0,0,0,60,61,5,25,0,0,61,62,5,8,0,0,62,63,3,16,8,
0,63,11,1,0,0,0,64,65,5,3,0,0,65,66,5,5,0,0,66,67,5,4,0,0,67,68,5,13,0,0,
68,69,3,16,8,0,69,70,5,14,0,0,70,71,5,6,0,0,71,13,1,0,0,0,72,76,5,11,0,0,
73,75,3,2,1,0,74,73,1,0,0,0,75,78,1,0,0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,
79,1,0,0,0,78,76,1,0,0,0,79,80,5,12,0,0,80,15,1,0,0,0,81,82,6,8,-1,0,82,
83,5,25,0,0,83,84,5,9,0,0,84,85,3,16,8,0,85,86,5,10,0,0,86,94,1,0,0,0,87,
94,5,25,0,0,88,94,5,26,0,0,89,90,5,13,0,0,90,91,3,16,8,0,91,92,5,14,0,0,
92,94,1,0,0,0,93,81,1,0,0,0,93,87,1,0,0,0,93,88,1,0,0,0,93,89,1,0,0,0,94,
106,1,0,0,0,95,96,10,7,0,0,96,97,7,0,0,0,97,105,3,16,8,8,98,99,10,6,0,0,
99,100,7,1,0,0,100,105,3,16,8,7,101,102,10,5,0,0,102,103,7,2,0,0,103,105,
3,16,8,6,104,95,1,0,0,0,104,98,1,0,0,0,104,101,1,0,0,0,105,108,1,0,0,0,106,
104,1,0,0,0,106,107,1,0,0,0,107,17,1,0,0,0,108,106,1,0,0,0,109,116,5,25,
0,0,110,116,5,26,0,0,111,112,5,13,0,0,112,113,3,16,8,0,113,114,5,14,0,0,
114,116,1,0,0,0,115,109,1,0,0,0,115,110,1,0,0,0,115,111,1,0,0,0,116,19,1,
0,0,0,9,23,30,37,47,76,93,104,106,115];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiniLangParser extends antlr4.Parser {

    static grammarFileName = "MiniLang.g4";
    static literalNames = [ null, "'let'", "'for'", "'console'", "'log'", 
                            "'.'", "';'", "','", "'='", "'['", "']'", "'{'", 
                            "'}'", "'('", "')'", "'+'", "'-'", "'*'", "'/'", 
                            "'<'", "'>'", "'<='", "'>='", "'=='", "'!='" ];
    static symbolicNames = [ null, "LET", "FOR", "CONSOLE", "LOG", "DOT", 
                             "SEMI", "COMMA", "ASSIGN", "LBRACK", "RBRACK", 
                             "LBRACE", "RBRACE", "LPAREN", "RPAREN", "ADD", 
                             "SUB", "MUL", "DIV", "LT", "GT", "LE", "GE", 
                             "EQ", "NEQ", "Identifier", "Number", "WS" ];
    static ruleNames = [ "program", "statement", "arrayDeclaration", "expressionList", 
                         "forStatement", "assignmentStatement", "consoleStatement", 
                         "block", "expression", "term" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiniLangParser.ruleNames;
        this.literalNames = MiniLangParser.literalNames;
        this.symbolicNames = MiniLangParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 8:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 7);
    		case 1:
    			return this.precpred(this._ctx, 6);
    		case 2:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiniLangParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 33554446) !== 0)) {
	            this.state = 20;
	            this.statement();
	            this.state = 25;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiniLangParser.RULE_statement);
	    try {
	        this.state = 30;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 26;
	            this.arrayDeclaration();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 27;
	            this.forStatement();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 28;
	            this.consoleStatement();
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 29;
	            this.assignmentStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrayDeclaration() {
	    let localctx = new ArrayDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiniLangParser.RULE_arrayDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(MiniLangParser.LET);
	        this.state = 33;
	        this.match(MiniLangParser.Identifier);
	        this.state = 34;
	        this.match(MiniLangParser.ASSIGN);
	        this.state = 35;
	        this.match(MiniLangParser.LBRACK);
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 100671488) !== 0)) {
	            this.state = 36;
	            this.expressionList();
	        }

	        this.state = 39;
	        this.match(MiniLangParser.RBRACK);
	        this.state = 40;
	        this.match(MiniLangParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionList() {
	    let localctx = new ExpressionListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiniLangParser.RULE_expressionList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.expression(0);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 43;
	            this.match(MiniLangParser.COMMA);
	            this.state = 44;
	            this.expression(0);
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forStatement() {
	    let localctx = new ForStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiniLangParser.RULE_forStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(MiniLangParser.FOR);
	        this.state = 51;
	        this.match(MiniLangParser.LPAREN);
	        this.state = 52;
	        this.assignmentStatement();
	        this.state = 53;
	        this.match(MiniLangParser.SEMI);
	        this.state = 54;
	        this.expression(0);
	        this.state = 55;
	        this.match(MiniLangParser.SEMI);
	        this.state = 56;
	        this.assignmentStatement();
	        this.state = 57;
	        this.match(MiniLangParser.RPAREN);
	        this.state = 58;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentStatement() {
	    let localctx = new AssignmentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiniLangParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(MiniLangParser.Identifier);
	        this.state = 61;
	        this.match(MiniLangParser.ASSIGN);
	        this.state = 62;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	consoleStatement() {
	    let localctx = new ConsoleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiniLangParser.RULE_consoleStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(MiniLangParser.CONSOLE);
	        this.state = 65;
	        this.match(MiniLangParser.DOT);
	        this.state = 66;
	        this.match(MiniLangParser.LOG);
	        this.state = 67;
	        this.match(MiniLangParser.LPAREN);
	        this.state = 68;
	        this.expression(0);
	        this.state = 69;
	        this.match(MiniLangParser.RPAREN);
	        this.state = 70;
	        this.match(MiniLangParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiniLangParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(MiniLangParser.LBRACE);
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 33554446) !== 0)) {
	            this.state = 73;
	            this.statement();
	            this.state = 78;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 79;
	        this.match(MiniLangParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 16;
	    this.enterRecursionRule(localctx, 16, MiniLangParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ArrayAccessExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 82;
	            this.match(MiniLangParser.Identifier);
	            this.state = 83;
	            this.match(MiniLangParser.LBRACK);
	            this.state = 84;
	            this.expression(0);
	            this.state = 85;
	            this.match(MiniLangParser.RBRACK);
	            break;

	        case 2:
	            localctx = new IdExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 87;
	            this.match(MiniLangParser.Identifier);
	            break;

	        case 3:
	            localctx = new NumberExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 88;
	            this.match(MiniLangParser.Number);
	            break;

	        case 4:
	            localctx = new ParensExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 89;
	            this.match(MiniLangParser.LPAREN);
	            this.state = 90;
	            this.expression(0);
	            this.state = 91;
	            this.match(MiniLangParser.RPAREN);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 106;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 104;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new RelExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MiniLangParser.RULE_expression);
	                    this.state = 95;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 96;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 33030144) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 97;
	                    this.expression(8);
	                    break;

	                case 2:
	                    localctx = new AddSubExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MiniLangParser.RULE_expression);
	                    this.state = 98;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 99;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===15 || _la===16)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 100;
	                    this.expression(7);
	                    break;

	                case 3:
	                    localctx = new MulDivExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MiniLangParser.RULE_expression);
	                    this.state = 101;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 102;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===17 || _la===18)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 103;
	                    this.expression(6);
	                    break;

	                } 
	            }
	            this.state = 108;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MiniLangParser.RULE_term);
	    try {
	        this.state = 115;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 109;
	            this.match(MiniLangParser.Identifier);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 110;
	            this.match(MiniLangParser.Number);
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 111;
	            this.match(MiniLangParser.LPAREN);
	            this.state = 112;
	            this.expression(0);
	            this.state = 113;
	            this.match(MiniLangParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiniLangParser.EOF = antlr4.Token.EOF;
MiniLangParser.LET = 1;
MiniLangParser.FOR = 2;
MiniLangParser.CONSOLE = 3;
MiniLangParser.LOG = 4;
MiniLangParser.DOT = 5;
MiniLangParser.SEMI = 6;
MiniLangParser.COMMA = 7;
MiniLangParser.ASSIGN = 8;
MiniLangParser.LBRACK = 9;
MiniLangParser.RBRACK = 10;
MiniLangParser.LBRACE = 11;
MiniLangParser.RBRACE = 12;
MiniLangParser.LPAREN = 13;
MiniLangParser.RPAREN = 14;
MiniLangParser.ADD = 15;
MiniLangParser.SUB = 16;
MiniLangParser.MUL = 17;
MiniLangParser.DIV = 18;
MiniLangParser.LT = 19;
MiniLangParser.GT = 20;
MiniLangParser.LE = 21;
MiniLangParser.GE = 22;
MiniLangParser.EQ = 23;
MiniLangParser.NEQ = 24;
MiniLangParser.Identifier = 25;
MiniLangParser.Number = 26;
MiniLangParser.WS = 27;

MiniLangParser.RULE_program = 0;
MiniLangParser.RULE_statement = 1;
MiniLangParser.RULE_arrayDeclaration = 2;
MiniLangParser.RULE_expressionList = 3;
MiniLangParser.RULE_forStatement = 4;
MiniLangParser.RULE_assignmentStatement = 5;
MiniLangParser.RULE_consoleStatement = 6;
MiniLangParser.RULE_block = 7;
MiniLangParser.RULE_expression = 8;
MiniLangParser.RULE_term = 9;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniLangParser.RULE_program;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniLangVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniLangParser.RULE_statement;
    }

	arrayDeclaration() {
	    return this.getTypedRuleContext(ArrayDeclarationContext,0);
	};

	forStatement() {
	    return this.getTypedRuleContext(ForStatementContext,0);
	};

	consoleStatement() {
	    return this.getTypedRuleContext(ConsoleStatementContext,0);
	};

	assignmentStatement() {
	    return this.getTypedRuleContext(AssignmentStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniLangVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniLangParser.RULE_arrayDeclaration;
    }

	LET() {
	    return this.getToken(MiniLangParser.LET, 0);
	};

	Identifier() {
	    return this.getToken(MiniLangParser.Identifier, 0);
	};

	ASSIGN() {
	    return this.getToken(MiniLangParser.ASSIGN, 0);
	};

	LBRACK() {
	    return this.getToken(MiniLangParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(MiniLangParser.RBRACK, 0);
	};

	SEMI() {
	    return this.getToken(MiniLangParser.SEMI, 0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.enterArrayDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.exitArrayDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniLangVisitor ) {
	        return visitor.visitArrayDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniLangParser.RULE_expressionList;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniLangParser.COMMA);
	    } else {
	        return this.getToken(MiniLangParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.enterExpressionList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.exitExpressionList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniLangVisitor ) {
	        return visitor.visitExpressionList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ForStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniLangParser.RULE_forStatement;
    }

	FOR() {
	    return this.getToken(MiniLangParser.FOR, 0);
	};

	LPAREN() {
	    return this.getToken(MiniLangParser.LPAREN, 0);
	};

	assignmentStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignmentStatementContext);
	    } else {
	        return this.getTypedRuleContext(AssignmentStatementContext,i);
	    }
	};

	SEMI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniLangParser.SEMI);
	    } else {
	        return this.getToken(MiniLangParser.SEMI, i);
	    }
	};


	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(MiniLangParser.RPAREN, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.enterForStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.exitForStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniLangVisitor ) {
	        return visitor.visitForStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniLangParser.RULE_assignmentStatement;
    }

	Identifier() {
	    return this.getToken(MiniLangParser.Identifier, 0);
	};

	ASSIGN() {
	    return this.getToken(MiniLangParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.enterAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.exitAssignmentStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniLangVisitor ) {
	        return visitor.visitAssignmentStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConsoleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniLangParser.RULE_consoleStatement;
    }

	CONSOLE() {
	    return this.getToken(MiniLangParser.CONSOLE, 0);
	};

	DOT() {
	    return this.getToken(MiniLangParser.DOT, 0);
	};

	LOG() {
	    return this.getToken(MiniLangParser.LOG, 0);
	};

	LPAREN() {
	    return this.getToken(MiniLangParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(MiniLangParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(MiniLangParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.enterConsoleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.exitConsoleStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniLangVisitor ) {
	        return visitor.visitConsoleStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniLangParser.RULE_block;
    }

	LBRACE() {
	    return this.getToken(MiniLangParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(MiniLangParser.RBRACE, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniLangVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniLangParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class MulDivExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	MUL() {
	    return this.getToken(MiniLangParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(MiniLangParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.enterMulDivExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.exitMulDivExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniLangVisitor ) {
	        return visitor.visitMulDivExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiniLangParser.MulDivExprContext = MulDivExprContext;

class IdExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(MiniLangParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.enterIdExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.exitIdExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniLangVisitor ) {
	        return visitor.visitIdExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiniLangParser.IdExprContext = IdExprContext;

class NumberExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Number() {
	    return this.getToken(MiniLangParser.Number, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.enterNumberExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.exitNumberExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniLangVisitor ) {
	        return visitor.visitNumberExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiniLangParser.NumberExprContext = NumberExprContext;

class RelExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	LT() {
	    return this.getToken(MiniLangParser.LT, 0);
	};

	GT() {
	    return this.getToken(MiniLangParser.GT, 0);
	};

	LE() {
	    return this.getToken(MiniLangParser.LE, 0);
	};

	GE() {
	    return this.getToken(MiniLangParser.GE, 0);
	};

	EQ() {
	    return this.getToken(MiniLangParser.EQ, 0);
	};

	NEQ() {
	    return this.getToken(MiniLangParser.NEQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.enterRelExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.exitRelExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniLangVisitor ) {
	        return visitor.visitRelExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiniLangParser.RelExprContext = RelExprContext;

class ArrayAccessExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(MiniLangParser.Identifier, 0);
	};

	LBRACK() {
	    return this.getToken(MiniLangParser.LBRACK, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RBRACK() {
	    return this.getToken(MiniLangParser.RBRACK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.enterArrayAccessExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.exitArrayAccessExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniLangVisitor ) {
	        return visitor.visitArrayAccessExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiniLangParser.ArrayAccessExprContext = ArrayAccessExprContext;

class ParensExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(MiniLangParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(MiniLangParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.enterParensExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.exitParensExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniLangVisitor ) {
	        return visitor.visitParensExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiniLangParser.ParensExprContext = ParensExprContext;

class AddSubExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	ADD() {
	    return this.getToken(MiniLangParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(MiniLangParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.enterAddSubExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.exitAddSubExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniLangVisitor ) {
	        return visitor.visitAddSubExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiniLangParser.AddSubExprContext = AddSubExprContext;

class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniLangParser.RULE_term;
    }

	Identifier() {
	    return this.getToken(MiniLangParser.Identifier, 0);
	};

	Number() {
	    return this.getToken(MiniLangParser.Number, 0);
	};

	LPAREN() {
	    return this.getToken(MiniLangParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(MiniLangParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniLangListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniLangVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiniLangParser.ProgramContext = ProgramContext; 
MiniLangParser.StatementContext = StatementContext; 
MiniLangParser.ArrayDeclarationContext = ArrayDeclarationContext; 
MiniLangParser.ExpressionListContext = ExpressionListContext; 
MiniLangParser.ForStatementContext = ForStatementContext; 
MiniLangParser.AssignmentStatementContext = AssignmentStatementContext; 
MiniLangParser.ConsoleStatementContext = ConsoleStatementContext; 
MiniLangParser.BlockContext = BlockContext; 
MiniLangParser.ExpressionContext = ExpressionContext; 
MiniLangParser.TermContext = TermContext; 
