let colors = ["green", "blue", "red"];
colors.push("yellow");
colors.push("5");
colors.push({ greeting: "hi ik ben een object" });

console.log(colors);
console.log(colors.length);
console.log(colors[2]);
console.log(colors[colors.length - 1].greeting);
