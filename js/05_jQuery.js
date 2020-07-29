
// jQuery CDN 을 이용 했기 때문에 jQuery code 를 사용할 수 있어요!!

// button 을 클릭 하면 아래의 함수가 호출 돼요!
function my_func() {
    // 0. jQuery 를 공부할 때 가장 먼저 배워야 하는 건.. selector
    // 1. 전체 선택자 ( universal selector ) => *
    // $("*").css("color","red")   // 제이쿼리를 사용해서 모든 엘리먼트 다 선택하고 스타일 바꿔라
    // 2. 태그 선택자 ( tag selector )
    // $("li").remove() // 제이쿼리 사용해서 li 태그 지워라
    // 3. 아이디 선택자 ( id selector )
    // $("#haha").text("제주")        // 인자가 없으면 값을 알아 오라는 의미
                                      // 인자가 있으면 값을 변경 하라는 의미
    // 4. 클래스 선택자 ( class selector )
    // $(".region").css("background-color","yellow")
    // 5. 구조 선택자 (자식 선택자, 후손 선택자)
    // $("ol > *").css("color","steelblue")  // 제이쿼리 사용 해서 ol 의 자식 으로 있는거 다 선택 해라
    // $("div li").css("color","pink")       // 공백 => 후손 : 제이쿼리 사용 해서 div 의 후손인 li 선택해
    // 6. 구조 선택자 ( 형제 선택자 )
    // $("#haha + li").remove()              // + => 바로 뒤에 나오는 딱 하나
    // $("#hong ~ li").remove()              // ~ => 그 뒤에 나오는거 싹 다
    // 7. 속성 선택자
    // $("[id]").css("color","yellow")       // [] => 속성을 의미
    // 이 7가지를 조합 하면 웬만한 element 는 지정 하는게 가능!!
    //
    }