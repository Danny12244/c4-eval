
let search = async (code) => {
    console.log(code)
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${code} `)

        let data= await res.json()
        // console.log(data)
        return data
   
    }catch(e){
        console.log(e)
    }
   
}


let searchagn = async (query) => {
    console.log(query)
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query} `)

        let data= await res.json()
        // console.log(data)
        return data
   
    }catch(e){
        console.log(e)
    }
   
}

let append = async (news,results) =>{

    console.log(news)
    results.innerHTML = null;
    // document.getElementById('results').innerHTML=null;
    news.forEach( ({title,description,urlToImage}) =>{
        console.log(title)

        let image = document.createElement('img')
        let head = document.createElement('h3')
        let desp = document.createElement('p');

        image.src = urlToImage;
        head.innerText = title;
        desp.innerText = description;

        let div = document.createElement('div')
        div.setAttribute('id','detailed_news')
        div.append(head,desp)
        let newsbox = document.createElement('div')
        newsbox.setAttribute('class','news')
        newsbox.append(image,div)
        results.append(newsbox)
    })


}

export {search,append,searchagn} 