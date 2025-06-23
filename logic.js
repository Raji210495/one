CustomEase.create("MB", "M0,0,C0.4,0,0.2,1,1,1");

var tl = new TimelineMax({defaults: {ease: "MB"}});

window.addEventListener("load", function () {
  init();
});

///and then preloading yer images, this code 
//being in the JS file being referenced above ....

container = document.getElementById("main-container");

function init() {
  container.style.visibility = "visible";
  eventsSetup.call(this);
  show();
}


function eventsSetup(){  
	var learnmore = document.getElementById("main-container");
	learnmore.addEventListener("mouseenter", onHoverOver);
	learnmore.addEventListener("mouseleave", onHoverOut);

	var close = document.getElementById("Disclaimerclose");
	var dOpen = document.getElementById("legal");
	dOpen.addEventListener("click", onDisclaimerHover);
	close.addEventListener("click", offDisclaimerHover);

	
  }

function onHoverOver(e) {
	TweenMax.to('#cta_container', 0.25, { scale: 1.03, rotation: 0.01, force3D: false });
}

function onHoverOut(e) {
	TweenMax.to('#cta_container', 0.25, { scale: 1, rotation: -0.01, force3D: false });
}

function onDisclaimerHover() {
	 
	TweenMax.to(['#disclaimer_container'], 0, { autoAlpha: 1, force3D: true });
	TweenMax.to('#Disclaimerclose', 0, { autoAlpha: 1, force3D: true });
	TweenMax.to('#legal', 0, { autoAlpha: 0, force3D: true });
	tl.pause();
  }

  function offDisclaimerHover() {
	TweenMax.to(['#disclaimer_container'], 0, { autoAlpha: 0, force3D: true });
	TweenMax.to('#Disclaimerclose', 0, { autoAlpha: 0, force3D: true });
	TweenMax.to('#legal', 0, { autoAlpha: 1, force3D: true });
	tl.play();
  }


//Adjust values below for each size
//Background image adjustments

//End of adjustments

TimelineLite.prototype.wait = function (position) {
  return this.set({}, {}, position);
};

// Shows the ad.
function show() {
  if (tl == null)
    return;
  tl.addLabel('frame1', '+=0')

  .to([F1txt1], 0.5, { autoAlpha: 1,  force3D: true }, 'frame1+=0.5')
  .to([cta_container], 0.5, { autoAlpha: 1,  force3D: true }, 'frame1+=1.5')
  .to([F1txt1], 0.5, { autoAlpha: 0,  force3D: true }, 'frame1+=2.5')
  .to([img_01], 0.5, { autoAlpha: 0,  force3D: true }, 'frame1+=3')

  .to([img_02], 0.5, { autoAlpha: 1,  force3D: true }, 'frame1+=3')
  .to([F2txt1], 0.5, { autoAlpha: 1,  force3D: true }, 'frame1+=3.5')
  .to([F2txt1], 0.5, { autoAlpha: 0,  force3D: true }, 'frame1+=5.5')
  .to([img_02], 0.5, { autoAlpha: 0,  force3D: true }, 'frame1+=6')

  .to([img_03], 0.5, { autoAlpha: 1,  force3D: true }, 'frame1+=6')
  .to([F3txt1], 0.5, { autoAlpha: 1,  force3D: true }, 'frame1+=6.5')
  
  

  

}


// Exit Hnadlers

