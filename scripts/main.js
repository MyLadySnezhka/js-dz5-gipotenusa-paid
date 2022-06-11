const katlink1 = document.querySelector('input[name="kat1"]');
const katlink2 = document.querySelector('input[name="kat2"]');

let katetA, katetB;

katlink1.addEventListener('change', (ev) => {
    katetA = katlink1.value;
})

katlink2.addEventListener('change', (ev) => {
    katetB = katlink2.value;
    gippo(katetA, katetB);
    console.log('Гипотенузя:', c);    
})

const gippo = (katetA, katetB) => {
    console.log('Катеты:', katetA, 'и', katetB);
    c = Math.sqrt(katetA*katetA + katetB*katetB);
    return c;
}



gippo(3, 4);
console.log('Гипотенуза:', c);    

