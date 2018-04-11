var city = "";

$(document).on("click", "#searchBtn", function(){
    city = $("#citySearch").val().trim();


    var apikey = "efa73428872b6e3026a1ed341008fb12";
    var queryURL = "http://developers.zomato.com/api/v2.1/cities?q="+ city +"&apikey=efa73428872b6e3026a1ed341008fb12"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log("zomato...");
        cityID = response.location_suggestions[0].id;
        console.log(cityID);
        $("#zomato").html('<div class="widget_wrap" style="width:320px;height:797px;display:inline-block;"><iframe src="https://www.zomato.com/widgets/all_collections.php?city_id=' + cityID + '&theme=dark" style="position:relative;width:100%;height:100%;" border="0" frameborder="0"></iframe></div>');
    });

});