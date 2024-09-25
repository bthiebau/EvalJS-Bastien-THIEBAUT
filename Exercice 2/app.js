
const mod = localStorage.getItem("lightmode");

class ThemeSwitcher{
    constructor(){
        this.body = document.body;
        this.lightBtn = document.querySelector("#lightThemeBtn");
        this.darkBtn = document.querySelector("#darkThemeBtn");

        this.darkBtn.addEventListener("click", () => this.lightOff())

        this.lightBtn.addEventListener("click", () => this.lightOn())
    }

    lightOff(){
        this.body.classList.add("dark")
        let lightmode = "dark";
        localStorage.setItem("lightmode", lightmode)
    }

    lightOn(){
        this.body.classList.remove("dark")
        let lightmode = "light"
        localStorage.setItem("lightmode", lightmode);
    }
}

const theme = new ThemeSwitcher();
if(mod === "dark"){
    theme.lightOff();
}
if(mod === "light"){
    theme.lightOn();
}