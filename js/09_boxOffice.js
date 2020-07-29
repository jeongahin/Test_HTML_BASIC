
function box_office() {

    var my_str = $("input[type=date]").val().toString().split('-')  // 200726 -> 2020-07-26
                                                                             // toString => 여기선 숫자타입을 문자타입으로 변환, split => '-' 기준 으로 쪼개줌
    var my_date = my_str[0] + my_str[1] + my_str[2]



    $.ajax({
        async : true,   // 동기(synchronous), False
                        // : 응답을 받아야만 다음 동작을 실행
                        // 비동기 (Asynchronous), True
                        // : 응답에 상관 없이 바로 다음 프로세스를 진행
        url : "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=e2ec2b45b113b6301ccd60516c47c1c1",
        data : {
            targetDt : my_date
        },
        type : "GET",
        timeout : 3000,
        dataType : "json",
        success : function (result) {

            $("tbody").empty()
            // var tmp = result["boxOfficeResult"]["dailyBoxOfficeList"]
            movie_list = result.boxOfficeResult.dailyBoxOfficeList

            $.each(movie_list, function (idx, item) {

                var tr = $("<tr></tr>")
                var rankTd = $("<td></td>").text(item.rank)
                var posterTd = $("<td></td>")

                /*********************************** 다음 이미지 API 불러오기 *************************************/

                var posterImg = $("<img />").attr("src",
                      // 보통 이미지 소스에 링크를 넣지만, ajax 사용 하기 위해 함수 리턴값을 받는다.
                       function() {
                           var my_url = " "

                           $.ajax({
                               async : false,  // 동기 방식
                               url : "https://dapi.kakao.com/v2/search/image", // 호출할 서버쪽 프로그램 URL -> '다음 developer' -> Code Generation
                               data : {
                                   //query : $("#movie_name").val() + "포스터"  ->  함수 인자를 item으로 받았으니 아이템으로 처리해야함
                                   query : item.movieNm.replace(/#/gi, '') + "포스터",  // '#' 없애기
                                   sort : "accuracy"
                               },
                               beforeSend : function(xhr) {                    // ajax 호출하기 전에 이거 먼저 해라
                                   xhr.setRequestHeader("Authorization","KakaoAK afdd8701039f43d114ded6aae45c07a5")
                               },                                                            // --> 회원 가입 후 key값 받기
                               type : "get",
                               timeout : 3000,
                               dataType : "json",

                               success : function (result) {

                                   my_url = result.documents[0].thumbnail_url

                               }, // end of success(posterImg)

                               error: function(error) {
                                   console.log("이미지 호출 실패")
                               } // end of error

                           }) // end of ajax

                           return  my_url

                       } // end of function
                ).attr("width", "150px").attr("height", "150px")

                posterTd.append(posterImg)

                /*********************************** 다음 API 끝 *************************************/

                var movieNmTd = $("<td></td>").text(item.movieNm)
                var salesAccTd = $("<td></td>").text(item.salesAcc)
                var audiAccTd = $("<td></td>").text(item.audiAcc)

                var viewTd = $("<td></td>")
                var viewBtn = $("<input />").attr("type", "button").attr("value", "상세정보")

                viewBtn.on("click", function () {

                    $.ajax({
                        async: true,
                        url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=e2ec2b45b113b6301ccd60516c47c1c1",
                        data: {
                            movieCd : item.movieCd
                        },
                        // method : "GET"
                        type: "GET",
                        timeout: 3000,
                        dataType: "json",

                        success: function (result2) {
                            // alert("상세 내용")
                            console.log(result2)
                            var genres_td = $('<td></td>')
                            for (i=0; i<result2.movieInfoResult.movieInfo.genres.length; i++) {
                                genres_td.append(result2.movieInfoResult.movieInfo.genres[i].genreNm + ', ')
                            }
                            var directors_td = $('<td></td>')
                            for (i=0; i<result2.movieInfoResult.movieInfo.directors.length; i++) {
                                directors_td.append(result2.movieInfoResult.movieInfo.directors[i].peopleNm + ', ')
                            }
                            var actors_td = $('<td></td>')
                            for (i=0; i<result2.movieInfoResult.movieInfo.actors.length; i++) {
                                actors_td.append(result2.movieInfoResult.movieInfo.actors[i].peopleNm + ', ')
                            }



                            var my_info = "영화 제목: " + result2.movieInfoResult.movieInfo.movieNm + '\n'
                                + "제작 연도: " + result2.movieInfoResult.movieInfo.prdtYear + '\n'
                                + "장르: " + genres_td.text().slice(0, -2) + '\n'
                                + "감독명: " + directors_td.text().slice(0, -2) + '\n'
                                + "배우명: " + actors_td.text().slice(0, -2)



                            alert(my_info)

                        }, // end of success

                        error: function (error) {
                            alert("서버 호출 실패")
                        } // end of error

                    }) // end of ajax

                }) // end of viewBtn

                viewTd.append(viewBtn)

                tr.append(rankTd)

                // tr.append(imgTd)

                // posterTd.append(posterImg)
                tr.append(posterTd)

                tr.append(movieNmTd)
                tr.append(salesAccTd)
                tr.append(audiAccTd)

                tr.append(viewTd)


                $("tbody").append(tr)
            })
        }, // end of success

        error : function (error) {
            // alert("서버 호출 실패!!")
        }

    }) // end of ajax
     // end of if
}