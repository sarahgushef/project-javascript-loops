let iteration = 1;

// Do while loops
do {
  console.log(iteration);
  iteration += 5;
} while (iteration < 100);

// for loops
for (let index = 0; index <= 100; index += 10) {
  console.log(index);
}

const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23];

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  console.log(element);
}
