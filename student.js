document = document.getElementById("form1").addEventListener("submit", submitFun1);

var StudentDatabaseArr = JSON.parse(localStorage.getItem("StudentDatabase")) || [];

function submitFun1(e) {
    document.querySelector("#tbody").innerHTML = "";
    e.preventDefault();
    var name = document.querySelector("#name").value;
    var course = document.querySelector("#course").value;
    var year = document.querySelector("#year").value;
    var attand = 0

    var studentObj = {
        name: name,
        course: course,
        year: year,
        attandance: attand
    }

    StudentDatabaseArr.push(studentObj);
    localStorage.setItem("StudentDatabase", JSON.stringify(StudentDatabaseArr));
    document.querySelector("#form1").reset();
    alert("Student Added Successfully");
}

function displayFun(StudentDatabaseArr) {

    var count = 1;
    StudentDatabaseArr.map(function(item) {

        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerHTML = count++;
        var td2 = document.createElement("td");
        td2.innerHTML = item.name;
        var td4 = document.createElement("td");
        td4.innerHTML = item.course;
        var td5 = document.createElement("td");
        td5.innerHTML = item.year;
        var td6 = document.createElement("td");
        var btn1 = document.createElement("button");
        btn1.innerHTML = "P";
        btn1.addEventListener("click", function() {
            td6.innerHTML = "<button >Present</button>";
            item.attandance++;
            console.log(item.attandance);
        });
        var btn2 = document.createElement("button");
        btn2.innerHTML = "A";
        btn2.addEventListener("click", function() {
            td6.innerHTML = "<button id='absent'>Absent</button>";

        });
        td6.classList.add("td6");
        td6.append(btn1, btn2);

        tr.append(td1, td2, td4, td5, td6);

        document.querySelector("#tbody").append(tr);

    });

}
displayFun(StudentDatabaseArr);

function logout() {
    alert("Logout Successfully!");
    window.location = "index.html";
}