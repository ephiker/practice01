var index = 0;

function Post() {
    index++;
    var txt_input = document.getElementById("IF_Todo").value;
    var dv_list = document.getElementById("DV_List");

    var dv_thing = document.createElement("div");
    dv_thing.setAttribute("id", "DV_Thing," + index);
    var bt_thing = document.createElement("button");
    bt_thing.setAttribute("id", "BT_Thing," + index);
    bt_thing.innerText = txt_input;
    bt_thing.setAttribute("onclick", "Edit(id)");

    var bt_delete = document.createElement("BUTTON");
    bt_delete.setAttribute("id", "BT_Delete," + index);
    bt_delete.setAttribute("onclick", "DeleteThis(id)");
    bt_delete.innerText = "DEL";

    dv_thing.appendChild(bt_thing);
    dv_thing.appendChild(bt_delete);
    dv_list.appendChild(dv_thing);

    //인풋 필드 초기화 
    document.getElementById("IF_Todo").value = "";
}

function Edit(elementId) {
    var index_this = elementId.split(',')[1];
    console.log(index_this);

    var txt_prev = document.getElementById(elementId).innerText;
    var ip_thing = document.createElement("input");
    ip_thing.setAttribute("type", "text");
    ip_thing.setAttribute("value", txt_prev);

    var bt_update = document.createElement("BUTTON");
    bt_update.setAttribute("id", "BT_Update," + index_this);
    bt_update.setAttribute("onclick", "Update(id)");
    bt_update.innerText = "UPDATE";

    var parent = document.getElementById(elementId).parentElement;
    parent.firstElementChild.remove();
    parent.firstElementChild.remove();

    parent.appendChild(ip_thing);
    parent.appendChild(bt_update);
}

function Update(elementId) {
    var index_this = elementId.split(',')[1];
    var bt_update = document.getElementById(elementId);
    var bt_thing = document.createElement("BUTTON");
    var ip_thing = bt_update.parentElement.firstElementChild;
    var bt_delete = document.createElement("BUTTON");
    var parent = bt_update.parentElement;

    bt_thing.setAttribute("id", "BT_Thing," + index_this);
    bt_thing.setAttribute("onclick", "Edit(id)");
    bt_thing.innerHTML = ip_thing.value;

    bt_delete.setAttribute("id", "BT_Delete," + index_this);
    bt_delete.setAttribute("onclick", "DeleteThis(id)");
    bt_delete.innerText = "DEL";

    parent.firstElementChild.remove();
    parent.firstElementChild.remove();

    parent.appendChild(bt_thing);
    parent.appendChild(bt_delete);
}

function DeleteThis(elementId) {
    var parent = document.getElementById(elementId).parentElement;
    parent.remove();
}
