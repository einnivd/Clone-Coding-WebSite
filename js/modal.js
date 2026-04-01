// function(){} 과 ()=>{} 는 같다.
window.addEventListener("load", function () {
  // 모달창 닫기
  const modalWrap = this.document.querySelector(".modal-wrap");
  const modalClose = this.document.querySelector(".modalClose");
  //  modalClose.addEventListener("이벤트" , function(){행동});
  // "이벤트"를 할 경우에 {행동}한다.
  modalClose.addEventListener("click", function () {
    modalWrap.style.display = "none";
  });
  // gotop 스크롤 이벤트
  // 변수 선언
  const gotop = this.document.querySelector("#gotop");
  // if(조건){조건에 부합할 때 하는 행동}
  // else{조건에 부합하지 않을 때 하는 행동}
  this.window.addEventListener("scroll", () => {
    if (this.document.documentElement.scrollTop > 1000) {
      gotop.style.display = "block";
    } else {
      gotop.style.display = "none";
    }
  });
  // gotop버튼 클릭시 위로 스크롤
  gotop.addEventListener("click", () => {
    this.window.scrollTo({
      top: 0,
      // behavior: "smooth"
    });
  });
});
