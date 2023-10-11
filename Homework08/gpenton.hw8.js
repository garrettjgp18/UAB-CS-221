document.addEventListener("DOMContentLoaded", function() {
    const userSubmit = document.getElementById('Submit');
    const userGrade = document.getElementById('input');
    const userResult = document.getElementById('result');

    userSubmit.addEventListener('click', function() {
        switch (true) {
            case userGrade.value >= 90:
                console.log("Candy");
                userResult.innerHTML = "You Win Candy!"
                break;
            case userGrade.value >= 80:
                console.log("Apple");
                userResult.innerHTML = "You Win A Apple"
                break;
            case userGrade.value >= 70:
                console.log("Mint");
                userResult.innerHTML = "You Win A Mint"
                break;
            case userGrade.value >= 60:
                console.log("Pencil");
                userResult.innerHTML = "You Win A Pencil"
                break;
            default:
                console.log("Awkward Talk With Parents");
                userResult.innerHTML = "You win an Awkward Talk With Your Parents :("
        }

    });
});
