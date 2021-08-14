function keep_button_active(id){
    var button = document.getElementById(id);
    var current = document.getElementsByClassName("active");
    if(current.length >= 1)
        current[0].className = "btn";
    if(button.id != "txt_cust_tip")
        button.className = "btn active";
}
