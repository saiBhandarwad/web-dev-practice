let card = document.getElementById("card");
function changeCardColor() {
    let colors = ["#FF5733", "#33FF57", "#3357FF", "#F0E68C", "#FF69B4"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    card.style.backgroundColor = randomColor;
}