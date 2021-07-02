menu_list_array = ["Veg Margherita Pizza",
                   "Chicken Tandoori Pizza",
                   "Veg Supreme Pizza",
                   "Paneer Tikka Pizza",
                   "Deluxe Veggie Pizza",
                   "Veg Extravaganza Pizza",
                    ];

function getmenu(){
var htmldata;
htmlsata="<ol class='menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.lenght;i++){
    htmldata=htmldata+'<li>' +menu_list_array[i] + '</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_name").innerHTML=htmldata;
};

function add_item(){
var htmldata;
var item=document.getElementById("add_item").nodeValue;
menu_list_array.sort();
htmldata="<section class='cards>"
for(var i=0;i<menu_list_arrat.lenght;i++){

    htmldata=htmldata+'<div class="cards">'
    + '<img src="image src="images.jfif">'
    + menu_list_array[i] + '</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addmenu").innerHTML = htmldata;
}

function add_top(){
var item=document.getElementById("add_item").nodeValue;
menu_list_arrat.push(item);
add_item();
}