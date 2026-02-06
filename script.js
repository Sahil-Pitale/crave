// Add to cart
function add() {
  alert("Thank you For Ordering 😊");
}

// Reservation validation
function rev() {
  let Name = document.getElementById("name").value;
  let people = document.getElementById("people").value;
  let date = document.getElementById("date").value;

  if (Name === "") {
    alert("Please Fill Name Section");
    return false;
  }

  if (people === "") {
    alert("Please Fill People Section");
    return false;
  }

  if (date === "") {
    alert("Please Select Date");
    return false;
  }

  alert("Your Seats Are Reserved ✅");
  return true;
}

// Food filter
function filterFood(category, btn) {
  let cards = document.querySelectorAll(".card");
  let buttons = document.querySelectorAll(".filter button");

  buttons.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  cards.forEach(card => {
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Loader logic 
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader-container");

  // small delay so loader is visible
  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 3600); // loader visible for 1 second
});

//add to cart
function addToCart(name, price){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let found = cart.find(item => item.name === name);

  if(found){
    found.qty++;
  }else{
    cart.push({name, price, qty:1});
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to Cart 🛒");
}
