
  
  var xhr = new XMLHttpRequest();
  xhr.open('GET','jsoncasestudy.json',true);
  xhr.send(null);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
    var responseObject=JSON.parse(xhr.responseText);
    var newcontent="";
    for(var i=0;i<responseObject.events.length;i++)
    {
        newcontent+="<img src='"+responseObject.events[i].map+"'";
        newcontent+="alt =" + responseObject.events[i].location+"/>";
        //newcontent+="<p="+responseObject.events[i].date+"/>";
    }
    document.getElementById('div2').innerHTML=newcontent;

    }
    }
  
   
