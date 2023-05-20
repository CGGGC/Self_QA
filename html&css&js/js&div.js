function function_01() {
    for (var i = 1; i <= 3; i++) {
        document.write("<div>"); // 이렇게 각 j 의 반복 횟수당 구역을 나눠주고 싶으면 div를 사용하자.
        document.write("<br>");
        for (var j = 1; j <= 3; j++) {
            document.write("안녕하세요! " + i + "/" + j + "<br>");
        }
        document.write("<br>");
        document.write("</div>");

    }
}