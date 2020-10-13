var count = 0;


$('.custom-switch').change(function(){
  var result = jQuery('.custom-control-input').is(':checked')?'yes':'no';

  count=count+1;

  if(count === 1)
  {
    $("body").removeClass("light-bgc").addClass("dark-bgc");
    $(".top-heading").addClass("dark-theme-text");
    $(".second-heading").addClass("dark-theme-text");
    $(".theme-changer").addClass("dark-theme-text");
    $(".title-section").removeClass("light-theme").addClass("dark-theme");
    $(".first").removeClass("overview-bgc").addClass("overview-bgc-dark");
    $(".overview").removeClass("overview-bgc").addClass("overview-bgc-dark");
    $(".followers").addClass("dark-theme-text");
    $(".overview-number").addClass("dark-theme-text");
    $(".attribution").addClass("dark-theme-text");
  }
  else
  {
    $("body").toggleClass("light-bgc").toggleClass("dark-bgc");
    $(".top-heading").toggleClass("dark-theme-text");
    $(".second-heading").toggleClass("dark-theme-text");
    $(".theme-changer").toggleClass("dark-theme-text");
    $(".title-section").toggleClass("light-theme").toggleClass("dark-theme");
    $(".first").toggleClass("overview-bgc").toggleClass("overview-bgc-dark");
    $(".overview").toggleClass("overview-bgc").toggleClass("overview-bgc-dark");
    $(".followers").toggleClass("dark-theme-text");
    $(".overview-number").toggleClass("dark-theme-text");
    $(".attribution").toggleClass("dark-theme-text");
  }
});
