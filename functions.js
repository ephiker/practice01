var index = 0;

function Post() {
    index++;
    var root = document.getElementById("DV_List");
    var txt_input = document.getElementById("IF_Todo").value;

    var item = `
    <div id="DV_Thing,${index}">
    <button id="BT_Thing,${index}" class="textField" onclick="Edit(id)">${txt_input}</button>
    <button id="BT_Delete,${index}" onclick="DeleteThis(id)">DELETE</button>
    </div>
    `
    
    root.innerHTML = root.innerHTML + item;
    document.getElementById("IF_Todo").value = "";
}

function Edit(elementId) {
    var index_this = elementId.split(',')[1];
    var txt_prev = document.getElementById(elementId).innerText;
    var parent = document.getElementById(elementId).parentElement;
    var item = `
    <input type="text" value="${txt_prev}" class="textField">
    <button id="BT_Update,${index_this}" onclick="Update(id)" cols="44">UPDATE</button>
    `

    parent.firstElementChild.remove();
    parent.firstElementChild.remove();
    parent.innerHTML = item;
}



function Update(elementId) {
    var index_this = elementId.split(',')[1];
    var parent = document.getElementById(elementId).parentElement;
    var txt_prev = parent.firstElementChild.value;


    var item = `
    <button id="BT_Thing,${index_this}" class="textField" onclick="Edit(id)">${txt_prev}</button>
    <button id="BT_Delete,${index_this}" onclick="DeleteThis(id)">DELETE</button>
    `

    parent.firstElementChild.remove();
    parent.firstElementChild.remove();
    parent.innerHTML = item;
}

function DeleteThis(elementId) {
    var parent = document.getElementById(elementId).parentElement;
    parent.remove();
}