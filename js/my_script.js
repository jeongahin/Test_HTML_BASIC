// JavaScript code 를 작성 해요!!
// JavaScript 에 대해서 알아 보아요!!
// Python 과 비교 해서 알아볼 거예요!!
// alert("소리없는 아우성")
// JavaScript : web client 에서 실행 되는 언어
//              요즘 에는 서버용 개발 언어로 사용 되기도 해요(Node.js)

// 변수를 만들어 보아요!
// python 은 그냥 변수를 선언 하죠..
// my_var = 100 (python)
var my_var = 100    // JavaScript
var tmp = 3.14      // number
var tmp1 = "Hello"  // string (python 과 동일)
var tmp2 = true     // boolean (python True)
var tmp3 = [1, 2, 3, 4.555]  // array (python list)

// 객체를 어떻게 표현하나요?
var tmp4 = { name : "홍길동", age : 25 }  // 객체 만들기
console.log(tmp4.name)                   // 객체가 갖는 속성을 access

// 함수에 대해서 알아 보아요!!
// 함수는 2가지가 존재 해요!
// 1. 선언적 함수 ( python 의 일반 적인 함수 정의 하는 방법 )
//    선언적 함수는 함수의 이름이 존재 해요!!
    function my_add(x,y) {
        return x + y
    }
    // def my_add(x,y):
    //    return x + y
// 2. 익명 함수 ( 함수의 이름이 없어요!! ) => 람다 함수
//    변수에 저장 해서 사용. 일급 함수의 특징을 가지게 돼요!
//    함수를 다른 함수의 인자로, 함수의 리턴값 으로 함수를 이용.
var my_add = function(x,y) {
    return x + y
}











