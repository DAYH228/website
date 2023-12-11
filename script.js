alert("ну привет")

let name = prompt('Пожалуйста, представьтесь');
alert(name + ", добро пожаловать на сайт!");
var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
document.write(datetime)