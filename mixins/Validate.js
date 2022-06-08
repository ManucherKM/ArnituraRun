export const validate = {
    methods: {
        //Валидация
        ValidateInput(obj) {
            //Проверка на существование объекта
            if (typeof obj.textInput === 'undefined') {
                console.log("Ошибка");
                return false;
            } else if (
                obj.textInput.indexOf(":") !== -1 ||
                obj.textInput.indexOf(":") !== -1 ||
                obj.textInput.indexOf("'") !== -1 ||
                obj.textInput.indexOf("^") !== -1 ||
                obj.textInput.indexOf("!") !== -1 ||
                obj.textInput.indexOf("~") !== -1 ||
                obj.textInput.indexOf("%") !== -1 ||
                obj.textInput.indexOf("&") !== -1) {
                console.log("Ошибка");
                return false;
            } else {
                console.log("Все верно");
                return true;
            }
        },
    }
}