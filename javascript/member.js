function username()
{
    var name=document.getElementById("name").value;
    if(name.length<4)
    {
        //document.getElementById("u1").innerHTML="opps";
        document.getElementById("u1").innerHTML="Enter minimum 5 characters";
            }
            else{
                document.getElementById("u1").innerHTML="";     
    }
}
function updateemail(){
        var email=document.getElementById("eid").value;
        if(email == "")
             {
            document.getElementById("e1").innerHTML="Please enter your email address";
        } 
    else 
    {
    
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false)
         {
            document.getElementById("e1").innerHTML="Please enter a valid email address";
        } 
        else{
            document.getElementById("e1").innerHTML="";
        }
    }
}

function validatepwd()
    {    var pwd=document.getElementById("pwd").value;
    var decimal= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    
   

    if(decimal.test(pwd)==true)
    { 
    document.getElementById("p1").innerHTML=" ";

    }
    else
    { 
    document.getElementById("p1").innerHTML="please enter Strong password";

    }
    }
    function confirm()
     {

    var pwd=document.getElementById("pwd").value;
    var pwd2=document.getElementById("pwd2").value;
   if(pwd==pwd2)
    { 
      document.getElementById("p2").innerHTML=" ";
      }
    else
     { 
    document.getElementById("p2").innerHTML="please ensure your password";

    }

    }
    function Countword()
  {
    var v=document.getElementById("bio").value.length;
    console.log(v);
    var charactersLeft =140-v;
    document.getElementById("label4").innerHTML=charactersLeft;

  }
  function Datecal()
  {
    var d=document.getElementById("date").value;
   // var bd=
  }
  function register()
  {
      alert("Successfully Registerd");
  }
