const allPlayer = document.getElementById("players");
allPlayer.style.border = "2px solid blue";

const players = document.getElementsByClassName("player");
for (const player of players) {
    player.style.color = "red";
    player.style.backgroundColor = "pink";
    player.style.border = "2px solid black";
    player.style.padding = "20px";
    player.style.margin = "20px";
}