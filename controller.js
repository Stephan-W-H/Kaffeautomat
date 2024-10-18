function selectCoffee(value){
    selectedCoffe.push(kaffeMaskin.kaffe[value]);
    // for (let i = 0; i < kaffeMaskin.kaffe.length; i++){
    //     // selectedCoffe.push(kaffeMaskin.kaffe[i]);
    // if (kaffeMaskin.kaffe[i] == 'espresso'){
    //     selectedCoffe.push('espresso')

    // }
    updateView(); // vis fram alle kaffe (refresh)
}


