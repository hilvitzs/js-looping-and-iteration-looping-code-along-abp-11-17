// Code your solutions in this file
function printBadges(names) {
  for(let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`)
  }

  return names;
}

function maybeTails() {
  Math.random() >= 5;
}

while (maybeTails()) {
  let times = 1;
  times++;
}
