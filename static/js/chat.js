function changeValue() {
  var choice = document.getElementById("select");
  var mychoice = choice.options[choice.selectedIndex].value;
  //var mychoice = choice.value;

  if (mychoice === "본문") {
    //window.location.href = "/";
  } else if (mychoice === "뉴스") {
    window.location.href = "/article";
  }
}

var test_type = 0;
/*
 * type
 *      0 : mytalk
 *      1 : othertalk
 */
function showMessage(type, name, msg) {
  var container = document.getElementById("main-container");
  var container_msg = container.getElementsByClassName("chat")[0];

  var newmsg = document.createElement("div");
  var newblank = document.createElement("div");

  if (type) {
    if (msg.length < 30) {
      //showArticle(name, msg);
      //'<div class="othertalk-container" style="display:flex;">\n'

      newmsg.className = "othertalk";
      newmsg.innerHTML =
        '<div class="box">\n' +
        '<div class="profile_name">\n' +
        name +
        "\n" +
        "</div>\n" +
        '<div class="a">\n' +
        "</div>\n" +
        '<div class="b">\n' +
        "긴 원문을 입력해주세요.\n" +
        "\n" +
        "</div>\n" +
        "</div>\n";
      /*
      newmsg.innerHTML =
        '<div class="box" style="width:40%;">\n' +
        '<div class="profile_name">\n' +
        name +
        "\n" +
        "</div>\n" +
        '<div class="a">\n' +
        "</div>\n" +
        '<div class="b" style="padding:0; overflow: hidden;">\n' +
        '<div class="btn-container">\n' +
        '<button type="button" class="summarization-btn" onclick="articleSumm()">긴 원문을 입력해주세요</button>\n' +
        '<button type="button" class="articleUrl-btn" onclick="goToWeb()">원문 보기</button>\n' +
        "</div>\n" +
        "</div>\n";
        */
    } else {
      newmsg.className = "othertalk";
      newmsg.innerHTML =
        '<div class="box">\n' +
        '<div class="profile_name">\n' +
        name +
        "\n" +
        "</div>\n" +
        '<div class="a">\n' +
        "</div>\n" +
        '<div class="b">\n' +
        msg +
        "\n" +
        "</div>\n" +
        "</div>\n";
    }
  } else {
    newmsg.className = "mytalk";
    newmsg.innerHTML =
      '<div class="b">\n' +
      "</div>\n" +
      '<div class="a">\n' +
      msg +
      "\n" +
      "</div>\n" +
      "";

    //if (msg.length > 0) {
    //var url = "/chat?message=" + encodeURIComponent(msg);
    //var xhr = new XMLHttpRequest();
    //xhr.open("GET", url);
    //xhr.send();
    //}
  }

  /*newmsg.innerHTML +=
            "<div class=\"clear\">\n"+
            "</div>";*/

  newblank.className = "blank";

  container_msg.appendChild(newmsg);
  container_msg.appendChild(newblank);

  container_msg.scrollTop = container_msg.scrollHeight;
}

/*function showArticle(name, msg) {
          newmsg.className = "othertalk";
          newmsg.innerHTML =
            '<div class="box">\n' +
            '<div class="profile_name">\n' +
            name +
            "\n" +
            "</div>\n" +
            '<div class="a">\n' +
            "</div>\n" +
            '<div class="b">\n' +
            '<img src="{{value}}" />\n' +
            msg +
            "\n" +
            "</div>\n" +
            "</div>\n";
        }*/
function sendMessage() {
  var mes = document.getElementById("reply-text").value;

  //test_type ^= 0x01;
  showMessage(0, "summary", mes.replace("\n", "<br />\n"));
  //document.getElementById("reply-text").value = "";

  loadingStart();

  //1분 텀
  setTimeout(function () {
    loadingStop();

    if (mes === "뉴스" || mes.split(",")[0] === "문서" || mes.length > 0) {
      //showMessage(1, "summary", mes.replace("\n", "<br />\n"));

      //loadingStop();

      document.getElementById("reply-text").value = "";
      //document.getElementById("filebox").submit();
    }
    console.log("1초가 지났습니다.");
  }, 100000);
}

/* fetch 쓰기 전 form 사용했을 때
$(document).ready(function() {

  var value = {{ value | tojson }};
  var chatSumm = {{ chatSumm | tojson }};

  var my = document.getElementById("mytalk-a");
  var other = document.getElementById("othertalk-b");
  //my.textContent = value;
  //other.textContent = chatSumm;
  //my.style.display = "block";
  //other.style.display = "block";
  //$(".mytalk").show();
  //$(".othertalk").show();
  if (value !== null && value !== undefined && value !== '') {
    my.textContent = value;
    $(".mytalk").show();
}

if (chatSumm !== null && chatSumm !== undefined && chatSumm !== '' && value !== '') {
 if(value.length <= 60){
   other.textContent = "긴 원문을 입력해주세요.";
 }else{
   other.textContent = chatSumm;
 }
    $(".othertalk").show();
}

});
*/

//우측 abstractive 클릭 시 페이지 이동 후 스크롤링
function goToAbstractive() {
  var value = 2; // 전달할 값
  var url = "/?value=" + value; // URL에 값 추가
  window.history.pushState(null, null, url);
  window.location.href = url; // 페이지 이동
}

//우측 model 클릭 시 페이지 이동 후 스크롤링
function goToModel() {
  var value = 3; // 전달할 값
  var url = "/?value=" + value; // URL에 값 추가
  window.history.pushState(null, null, url);
  window.location.href = url; // 페이지 이동
}

/* 로딩 화면*/
function loadingStart() {
  if (document.getElementById("wfLoading")) {
    return;
  }
  var ele = document.createElement("div");
  ele.setAttribute("id", "wfLoading");
  ele.classList.add("loading-layer");
  ele.innerHTML =
    '<span class="loading-wrap"><span class="loading-text"><span>.</span><span>.</span><span>.</span></span></span>';
  document.body.append(ele);

  // Animation
  ele.classList.add("active-loading");
}
function loadingStop() {
  var ele = document.getElementById("wfLoading");
  if (ele) {
    ele.remove();
  }
}
/* 로딩 화면 끝 */

//fetch - 텍스트 서버 송신 및 수신
const replyText = document.querySelector("#reply-text");
const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", async function () {
  showMessage(0, "summary", replyText.value.replace("\n", "<br />\n"));

  //로딩 화면
  loadingStart();

  // form Data 객체 생성
  const formData = new FormData();
  formData.append("input1", replyText.value);

  replyText.value = "";

  // fetch를 사용해 서버로 데이터 전송
  try {
    const res = await fetch("/process_data", {
      method: "POST",
      body: formData,
    });

    const response = await res.json();

    //서버에서 받은 데이터
    let receiveValue = response.input1;

    loadingStop();

    // 서버에서 받은 데이터를 HTML에 삽입
    //resultDiv.textContent = "서버에서 받은 데이터: " + response.input1;
    showMessage(1, "summary", receiveValue.replace("\n", "<br />\n"));

    //resultDiv.appendChild(newDiv);

    console.log("서버에서 받은 데이터: " + response.input1);
  } catch (error) {
    console.error("요청 실패:", error);
  }
});
