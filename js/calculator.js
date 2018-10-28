const button = document.querySelectorAll(".Num");
let field = document.querySelector(".Field");

console.log(button)
console.log(field)

const click = function () {
        for (let i = 0; i < button.length; i++) {
                button[i].addEventListener("click", function () {
                        switch(button[i]){
                                case button[3]:
                                console.log("111")
                                break;
                                case button[7]:
                                console.log("111")
                                break;
                                case button[11]:
                                console.log("111")
                                break;
                                case button[12]:
                                console.log("111")
                                break;
                                case button[14]:
                                console.log("111")
                                break;
                                case button[15]:
                                console.log("111")
                                break;
                                case button[16]:
                                console.log("111")
                                break;
                                case button[17]:
                                console.log("111")
                                break;
                                default:
                                        if (button[i].addEventListener){
                                                field.insertAdjacentHTML('beforeend', button[i].accessKey);
                                        }
                        }
                })
        }
};

click()