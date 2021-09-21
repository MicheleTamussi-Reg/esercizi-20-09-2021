var str1 = prompt("inserisci la prima parola").toLocaleLowerCase();
var str2 = prompt("inserisci la seconda parola").toLocaleLowerCase();

var arr1 = Array.from(str1).sort();
var arr2 = Array.from(str2).sort();

cont = 0;

if (arr1.length != arr2.length){
    console.log("non sono anagrammi");
}
else if (arr1.length == arr2.length){
    for(let i=0;i<arr1.length;i++){
        if (arr1[i] == arr2[i]){
            cont++;
        }
    }
}
console.log(cont);

if (cont == arr1.length){
    console.log("sono anagrammi");
}
else console.log("non sono anagrammi");









