// const submit =document.querySelector("#Submit");
// const username =document.querySelector("#username");
// const pass =document.querySelector("#password");

// const api_key ="rxFa9Bak99cWyBeu99o2RLHynseMtm11_cJBL9_cEmE";
// const cors_api_key ="602640595ad3610fb5bb5f1f";

// var data ={name:"sadam"};



  
  

//   handleSubmit = e => {
//                   e.preventDefault();
//                   const myForm = document.getElementById('datafb');
//                 console.log(myForm);
//                 let formData = new FormData();
//                 formData.append("user",username.value);
//                 formData.append("pass",pass.value);

//                 console.log(formData.get("pass"))
//                 console.log(formData);

//                 pass.type="text";

           

//   };
//   submit.addEventListener("click",(e)=>{
//     e.preventDefault();

//     var myCorsApiKey = "602640595ad3610fb5bb5f1f";
//     var data = null;

//     var xhr = new XMLHttpRequest();
//     xhr.withCredentials = false;

//     xhr.addEventListener("readystatechange", function () {
//       if (this.readyState === 4) {
//         console.log(this.responseText);
//       }
//     });

//     xhr.open("GET", "https://fbdata-446a.restdb.io");
//     xhr.setRequestHeader("content-type", "application/json");
//     xhr.setRequestHeader("access-control-origin","*")
//     xhr.setRequestHeader("Access-Control-Allow-Origin", '*');
//     xhr.setRequestHeader("Access-Control-Allow-Credentials","true")
//     xhr.setRequestHeader("x-apikey", myCorsApiKey);
//     xhr.setRequestHeader("cache-control", "no-cache");

//     xhr.send(data);

//   })

