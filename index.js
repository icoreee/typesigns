function copyToClipboard(value) {
  const element = document.createElement("textarea");

  element.value = value;
  document.body.appendChild(element);
  element.select();
  document.execCommand("copy");
  document.body.removeChild(element);
}

function search(regex) {
  console.log(regex);
  const items = document.querySelectorAll(".title");
  for (let item of items) {
    if (item.innerHTML.match(new RegExp(regex, "i")) == null) {
      item.parentElement.style.display = "none";
    } else {
      item.parentElement.style.display = null;
    }
  }

  if (document.querySelector(".search-form input").value == "") {
    document.querySelector(".search-form button").style.display = "none";
  } else {
    document.querySelector(".search-form button").style = null;
  }
}

function resetSearch() {
  let input = document.querySelector(".search-form input");
  input.value = null;
  input.focus();
  search();
}

const cards = Array.from(document.querySelectorAll(".card"));

cards.forEach(function (card) {
  const value = card.dataset.value;

  let initialValue = card.querySelector(".title").innerHTML;

  card.addEventListener("click", () => {
    copyToClipboard(value);
    card.querySelector(".title").innerHTML = "скопировано";
  });

  card.addEventListener("mouseleave", function () {
    card.querySelector(".title").innerHTML = initialValue;
  });
});
