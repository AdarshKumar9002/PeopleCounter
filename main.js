let numberOfPeople = 0;
function increment() {
    numberOfPeople += 1;
    document.getElementById("ppl-cnt").textContent = numberOfPeople;
}

function save() {
    let previousEntries = numberOfPeople + " - "
    document.getElementById("pev-entries").textContent += previousEntries;
    document.getElementById("ppl-cnt").textContent = 0;
    numberOfPeople = 0;
}
