var temp;
onmessage=function(ev){
    temp=ev.data;
    var text="";

    for(var i=0;i<temp;i++){
        if(i%2==0){
            continue;
        }else{
            text+="<li><strong>"+i +"</strong></li>";
            this.postMessage(text);
        }
    }
}