//Examining DOM

// console.log(document)
// Displays document object

//Playground

// console.log(document.URL)
// console.log(document.domain)
// console.log(document.forms)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// document.all[10].style.backgroundColor="#cfcfcf" //Bad practice as it captures element using line number 

//Difference between , innerHTML and textContent

 console.log(document.getElementById('navHead').innerHTML +" This is innerHTML")
 console.log(document.getElementById('navHead').innerText +" This is innerText")


//Capturing HTML elements

// console.log(document.getElementById('navHead'))
// console.log(document.getElementsByTagName('div'))
// console.log(document.getElementsByClassName('list-group-item'))
 //var listArr=document.getElementsByClassName('list-group-item')
// console.log(listArr)
// //listArr.style.backgroundColor="#fcfcfc" //Wrong Method
// for(var i=0;i<listArr.length;i++)
// {
//     listArr[i].style.backgroundColor="#cfcfcf"
// }

// console.log(document.querySelector('#navHead'))
// var listArr=document.querySelector('.list-group-item')
// console.log(listArr)
// listArr.style.backgroundColor="#cfcfcf"

//console.log(document.querySelectorAll(".list-group-item"))

//Fun Question .... What is difference between HTML collection and NodeList
// document.querySelector('.list-group-item:nth-child(2)').style.backgroundColor="blue"

// console.log(document.querySelectorAll(".list-group-item")[0].parentNode)
// console.log(document.querySelectorAll(".list-group-item")[0].childNodes)

// console.log(document.querySelectorAll(".list-group-item")[0].parentElement)

// console.log(document.querySelectorAll(".list-group-item")[0].firstChild) //Includes white space and text
// console.log(document.querySelectorAll(".list-group-item")[0].firstElementChild) //Only html tags and objects

//Try working with next sibling and previous sibling 

//Creating new Element

// var newElement= document.createElement("li")
// newElement.id="myElement"
// newElement.className=" list-group-item bg-dark"
// newElement.setAttribute('title','Hello From The Other Side')
// newElement.appendChild(document.createTextNode('HELLO DSC'))
// console.log(newElement)

// myList=document.getElementById('myList')
// myList.insertBefore(newElement,myList.firstChild)


// Event Listeners
// myList=document.getElementById('myList')
// myList.addEventListener('mouseover',function(e){
//     console.log( e)
// })

//try click, mouseenter , mouseleave, mouseout, click 
// Can you see a attribute of altkey , ctrlkey and shiftkey ..hmmmmmmm ???

//There are lot of properties which e contains and with these information we can make our website better!
//HOOOWWW
// Eg:
//with e.clientX and e.clientY we can know the location of mouse, a implement it on a web game!

