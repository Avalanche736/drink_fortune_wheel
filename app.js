let randomDegree = 0;
let randomDegreeModulo = 0;

function spin() {
    const wheel = document.getElementById("wheel");
    const resultDisplay = document.getElementById("result");

    // Определяем случайное количество градусов вращения (от 3 до 8 оборотов)
    // randomDegreeModulo = randomDegree % 360;
    randomDegree += Math.floor(Math.random() * 1080) + 720;
    wheel.style.transition = "transform 5s ease-out";
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    setTimeout(() => {
        // Высчитываем остаток градусов после полной остановки
        const actualDeg = randomDegree % 360;

        // Определяем результат в зависимости от угла
        let result;
        if (actualDeg <= 335) {
            result = "Ваше здоровье!";
        } else {
            result = "Сегодня зож(";
        }

        resultDisplay.textContent = `${result}`;
    }, 5000);
}
