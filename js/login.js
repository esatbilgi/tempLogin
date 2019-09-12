function setcookie(name, value, minutes) {
    if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + minutes * 60 * 1000); // ) removed
        var expires = "; expires=" + date.toGMTString(); // + added
    }
    else
        var expires = "";
    document.cookie = name + "=" + value + expires + ";path=/"; // + and " added
}

$(document).ready(function () {
    $(".alert").hide();
    $("#entrar").click(function () {
        $(".alert").hide();
        var usuario = $("#usuario").val();
        var contrasena = md5($("#contrasena").val());
        if (usuario == '' || contrasena == '') {
            $('input[type="text"],input[type="password"]').css("border", "2px solid red");
            $('input[type="text"],input[type="password"]').css("box-shadow", "0 0 3px red");
            $("#validacion").show();
        } else if (usuario == "Alquiladora" && contrasena == "630a8af2b8376eb8c2fb68e8fe2b3973") {
            var sessionTimeout = 15;
            var loginDuration = new Date();
            loginDuration.setTime(loginDuration.getTime() + (sessionTimeout * 60 * 1000));
            setcookie("validate", "true", 15);
            $(location).attr('href', 'base_datos_super_secreta/secreto.html');
        } else {
            $("#incorrecto").show();
        }
    });
});