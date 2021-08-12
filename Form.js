class Form{
constructor(){
this.input = createInput("Name: ");
this.button = createButton("Ready!");
this.greetings = createElement("h1");
}
hide(){
this.greetings.hide();
this.button.hide();
this.greetings.hide();
}
display(){
var title = createElement("h2");
title.html("Racing Game");
title.position(130, 0);
this.input.position(130, 160);
this.button.position(200, 200);
this.button.mousePressed(() => {
this.input.hide();
this.button.hide();
player.name = this.input.value();
playerCount += 1;
player.update();
player.updateCount(playerCount);
this.greetings.html("Hello, " + player.name + "!");
this.greetings.position(130, 160);
});
}
}