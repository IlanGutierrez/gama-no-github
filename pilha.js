var elementos   = 1;
var topo        = -1;
const Maximo    =10;

function push (num){
    if (topo < MAX){
        topo = topo + 1;
        elementos [topo] = num;
    }
    else{
        console.log ("pilha está cheia")
    }

}
function pop (){
    if (topo != -1){
        let num = elementos [topo];
        topo = topo -1;
        return num;
    }
    else{
        console.log ("pilha esta vazia!");
    }
}   

//-------parte do código que usa a pilha----//

push(10);
push(20);
push(30);

console.log (elementos);
