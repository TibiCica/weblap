
document.getElementById("mobbinos").addEventListener("change", changepicture); // Use "change" event for <select>

function changepicture() {
    document.getElementById("mobs").innerHTML = "";
    const selectElement = document.getElementById("mobbinos");
    Array.from(selectElement.selectedOptions).forEach(option => {
        const div = document.createElement("div");
        div.className = "mob";
        const img = document.createElement("img");
        img.src = option.value;
        img.alt = option.text;
        div.appendChild(img);
        const h1 = document.createElement("h1");
        h1.innerHTML=option.text;
        div.appendChild(h1);
        const p = document.createElement("h1");
        p.innerHTML=option.text;
        div.appendChild(p);
        document.getElementById("mobs").appendChild(div);
    });
}