var johnSnowAttack = 25;
var jamieLannisterAttack = 35;

if (johnSnowAttack < jamieLannisterAttack) {
  console.log("Jamie Lannister has better attack than John Snow.");
} else if (johnSnowAttack < jamieLannisterAttack) {
  console.log("John Snow has a better attack than Jamie Lannister");
} else {
  console.log("John Snoe and Jamie Lannister have the same attack");
}

var johnSnowHealth = 100;
var johnSnowDefence = 0;

if (johnSnowHealth - jamieLannisterAttack <= 0) {
  console.log("John Snow is dead... for now.");
} else {
  johnSnowHealth -= jamieLannisterAttack;
  console.log(
    `Oof, John takes a brutal hit! His health is now ${johnSnowHealth}!`
  );
}

johnSnowDefence += 25;

if (johnSnowHealth <= jamieLannisterAttack - johnSnowDefence) {
  console.log("John Snow is dead... for now.");
} else {
  johnSnowHealth -= jamieLannisterAttack - johnSnowAttack;
  console.log(
    `John takes a hit, but his shield takes most of the attack! His health is now ${johnSnowHealth}!`
  );
}

//This is a change!

// You can declare something with a null or undefined and
// then update its value down the code
// When working with a big problem its best to break it down
// into pseudo code
