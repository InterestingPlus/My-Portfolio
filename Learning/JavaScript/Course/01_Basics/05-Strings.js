const name = "Jatin";
const repoCount = 50;

console.log("Hello " + name + repoCount); // Not Recomended

console.log(`Hello My name is ${name} and my Repo count is ${repoCount}`);

const gameName = new String("Interesting-Plus-com");

console.log(gameName[2]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf("e"));

console.log(gameName.substring(0, 4));
console.log(gameName.slice(-8, 4));

const newString = "        Poriya     ";
console.log(newString);
console.log(newString.trim());

const url = "https://jatinporiya.epizy.com/my%20web%20projects%20css/";
console.log(url.replaceAll("%20", "-"));
console.log(url.includes("jatin"));

console.log(gameName.split("-"));
