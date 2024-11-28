
document.getElementById("mobbinos").addEventListener("change", changepicture);
document.getElementById("ZaWarudo").addEventListener("change", sel2);
document.getElementById("searcher").addEventListener("keyup", sel3);

function mobsel()
{
    if (document.getElementById("itself").checked)
        {
        document.getElementById("mobbinos").disabled=false;
        document.getElementById("ZaWarudo").disabled=true;
        document.getElementById("searcher").disabled=true;
    }
    else if (document.getElementById("world").checked)
        {
        document.getElementById("mobbinos").disabled=true;
        document.getElementById("ZaWarudo").disabled=false;
        document.getElementById("searcher").disabled=true;
    }
    else
    {
        document.getElementById("mobbinos").disabled=true;
        document.getElementById("ZaWarudo").disabled=true;
        document.getElementById("searcher").disabled=false;
    }
}

function addplayer()
{
    const div = document.createElement("div");
    div.className = "mob";
    const img = document.createElement("img");
    img.src = "képek/mobs/Player.webp";
    img.alt = "Player";
    img.id = "creature";
    div.appendChild(img);
    const h1 = document.createElement("h1");
    h1.innerHTML="Player";
    div.appendChild(h1);
    const ddiv = document.createElement("div");
    ddiv.style.width="45%";
    ddiv.style.float="right";
    ddiv.style.margin=0;
    ddiv.className="general";
    ddiv.innerHTML="HP: <br>";
    for (i=1; i<=20;i++)
        i%2==1 ? ddiv.innerHTML+='<img src="képek/heart.png" class="heart">' :  ddiv.innerHTML+='<img src="képek/heart.png" class="heart flipped">' ;
    ddiv.innerHTML+="<br>Atk: <br>";
    for (i=1; i<=1;i++)
        i%2==1 ? ddiv.innerHTML+='<img src="képek/heart.png" class="heart">' :  ddiv.innerHTML+='<img src="képek/heart.png" class="heart flipped">' ;
    div.appendChild(ddiv);
    document.getElementById("mobs").appendChild(div);
}

function changepicture() {
    document.getElementById("mobs").innerHTML = "";
    addplayer();
    const selectElement = document.getElementById("mobbinos");
    Array.from(selectElement.selectedOptions).forEach(option => {
        const div = document.createElement("div");
        div.className = "mob";
        const img = document.createElement("img");
        img.src = mobs[option.value].image;
        img.alt = mobs[option.value].name;
        img.id = "creature";
        div.appendChild(img);
        const h1 = document.createElement("h1");
        h1.innerHTML=mobs[option.value].name;
        div.appendChild(h1);
        const ddiv = document.createElement("div");
        ddiv.style.width="45%";
        ddiv.style.float="right";
        ddiv.style.margin=0;
        ddiv.className="general";
        ddiv.innerHTML="HP: <br>";
        for (i=1; i<=mobs[option.value].health;i++)
            i%2==1 ? ddiv.innerHTML+='<img src="képek/heart.png" class="heart">' :  ddiv.innerHTML+='<img src="képek/heart.png" class="heart flipped">' ;
        if (mobs[option.value].health==0)
            ddiv.innerHTML+=" None";
        ddiv.innerHTML+="<br>Atk: <br>";
        for (i=1; i<=mobs[option.value].dmg;i++)
            i%2==1 ? ddiv.innerHTML+='<img src="képek/heart.png" class="heart">' :  ddiv.innerHTML+='<img src="képek/heart.png" class="heart flipped">' ;
        if (mobs[option.value].dmg==0)
            ddiv.innerHTML+=" None";
        div.appendChild(ddiv);
        document.getElementById("mobs").appendChild(div);
    });
}

function sel2()
{
    document.getElementById("mobs").innerHTML = "";
    addplayer();
    const SelElem = document.getElementById("ZaWarudo");
    mobs.forEach(mob => {
        Array.from(SelElem.selectedOptions).every(dim => {
            if (mob.dimension.includes(dim.value))
            {
                const div = document.createElement("div");
                div.className = "mob";
                const img = document.createElement("img");
                img.src = mob.image;
                img.alt = mob.name;
                img.id = "creature";
                div.appendChild(img);
                const h1 = document.createElement("h1");
                h1.innerHTML=mob.name;
                div.appendChild(h1);
                const ddiv = document.createElement("div");
                ddiv.style.width="45%";
                ddiv.style.float="right";
                ddiv.style.margin=0;
                ddiv.className="general";
                ddiv.innerHTML="HP: <br>";
                for (i=1; i<=20;i++)
                    i%2==1 ? ddiv.innerHTML+='<img src="képek/heart.png" class="heart">' :  ddiv.innerHTML+='<img src="képek/heart.png" class="heart flipped">' ;
                ddiv.innerHTML+="<br>Atk: <br>";
                for (i=1; i<=1;i++)
                    i%2==1 ? ddiv.innerHTML+='<img src="képek/heart.png" class="heart">' :  ddiv.innerHTML+='<img src="képek/heart.png" class="heart flipped">' ;
                div.appendChild(ddiv);
                document.getElementById("mobs").appendChild(div);
                return false;
            }
            else
            {
                return true;
            }
        })
    });
}

