//                      RECURSIVIDADE                    //
function fatorial(n){
    if(n==1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))
/*
5! = 5 x 4 x 3 x 2 x 1

também pode ser lido como: 5! = 5 x 4!

a logica segue por n! = n x (n-1)!
                    fatorial de N recebe N vezes fatorial de 1 número a menos.
*/