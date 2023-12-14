function color1() {
    var randomcolor = Math.floor(Math.random() * 1672215).toString(16);
    document.body.style.backgroundColor = "#" + randomcolor;
    var randomcolor1 = Math.floor(Math.random() * 1675).toString(16);
    var color = document.getElementById('col');
    color.style.color = "#" + randomcolor1;
    var randomcolor2 = Math.floor(Math.random() * 1672215).toString(16);
    var colo = document.getElementById('genNew');
    colo.style.backgroundColor = "#" + randomcolor2;
}
