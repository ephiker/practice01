let itemArr = [];

//포스트 함수는 입력된 스트링을 어레이에 추가해주고 리어레인지 함수를 호출한다. 
function Post() {
    if (document.getElementById("IF_Todo").value != "") {
        itemArr.push(document.getElementById("IF_Todo").value);
        document.getElementById("IF_Todo").value = "";
        Rearrange();
    }
}

//리어레인지 함수는 어레이에 있는 할 일 목록을 html에 작성한다. 
function Rearrange() {
    let literal = "";

    for (let i = 0; i < itemArr.length; i++) {
        literal += TP_Post(itemArr[i], i);
    }

    document.getElementById("DV_List").innerHTML = literal;
    console.log(itemArr);
}

let TP_Post = function (param, idx) {
    return `
    <div id="DV_Thing" data-idx="${idx}">
    <button id="BT_Thing" data-idx="${idx}" class="textField" onclick="Edit(${idx})">${param}</button>
    <button id="BT_Delete" data-idx="${idx}" onclick="Delete(${idx})">DELETE</button>
    </div>
    `
}

function Delete(targetIdx) {
    itemArr.splice(targetIdx, 1);
    Rearrange();
}

function Edit(_idx) {
    let _value = itemArr[_idx];
    let item = `
    <input type="text" id="IP_Edit" data-idx="${_idx}" value="${_value}" class="textField">
    <button id="BT_Update" data-idx="${_idx}" onclick="Update(${_idx})">UPDATE</button>
    `

    let thingsArr = document.querySelectorAll("#DV_Thing");
    for (let i = 0; i < thingsArr.length; i++) {
        if (thingsArr[i].dataset.idx == _idx) {
            thingsArr[i].innerHTML = "";
            thingsArr[i].innerHTML = item;
        }
    }
}

function Update(_idx) {
    let _value;
    let inputArr = document.querySelectorAll("#IP_Edit");

    //타겟 인풋필드에서 새로 기입된 텍스트 받아오기
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i].dataset.idx == _idx) {
            _value = inputArr[i].value //change text in array
        }
    }

    itemArr[_idx] = _value

    let item = `
    <button id="BT_Thing" class="textField" onclick="Edit(${_idx})">${_value}</button>
    <button id="BT_Delete" onclick="Delete(${_idx})">DELETE</button>
    `
    //교체
    let thingsArr = document.querySelectorAll("#DV_Thing");
    for (let i = 0; i < thingsArr.length; i++) {
        if (thingsArr[i].dataset.idx == _idx) {
            thingsArr[i].innerHTML = "";
            thingsArr[i].innerHTML = item;
        }
    }
}

