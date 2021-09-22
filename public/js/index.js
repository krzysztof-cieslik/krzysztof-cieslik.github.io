document.addEventListener("DOMContentLoaded", () => {
    const games = ["minecraft", "csgo", "brawlstars", "amogus", "fortnite", "roblox"]

    games.map((game) => {
        const element = document.getElementById(`${game}_case`)

        const body = document.getElementsByTagName("body")[0]

        const charLeft = document.getElementsByClassName("char-left")[0]
        const charRight = document.getElementsByClassName("char-right")[0]

        element.addEventListener("mouseenter", () => {
            body.animate({backgroundImage: `url(../assets/backgrounds/bg_${game}.png)`}, {
                duration: 500, fill: "forwards"
            })
            charLeft.animate({backgroundImage: `url(../assets/characters/char_${game}_1.png`}, {
                duration: 500, fill: "forwards"
            })
            charRight.animate({backgroundImage: `url(../assets/characters/char_${game}_2.png`}, {
                duration: 500, fill: "forwards"
            })
        })
    })
})