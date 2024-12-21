const sayilar = [19,2,30,9,55];

function sirala(sayilar) {
    return sayilar.sort((a, b) => a - b);
}

const siraliSayilar = sirala(sayilar);

console.log(siraliSayilar);
