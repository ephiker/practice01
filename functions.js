var itemArr = new Array();


//포스트 함수는 입력된 스트링을 어레이에 추가해주고 리어레인지 함수를 호출한다. 
function Post() {
    itemArr.push(document.getElementById("IF_Todo").value);
    document.getElementById("IF_Todo").value = "";
    Rearrange();
}


//리어레인지 함수는 어레이에 있는 할 일 목록을 html에 작성한다. 
function Rearrange() {
    var literal = "";

    for (var i = 0; i < itemArr.length; i++) {
        literal += TP_Post(itemArr[i], i);
    }

    document.getElementById("DV_List").innerHTML = literal;
    console.log(itemArr);
}


var TP_Post = function (param, idx) {
    return `
    <div id="DV_Thing" data-idx="${idx}">
    <button id="BT_Thing" data-idx="${idx}" class="textField" onclick="Edit(${idx})">${param}</button>
    <button id="BT_Delete" data-idx="${idx}" onclick="DeleteThis(${idx})">DELETE</button>
    </div>
    `
}


function DeleteThis(targetIdx) {
    itemArr.splice(targetIdx, 1);
    Rearrange();
}


function Edit(_idx) {
    var txt_prev = itemArr[_idx];
    var item = `
    <input type="text" id="IP_Edit" data-idx="${_idx}" value="${txt_prev}" class="textField">
    <button id="BT_Update" data-idx="${_idx}" onclick="Update(${_idx})" cols="44">UPDATE</button>
    `

    var thingsArr = document.querySelectorAll("#DV_Thing");
    for (var i = 0; i < thingsArr.length; i++) {
        if (thingsArr[i].dataset.idx == _idx) {
            thingsArr[i].firstChild.remove();
            thingsArr[i].firstChild.remove();
            thingsArr[i].innerHTML = item;
        }
    }
}

function Update(_idx) {
    var new_text;
    var inputArr = document.querySelectorAll("#IP_Edit");
    for (var i = 0; i < inputArr.length; i++) {
        if (inputArr[i].dataset.idx == _idx) {
            new_text = inputArr[i].value //change text in array
        }
    }

    itemArr[_idx] = new_text

    var item = `
    <button id="BT_Thing" class="textField" onclick="Edit(${_idx})">${new_text}</button>
    <button id="BT_Delete" onclick="DeleteThis(${_idx})">DELETE</button>
    `

    var thingsArr = document.querySelectorAll("#DV_Thing");
    for (var i = 0; i < thingsArr.length; i++) {
        if (thingsArr[i].dataset.idx == _idx) {
            thingsArr[i].firstChild.remove();
            thingsArr[i].firstChild.remove();
            thingsArr[i].innerHTML = item;
        }
    }
}

