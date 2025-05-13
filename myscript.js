const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener
(
    'click', ()=>
    {
    wrapper.classList.add('active');
    }
);

loginlink.addEventListener
(
    'click', ()=>
    {
        wrapper.classList.remove('active');
    }
);

btnPopup.addEventListener
(
    'click', ()=>
    {
        wrapper.classList.add('active-popup');
    }
);

iconClose.addEventListener
(
    'click', ()=>
    {
        wrapper.classList.remove('active-popup');
    }
);

function submit_form()
{
    var e=document.getElementById("e1").value;
    var p=document.getElementById("p1").value;
    var password_val=/^[A-Za-z0-9_\.\-]+$/;
    var email_val=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if(e==''||p=='')
       {
         alert("Enter each details correctly");
       }

  else if(!email_val.test(e))
       {
         alert('Invalid email format please enter valid email id');
       }

  else if(!password_val.test(p))
       {
         alert('Invalid password format please enter valid password id');
       }
  
  else if(document.getElementById("p1").value.length > 32)
       {
         alert("Password maximum length is 32");
       }
  else if (document.getElementById("p1").value.length < 8)
       {
         alert("Password minimum length is 8");
       }
  else 
  {
    alert("Login successfully... redirecting to javaTpoint.com");
    window.location="https://www.javatpoint.com/";
  }
  
}

function register_form()
{
    var em=document.getElementById("e2").value;
    var ps=document.getElementById("p2").value;
    var u=document.getElementById("u2").value;
    var password_val=/^([A-Za-z0-9_\.\-])+$/;
    var username_val=/^[A-Za-z]+$/;
    var email_val=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if(u==''||e==''||p=='')
       {
         alert("Enter each details correctly");
       }

  else if(!username_val.test(u))
       {
         alert('Invalid username format please enter valid username id');
       }

  else if(!email_val.test(em))
       {
         alert('Invalid email format please enter valid email id');
       }

  else if(!password_val.test(ps))
       {
         alert('Invalid password format please enter valid password id');
       } 
  
  else if(document.getElementById("p2").value.length > 32)
       {
         alert("Password maximum length is 32");
       }
  else if (document.getElementById("p2").value.length < 8)
       {
         alert("Password minimum length is 8");
       }
  else 
  {
    alert("Account created successfully... redirecting to javaTpoint.com");
    window.location="https://www.javatpoint.com/";
  }
  
}
           