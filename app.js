// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

console.log(btns);

// loop over the btns nodeList and add an event listener to each button
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    //variable to store the class list of the currently selected element
    const styles = e.currentTarget.classList;
    //if the button class is 'decrease', decrease the counter; if its 'increase', increase the counter; if its neither of thsoe, reset the counter
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "#008000";
    }
    if (count < 0) {
      value.style.color = "#FF0000";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    // if (count === 0) {
    //   value.style.color = ;
    // }
    // if (count > 0) {
    //   value.style.color = ;
    // }
    // if (count < 0) {
    //   value.style.color = "#FF0000";
    // }

    // set the value to the count
    value.textContent = count;
  });
});
