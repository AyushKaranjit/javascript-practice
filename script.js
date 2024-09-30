// // your JavaScript file
// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// container.appendChild(content);

// const text = document.createElement("p");
// text.classList.add("text");
// text.textContent = "Hey I’m red!";
// text.style.color = "red";

// container.appendChild(text);

// const text2 = document.createElement("h3");
// text2.classList.add("h3");
// text2.textContent = "I’m a blue h3!";
// text2.style.color = "blue";

// container.appendChild(text2);

// const content2 = document.createElement("div");

// content2.classList.add("content2");
// content2.style.border = "1px solid black";
// content2.style.backgroundColor = "pink";
// content2.style.marginBottom = "10px";

// container.appendChild(content2);

// const text3 = document.createElement("h1");
// text3.classList.add("h1");
// text3.textContent = "I’m in a div";

// const text4 = document.createElement("p");
// text4.classList.add("p");
// text4.textContent = "ME TOO!";

// content2.appendChild(text3);
// content2.appendChild(text4);

// // the JavaScript file
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", function (e) {
//   console.log(e);
//   console.log(e.target);
//   e.target.style.background = "blue";
// });

// // buttons is a node list. It looks and acts much like an array.
// const buttons = document.querySelectorAll("button");

// // we use the .forEach method to iterate through each button
// buttons.forEach((button) => {
//   // and for each one we add a 'click' listener
//   button.addEventListener("click", () => {
//     alert(button.id);
//   });
// });

// const arr = [1, 2, 3, 4, 5];
// const mappedArr = arr.map((num) => num + 1);
// console.log(mappedArr); // Outputs [2, 3, 4, 5, 6]

// // The original array has not been changed!
// console.log(arr); // Outputs [1, 2, 3, 4, 5]

// const arr = [1, 2, 3, 4, 5];
// const oddNums = arr.filter((num) => num % 2 !== 0);
// console.log(oddNums); // Outputs [1, 3, 5];
// console.log(arr); // Outputs [1, 2, 3, 4, 5], original array is not affected

// const arr = [1, 2, 3, 4, 5];
// const productOfAllNums = arr.reduce((total, testetest) => {
//   return total * testetest;
// }, 1);
// console.log(productOfAllNums); // Outputs 120;
// console.log(arr); // Outputs [1, 2, 3, 4, 5]

// function sumOfTripledEvens(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     // Step 1: If the element is an even number
//     if (array[i] % 2 === 0) {
//       // Step 2: Multiply this number by three
//       const tripleEvenNumber = array[i] * 3;

//       // Step 3: Add the new number to the total
//       sum += tripleEvenNumber;
//     }
//   }
//   return sum;
// }

// console.log(sumOfTripledEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 90
// console.log(sumOfTripledEvens([1, 3, 5, 7, 9])); // 0

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sumOfTripledEvens = arr
//   .filter((num) => num % 2 === 0)
//   .map((num) => num * 3)
//   .reduce((total, num) => total + num, 0);
// console.log(sumOfTripledEvens); // Outputs 90
// console.log(arr); // Outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
