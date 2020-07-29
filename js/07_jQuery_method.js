$(document).ready(function () {                     // document : html 화면을 의미
    // browser에 내용이 완전히 출력 되면 그 시점에 실행.
    // li를 찾아서 각각에 대해 event 처리를 지정해 준다.
    $("ul > li").on("mouseover", function () {      // li에 대해서 마우스오버가 발생 했을때, 함수 불러와
        $(this).addClass("myStyle")                 // 4개 중에 하나 찾아서 myClass 라는 클래스 부여해라
    })

    $("ul > li").on("mouseleave", function () {
        $(this).removeClass("myStyle")
    })

})

function set_active() {
    // alert("마우스가 위에 올라갔어요")
    // 현재 이벤트가 발생된 이벤트 소스에 CSS를 적용해요 !
    // 이벤트 소스 : 이벤트가 발생된 element => this
    $(this).addClass("myStyle")
    console.log(this)
}

function insert_text() {
    $("#myDiv").html("<h1>이것은 소리없는 아우성!!</h1>")
    // text() : 문자를 그냥 가져 다가 넣어요, 태그 적용 안해요!!
    // html() : text()와 동일 하게 동작 하는데 태그 적용을 해요!!
}

function delete_text() {
    // $("#deleteDiv").remove()   // 자신을 포함 해서 후손 들도 삭제
    $("#deleteDiv").empty()       // 자신을 제외한 후손 들만 삭제
}


function add_list() {

    // 없는 태그를 만들려면 어떻게 해야 하나요?
    // <li class="myStyle">박길동</li>
    // $("<li></li>").text("박길동").attr("class","myStyle") 랑 같음
    var my_li = $("<li></li>").text("박길동").addClass("myStyle")
    // 태그를 생성한 다음 원하는 위치에 가져다 붙여요!!
    // 1. append() : 자식으로 붙이고 맨 마지막 자식으로 붙여요!
    $("ul").append(my_li)
    // 2. prepend() : 자식으로 붙이고 첫번째 자식으로 붙여요!!
    $("ul").prepend(my_li)
    // 3. after() : 형제로 붙이고 다음 형제로 붙여요!
    $("ul > li:nth-child(3)").after(my_li)
    // 4. before() : 형제로 붙이고 바로 이전 형제로 붙여요!
    $("ul > li:last").before(my_li)


}



















