
document.addEventListener("DOMContentLoaded", (event) => {
    const games = ["minecraft", "csgo", "brawlstars", "amogus", "fortnite", "roblox"] 

    games.map((game) => {
        const element = document.getElementById(`${game}_case`)

        const body = document.getElementsByTagName("body")[0]
       
        element.addEventListener("mouseenter", (event) => {

            body.animate({ backgroundImage: `url(../assets/backgrounds/bg_${game}.png)` }, {
                duration: 500, fill: "forwards"
            })

           
  
        })
    })

});