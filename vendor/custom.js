
var stopTheCarHTML=`
<div class="header">
<h2>Drive forward</h2>
<h1>Stop the car</h1>
  <p>While driving a car, you will encounter two different reasons for stopping.</p>
  <p>Reasons for a planned stop include:</p>
  <ul>
    <li>You are approaching a stop sign.</li>
    <li>A traffic light is red.</li>
    <li>You are changing directions.</li>
    <li>You are parking the car.</li>
  </ul>

  <p>Reasons for an unplanned stop include:</p>
  <ul>
    <li>Traffic is stopped.</li>
    <li>There is an obstruction is in the road.</li>
    <li>There is an emergency.</li>
  </ul>
</div>

  <div class="mainPageFrame">
    <a data-toggle="collapse" href="#Make-a-planned-stop" class="chevron-rotate header">
    <span class="glyphicon glyphicon-chevron-right"></span>Make a planned stop</a>
  <div class=collapse id="Make-a-planned-stop">
    <ol>
    <li>When you can see your destination, slowly remove your foot from the accelerator to begin coasting.</li>
  <li>Signal to the other drivers whether you are changing directions.</li>
  <li>When you are 150 feet–about the distance between utility poles–from your destination, slowly apply pressure to the brake pedal to slow the car.
  <li>Continue to apply pressure to the brake pedal until you come to a controlled stop.</li>
  </ol>
</div>

<div class="mainPageFrame">
  <a data-toggle="collapse" href="#Make-an-unplanned-stop" class="chevron-rotate header">
  <span class="glyphicon glyphicon-chevron-right"></span>Make an unplanned stop</a>
<div class=collapse id="Make-an-unplanned-stop">
  <ol>
  <li>Signal other drivers with the hazard lights.</li>
<li>Remove your foot from the accelerator and begin applying pressure to the brake pedal.
<br/><br/> <i> Note:</i> Applying too much pressure to the brake pedal too quickly could cause the braking system to lock. Some cars include an ABS (anti-lock braking system). For more information, refer to your owner’s manual.</li>
<li>Check your surroundings.</li>
<li>If there is an obstruction, steer the car to a safe location.</li>
</ol>
</div>

<div class="SeeAlso">
<h3>See also</h3>
<a href="#">If you encounter an accident<br/></a>
<a href="#">Drive in the rain<br/></a>
<a href="#">Drive in the winter<br/></a>
</div>

</div>
`


var openingPageHTML=`
<div align="center">
  <p><img src="carIcon.png" width="200px"></p>
  <h1>Car Help</h1>
</div>
`


$('body').on('click', '.chevron-rotate', function () {
  console.log("click");
  $(this).find(".glyphicon").toggleClass("rotated");
  });



$("#stopTheCarLink").click(function() {
$("#mainPageContent").html(stopTheCarHTML);
});

$("#headerText").click(function() {
$("#mainPageContent").html(openingPageHTML);
});





// window.onload = function(){
// $("*").find(".glyphicon").toggleClass("rotated");
// $("*").find(".collapse").toggleClass("show");
// };


// $("#menu-toggle").click(function(e) {
//     e.preventDefault();
//     $("#wrapper").toggleClass("toggled");
// });
