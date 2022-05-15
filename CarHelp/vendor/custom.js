
var stopTheCarHTML=`
<div class="mainPageFrame">
<h2>Drive forward</h2>
<h1>Stop the car</h1>
  <p>While driving a car, you will encounter two different reasons for stopping.</p>
  <p>Reasons for a planned stop include:</p>
  <ul>
    <li>You are approaching a stop sign.</li>
    <li>A traffic light is red.</li>
    <li>You are <a href="#">changing directions</a>.</li>
    <li>You are <a href="#">parking the car</a>.</li>
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
    <li>When you can see your destination, slowly remove your foot from the <a href="#">accelerator</a> to begin coasting.</li>
  <li><a href="#">Signal to the other drivers</a> whether you are changing directions.</li>
  <li>When you are 150 feet–about the distance between utility poles–from your destination, slowly apply pressure to the <a href="#">brake pedal</a> to slow the car.</li>
  <li>Continue to apply pressure to the brake pedal until you come to a controlled stop.</li>
  </ol>
</div></div>

  <div class="mainPageFrame">
  <a data-toggle="collapse" href="#Make-an-unplanned-stop" class="chevron-rotate header">
  <span class="glyphicon glyphicon-chevron-right"></span>Make an unplanned stop</a>
  <div class=collapse id="Make-an-unplanned-stop">
      <ol>
      <li>Signal other drivers with the <a href="#">hazard lights</a>.</li>
    <li>Remove your foot from the accelerator and begin applying pressure to the brake pedal.
    <br/> <br/><p class="note"> <i> Note:</i> Applying too much pressure to the brake pedal too quickly could cause the braking system to lock. Some cars include an ABS (anti-lock braking system). For more information, refer to your owner’s manual.</p></li>
    <li>Check your surroundings.</li>
    <li>If there is an obstruction, steer the car to a safe location.</li>
    </ol>
  </div>
  </div>

  <div class="mainPageFrame seeAlso">
    <h3>See also</h3>
    <a href="#">If you encounter an accident<br/></a>
    <a href="#">Drive in the rain<br/></a>
    <a href="#">Drive in the winter<br/></a>
  </div>


`


var adjustTheMirrorsHTML=`
<div class="mainPageFrame">
<h2>Before you drive</h2>
<h1>Adjust the mirrors</h1>
<p>You can adjust the mirrors of your car to get a better view of the surrounding traffic. According to the Society of Automative Engineers (SAE), <a href="#">side mirrors</a> should be adjusted to slightly overlap the view provided by the <a href="#">cabin mirror</a>. Although some find this arrangement to be disorienting at first, it eliminates many blind spots.</p>
<img width="700px" src="mirrors.png"></img>
</div>

<div class="mainPageFrame">
  <a data-toggle="collapse" href="#adjust-the-cabin-mirror" class="chevron-rotate header">
  <span class="glyphicon glyphicon-chevron-right"></span>Adjust the cabin mirror</a>
  <div class=collapse id="adjust-the-cabin-mirror">
  <p>You should only have to move your eyes, not your head, when using this mirror.</p>
  <ul><li>Adjust the cabin mirror to provide a view of your entire <a href="#">rear window</a>. </li></ul>
  <p><img width="15px" src="tip.png"> </img><b> Tip:</b> You may find it beneficial–if possible–to turn the cabin mirror upside down. This will position the mirror higher, providing an easier view through the front <a href="#">windshield</a>. </p>
  </div>
</div>

<div class="mainPageFrame">
  <a data-toggle="collapse" href="#adjust-the-driver-mirror" class="chevron-rotate header">
  <span class="glyphicon glyphicon-chevron-right"></span>Adjust the driver’s-side mirrors</a>
  <div class=collapse id="adjust-the-driver-mirror">
  <ol>
  <li>Sit in the <a href="#">driver’s seat</a> and place your head against the <a href="#">driver’s-side window</a>.</li>
  <li>Adjust the <a href="#">driver’s-side mirror</a> so you can barely see the driver’s-side of your car. Sit comfortably and check that the driver’s-side mirror slightly overlaps the view of the cabin mirror. </li>
  </ol>

  </div>
</div>

<div class="mainPageFrame">
  <a data-toggle="collapse" href="#adjust-the-passenger-mirror" class="chevron-rotate header">
  <span class="glyphicon glyphicon-chevron-right"></span>Adjust the passenger’s-side mirror </a>
  <div class=collapse id="adjust-the-passenger-mirror">
  <ol>
  <li>Sit in the driver’s seat and align your head with the <a href="#">center console</a>.</li>
  <li>Adjust the <a href="#">passenger’s-side mirror</a> so you can barely see the passenger’s-side of your car. Sit comfortably and check that the passenger’s-side mirror slightly overlaps the view of the cabin mirror.
    <br/><br/><p class="note"> <i> Note:</i> Many states do not require a cabin mirror. For more information, refer to your states laws.</p>
    </li>
  </ol>

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

$("#adjustTheMirrors").click(function() {
$("#mainPageContent").html(adjustTheMirrorsHTML);
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
