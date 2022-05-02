// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from '../components/navbar.js'
import {search,append,searchagn} from '../components/fetch.js'

document.getElementById('navbar').innerHTML=navbar();
let showres = (e) => {
    if(e.key ==='Enter'){
          window.location.href='search.html'
        localStorage.setItem('name' , JSON.stringify(input.value))

        // console.log(input.value)
        // searchagn(input.value).then((data)=>{
        //     console.log(data)
        //     append(data.articles,results)
        // })
    }

}
// let search = async (code) => {
//     console.log(code)
//     try{
//         let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${code} `)

//         let data= await res.json()
//         // console.log(data)
        
   
//     }catch(e){
//         console.log(e)
//     }
   
// }

let id = document.getElementById('sidebar').children;
console.log(id)

for(let x of id){
    console.log(x)
    x.addEventListener('click',function (){
        csearch(x.id)
    })
}
let results = document.getElementById('results')
function csearch(x){
 search(x).then((data)=>{
     console.log(data)
     append(data.articles,results)
 })
}
search('in').then((data)=>{
append(data.articles,results)
})

let input = document.getElementById('search_input')
input.addEventListener('keydown',function() {
    
  
    showres(event)
})
// let append = (news,results) =>{

//     console.log(news)
//     results.innerHTML = null;
//     // document.getElementById('results').innerHTML=null;
//     news.forEach( ({title,description,urlToImage}) =>{
//         console.log(title)

//         let image = document.createElement('img')
//         let head = document.createElement('h3')
//         let desp = document.createElement('p');

//         image.src = urlToImage;
//         head.innerText = title;
//         desp.innerText = description;

//         let div = document.createElement('div')
//         div.setAttribute('id','detailed_news')
//         div.append(head,desp)
//         let newsbox = document.createElement('div')
//         newsbox.setAttribute('class','news')
//         newsbox.append(image,div)
//         results.append(newsbox)
//     })


// }
export {showres}