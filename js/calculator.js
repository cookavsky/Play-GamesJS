const button = document.querySelectorAll(".Num");
let field = document.querySelector(".Field");

let divisionNumber = "";
let multiNumber = "";
let addNumber = "";
let subNumber = "";

const click = function () {
        for (let i = 0; i < button.length; i++) {
                button[i].addEventListener("click", function() {
                        switch(button[i]) {
                                case button[7]:
                                        if (field.textContent.startsWith(".") === true || field.textContent.endsWith('.') === true) {
                                                field.innerHTML = undefined;
                                        } else {
                                                divisionNumber = field.textContent;
                                                field.innerHTML = "";
                                        }
                                        break;
                                case button[11]:
                                        if (field.textContent.startsWith(".") === true || field.textContent.endsWith('.') === true) {
                                                field.innerHTML = undefined;
                                        } else {
                                                multiNumber = field.textContent;
                                                field.innerHTML = "";
                                        }
                                        break;
                                case button[14]:
                                        if (field.textContent.startsWith(".") === true || field.textContent.endsWith('.') === true) {
                                                field.innerHTML = undefined;
                                        } else {
                                                addNumber = field.textContent;
                                                field.innerHTML = "";
                                        }
                                        break;
                                case button[15]:
                                        if (field.textContent.startsWith(".") === true || field.textContent.endsWith('.') === true) {
                                                field.innerHTML = undefined;
                                        } else {
                                                subNumber = field.textContent;
                                                field.innerHTML = "";
                                                }
                                        break;
                                case button[3]:
                                        const backspace = field.textContent.substr(0, field.textContent.length -1);
                                        field.innerHTML = backspace;
                                        break;
                                case button[12]:
                                        if (field.textContent.search(/\./) === -1){
                                        Math.round(field.insertAdjacentHTML('beforeend', button[i].value) * 100) / 100};
                                        break;
                                case button[16]:
                                        field.innerHTML = "";
                                        break;
                                case button[17]:
                                        let NumberTwo = field.textContent;
                                        field.innerHTML = "";
                                        if (divisionNumber >= 0 && divisionNumber.length > 0) {
                                                const divisionMath = divisionNumber / NumberTwo;
                                                divisionNumber = "";
                                                field.innerHTML = divisionMath;
                                        } else if (multiNumber >= 0 && multiNumber.length > 0) {
                                                const multiMath = multiNumber * NumberTwo;
                                                multiNumber = "";
                                                field.innerHTML = multiMath;
                                        } else if (addNumber >= 0 && addNumber.length > 0) {
                                                const addMath = parseFloat(addNumber) + parseFloat(NumberTwo);
                                                addNumber = "";
                                                field.innerHTML = addMath;
                                        } else if (subNumber >= 0 && subNumber.length > 0) {
                                                const subMath = subNumber - NumberTwo;
                                                subNumber = "";
                                                field.innerHTML = subMath;
                                        }
                                        break;
                                default:
                                        if(button[i].addEventListener){
                                                field.insertAdjacentHTML('beforeend', button[i].value);
                                        }
                                        break;
                        }
                })
        }
};

click();