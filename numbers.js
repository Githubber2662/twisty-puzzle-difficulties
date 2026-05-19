document.body.innerHTML += '<p id="N">M, N and P represent positive integers.</p>';
const List = [["1×1×1 Cube, 1-layer Pyraminx, Dodecahedron etc. (already solved)", "Any 1×1×N cuboid (trivial solution)", "2-layer Pyraminx", "1×2×2 Cuboid", "Square-(-1) (identical to 1×2×3)", "1×2×3 Cuboid", "MoYu Unicorn Cube & Pyramid"], 
             ["Ivy Cube", "Pyraminx Duo", "O2 Cube", "Skewb", "Clock", "Helicopter Cube", "Rubik\'s Magic & Master Magic", "6 Spot Cube", "Dino Cube", "Yeet Ball"], ["Rainbow Ball", "Tetraminx", "Pyraminx", "Redi Cube", "Jing\'s Pyraminx", "Duomo Pyraminx", "2×2×2 Gear Cube", "Penrose Pyraminx", "Star Barrel", "1×3×3 Cuboid", "Fisher Skewb", "2×2×2 Cube", "OS 2×2×2 Cube", "2×2×3 Cuboid", "2×3×3 Cuboid", "Kilominx", "Square-0", "Curvy Copter (not jumbled)", "Gear Cube"], 
             ["3×3×4 Cuboid", "3×3×3 Cube", "5-Axis Pentahedra (J-Perm)", "Polaris Cube", "Master Skewb", "Mario 2×2×2", "Banana 2×2×3", "Rubik\'s Octahedron (Face-turning)", "Ghost 1×3×3 Cuboid", "Square-1", "Megaminx", "2×2×2 Sudoku Cube", "Penrose Cube", "2×2×2 Mirror Cube"], ["4-layer Pyraminx", "Tuttminx", "4×4×4 Cube", "2×2×4 Cuboid", "Hexaminx", "Big Dipper Megaminx", "Square-2", "Curvy Copter (jumbled)", "5-layer Pyraminx", "2×2×2 Skewb", "5×5×5 Cube", "4 & 5-layer dodecahedra", "3×3×5 Cuboid", "3×3×3 Mirror Cube", "Pyramorphix"], 
             ["N-layer cubes, dodecahedra, pyraminxes, hexaminxes, mirror cubes etc.", "M×N×P Cuboids", "Square-N", "Gear Pyraminx"], ["3×3×3 Curvy Copter", "Mixup Cube", "4×4×4 Mixup Cube", "Bandaged Cubes", "Bandaged Cuboids"], ["Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pentacle cubes & dodecahedron analogs"]];
const List2 = ["Effortless", "Very Easy", "Easy", "Medium", "Hard", "Very Hard", "Challenging", "Intense", "Insane", 
"Extreme", "Extreme+", "Nightmare", "Nightmare+", "Easy Demon", "Medium Demon", "Hard Demon", "Very Hard Demon", "Challenging Demon",
"Intense Demon", "Insane Demon", "Extreme Demon", "Extreme+ Demon", "Nightmare Demon", "Nightmare+ Demon", "Remorseless", "Arduous", "Deadly", "Impossible", "Absurd", "Nil", "N (N represents the difficulty class (Effortless is 1, Very Easy is 2 etc.)", "1, tier 2", "2, tier 2"];
var x = [0, 0];
var y = 0;
for(x[1] = 0; x[1] < List.length; x[1]++) {
  document.body.innerHTML += '<p id=`Difficulty${x[1]}`>'+'Difficulty '+(x[1]+1).toString()+': '+List2[x[1]].toString()+'</p>';
  for(x[0] = 0; x[0] < List[x[1]].length; x[0]++) {
   document.body.innerHTML += '<p id=`Puzzle${y}`>'+(x[0]+1).toString()+'. '+List[x[1]][x[0]].toString()+'</p>';
   y++;
}
}
