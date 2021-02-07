$(document).ready(function(){
    console.log('off scr');
    //$('body').addClass('dash');
    //$('body').addClass('ble');
    var d = new Date();
    var n = d.getUTCHours();
    console.log(n);
    if (n >= 5 && n <= 13){
        //$('body').removeClass('dash');
        //$('body').removeClass('ble');
    }
    //$('body').addClass('knife');
});