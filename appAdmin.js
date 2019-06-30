var ip = 'http://192.168.43.168:5000';

function getProfiles(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET',ip+'/Admin',true);

    xhr.onload = function(){
  if(this.status === 200){
      
      data = JSON.parse(this.responseText);
      data.forEach(function(user){
        output += `
        
        <div class="card mb-3" id = "${user.id}">
          <div class="card-body">
            <h5 class="card-title">${user.name}</h5>
            <p class="card-text">${user.email}</p>
            <p class="card-text">${user.id}</p>
            <button class="btn btn-primary" id="updatePost" onclick='updateProfile(${user.id})' ">updatepost</button>
          </div>
        </div>
        `;
      }
    );
      document.getElementById('output').innerHTML = output;
  }
  

}

xhr.send();
}

function loginAdmin()
{
    alert("data")

}









function updateProfile(sus_id){
  const xhr = new XMLHttpRequest();

  xhr.open('GET',ip+'/Admin'+`/${sus_id}`,true);

  xhr.onload = function(){
if(this.status === 200){
    
    data = JSON.parse(this.responseText);

    data.forEach(function(user){
     output = `
      <form method="POST" action="${ip}/Admin/${sus_id}" enctype="multipart/form-data">
      <input type="text" id="defaultContactFormName" name="name" class="form-control mb-4" placeholder="${user.name}">
      <!-- Email -->
      <!-- Message -->
       <div class="form-group">
      <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" name="email" rows="3" placeholder="${user.email}"></textarea>
      </div>
       <div class="form-group">
      <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" name="oldPassword" rows="3" placeholder="Old Password"></textarea>
      </div>
       <div class="form-group">
      <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" name="newPassword" rows="3" placeholder="New Password"></textarea>
      </div>
       <div class="form-group">
      <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" name="confirmPassword" rows="3" placeholder="Confirm Password"></textarea>
      </div>
      
      <button class="btn btn-info btn-block" type="submit">Send</button>
      </div>
      </form>
        `;
    }
  );
    document.getElementById(`${sus_id}`).innerHTML = output;
}
}
xhr.send();
}
// function addUser(){
//   var url = "http://192.168.100.12:5000/suspect";

// var data = {};
// data.firstname = "John";
// data.lastname  = "Snow";
// var json = JSON.stringify(data);

// var xhr = new XMLHttpRequest();
// xhr.open("POST", url, true);
// xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
// xhr.onload = function () {
//  var users = JSON.parse(xhr.responseText);
//  if (xhr.readyState == 4 && xhr.status == "201") {
//    console.table(users);
//  } else {
//    console.error(users);
//  }
// }
// xhr.send(json);
// }
function getSuspect(){

}
document.querySelector('body').addEventListener('DOMContentLoaded',getProfiles());