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