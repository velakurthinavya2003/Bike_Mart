function validation()
{
    var name=document.getElementById('exampleInput1').value;
    var email=document.getElementById('exampleInputEmail1').value;
    var number=document.getElementById('exampleInput2').value;
    var password=document.getElementById('exampleInput3').value;
    var c_password=document.getElementById('exampleInput4').value;

    var namecheck=/^[A-Za-z ]{2,} $/;
    var emailcheck=/^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var numbercheck=/^[6789][0-9]{9}$/;
    var passwordcheck=/^[A-Za-z0-9_!@#$%^&*]{8,}$/;

    if(namecheck.test(name))
    {
        document.getElementById("error-name").innerHTML="";
    }
    else{
        document.getElementById("error-name").innerHTML="Use only alphabets";
        return false;

    }


    if(emailcheck.test(email))
    {
        document.getElementById("error-email").innerHTML="";
    }
    else{
        document.getElementById("error-email").innerHTML="Use current format";
        return false;
    }

 if (numbercheck.test(number))

    {
        document.getElementById("error-number").innerHTML="";
    }
    else 
    {
        document.getElementById("error-number").innerHTML=" invalid number";
        return false;
        
    }

    if (passwordcheck.test(password))

    {
        document.getElementById("error-password").innerHTML="";
    }
    else 
    {
        document.getElementById("error-password").innerHTML=" wrong password";
        return false;
    }

    if(c_password.match(password))
    {
        document.getElementById("error-c-password").innerHTML=""; 
    }
    else
    {
        document.getElementById("error-c-password").innerHTML="password does not match"; 
        return false;
    }
    
}
    




function validate()
{
    var name=document.getElementById('Input1').value;
    var email=document.getElementById('InputEmail1').value;
    var bikename=document.getElementById('Input2').value;
    var price=document.getElementById('Input3').value;
    
    var namecheck=/^[A-Za-z ]{2,} $/;
    var emailcheck=/^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var bikecheck=/^[A-Za-z ]{2,} $/;
    var pricecheck=/^[6789][0-9]{9}$/;

    if(namecheck.test(name))
    {
        document.getElementById("error-name").innerHTML="";
    }
    else{
        document.getElementById("error-name").innerHTML="Use only alphabets";
        return false;

    }


    if(emailcheck.test(email))
    {
        document.getElementById("error-email").innerHTML="";
    }
    else{
        document.getElementById("error-email").innerHTML="Use current format";
        return false;
    }

 if (bikecheck.test(bikename))

    {
        document.getElementById("error-bikename").innerHTML="";
    }
    else 
    {
        document.getElementById("error-bikename").innerHTML=" invalid name";
        return false;
        
    }

    if (pricecheck.test(price))

    {
        document.getElementById("error-number").innerHTML="";
    }
    else 
    {
        document.getElementById("error-number").innerHTML=" check amount";
        return false;
    }

   
    
}
    




