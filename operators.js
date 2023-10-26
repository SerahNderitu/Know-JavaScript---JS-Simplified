// + concate/combine/merge strings
  "1" + "1" = "11"

// used in numbers for addition-->
   5 + 4; // 9

// strict operator
  1 === 1 // true

// but
  1 === "1"  // false

// with loosey-goosey operator
  1 == 1  // true

  1 == "1"  // true which is wrong. JS converts them to the same type, to look the same.

// examples unary operator. They have only one operand 
    -1, +1, !5

// binary operators 
    5 + 4  // 9

// ternary operators

    let feeling = taste === "yummy" ? "happy": "sad";

// Is a shorthand way to write this code 
  if(taste === "yummy") {
      mood = "happy";
  }else{
    mood = "sad";
};