function sel3()
{
    document.getElementById("mobs").innerHTML = "";
    addplayer();


    const Searched = document.getElementById("searcher");
    mobs.forEach(mob => {
        if (mob.name.toLowerCase().includes(Searched.value.toLowerCase()))
        {
                    const div = document.createElement("div");
                    div.className = "mob";
                    const img = document.createElement("img");
                    img.src = mob.image;
                    img.alt = mob.name;
                    img.id = "creature";
                    div.appendChild(img);
                    const h1 = document.createElement("h1");
                    h1.innerHTML=mob.name;
                    div.appendChild(h1);
                    const ddiv = document.createElement("div");
                    ddiv.style.width="45%";
                    ddiv.style.float="right";
                    ddiv.style.margin=0;
                    ddiv.className="general";
                    ddiv.innerHTML="HP: <br>";
                    for (i=1; i<=20;i++)
                        i%2==1 ? ddiv.innerHTML+='<img src="képek/heart.png" class="heart">' :  ddiv.innerHTML+='<img src="képek/heart.png" class="heart flipped">' ;
                    ddiv.innerHTML+="<br>Atk: <br>";
                    for (i=1; i<=1;i++)
                        i%2==1 ? ddiv.innerHTML+='<img src="képek/heart.png" class="heart">' :  ddiv.innerHTML+='<img src="képek/heart.png" class="heart flipped">' ;
                    div.appendChild(ddiv);
                    document.getElementById("mobs").appendChild(div);
                
        }
    });
}

function cave(lgt)
{
    const lol = document.getElementById("lava");
        var arr = [];
        for (let i = 0; i < lgt; i++) {
            arr[i] = [];
            for(let j = 0; j < lgt*2; j++) {
                arr[i][j] = 1;
            }
        }
        for (let i = 1; i < lgt-1; i++) {
            for(let j = 1; j < lgt*2-1; j++) {
                arr[i][j] = 0;
            }
        }
        for (let i = 1; i < lgt/2; i++)
        {
            for (let j = 1; j < lgt*2-1; j++)
            {
                (arr[i+1][j]==1 || arr[i-1][j]==1) ? (Math.random()>0.5 ? arr[i][j]=1 : ((arr[i][j-1]==1 || arr[i][j+1]==1) && Math.random()>0.5 ? arr[i][j]=1 : arr[i][j]=0)) : arr[i][j]=0;
                (arr[lgt-1-i+1][j]==1 || arr[lgt-1-i-1][j]==1) ? (Math.random()>0.5 ? arr[lgt-1-i][j]=1 : ((arr[lgt-1-i][j-1]==1 || arr[lgt-1-i][j+1]==1) && Math.random()>0.5 ? arr[lgt-1-i][j]=1 : arr[lgt-1-i][j]=0)) : arr[lgt-1-i][j]=0;
            }
        }
        for (let i = 1; i < lgt-1; i++)
        {
            for (let j = 1; j < lgt*2-1; j++)
            {
                
                if (arr[i][j]==0) {
                    if (arr[i+1][j]==1 && arr[i][j-1]==1)
                    {
                        arr[i][j]=2;
                    }
                    else if (arr[i+1][j]==1)
                    {
                        arr[i][j]=3;
                    }
                    else if (arr[i][j-1]==1)
                    {
                        arr[i][j]=4;
                    }
                    else if (arr[i+1][j-1]==1)
                    {
                        arr[i][j]=5;
                    }
                }
            }
        }
        const tavolo = document.createElement("table")
        for (let i = 0; i < lgt; i++)
        {
            const rw = document.createElement("tr")
            for (let j = 0; j < lgt*2; j++)
            {
                const cl = document.createElement("td")
                switch (arr[i][j])
                {
                    case 1:
                    cl.className="stone";
                        break;
                    case 2:
                    cl.className="surface side";
                        break;
                    case 3:
                    cl.className="surface";
                        break;
                    case 4:
                    cl.className="side";
                        break;
                    case 5:
                    cl.className="corner";
                        break;
                }
                rw.appendChild(cl);
            }
            tavolo.appendChild(rw);
        }
        lol.appendChild(tavolo);
}

function mob (name, health, dmg, type, dimension)
{
    this.name = name;
    this.health = health;
    this.dmg = dmg;
    this.type = type;
    this.dimension = dimension;
    this.image;
}
const mobs = [
    new mob("Zombified Piglin", 20, 8, "hostile", "Nether"),
    new mob("Husk", 20, 3, "hostile", "Overworld"),
    new mob("Zombie", 20, 3, "hostile", "Overworld"),
    new mob("Villager", 20, 4, "passive", "Overworld"),
    new mob("Wolf", 8, 4, "neutral", "Overworld"),
    new mob("Pig", 10, 0, "passive", "Overworld"),
    new mob("Enderman", 40, 7, "neutral", "Overworld Nether End"),
    new mob("Shulker", 30, 4, "hostile", "End"),
    new mob("Slime", 16, 4, "hostile", "Overworld"),
    new mob("Silverfish", 8, 4, "hostile", "Overworld"),
    new mob("Skeleton", 20, 4, "hostile", "Overworld Nether"),
    new mob("Hoglin", 40, 8, "hostile", "Nether"),
    new mob("Guardian", 80, 6, "hostile", "Overworld"),
    new mob("Dolphin", 20, 4, "neutral", "Overworld"),
    new mob("Llama", 10, 3, "neutral", "Overworld"),
    new mob("Herobrine", 0, 0, "hostile", "Overworld Nether End")
];
mobs.forEach(m => {
    m.image=`képek/mobs/${m.name.replace(' ', '')}.webp`;
});