let role = "";

function show(id){
  ["welcome","roles","login","dashboard"].forEach(x=>document.getElementById(x).classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function selectRole(r){
  role=r;
  document.getElementById("loginTitle").textContent=r+" Login";
  document.getElementById("error").textContent="";
  document.getElementById("email").value="";
  document.getElementById("password").value="";
  show("login");
}

function login(){
  const email=document.getElementById("email").value.trim();
  const password=document.getElementById("password").value.trim();
  if(!email || !password){
    document.getElementById("error").textContent="Please enter email and password.";
    return;
  }
  if(password!=="1234"){
    document.getElementById("error").textContent="Demo password is 1234.";
    return;
  }
  document.getElementById("dashTitle").textContent=role+" Dashboard";
  let html="";
  if(role==="Student"){
    html=card("👤 Profile","Suba","Student Profile")
       +card("📅 Attendance","92%","Overall Attendance")
       +card("📊 Marks","85%","Average Marks")
       +card("📝 Assignments","8/10","Completed")
       +card("🚀 Progress","78%","Course Progress");
  }else if(role==="Parent"){
    html=card("👤 Child Profile","Suba","Student")
       +card("📅 Attendance","92%","Child Attendance")
       +card("📊 Marks","85%","Average Marks")
       +card("📝 Assignments","8/10","Completed")
       +card("🚀 Progress","78%","Child Progress");
  }else{
    html=card("👩‍🏫 Profile","Teacher","Teacher Profile")
       +card("👨‍🎓 Students","40","Total Students")
       +card("📅 Attendance","92%","Class Attendance")
       +card("📊 Marks","85%","Class Average")
       +card("📝 Assignments","24","Pending Review")
       +card("🚀 Progress","78%","Class Progress");
  }
  document.getElementById("content").innerHTML=html;
  show("dashboard");
}

function card(icon,value,label){
  return `<div class="card"><h3>${icon} ${label}</h3><div class="big">${value}</div></div>`;
}

function logout(){
  role="";
  show("welcome");
}
