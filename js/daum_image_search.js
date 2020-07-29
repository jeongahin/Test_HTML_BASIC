
function search_image() {
    // enter key를 입력하면
    if(event.keyCode == 13) {

        // AJAX를 이용해서 DAUM쪽 Open API를 호출
        // {}는 자바스크립트의 객체로서 ajax안에서 처리됨
        $.ajax({
            async : false,  // 동기 방식
            url : "https://dapi.kakao.com/v2/search/image", // 호출할 서버쪽 프로그램 URL
            data : {
                // key : "~~~~" -> 영화검색 만들었을때
                query : $("#movie_name").val() + "포스터",  // 인터스텔라 + 포스터
                // query : item.movieNm + "포스터",
                sort : "accuracy"
            },
            beforeSend : function(xhr) {                   // ajax 호출하기 전에 이거 먼저 해라
                xhr.setRequestHeader("Authorization","KakaoAK afdd8701039f43d114ded6aae45c07a5")
            },
            type : "get",
            timeout : 3000,
            dataType : "json",
            
            success : function (result) {

                images = result.documents
                image_url = images[0].thumbnail_url

                console.log(result)

            },

            var posterTd = $("<td></td>")
            var posterImg = $("<img />").attr("src", image_url).attr("width", "150px").attr("height", "150px")

            posterTd.append(posterImg)
            $(tr).append(posterTd)

        })
    }
}