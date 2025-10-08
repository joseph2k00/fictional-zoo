$(document).ready(function(){
    $(".hamburger-menu").click(function () {
        $(".side-menu").show();
        $(".main-bg").hide();
    });
    $(".close-btn").click(function () {
        $(".side-menu").hide();
        $(".main-bg").show();
    })
    $(".popup-enabled-btn").click(function () {
        const inputs = $('#popup-form input');
        const textarea = $('textarea');

        isValid = true;
        inputs.each(function() {
            if ($(this).attr('type') === 'text' && $(this).val().trim() === '') {
                isValid = false;
            }
            if ($(this).attr('type') === 'checkbox' && !$(this).is(':checked')) {
                isValid = false;
            }
        });
        if (!isValid) {
            return;
        }

        $(".popup").show();
        $(".popup-bg").show();    
    });
    $(".popup-close-btn").click(function () {
        location.reload();
    })
    document.getElementById("popup-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form refresh
    });
});