localStorage.setItem("oldURL", window.top.location.href);
localStorage.setItem("oldPath", window.location.pathName);
setInterval(function() {  
if(window.top.location.href!= localStorage.getItem("oldURL")) {
console.log(localStorage.getItem("oldURL"));
localStorage.setItem("oldURL", window.top.location.href);
localStorage.setItem("oldPath", window.location.pathName);
} else if (window.location.pathname != localStorage.getItem("oldPath")) {
console.log(localStorage.getItem("oldURL"));
localStorage.setItem("oldURL", window.top.location.href);
localStorage.setItem("oldPath", window.location.pathName);
}
}, 5);
//the logic works for frame switches and direct URL changes
//next issue: It puts a bunch of repeat entries
//also: needs to work between tavs