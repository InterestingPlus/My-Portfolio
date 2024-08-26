// ? Variables

const accountId = 144553; // Constant - Can'not Change Value
let accountEmail = "jatin@google.com"; // Block Scape
var accountPassword = "12345"; // Globle Scope
accountCity = "Ahmedabad"; // Possible but not Recomended!
let accountState;

console.log(
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState
);

// accountId = 236354; // Error
accountEmail = "new@google.com";
accountPassword = "54321";
accountCity = "Bangaluru";
accountState = "Gujarat";

/*
    Prefre not to use VAR
    Because of issue in Block Scope and Functional Scope...!
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

// ? Defference Between var, let, const
var a = "HTML";
let b = "CSS";
const c = "JavaScript";

// VAR
var a = "New"; // ✅
a = "New"; // ✅

// Let
// let b = "New" ❌
b = "New"; // ✅

// CONST
// const c = "New" ❌
// c = "New"; ❌
