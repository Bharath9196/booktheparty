function Validate(){
    const fname= document.getElementById("firstname").value;
    let namestatus = false;
    const lname = document.getElementById("lastname").value;
    const mail=document.getElementById("email").value;
    let mailstatus=false;
    const mobile=document.getElementById("phone").value;
    let mobilestatus=false;
    const requirement=document.getElementById("textarea").value;
    let requirementstatus=false;
    const alphaExp =/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
    const numexp=/^[0-9]+$/;
    const mailexp=/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

        //email validation
        if(mail===""){
            document.getElementById("emailnote").innerHTML="email is mandatory";
        }
        else{
            if(mail.match(mailexp)){
                document.getElementById("emailnote").innerHTML="please enter valid email";
            }
            else{
                document.getElementById("emailnote").innerHTML="";
                mailstatus=true;
            }
        }
        //mobile validation
        if(mobile===""){
            document.getElementById("mobilenote").innerHTML="please enter your mobile number";
            
        }
        else{
            if(mobile.match(numexp)){
                if(mobile.length===10){
                    document.getElementById("mobilenote").innerHTML="";
                    mobilestatus=true;
                }
                else{
                    document.getElementById("mobilenote").innerHTML="10 digits only";
                }
            }
            else{
                document.getElementById("mobilenote").innerHTML="only digits";
            }
        }

        //first name validation
    if(fname === "") {
        document.getElementById("namenote").innerHTML="Please enter your First Name";
    }
    else{
        if(fname.match(alphaExp)){
            document.getElementById("namenote").innerHTML="";
            namestatus=true;
        }
        else{
            document.getElementById("namenote").innerHTML="only characters starting with capital letter";
        }
    }
        //last name validation
    if(lname === ""){
      document.getElementById("lnamenote").innerHTML="please enter your last name";
    }
    else{
      if(lname.match(alphaExp)){
        document.getElementById("lnamenote").innerHTML="";
        namestatus=true;
      }
      else{
        document.getElementById("lnamenote").innerHTML="only charaters";
      }
    }

    //text area validation
    if(requirement ===""){
        document.getElementById("textnote").innerHTML="please fill out this field";
    }
    else{
        document.getElementById("textarea").innerHTML="";
        requirementstatus=true;
    }


    //return validation
    if(namestatus &&mailstatus &&mobilestatus&&requirementstatus === true){
        return true;
    } else {
        return false;
    }
}
    