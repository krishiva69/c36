class Game {
constructor(){

}
getState(){
var gameStateRef = database.ref('gameState')
gameStateRef.on("value", function(data){
gameState = data.val();
})
}
update(state){
database.ref('/').update({
gameState: state
});
}
wait(){
if(gameState === 0){
form = new Form();
form.display();
player = new Player();
player.getCount();
}
}
}