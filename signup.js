function signin(){
    let a=document.getElementById("username").value;
    let b=document.getElementById("pass").value;
    if(a && b){
        let userdata=JSON.parse(localStorage.getItem("users"))||[]
        data={"username":a,"userpassword":b};
        userdata.push(data);
        localStorage.setItem("users",JSON.stringify(userdata));
    }
    a.value=""
    b.value=""
    }
    
    function login(){
    let c=document.getElementById("usernamep").value;
    let d=document.getElementById("usernamepp").value;
    let userdata=JSON.parse(localStorage.getItem("users"))||[]
    const matched=userdata.find(x=>x.username===c && x.userpassword===d)
    if(matched){
        alert("login succesfuuly")
    }else{
        alert("please sign in or check the login creditials")
    }
    
    
    
    
    
    
    
    
    }