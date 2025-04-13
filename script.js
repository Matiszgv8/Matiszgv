//wyłączenie odświeżania strony przez przycisk przesyłania
document.getElementById("bmiForm").addEventListener("submit", function (event) {
    event.preventDefault();
    calculateBMI();
})



//pobieranie danych z formularza
function calculateBMI() {
    let weight =
        document.getElementById("weight").value;
    let height =
        document.getElementById("height").value / 100;

    //walidacja danych; obliczanie BMI
    if (weight > 0 && height > 0) {
        let bmi = (weight / (height * height)).toFixed(2);
        let message = "Twoje BMI:" + bmi;
        //sprawdzanie kategorii BMI i wyświetlanie opisu do niej
        if (bmi < 18.5) message += " (Niedowaga)";
        else if (bmi < 24.9) message += " (Norma)";
        else if (bmi < 29.9) message += " (Nadwaga)";
        else if (bmi < 34.9) message += "(Otyłość I stopnia)";
        else if (bmi < 39.9) message += "(Otyłość II stopnia)";
        else message += "(Otyłość III stopnia)";
        //wyświetlenie BMI
        document.getElementById("result").innerText =
            message;
    } else {
        document.getElementById("result").innerText =
            "Podaj poprawne wartości!";
    }
}



