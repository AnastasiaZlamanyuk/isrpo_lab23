const Name = document.getElementById("name");
const age = document.getElementById("age");
const city = document.getElementById("city");
const hobby = document.getElementById("hobby");
const btn_clear = document.getElementById("clear");
const btn_send = document.getElementById("send");
function isValidText(input) {
    const regex = /^[a-zA-Zа-яА-ЯёЁ\s\-']+$/;
    return regex.test(input);
}
function setupClearOnFocus(inputElement) {
    inputElement.addEventListener("focus", function() {
        if (this.value === "Введите значение!" || 
            this.value === "Некорректный ввод! Используйте только буквы, пробелы и дефисы!" ||
            this.value === "Введите число!" || 
            this.value === "Введите целое число!" ||
            this.value === "Возраст должен быть больше 0!" ||
            this.value === "Возраст не может превышать 150 лет!" ||
            this.value === "Введите корректный возраст (1-150)!") {
            this.value = "";
            this.style.color = "black";
        }
    });
}
setupClearOnFocus(Name);
setupClearOnFocus(age);
setupClearOnFocus(city);
setupClearOnFocus(hobby);
function resetColorOnInput(inputElement) {
    inputElement.addEventListener("input", function() {
        if (this.style.color === "red") {
            this.style.color = "black";
        }
    });
}
resetColorOnInput(Name);
resetColorOnInput(age);
resetColorOnInput(city);
resetColorOnInput(hobby);
btn_clear.addEventListener("click", () => {
    Name.value = "";
    age.value = "";
    city.value = "";
    hobby.value = "";

    Name.style.color = "black";
    age.style.color = "black";
    city.style.color = "black";
    hobby.style.color = "black";
});
btn_send.addEventListener("click", () => {
    if (checkDate()){
        alert("Данные успешно отправлены!");
    }
});
function checkDate(){
    let allow = true;
    if (!Name.value.trim()) {
        Name.value = "Введите значение!";
        Name.style.color = "red";
        allow = false;
    } else if (!isValidText(Name.value.trim())) {
        Name.value = "Некорректный ввод! Используйте только буквы, пробелы и дефисы!";
        Name.style.color = "red";
        allow = false;
    }
    if (!age.value.trim()) {
        age.value = "Введите значение!";
        age.style.color = "red";
        allow = false;
    } else {
        let ageNum = Number(age.value);
        
        if (isNaN(ageNum)) {
            age.value = "Введите число!";
            age.style.color = "red";
            allow = false;
        } else if (!Number.isInteger(ageNum)) {
            age.value = "Введите целое число!";
            age.style.color = "red";
            allow = false;
        } else if (ageNum <= 0) {
            age.value = "Возраст должен быть больше 0!";
            age.style.color = "red";
            allow = false;
        } else if (ageNum > 150) {
            age.value = "Возраст не может превышать 150 лет!";
            age.style.color = "red";
            allow = false;
        }
    }
    if (!city.value.trim()) {
        city.value = "Введите значение!";
        city.style.color = "red";
        allow = false;
    } else if (!isValidText(city.value.trim())) {
        city.value = "Некорректный ввод! Используйте только буквы, пробелы и дефисы!";
        city.style.color = "red";
        allow = false;
    }
    if (!hobby.value.trim()) {
        hobby.value = "Введите значение!";
        hobby.style.color = "red";
        allow = false;
    } else if (!isValidText(hobby.value.trim())) {
        hobby.value = "Некорректный ввод! Используйте только буквы, пробелы и дефисы!";
        hobby.style.color = "red";
        allow = false;
    }
    return allow;
}