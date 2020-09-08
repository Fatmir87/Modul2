// Custom Event
const headerTag = document.getElementById("number");

headerTag.addEventListener("numberChanged", function (e) {
  headerTag.textContent = e.detail.number;
  headerTag.style.color = e.detail.textColor;
});
document.querySelector("#button1").addEventListener("click", () => {
  const event = new CustomEvent("numberChanged", {
    detail: {
      number: document.querySelector("#numberInput").value,
      textColor: document.querySelector("#textInput1").value,
    },
  });
  document.addEventListener("numberChanged", function (e) {
    document.querySelector("#number").innerHTML = e.detail.number;
    document.querySelector("#number").style.color = e.detail.textColor;
  });
  document.dispatchEvent(event);
});
function changeNumber(n, c) {
  const event = new CustomEvent("numberChanged", {
    detail: {
      number: n,
      textColor: c,
    },
  });

  headerTag.dispatchEvent(event);
}

// Global variabel
carName = "Toyota";
(function () {
  document.getElementById("modul2").innerHTML = "I can display " + carName;

  // Assignment with &&
  var myAge = 17;
  document.getElementById("button").addEventListener("click", () => {
    if (myAge >= 18 && myAge <= 99) {
      document.getElementById("para1").innerHTML = "You can drive this car";
    } else {
      document.getElementById("para1").innerHTML =
        "You dont have a driver license";
    }
  });
})();
