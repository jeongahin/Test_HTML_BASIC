
function start_clock() {
    //alert("버튼이 클릭 클릭!!")
    // 시계를 출력 해야 해요!!
    // 현재 시간을 구해요!!
    // 현재 날짜의 시,분,초를 구할 수 있어요!
    // 이 시간을 HTML 특정 영역에 출력 해요!
    // 위의 작업을 1초마다 반복 하면 돼요!
    // JavaScript 는 특정 시간 마다 특정 함수를 반복 해주는 함수를 제공

    setInterval(function() {
        var today = new Date()  // 날짜 객체 생성.
        console.log(today.toLocaleString())   // ok !!
        // HTML 의 특정 위치를 지정!!
        var my_div = document.getElementById("myDiv")
        my_div.innerText = today.toLocaleString()
    },1000)   // function() {} : 람다 함수
}