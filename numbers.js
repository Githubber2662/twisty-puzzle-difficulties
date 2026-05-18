document.body.innerHTML += 'N represents a positive integer';
const List = [["1×1×1 Cube (already solved)", "Any 1×1×N cuboid (trivial solution)"]];
const List2 = ["Effortless", "Very Easy", "Easy", "Medium", "Hard", "Very Hard", "Challenging", "Intense", "Insane", 
"Extreme", "Extreme+", "Nightmare", "Nightmare+", "Hell", "Hell+", "Easy Demon", "Medium Demon", "Hard Demon", "Very Hard Demon", "Challenging Demon",
"Intense Demon", "Insane Demon", "Extrem Demon"]
var x = [0, 0];
var y = 0;
for(x[1] = 0; x[1] < List.length; x++) {
  for(x[0] = 0; x[1] < List[x[1]].length; x++) {
   document.body.innerHTML += '<p id=`Puzzle${y}`>'+(x[0]+1).toString()+'. '+List[x[1]][x[0]].toString()+'</p>';
}
}
