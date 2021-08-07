//querySelector
//
//addEventListener
//지정한 이벤트가 대상에 전달될 때마다 호출할 함수 설정

const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove',(e) =>{
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.setAttribute('data-fromTop',(cursor.offsetTop-scrollY));
    
})

window.addEventListener('scroll',()=>{
    const fromTop = cursor.getAttribute('data-fromTop');
    //console.log(fromTop);
    //console.log("cursor.offsetTop : " + cursor.offsetTop + " scrollY : "+scrollY+ " pageY : "+e.PageY);
    cursor.style.top = scrollY + parseInt(fromTop) + 'px';
})

window.addEventListener("click", () => {
    if (cursor.classList.contains("click")) {
      cursor.classList.remove("click");
      void cursor.offsetWidth; // trigger a DOM reflow
      cursor.classList.add("click");
    } else {
      cursor.classList.add("click");
    }
  });