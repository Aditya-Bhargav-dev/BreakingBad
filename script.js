//function to refresh api on every char chnage in text box
function refresh() {
    let name = document.getElementById("char").value;
    let url = `https://www.breakingbadapi.com/api/characters?name=${name}`;
    CallApi(url);
}

//to call Api and fetch data
async function CallApi(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        breakingbad(data);
    }
    catch (error) {
        console.log(error);
    }
}

//display data in ui
function breakingbad(data) {

    let row = document.getElementById("card");
    row.innerHTML = ""
    data.forEach(element => {
        let col = `
    <div class="col-4 mb-3">
            <div class="card">
                <img class="card-img-top img-thumbnail h-100" src=${element.img} alt="Responsive image">
                <div class="card-div text-center">
                    <p class="card-text"> <span>Name:</span>${element.name}
                    <br>
                    <span>Occupation:</span>${element.occupation[0]}
                    <br>
                    <span>NickName:</span>${element.nickname}</p>
                </div>
            </div>
        </div>        
    `

        row.innerHTML += col;
    });
}
