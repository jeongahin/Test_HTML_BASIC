
function call_ajax() {
    // 입력 텍스트 상자 에서 키보드로 입력이 들어 왔을 때 호출
    // 모든 키에 대해서 처리 하는게 아니라 enter key 일 경우 에만 처리
    if( event.keyCode == 13 ) {
        // AJAX call 을 이용 해서 데이터를 받아 오는 코드가 나오면 돼요!
        // 13 = key code (엔터 키의 키코드 정해져 있음)
        // 만약 입력된 key 가 enter key 이면 이 부분을 수행 하게 돼요!
        // 서버쪽 프로그램을 호출해서 결과를 받아 와요!
        // jQuery 를 이용 해서 AJAX처리 해 보아요!
        // ajax 의 인자로 javascript 객체를 넣어 줘요!
        // javascript 객체는 => { key : value, key : value, ... }
        // data : 서버 프로그램에게 넘겨줄 데이터들..
        $.ajax({
            async : true,           // 비동기 방식의 호출(default)
            url : "http://192.168.0.200:8080/bookSearch/search",
            data : {
                keyword : $("input[type=text]").val()
            },
            type : "GET",
            timeout : 3000,         // 3초안에 결과가 안오면 잘못된 호출로 간주 한다.
            dataType : "json",      // 결과 JSON을 JavaScript 객체로 변환.
            success : function (result) {       // result => 서버가 준 데이터(결과 객체)
                $("tbody").empty()

                // $("h1").each()
                $.each(result,function(idx,item) {

                        var tr = $("<tr></tr>")         // <tr></tr>
                        var imgTd = $("<td></td>")      // <td></td>
                        var img = $("<img />").attr("src",item.img)     // <img scr=...>, 이 경우에는 데이터에 이미지가 있어서 속성으로 처리
                        imgTd.append(img)
                        var titleTd = $("<td></td>").text(item.title)
                        var authorTd = $("<td></td>").text(item.author)
                        var priceTd = $("<td></td>").text(item.price)
                        var delTd = $("<td></td>")
                        var delBtn = $("<input />").attr("type","button")
                            .attr("value","삭제")
                        delBtn.on("click",function() {
                            // 현재 클릭된 버튼에 대한 책 정보를 찾아서 화면 에서 삭제 해야함
                            // this : 현재 이벤트가 발생된 객체를 지칭
                            // $(this).remove()                     // 내가 클릭한 버튼 지워줌
                            $(this).parent().parent().remove()      // 부모의 부모 => <tr></tr>

                        })
                        delTd.append(delBtn)

                        tr.append(imgTd)
                        tr.append(titleTd)
                        tr.append(authorTd)
                        tr.append(priceTd)
                        tr.append(delTd)


                        $("tbody").append(tr)
                })
                // for(i=0;i<result.length;i++){                                // **** for = each 문 ****
                //     var tr = $("<tr></tr>")         // <tr></tr>
                //     var imgTd = $("<td></td>")      // <td></td>
                //     var img = $("<img />").attr("src",result[i].img)          // <img scr=...>
                //     imgTd.append(img)
                //     var titleTd = $("<td></td>").text(result[i].title)
                //     var authorTd = $("<td></td>").text(result[i].author)
                //     var priceTd = $("<td></td>").text(result[i].price)
                //     tr.append(imgTd)
                //     tr.append(titleTd)
                //     tr.append(authorTd)
                //     tr.append(priceTd)
                //
                //     $("tbody").append(tr)
                // }

                // var tr = $("<tr></tr>")         // <tr></tr>
                // var imgTd = $("<td></td>")      // <td></td>
                // var img = $("<img />").attr("src",result[0].img)          // <img scr=...>
                // imgTd.append(img)
                // var titleTd = $("<td></td>").text(result[0].title)
                // var authorTd = $("<td></td>").text(result[0].author)
                // var priceTd = $("<td></td>").text(result[0].price)
                // tr.append(imgTd)
                // tr.append(titleTd)
                // tr.append(authorTd)
                // tr.append(priceTd)
                //
                // $("tbody").append(tr)            // 0번째 있는 것만 구현


                // alert(result[0].title)          // 제목, -> "여행" 들어가는 리스트 중에 첫번째 결과 불러옴
            },
            error : function (error) {
                // alert("서버 호출 실패!!")
            }
        })
    }
}