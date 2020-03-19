var index = 0;
// index++;
var itemArr = new Array();

var TP_Post = function (param, idx) {
    return `
    <div id="DV_Thing">
    <button id="BT_Thing" class="textField" onclick="Edit(id)">${param}</button>
    <button id="BT_Delete,${idx}" onclick="DeleteThis(id)">DELETE</button>
    </div>
    `
}
function Rearrange() {
    var literal = "";

    for (var i = 0; i < itemArr.length; i++) {
        literal += TP_Post(itemArr[i], i);
    }

    document.getElementById("DV_List").innerHTML = literal;
    console.log(itemArr);
}


function Post() {
    itemArr.push(document.getElementById("IF_Todo").value);
    document.getElementById("IF_Todo").value = "";
    Rearrange();
}


function DeleteThis(buttonId) {
    var parent = document.getElementById(buttonId).parentElement;

    for (var i = 0; i < itemArr.length; i++) {
        if (itemArr[i] == parent.firstElementChild.innerText) {
            itemArr.splice(i, 1);
        }
    }
    Rearrange();
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

