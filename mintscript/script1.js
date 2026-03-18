let m = document.getElementById("m");
let b = document.getElementById("b");

b.addEventListener("click", (ev) => {
    window.location.href = m.value;
})