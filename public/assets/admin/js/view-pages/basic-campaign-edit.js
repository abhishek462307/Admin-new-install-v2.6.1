"use strict";
$("#date_from").on("change", function () {
    $('#date_to').attr('min',$(this).val());
});

$("#date_to").on("change", function () {
    $('#date_from').attr('max',$(this).val());
});
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#viewer').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#customFileEg1").change(function () {
    readURL(this);
});
function show_item(type) {
    if (type === 'product') {
        $("#type-product").show();
        $("#type-category").hide();
    } else {
        $("#type-product").hide();
        $("#type-category").show();
    }
}
