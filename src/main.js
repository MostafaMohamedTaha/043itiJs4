// ((((((((((((((((event))))))))))))))))
// event handler 
// onclick,onsubmit,ondblclick,onmousedown,onmouseover,onmouseover,onkeydown,onkeydown,onerror,onchange,onmove
//get by id then make function by id 
//addEventListener
//bgColor,fgColor,linkColor
//document.querySelector("#button")
// .value , .text 
//createElement("option"),createTextNode,appendChild
// ! document.getElementById("test").add(option .text)
// json vs xml => default json 
// json syntax
// let a={
// "mostafa":[
//     {"name":"sad"},
//     {"age":"sad"},
//     {"address":"sad"},
// ],
// "mohamed":[
//     {"sdsdf":"sad"},
//     {"sdsdf":"sad"},
//     {"sdsdf":"sad"},
// ],
// "hosni":{"sdf":"name"}
// }
// console.log(a.mostafa[0].name)

// let xhr=new XMLHttpRequest();
// xhr.open('get',"url",true)
// xhr.onreadystatechange=()=>{
//     if(xhr.readyState==4 && xhr.status==200){
//         console.log(xhr.responseText) //string
//         dataResponse=console.log(json.parse(xhr.responseText)) 
//         for (const item of dataResponse) {
//             addItem(item)
//         }
//     }
// }
// xhr.send(

// function addItem(item){
//     tr=document.createElement('tr')
//     tdId=document.createElement('td')
//     tdId.innerHtml=item.id;
//     tr.appendChild(tdId)

//     tr=document.createElement('tr')
//     tdImage=document.createElement('td')
//     tdImage.innerHtml=item.image;
//     tr.appendChild(tdImage)

//     tr=document.createElement('tr')
//     tdPrice=document.createElement('td')
//     tdPrice.innerHtml=item.price;
//     tdPrice.appendChild(tdPrice)

//     tr=document.createElement('tr')
//     tdTitle=document.createElement('td')
//     tdTitle.innerHtml=item.title;
//     tr.appendChild(tdTitle)
// }
// firebase
// )

// function addUser() {
//     let xhr = new XMLHttpRequest()
//     xhr.open("post", "url", true)
//     xhr.onreadystatechange(() => {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             console.log(xhr.responseText) //string
//             dataResponse = console.log(json.parse(xhr.responseText))
//         }})
//         name=document.getElementById("name").value
//         title=document.getElementById("title").value
//         xhr.send()
// }
//todo ((((((((((((((((cookies))))))))))))))))
// database for browser=>key,value as local storage
//req for server=>have channel,login still
//store the data of user in the browser not the server
// token have username maintain time,auth
//limitation 300 cookies =>then delete expiration
// ?let date=new Date()
// ?date.setDate(getDate()+1)
// ?document.cookie="user=mo;expires="+date.toLocaleDateString()
// cookies=document.cookie.replace(/;/g,"&")
// let a=new URLSearchParams(cookies) //return array
// console.log(a)
//todo ((((((((((((((((local storage))))))))))))))))
//have not expiration date it deleted if it do not used and have no space 
//session for tab open and close when it 
// document.getElementById("ds").value=localStorage.ds
// document.getElementById("ds").value=sessionStorage.ds
// todo ((((((((((((((1))))))))))))))
//register form,html validation,
//full,email,city{dropdown menu},password,repeat password,register button,page thanks for register

let submitDataForm = () => {
    formDataInput = document.getElementById("formData")
    // showValidUsername = document.getElementById("showValidUsername")
    formDataInput.addEventListener("submit", e=> {
        e.preventDefault()
        fullnameValidInput = document.getElementById("fullnameValid").value
        localStorage.setItem("fullnameValidInput", fullnameValidInput)
        
        // validateUserName()
        location.href = "./pages/welcome.html"
    })
    
}
var fullnameValidInputGet=localStorage.getItem("fullnameValidInput")
document.getElementById("welcome").innerHTML = `Welcome ${fullnameValidInputGet} !`

// function validateUserName() {
//     var regexPattern = /^[a-zA-Z0-9]+$/;
//     regexPattern.test(usernameInput)? showValidUsername.textContent=`valid username`:showValidUsername.textContent=`${usernameInput} is not valid username`

// }
// function validateEmail() {
//     var regexPattern = /[a-zA-Z0-9]{1,}@[a-zA-Z-.]{2,}[.]{1}[a-zA-Z]{2,}/;
//     regexPattern.test(usernameInput)? showValidUsername.textContent=`valid username`:showValidUsername.textContent=`${usernameInput} is not valid username`

// }
// let submitDataFormCss = () => {
//     formDataInputCss = document.getElementById("formDataCss")
//     FullnameValidCss = document.getElementById("FullnameValidCss")
//     formDataInputCss = document.getElementById("formDataCss")
//         .addEventListener("submit", e => {
//             e.preventDefault()
//             usernameInputCss = document.getElementById("FullnameValid").value
//             localStorage.setItem("usernameInputCss", usernameInputCss)
//             location.href = "./pages/welcome.html"
//         })

// }
// FullnameValid.addEventListener("focusIn", function () {
//     this.style.border="solid 1px blue" ;
// });
// FullnameValid.addEventListener("focusOur", function () {
//     this.style.border="" ;
// });
// let usernameFromLocalStorage = localStorage.getItem("FullnameValid")
// let usernameFromLocalStorageCss = localStorage.getItem("FullnameValid1")
// usernameInputWelcomePage.textContent = `Welcome ${usernameFromLocalStorageCss} !`


// iti5
// MO38004