let container = document.getElementById("container")


const fetchChicken = async () => {
    let getData = await fetch("./chicken.json")
    let data = await getData.json()
    let html = ``
    data.forEach((element, index) => {
        html += `<div class="col-lg-4">
        <div class="item">
            <div class="item-title" id="title-1">
                <h3>${element.name}</h3>
            </div>
            <p>
                ${element.description}
            </p>
            <p id="jd1">7JD</p>
        </div>
    </div>
</div>`
    });
    console.log(data)
    container.innerHTML = html
    console.log("Click")
}

const fetchSushi = async () => {
    let getData = await fetch("./sushi.json")
    let data = await getData.json()
    let html = ``
    data.forEach((element, index) => {
        html += `<div class="col-lg-4">
        <div class="item">
            <div class="item-title" id="title-1">
                <h3>${element.name}</h3>
            </div>
            <p>
                ${element.description}
            </p>
            <p id="jd1">7JD</p>
        </div>
    </div>
</div>`
    });
    console.log(data)
    container.innerHTML = html
    console.log("Click")
}

const fetchBeef = async () => {
    let getData = await fetch("./beef.json")
    let data = await getData.json()
    let html = ``
    data.forEach((element, index) => {
        html += `<div class="col-lg-4">
        <div class="item">
            <div class="item-title" id="title-1">
                <h3>${element.name}</h3>
            </div>
            <p>
                ${element.description}
            </p>
            <p id="jd1">7JD</p>
        </div>
    </div>
</div>`
    });
    const menuItems = [
        {
            name: "Fried Sushi",
            description: "Fried chicken is very delicious and very light on the stomach.",
            price: "7JD"
        },
        {
            name: "Boiled Sushi",
            description: "Boiled chicken is very healthy however it is not that tasty.",
            price: "7JD"
        },
        // ... other menu items
    ];
    
    // Function to generate HTML for menu items
    const generateMenuItemHTML = (menuItem) => {
        return `
            <div class="col-lg-4">
                <div class="item">
                    <div class="item-title" id="title-2">
                        <h3>${menuItem.name}</h3>
                    </div>
                    <p>${menuItem.description}</p>
                    <p class="jd">${menuItem.price}</p>
                </div>
            </div>`;
    };
    
    // Function to fetch and display menu items
    const fetchMenuItems = async (menuType) => {
        let getData = await fetch(`./${menuType.toLowerCase()}.json`);
        let data = await getData.json();
        let html = "";
        data.forEach((element) => {
            html += generateMenuItemHTML(element);
        });
        container.innerHTML = html;
        console.log("Click");
    }
    
    console.log(data)
    container.innerHTML = html
    console.log("Click")
}

