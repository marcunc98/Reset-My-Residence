$(document).on("click", "#searchBtn", function(){
    var city = $("#citySearch").val().trim();
    $("#foodspotting").html("<iframe allowTransparency='true' frameborder='0' scrolling='no' src='https://www.foodspotting.com/widgets/sightings?background=EEEEEE&amp;border=CCCCCC&amp;border_radius=5&amp;height=192&amp;image_border=regular&amp;image_border_width=10&amp;order=best&amp;page=1&amp;query=" + city + "&amp;size=small&amp;type=place_search&amp;width=462&amp;x=4&amp;y=1' style='border:none; overflow:hidden; width:462px; height: 192px'></iframe>")
});
