 var input = document.getElementById("input")
    var age = document.getElementById("age")
    var email = document.getElementById("email")
    var course = document.getElementById("course")
    var btn = document.getElementById("btn")
    var container = document.getElementById("container")
    var form = document.getElementById("regForm")
    btn.addEventListener("click", function () {
        var possword = document.getElementById("possword").value;
        var maskedPassword = "*".repeat(possword.length);
        var genderChecked = document.querySelector('input[name="Gender"]:checked');
        var genderValue = genderChecked ? genderChecked.value : "";
        if (input.value === "" || age.value === "" || email.value === "" ||
            possword === "" || genderValue === "" || course.value === "") {
            alert("Some Field is Empty");
            return;
        }

        var tr = document.createElement("tr");
        tr.innerHTML =
            "<td>" + input.value + "</td>" +
            "<td>" + age.value + "</td>" +
            "<td>" + email.value + "</td>" +
            "<td>" + maskedPassword + "</td>" +
            "<td>" + genderValue + "</td>" +
            "<td>" + course.value + "</td>" +
            "<td><button class='delete-btn' onclick='deleteitem(event)'>Delete</button></td>";

        container.append(tr);
        form.reset();
    });

    function deleteitem(event) {
        var button = event.target;
        var row = button.closest('tr');
        row.remove();
    }