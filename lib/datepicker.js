//datePicker
$(function () {
    $('.datepicker-multi').daterangepicker({
        "locale": {
            "format": "YYYY-MM-DD",
            "separator": " ~ ",
            "applyLabel": "저장",
            "cancelLabel": "닫기",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": ["<span color='#FF0000'>일</span>", "월", "화", "수", "목", "금", "토"],
            "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            "firstDay": 1
        },
        "drops": "down",
        "autoApply": false,
    }, function (start, end, label) {    
    });

    $('.datepicker-single').daterangepicker({
        locale: {            
            "format": "YYYY-MM-DD",
            "separator": " ~ ",
            "applyLabel": "저장",
            "cancelLabel": "닫기",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": ["<span color='#FF0000'>일</span>", "월", "화", "수", "목", "금", "토"],
            "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            "firstDay": 1
        },        
        singleDatePicker: true,
        "drops": "down",
        "autoApply": false,
    }, function (start, end, label) {
    });
   
});


