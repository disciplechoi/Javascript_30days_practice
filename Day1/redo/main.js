const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove',(e)=>{
    cursor.style.left = e.pageX +'px';
    cursor.style.top = e.pageY + 'px';
    cursor.setAttribute('data-fromTop',(cursor.offsetTop-scrollY));
    // to be checked
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
      void cursor.offsetWidth; // trigger a DOM reflow 브라우저에게 강제로 일을 시킨다고 한다.
      cursor.classList.add("click");
    } else {
      cursor.classList.add("click");
    }
  });