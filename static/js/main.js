//메뉴바 클릭 시 섹션 별 이동
function scrollToSection2() {
  const section2 = document.getElementById("section2");
  section2.scrollIntoView({ behavior: "smooth" });

  //1초 텀주고 생성요약박스 확대 추출요약박스 축소
  setTimeout(function () {
    var section2Box = document.querySelector(".section2-total:first-child");
    var section2Box2 = document.querySelector(".section2-total:nth-child(2)");
    section2Box.classList.add("zoomed");
    section2Box2.classList.add("zoomed");
  }, 1200);
}

function scrollToSection3() {
  const section2 = document.getElementById("section3");
  section2.scrollIntoView({ behavior: "smooth" });

  //1초 텀주고 확대
  setTimeout(function () {
    var section3Box = document.querySelector(".section3-contianer-box");

    section3Box.classList.add("zoomed");
  }, 1200);
}

function changeValue() {
  console.log("heelldldldl");
  var choice = document.getElementById("select");
  var mychoice = choice.options[choice.selectedIndex].value;
  //var mychoice = choice.value;

  if (mychoice === "본문") {
    //window.location.href = "/";
  } else if (choice === "뉴스") {
    //window.location.href = "article.html";
  }
}

window.onload = function () {
  //chat.html 에서 우측 버튼 클릭 시 스크롤링
  var params = new URLSearchParams(window.location.search);
  var value = params.get("value");
  if (value === "2") {
    scrollToSection2();
  } else if (value === "3") {
    scrollToSection3();
  }

  var select = document.getElementById("select");
  select.addEventListener("change", function () {
    changeValue();
  });
};

//스크롤 내려서 영역 도달하면 Procedure 부분 확대
window.addEventListener("scroll", function () {
  var section3 = document.getElementById("section3-contianer-box");
  var scrollPosition = window.scrollY || window.pageYOffset;
  var sectionOffsetTop = section3.offsetTop;
  var windowHeight = window.innerHeight;

  if (scrollPosition > sectionOffsetTop - windowHeight) {
    //1초 텀주고 확대
    setTimeout(function () {
      section3.classList.add("zoomed");
    }, 1000);
  } else {
    section3.classList.remove("zoomed");
  }
});
