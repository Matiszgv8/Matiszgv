//wyłączenie domyślnej funkcji przycisku przesyłania - odświeżania strony
document.getElementById("kcalForm").addEventListener("submit", function (event) {
    event.preventDefault();
    calculateCalories();
});
//pobranie wartości z formularza
function calculateCalories() {
    let age =
        parseInt(document.getElementById("age").value);
    let weight =
        parseFloat(document.getElementById("weight").value);
    let height =
        parseFloat(document.getElementById("height").value);
    let gender =
        document.getElementById("gender").value;
    let activity =
        parseFloat(document.getElementById("activity").value);
    //obliczanie BMR w zależności od płci
    let BMR;
    if (gender === "male") {
        BMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        BMR = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    //Obliczanie zapotrzebowania kalorycznego (mnożenie BMR przez aktywność); zaokrąglanie wyniku do 2 miejsc po przecinku
    let TDEE = BMR * activity;
    TDEE = TDEE.toFixed(2)
    //wyświetlenie wyniku
    document.getElementById("result").innerText = "Twoje dzienne zapotrzebowanie kaloryczne to: " + TDEE + "kcal"


}