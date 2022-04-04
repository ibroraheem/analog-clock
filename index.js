const degree = 6;
const hour = document.querySelector("#hr");
const minute = document.querySelector("#min");
const second = document.querySelector("#sec");
const button = document.querySelector(".switch");
const body = document.querySelector("body");
const hr = document.querySelector(".hr");
const min = document.querySelector(".min");
const switchTheme = document.querySelector("#switch");
const title = document.querySelector(".title");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * degree;
    let ss = day.getSeconds() * degree;

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
})

button.addEventListener("click", function () {
    if (switchTheme.textContent.toLocaleLowerCase() === "dark") {
        title.style.color = "#1e1f26";
        body.style.backgroundColor = "#ffffff";
        switchTheme.textContent = "Light";
        button.style.height = "50px";
        button.style.width = "150px";
        button.style.border = "1px solid #1e1f26";
        button.style.borderRadius = "5px";
        switchTheme.style.color = "#1e1f26";
    } else {
        switchTheme.textContent = "Dark";
        title.style.color = "#ffffff";
        body.style.backgroundColor = "#1e1f26";
        switchTheme.style.color = "#ffffff"; 
    
    }
})