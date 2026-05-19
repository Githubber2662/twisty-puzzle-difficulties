document.body.innerHTML += '<p id="N">N represents a positive integer</p>';
const List = [["1×1×1 Cube, 1-layer Pyraminx, Megaminx etc. (already solved)", "Any 1×1×N cuboid (trivial solution)", "2-layer Pyraminx", "1×2×2 Cuboid", "Square-(-1) (identical to 1×2×3)", "1×2×3 Cuboid"], 
             ["Ivy Cube", "Pyraminx Duo"]];
const List2 = ["Effortless", "Very Easy", "Easy", "Medium", "Hard", "Very Hard", "Challenging", "Intense", "Insane", 
"Extreme", "Extreme+", "Nightmare", "Nightmare+", "Hell", "Hell+", "Easy Demon", "Medium Demon", "Hard Demon", "Very Hard Demon", "Challenging Demon",
"Intense Demon", "Insane Demon", "Extreme Demon"]
var x = [0, 0];
var y = 0;
for(x[1] = 0; x[1] < List.length; x[1]++) {
  document.body.innerHTML += '<p id=`Difficulty${x[1]}`>'+'Difficulty '+(x[1]+1).toString()+': '+List2[x[1]].toString()+'</p>';
  for(x[0] = 0; x[0] < List[x[1]].length; x[0]++) {
   document.body.innerHTML += '<p id=`Puzzle${y}`>'+(x[0]+1).toString()+'. '+List[x[1]][x[0]].toString()+'</p>';
   y++;
}
}
