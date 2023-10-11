document.addEventListener("DOMContentLoaded", function() {
    const userSubmit = document.getElementById('Submit');
    const userGrade = document.getElementById('input');

    userSubmit.addEventListener('click', function() {
        if (parseFloat(userGrade.value) >= 90) {
            console.log("Yippie");
        }
    });
});
