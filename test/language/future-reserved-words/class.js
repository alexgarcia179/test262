// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-identifiers-static-semantics-early-errors
es5id: 7.6.1.2_A1.5
description: Checking if execution of "class=1" fails
info: |
    Identifier : IdentifierName but not ReservedWord

    It is a Syntax Error if StringValue of IdentifierName is the same String
    value as the StringValue of any ReservedWord except for yield and await.
negative:
  phase: early
  type: SyntaxError
---*/

throw "Test262: This statement should not be evaluated.";

var class = 1;
