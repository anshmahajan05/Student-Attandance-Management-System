var studentDataArr = JSON.parse(localStorage.getItem("StudentDatabase")) || [];

function displayFun1(item) {

    var count = 1;
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerHTML = item.name;
    var td2 = document.createElement("td");
    td2.innerHTML = item.course;
    var td6 = document.createElement("td");
    td6.innerHTML = item.attandance;

    tr.append(td1, td2, td6);

    document.querySelector("#tbody1").append(tr);

}

var studentobj1 = studentDataArr.reduce((prev, current) => (prev.attandance > current.attandance) ? prev : current);
displayFun1(studentobj1);

function displayFun2(item) {

    var count = 1;
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerHTML = item.name;
    var td2 = document.createElement("td");
    td2.innerHTML = item.course;
    var td6 = document.createElement("td");
    td6.innerHTML = item.attandance;

    tr.append(td1, td2, td6);

    document.querySelector("#tbody2").append(tr);

}

var studentobj2 = studentDataArr.reduce((prev, current) => (prev.attandance < current.attandance) ? prev : current);
displayFun2(studentobj2);