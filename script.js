
document.getElementById("mobbinos").addEventListener("change", changepicture);
document.getElementById("ZaWarudo").addEventListener("change", sel2);
document.getElementById("searcher").addEventListener("keyup", sel3);
document.getElementById("mobbinos").addEventListener("click", changepicture);
document.getElementById("ZaWarudo").addEventListener("click", sel2);

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
    img.src = "kepek/mobs/Player.webp";
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
        i%2==1 ? ddiv.innerHTML+='<img src="kepek/heart.png" class="heart">' :  ddiv.innerHTML+='<img src="kepek/heart.png" class="heart flipped">' ;
    ddiv.innerHTML+="<br>Atk: <br>";
    for (i=1; i<=1;i++)
        i%2==1 ? ddiv.innerHTML+='<img src="kepek/heart.png" class="heart">' :  ddiv.innerHTML+='<img src="kepek/heart.png" class="heart flipped">' ;
    div.appendChild(ddiv);
    document.getElementById("mobs").appendChild(div);
}

function changepicture() {
    document.getElementById("mobs").innerHTML = "";
    addplayer();
    const SelElem = document.getElementById("mobbinos");
    mobs.forEach(mob => {
        Array.from(SelElem.selectedOptions).forEach(option => {
            if (option.innerHTML==mob.name)
                loadmob(mob);
        })
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
                loadmob(mob)
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
                    
                loadmob(mob);
        }
    });
}

function calcdmg()
{
    hp = document.getElementById("scale").value;
    document.getElementById("endmg").innerHTML=hp+"<br>";
    for (i=1; i<=parseInt(hp);i++)
        i%2==1 ? document.getElementById("endmg").innerHTML+='<img src="kepek/heart.png" class="heart">' :  document.getElementById("endmg").innerHTML+='<img src="kepek/heart.png" class="heart flipped">' ;
}

function checkquizz()
{
    summed=0;
    if (document.getElementById("scale").value==7)
    {
        summed++;
        document.getElementById("endmg").style.color="#0F0";
    }
    else
    {
        document.getElementById("endmg").style.color="#F00";
    }
    if (document.getElementById("hay0").checked)
        {
            summed++;
            document.getElementById("hay0l").style.color="#0F0";
        }
        else if (document.getElementById("hay1").checked)
        {
            summed++;
            document.getElementById("hay1l").style.color="#F00";
        }
        else if (document.getElementById("hay2").checked)
        {
            summed++;
            document.getElementById("hay2l").style.color="#F00";
        }
        else if (document.getElementById("hay3").checked)
        {
            summed++;
            document.getElementById("hay3l").style.color="#F00";
        }
        if (document.getElementById("numupdown").value==2014)
        {
            document.getElementById("numupdown").style.color="#0F0";
            summed++;
        }
        else
        {
            document.getElementById("cname").style.color="#F00";
        }
        if (document.getElementById("cname").value=="Steve")
        {
            document.getElementById("cname").style.color="#0F0";
            summed++;
        }
        else
        {
            document.getElementById("who").style.color="#F00";
        }
        if (document.getElementById("who").value==15)
        {
            document.getElementById("who").style.color="#0F0";
            document.getElementById("pokemon").innerHTML="It's Herobrine!";
            summed++;
        }
        else
        {
            document.getElementById("who").style.color="#F00";
            document.getElementById("pokemon").innerHTML="It's not a pokemon you dumb f-";
        }
        if (document.getElementById("Java").checked && !document.getElementById("Oracle").checked && !document.getElementById("Anime").checked && document.getElementById("Bedrock").checked)
        {
            summed++;
        }
        alert(`Your score is ${summed}/6`)
}

function loadmob(mob)
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
    for (i=1; i<=mob.health;i++)
        i%2==1 ? ddiv.innerHTML+='<img src="kepek/heart.png" class="heart">' :  ddiv.innerHTML+='<img src="kepek/heart.png" class="heart flipped">' ;
    ddiv.innerHTML+="<br>Atk: <br>";
    for (i=1; i<=mob.dmg;i++)
        i%2==1 ? ddiv.innerHTML+='<img src="kepek/heart.png" class="heart">' :  ddiv.innerHTML+='<img src="kepek/heart.png" class="heart flipped">' ;
    div.appendChild(ddiv);
    document.getElementById("mobs").appendChild(div);
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
function funfact()
{
    const fact = [
        "<a href='https://www.youtube.com/shorts/RlEt4Pa6IWA' target='_blank'>Creepers were made by accident.</a> Just like you!",
        "It takes 1,031 diamonds to craft a full inventory of diamond blocks. That’s more diamonds than you’ll ever find—or afford!",
        "<a href= 'https://www.youtube.com/shorts/Hk6pXoywwmA' target='_blank'>Endermen speak reversed English phrases.</a> Kind of like how no one understands you half the time",
        "<a href='https://www.youtube.com/shorts/APR-OMq1Vrw' target='_blank'>Ghasts make their sounds from a cat’s</a> sleeping noises. Which is ironic, because unlike you, cats know how to chill.",
        "The End was originally called 'The Sky Dimension.' Much like your goals: all talk, no reality.",
        "Sheep regrow wool by eating grass. That’s right; even sheep know how to handle self-care better than you.",
        "The Wither drops a Nether Star. Too bad no one dropped a star when you were born.",
        "Baby zombies are faster than regular zombies. A bit like toddlers—minus the excuses for being so small and annoying.",
        "The Ender Dragon is the only boss mob in the base game. Unlike you, it actually has a purpose.",
        "<a href='https://scaleofuniverse.com/en/universe/minecraft-world' target='_blank'>Minecraft’s map is 60 million blocks wide.</a> Which is about as wide as your search history of failed ideas.",
        "Piglins love gold items and will ignore you if you're holding one. But don’t get your hopes up; no amount of gold will make people ignore your awkwardness.",
        "You can ride pigs, but they won’t take you far. Kind of like your dreams.",
        "Minecraft mobs might be dangerous, but at least they don’t have Wi-Fi to roast you for your poor gameplay."
    ]
    document.getElementById("funfact").innerHTML=`<h2>Fun fact:</h2><p>${fact[parseInt(Math.random()*13)]}</p>`;
}
function mob (name, health, dmg, type, dimension)
{
    this.name = name;
    this.health = health;
    this.dmg = dmg;
    this.type = type;
    this.dimension = dimension;
    this.image =`kepek/mobs/${name.replace(' ', '')}.webp`;
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