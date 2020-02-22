var xh=new XMLHttpRequest();
xh.onload=function()
{
    if(xh.status===200)
    {
        document.getElementById("div2").innerHTML=xh.responseText;
    }
}
xh.open("GET","casestudy21.html");
xh.send(null);