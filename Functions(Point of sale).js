const calcprod = function(products,tax){
    let total=0;
    for(let i=0;i < products.length;i++){
        total+=products[i]+products[i]*tax;
    }
    return total;
};
let productsC=calcprod([20,30,20],0.2);
console.log(productsC);