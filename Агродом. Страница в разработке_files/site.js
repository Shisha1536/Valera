productionUnit = {
    _properties: {
        //Ссылка на обновление представления параметров весовых платформ
        getTamplateWeightPlatformParameters: '',
    },
    // Инициализация логики
    init: function (properties) {
        // Копируем свойства
        $.extend(productionUnit._properties, properties);
        // Инициализируем перехват событий
        productionUnit.initEvents();
    },
    // Перехват события нажатий
    initEvents: function () {
        $('.form_select_unit_temp').on('change', productionUnit.changeSelect);
    },
    changeSelect: function () {
        var container = $("#contentContainer");
        var data = $("#weightPlatformForm").serialize();
        alert(data);
        $.ajax({
            type: 'POST',
            url: productionUnit._properties.getTamplateWeightPlatformParameters,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8', 
            data: data,
            //dataType: 'json',
            beforeSend: function () {
                document.getElementById("main").style.display = "block";
                document.getElementById("contentContainer").style.display = "none";
                alert('Запрос отправлен');
            },
            success: function (result) {
                alert('Ответ получен');
                document.getElementById("main").style.display = "none";
                document.getElementById("contentContainer").style.display = "block";
                container.html(result);
                alert('Данные добавлены');
            },
            error: function (ex) {
                console.log('Failed ');
                console.log(ex);
                alert(ex);
            }
        })
    },
};