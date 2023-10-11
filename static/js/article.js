function changeValue() {
  console.log("heelldldldl");
  var choice = document.getElementById("select");
  var mychoice = choice.options[choice.selectedIndex].value;
  //var mychoice = choice.value;

  if (mychoice === "본문") {
    window.location.href = "/";
  } else if (choice === "뉴스") {
    //window.location.href = "article.html";
  }
}

function load() {
  var addHtml = "";
  var list = document.getElementById("list");
  var title = document.createElement("a");

  list.appendChild(title);
}

window.onload = function () {
  var select = document.getElementById("select");
  select.addEventListener("change", function () {
    changeValue();
  });

  function onClick() {
    document.querySelector(".popup-container").style.display = "block";
    document.querySelector(".shadow").style.display = "block";
    $(".shadow").show(); // 배경 어둡게
  }
  function offClick() {
    document.querySelector(".popup-container").style.display = "none";
    document.querySelector(".shadow").style.display = "none";
    $(".shadow").hide(); // 배경 어둡게 삭제
  }

  document.getElementById("summaryButton").addEventListener("click", onClick);
  document.querySelector(".close-button").addEventListener("click", offClick);
};
