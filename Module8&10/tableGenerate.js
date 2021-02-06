var text="";
for(var i=2;i<=10;i++){
    for(var j=1;j<=10;j++){
        var temp=i*j;
        text+=temp+",";
    }
    text+="<br>";
}

postMessage(text);