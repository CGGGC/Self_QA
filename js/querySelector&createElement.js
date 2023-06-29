function getE_or_queryS() {
    let new_1 = document.getElementsByClassName("test")
    let new_2 = document.querySelectorAll(".test")

    console.log(new_1);
    console.log(new_2);
    console.log(new_2[0]);
    // console.log 결과는 같음
    // getElementById() & getElementsByClassName() 메서드의 반환값은 
    // HTMLElement 객체이다.
    // 개발자가 DOM 트리의 텍스트, 속성 노드까지 자유롭게 제어하고싶으면
    // querySelector() & querySelectorAll() 메서드를 사용

    // querySelector() & querySelectorAll() 메서드의 반환값은
    // 노드 또는, 노드 리스트 이기 때문에 배열로 저장된다.

    // 속도의 차이도 有
    // getElementById가 querySelector보다 약 1.2배 빠르다.
    // but, 생산성 편의성 등의 측면에서 본다면 querySelector 사용도 용이
}