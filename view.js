updateView();
function updateView() {
    app.innerHTML = /*HTML*/`
    <div class="mainDiv">Her kommer hvilket kaffe du har valgt:${selectedCoffe}</div>
    <div class="mainDiv">lommebok:${wallet}kr</div>
    
    
    
    ${showCoffee()}
    

    `
}


function showCoffee(){
    let html = '';
    
    for (i = 0; i < kaffeMaskin.kaffe.length; i++){
        html += `
        <img src="Bilder/${kaffeMaskin.kaffe[i]}.jpg" onclick="selectCoffee(${i})"> 
        <div>${kaffeMaskin.kaffe[i]}</div>   
        `

    }
    return html;
}

// kaffeMaskin.kaffe[0] = 'espresso'
// kaffeMaskin.kaffe[1] = 'americano'
// kaffeMaskin.kaffe[2] = 'latte'
// kaffeMaskin.kaffe[3] = 'frappe'



