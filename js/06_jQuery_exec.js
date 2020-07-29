
function print_text() {
    // 버튼을 눌렀을 때 실행할 코드를 기술 해요!
    // alert("호출 돼요!")
    console.log($("#apple").text())
    console.log($("#pineapple").text())
    console.log($("ul > li.myList").text())  // --> 클래스.로 찾아주기
    // console.log($("ul > li[class]").text()) --> 속성[]을 이용해서 찾아주기

    console.log($("input[type=text]").val())  // value

    console.log($("ol > li.myList:first").text())   // : -> 선택된 것
    console.log($("ol > li.myList:nth-child(1)").text())   // nth-child : n번째 형제 (1~3중)
    console.log($("ol > li.myList:first + li").text())  // + : 바로 다음에 나오는 형제
    console.log($("ol > li.myList:last").text())

    $("input[type=text]").attr("size",10)   // 사이즈 속성 변경
}

function my_func() {
    // alert("과일이 바뀌 었어요!")
    // select box 에서 과일이 바뀌면 실행 돼요!
    // 1. 선택한 과일이 어떤 과일인지 알아내야 해요!
    var fruit = $("select > option:selected").text()

    var my_list = $("ul > li")
    my_list.each(function(idx,item) {      // each : 반복 해라 (파이썬에서 for문 처럼)
        console.log($(item).text())
        if($(item).text() == fruit) {
            $(item).css("color","red")
        } else {
            $(item).css("color","black")
        }
    })
}




















