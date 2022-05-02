// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from '../components/navbar.js'
import {search,append,searchagn} from '../components/fetch.js'
// import {showres} from '../scripts/index.js'
document.getElementById('navbar').innerHTML=navbar();


// let showres = (e) => {
//     if(e.key ==='Enter'){
      

//         console.log(input.value)
//         
//         })
//     }

// }

let na =JSON.parse(localStorage.getItem('name'));
console.log(na)
 searchagn(na).then((data)=>{
            console.log(data)
            append(data.articles,results)
        })
    