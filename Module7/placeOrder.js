
function validePostCode(){

    var temp=document.getElementById("pin").outerHTML;
    var secPode = /^\d{6}$/;

    if(temp.match(secPode)){
        return true;
    }else{
        alert("Not a valid Post Code");
        return false;
    }

}

function validateCardNumber(){
    var temp=document.getElementById("Cno").outerHTML;
    var cNO = /^\d{16}$/;

    if(temp.match(cNO)){
        return true;
    }else{
        alert("Not a valid Card");
        return false;
    }

}

function validateSecCode(){
    var temp=document.getElementById("Scode").outerHTML;
    var sCode = /^\d{3}$/;

    if(temp.match(sCode)){
        return true;
    }else{
        alert("Not a valid Card");
        return false;
    }


}



function validate(){
    validePostCode();
    validateCardNumber();
    validateSecCode();
}