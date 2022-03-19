
function binaire(n)
{
    var puissance2 = Math.pow(2, 15);

     while (puissance2>0)
     {
        if(n >= puissance2)
        {
            document.write("1");
            n = n - puissance2;  /*retranche cette puissance*/
        }
        else
        {
            document.write("0");
        }
            
        puissance2 =  parseInt(puissance2 / 2);     /*passe à la puissance inférieure*/
     }
}
var n = 20;
binaire(n);
