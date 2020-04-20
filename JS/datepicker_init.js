$(document).ready(function () {
    datePicker = $("#datepicker");

    $( function() {
        datePicker.datepicker({dateFormat: "dd/mm/yy"});

        dateValue = datePicker.datepicker().val();
        // console.log(dateValue);
    } );
});

