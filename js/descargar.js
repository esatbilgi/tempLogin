$(document).ready(function(){
    if (document.cookie.indexOf("validate=true") == -1) {
        console.log(document.cookie);
        location.href = "../index.html";
    } else {
        $("#content").show();
        $("#anb").click(function(){
            window.location.href = "../../software_ftp/I2_ANB_V9.0.0_MP_ML.zip";
        });
    
        $("#bridge").click(function(){
            window.location.href = "../../software_ftp/I2_IBRIDGE_8.9.1_WIN_SPA.zip";
        });
    }
});