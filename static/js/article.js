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

/*
혹시 모르니
<script>
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
    select.addEventListener("change", function() {
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

    document
      .getElementById("summaryButton")
      .addEventListener("click", onClick);
    document
      .querySelector(".close-button")
      .addEventListener("click", offClick);
  };



  function loadPage(url) {
    var titleArr2 = {{ titleArr2 | tojson }};
    var summary = {{ summary | tojson }};

    var iframe = document.getElementById("iframePage");
    var popupTitle = document.getElementById("popupTitle");
    var summResult = document.getElementById("summResult");


    iframe.src = url;

    //팝업창 기사 제목 추가
    var a = event.currentTarget;
    var dataIndex = a.getAttribute("data-index");
    //alert(dataIndex);
    popupTitle.innerText = titleArr2[dataIndex];
    summResult.innerText = summary[dataIndex];
  }

  //function botClick(newsSumm2){
  //      alert(newsSumm2);
  //  }

    //iframe 클릭 시 width 변경
    function iframeChangeWidth(){
      var page1 = document.querySelector('.page1');
      var page2 = document.querySelector('.page2');

      page1.style.width = '30%';
      page2.style.width = '70%';
    }

    //page1 클릭 시 width 변경
    function divChangeWidth(){
      var page1 = document.querySelector('.page1');
      var page2 = document.querySelector('.page2');

      page1.style.width = '50%';
      page2.style.width = '50%';
    }
</script>
*/
