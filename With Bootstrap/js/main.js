//this is for not showing the featured works after a check
var featDisp = 0;





//------------------------------------------------------------------------------
//----------------------------------------------
//-----------------Doc Ready--------------------
//----------------------------------------------
//------------------------------------------------------------------------------
$(function (){

  //****SCROLL SPY****
  var topOffset = 80;//variable for menu height

  readyWorks();


  //Use Smooth scrolling when clicking on navigation
  $('.navbar-nav a').click(function() {
    if(location.pathname.replace(/^\//,'') ===
      this.pathname.replace(/^\//,'') &&
      location.hostname === this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - topOffset
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling
  //****SCROLL SPY****

  $("#work-list h2.work-name[data-type='music']").css("background-color", "#ff71ce");
  $("#work-list h2.work-name[data-type='game']").css("background-color", "#01cdfe");
  $("#work-list h2.work-name[data-type='art']").css("background-color", "#05ffa1");
  $("#work-list h2.work-name[data-type='sound']").css("background-color", "#b967ff");
  $("#work-list h2.work-name[data-type='phys']").css("background-color", "#ff901f");

  document.querySelector('#cb-work-games').addEventListener('change',function (evt) {
    updateWorkView("game", evt.target.checked);
  });
  document.querySelector('#cb-work-music').addEventListener('change',function (evt) {
    updateWorkView("music", evt.target.checked);
  });
  document.querySelector('#cb-work-art').addEventListener('change',function (evt) {
    updateWorkView("art", evt.target.checked);
  });
  document.querySelector('#cb-work-phys').addEventListener('change',function (evt) {
    updateWorkView("phys", evt.target.checked);
  });
  document.querySelector('#cb-work-sound').addEventListener('change',function (evt) {
    updateWorkView("sound", evt.target.checked);
  });


  $(".work-item").each(function () {
    var workName = encodeURIComponent($(this).children("h2").text());
    var workID = encodeURIComponent($(this).data("work_id"));

    var link = $("<a href='work_selected.html?workName=" + workName + "&workID=" + workID + "'/>");
    $(this).children("img").wrap(link);
  })

})

//Updates the works gallery to deselect each checkbox
//  and call the showFeatured() method
function readyWorks(){
  console.log("ONLOAD");

  updateWorkView("game", false);
  updateWorkView("music", false);
  updateWorkView("art", false);
  updateWorkView("sound", false);
  updateWorkView("phys", false);

  showFeatured(true);

}


//This either shows or hides the featured items
function showFeatured(show){
  $(".work-item").has("h2[data-featured='true']").css('display', show ? "" : "none");
  console.log("Featured Displayed: "+ featDisp);
  featDisp++;
}

//This either shows or hides items in the Selected Works Section
//  based on whether or not the corresponding checkbox is checked or not
function updateWorkView(categoryName, bVisible){
  //get a list of the work items for the given categoryName
  //Use the data attributes to narrow the list
  var dataSelectorVal = "";

  //this could be done in a more concise way without 5 calls to showFeatured
  if(featDisp < 7){

    showFeatured(false);
  }
  switch (categoryName){
    case "game":
      dataSelectorVal = "h2[data-type='game']";
      break;
    case "music":
      dataSelectorVal = "h2[data-type='music']";
      break;
    case "art":
      dataSelectorVal = "h2[data-type='art']";
      break;
    case "sound":
      dataSelectorVal = "h2[data-type='sound']";
      break;
  }



  //use the has() function to select the li tags that are work items
  //that contain the h2 tag with the corresponding data attribute value
  $(".work-item").has(dataSelectorVal).css('display', bVisible ? "" : "none");
}
