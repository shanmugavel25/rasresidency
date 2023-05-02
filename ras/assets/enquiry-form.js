$(window).on('load', function () {
    $('.preloader').fadeOut(500);
    $("#mobile").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        $("#errmsg").html("Digits Only").show().fadeOut("slow");
        return false;
        }
        });
});

function isNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
    return false;

    return true;
}

$("#news-form").on("submit", function (event) {    
    $("#newsletter_submit").html('&nbsp;&nbsp;<div class="box"><div class="spinner"></div></div>&nbsp;&nbsp;');
    event.preventDefault();
    console.log("test")
    var name = $("#news_name").val();
    var email = $("#news_email").val();
    var mobile = $("#news_mobile").val();

                
                var obj = {data : {
                    "name": name,
                    "email": email,
                    "mobile":mobile,
                    "type" : "Newsletter"               
                }};

            $.ajax({
            type: "POST",
            data: JSON.stringify(obj),
            dataType: "json",
            contentType: 'application/json',
            url: "https://api.yssentials.com/api/booknow-enquiries",
            success: function(result) {
                        $.ajax({
                            type: "POST",
                            async: false,
                            url: "sendmail_booknow.php",
                            data: { name: name, email: email, mobile : mobile, subject : "Grand Estancia Newsletter Enquiry" },
                            success: function(result)
                            {
                                            
                            $('#news-form')[0].reset();   
                            $("#newsletter_submit").html('Submit');
                            $("#newsletter .close").click()
                            location.href="https://secure.staah.com/common-cgi/package/packagebooking.pl?propertyId=8847";

                            },
                            error : function(error)
                            {
                            console.log(error)
                        
                            }
                            });
            // $('#booknow-form')[0].reset(); 
            // $("#booknow .close").click() 
            },
            error: function(jqXHR, exception) {
            console.log("err",jqXHR);
            console.log(exception);
            }
            });
});

$("#booknow-form").on("submit", function (event) {    
    $("#book_submit").html('&nbsp;&nbsp;<div class="box"><div class="spinner"></div></div>&nbsp;&nbsp;');
    event.preventDefault();
    console.log("test")
    var name = $("#name").val();
    var email = $("#email").val();
    var mobile = $("#mobile").val();

                
                var obj = {data : {
                    "name": name,
                    "email": email,
                    "mobile": mobile,
                    "type" : "Book Now"               
                }};

            $.ajax({
            type: "POST",
            data: JSON.stringify(obj),
            dataType: "json",
            contentType: 'application/json',
            url: "https://api.yssentials.com/api/booknow-enquiries",
            success: function(result) {
                        $.ajax({
                            type: "POST",
                            async: false,
                            url: "sendmail_booknow.php",
                            data: { name: name, email: email, mobile : mobile, subject : "Grand Estancia Book Now Enquiry" },
                            success: function(result)
                            {
                                            
                            $('#booknow-form')[0].reset();   
                            $("#book_submit").html('Submit');
                            $("#booknow .close").click()
                            location.href="https://secure.staah.com/common-cgi/package/packagebooking.pl?propertyId=8847";

                            },
                            error : function(error)
                            {
                            console.log(error)
                        
                            }
                            });
            // $('#booknow-form')[0].reset(); 
            // $("#booknow .close").click() 
            },
            error: function(jqXHR, exception) {
            console.log("err",jqXHR);
            console.log(exception);
            }
            });
});




    $("#reserve-form").on("submit", function (event) {
        $("#reserve_submit").html('&nbsp;&nbsp;<div class="box"><div class="spinner"></div></div>&nbsp;&nbsp;');
        event.preventDefault();
        console.log("test")
        var name_s = $("#name_s").val();
        var email_s = $("#email_s").val();
        var mobile_s = $("#mobile_s").val();
        var arrival_date = $("#arrival_date").val();
        var depature_date = $("#depature_date").val();
        var childrens = $("#childrens").val();
        var adults = $("#adults").val();
        var rooms = $("#rooms").val();
    
        var obj = {data : {
            "name": name_s,
            "email": email_s,
            "mobile": mobile_s,
            "arrival_date":arrival_date,
            "depature_date": depature_date,
            "childrens":childrens,
            "adults":adults,
            "rooms": rooms,
           
           
        }};
        console.log(obj)
    $.ajax({
    type: "POST",
    data: JSON.stringify(obj),
    dataType: "json",
    contentType: 'application/json',
    url: "https://api.yssentials.com/api/reservations",
    success: function(result) {
        $.ajax({
            type: "POST",
            async: false,
            url: "sendmail_reservation.php",
            data: { name: name_s, email: email_s, mobile : mobile_s, arrival: arrival_date,
                    departure: depature_date, child: childrens, adult: adults, rooms: rooms, },
            success: function(result)
            {
            console.log(result);                   
                        
            $('#reserve-form')[0].reset();   
            $("#reserve_submit").html('Submit');
            $("#reserve-modal .close").click();
            location.href="https://secure.staah.com/common-cgi/package/packagebooking.pl?propertyId=8847";
            },
            error : function(error)
            {
            console.log(error)                 
            $("#reserve_submit").html('Submit');      
          
            }
            });

    
    },
    error: function(jqXHR, exception) {
    console.log("err",jqXHR);
    console.log(exception);
    }
    });
        });