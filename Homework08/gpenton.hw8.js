document.addEventListener("DOMContentLoaded", function() {
    //https://www.shecodes.io/athena/4023-what-does-cannot-read-properties-of-null-mean#:~:text=a%20coding%20question-,%5BJavaScript%5D%20%2D%20What%20Does%20'Cannot%20Read%20Properties%20of%20Null,your%20syntax%20when%20using%20addEventListener.
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
                userResult.innerHTML = "You Win A Apple!"
                break;
            case userGrade.value >= 70:
                console.log("Mint");
                userResult.innerHTML = "You Win A Mint!"
                break;
            case userGrade.value >= 60:
                console.log("Pencil");
                userResult.innerHTML = "You Win A Pencil!"
                break;
            default:
                console.log("Awkward Talk With Parents");
                userResult.innerHTML = "You win an Awkward Talk With Your Parents :("
        }

    });
});
