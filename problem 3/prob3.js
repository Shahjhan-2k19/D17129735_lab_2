reposeData=[]
const onSearch = async() => {
    var searchUserName = document.getElementById("userText").value;
    const getData = await fetch('https://api.github.com/users/'+searchUserName);
    const data = await getData.json();
    const getUserRepo = await fetch(data["repos_url"]);
    reposData = await getUserRepo.json();
    document.getElementById("profileImage").src=data["avatar_url"];
    document.getElementById("displaynameText").textContent= data["name"];
    document.getElementById("usernameText").textContent= data["login"];
    document.getElementById("emailText").textContent= data["email"];
    document.getElementById("locationText").textContent= data["location"];
    document.getElementById("GistsText").textContent= data["public_gists"];
    if(data["public_repos"]>5){
        document.getElementById('reposList').style.overflowY="scroll";
    }
    else {document.getElementById('reposList').style.overflowY="hidden"};

    document.getElementById('reposList').innerHTML = reposData.map((listData) => {
        return (`<li> 
                    <p> Name: ${listData["name"]}<p>
                    <p> Desc: ${listData["description"]}<p>
                    </li>`
                    )
    }).join('');
    console.log(data["public_repos"]);
}
