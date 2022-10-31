const getPosts = async() => {
    const getData = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await getData.json();
    return data;
}

getPosts()
.then (data => data.map((posts) => {
    titleList=(posts.title)
    return titleList}))

    .then (titles => {
         fil_titles= titles
         .filter(titles => titles.split(' ').length > 6)
         return(fil_titles)})

         .then (fil_titles =>{ 
            console.log(fil_titles);
            console.log("Total Titles Selected: "+ fil_titles.length)})

getPosts()
.then (data => data.map((posts) => {
    postsBody=(posts.body)
    return (postsBody)}))

    .then(wordCount => {
        wordOccured=[]
        words = wordCount
        .map(wordCount => wordCount.split(' ')
        .map(wordCount => {
            if(wordCount in wordOccured)
            {wordOccured[wordCount]++}
            else{wordOccured[wordCount] =1}
        }))
        console.log(wordOccured) 
    })
