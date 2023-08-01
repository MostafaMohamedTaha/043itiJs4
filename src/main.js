const formDataInput = document.getElementById("form")
const welcome = document.getElementById('welcome')
const fragment = document.getElementById('nodes');

const randomImg = document.getElementById('randomImg');

const usernameJsImg = document.getElementById('usernameJsImg');
const validImg = document.getElementById('validImg');
const notValidImg = document.getElementById('notValidImg');
const validImgMsg = document.getElementById('validImgMsg');

const usernameStatus = document.getElementById('usernameStatus');
const fullnameJsShow = document.getElementById('fullnameJsShow');

const fullnameJsReq = document.getElementById('fullnameJsReq');
const passwordJsReq = document.getElementById('passwordJsReq');
const passwordConfirmReq = document.getElementById('passwordConfirmReq');
const confirmMsg = document.getElementById('confirmMsg');

const usernameRegex = /^[a-zA-Z]{3,15}$/
const passwordRegex = /^.{8,}$/


//submit
const submitJs = () => {
    formDataInput.addEventListener("submit", e => {
        e.preventDefault()
        fullnameValidInput = document.getElementById("fullnameJs").value
        localStorage.setItem("fullnameValidInput", fullnameValidInput)
        location.href = "./pages/welcome.html"
    })
}
//welcome username in welcome another page
const setWelcome = () => {
    window.addEventListener('load', () => {
        let input = localStorage.getItem("fullnameValidInput")
        if (document.getElementById('welcome')) {
            welcome.innerHTML = `welcome ${input}`
        }
    })
}
//add image children to div and remove one after 5 sec

if (fragment) {
    img = fragment
        .appendChild(document.createElement("div"))
        .append(document.createElement("img"), document.createElement("img"));
    childImages = fragment.querySelector('div').querySelectorAll('img')
        .forEach(img => {
            img.setAttribute("src", "http://picsum.photos/300/300");
            img.setAttribute("class", "border-2 rounded-2xl w-[8em]");
        })
    if (fragment.querySelector('div') && fragment.querySelector('div').childNodes.length > 1) setTimeout(() => {
        imagesContainer = fragment.querySelector('div')
        images = imagesContainer.querySelectorAll('img')
        imagesContainer.removeChild(images[images.length - 1])

    }, 5000)
}
// validate usernameJsImgFunction
let usernameJsImgFunction = () => {

    if (usernameRegex.test(usernameJsImg.value) == true) {
        validImg.classList.remove("hidden")
        if (notValidImg.classList.contains("hidden") == false)
            notValidImg.classList.add("hidden")
    } else {
        notValidImg.classList.remove("hidden")
        if (validImg.classList.contains("hidden") == false)
            validImg.classList.add("hidden")
    }
}
// validate showValidationMsg
const showValidationMsg=()=>{
    
    if (usernameRegex.test(fullnameJsShow.value) == true && usernameStatus ) {
        usernameStatus.classList.remove("hidden")
        usernameStatus.textContent=`valid username`
    }else{
        usernameStatus.classList.remove("hidden")
        usernameStatus.textContent=`not valid username`
    }
}
// make random img src
setInterval(function () {
    random = Math.floor(Math.random() * 7) + 1;
    randomImg.src = `./slide/${random}.jpg`
}, 500)

//valid username and password and confirm password
// check username valid 
// if not select username to enter valid
// check password valid 
// password not valid remove
// check confirm password = password 
// thanks for registration
const passwordConfirmReqFunction=()=>{
    // check username valid 
    if (usernameRegex.test(fullnameJsReq.value) == true){
        confirmMsg.classList.remove("hidden")
        confirmMsg.textContent=`valid username`
    }else{
        confirmMsg.classList.remove("hidden")
        confirmMsg.textContent=`not valid username`
        fullnameJsReq.focus()
        fullnameJsReq.setSelectionRange(0,fullnameJsReq.value.length)
    }
    if (usernameRegex.test(passwordJsReq.value) == true){
        confirmMsg.classList.remove("hidden")
        confirmMsg.textContent=`valid password`
    }
    if (passwordJsReq.value!==passwordConfirmReq.value){
        confirmMsg.classList.remove("hidden")
        confirmMsg.textContent=`password confirm not as the same with password`
    }
}


// implement all
setWelcome()