var count = 0;
function Post() {
    count++;
    var txt_input = document.getElementById("IF_Todo").value;
    var dv_list = document.getElementById("DV_List");

    var dv_thing = document.createElement("div");
    dv_thing.setAttribute("id", "DV_Thing");
    var ta_thing = document.createElement("textarea");
    ta_thing.setAttribute("id", "TA_Thing");
    ta_thing.setAttribute("cols", 30);
    ta_thing.setAttribute("rows", 1);
    ta_thing.value = txt_input;
    var bt_delete = document.createElement("BUTTON");
    bt_delete.setAttribute("id", "BT_Delete" + count);
    bt_delete.setAttribute("onclick", "DeleteThis(id)");
    bt_delete.innerText = "DEL";

    dv_thing.appendChild(ta_thing);
    dv_thing.appendChild(bt_delete);
    dv_list.appendChild(dv_thing);

    //인풋 필드 초기화 
    document.getElementById("IF_Todo").value = "";
}


function DeleteThis(elementId) {
    console.log(elementId);
    var parent = document.getElementById(elementId).parentElement;
    parent.remove();
}
