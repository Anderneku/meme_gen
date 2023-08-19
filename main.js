const file_input = document.querySelector(".file-input");
const img_display = document.querySelector(".img-display");
const link_input = document.querySelector(".link-input-ting");
const link_btn = document.querySelector(".link-btn");

const top_text = document.querySelector(".top-text");
const bottom_text = document.querySelector(".bottom-text");

const font_set = document.querySelector(".font-set");
const font_input = document.querySelector(".font-adjust");

const top_set = document.querySelector(".top-set");
const top_input = document.querySelector(".top-adjust");

const bottom_set = document.querySelector(".bottom-set");
const bottom_input = document.querySelector(".bottom-adjust");

const done_btn = document.querySelector(".done-btn");



file_input.addEventListener("change", () =>{
    top_text.style.background = "rgba(255, 192, 20, 0.318)";
    bottom_text.style.background = "rgba(255, 192, 20, 0.318)";
    let reader = new FileReader();
    reader.readAsDataURL(file_input.files[0]);
    reader.addEventListener("load", () =>{
        img_display.innerHTML = `<img src=${reader.result} alt="" />`;
    });
});

link_btn.addEventListener("click", () =>{
    top_text.style.background = "rgba(255, 192, 20, 0.318)";
    bottom_text.style.background = "rgba(255, 192, 20, 0.318)";
    img_display.innerHTML = `<img src=${link_input.value} alt="Ch" />`
})


font_set.addEventListener("click", () =>{
    if (parseInt(font_input.value) <= 70){
        top_text.style.fontSize = `${font_input.value}pt`;
        bottom_text.style.fontSize = `${font_input.value}pt`;
    } else {
        top_text.style.fontSize = `70pt`;
        bottom_text.style.fontSize = `70pt`;
        font_input.value = 70;
    }
})

top_set.addEventListener("click", () =>{
    top_text.style.marginTop = `${parseInt(top_input.value)}px`;
})

bottom_set.addEventListener("click", () =>{
    bottom_text.style.marginTop = `${-parseInt(bottom_input.value)}px`;
})


done_btn.addEventListener("click", () =>{
    top_text.style.background = "none";
    bottom_text.style.background = "none";
})