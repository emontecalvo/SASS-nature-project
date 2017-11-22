SECTION TWO, LESSON 6:

	**********The best way to perform a basic reset using the universal selector:

	/* basic reset: */
/*  * means universal selector */
this lets us start clean, no margins/padding on anything
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;     this changes the box model so that the borders and the paddings are no longer added to the total height or width that we specific
}

	*************How to set project-wide font definitions:
properties related to font are in the body

body {
	font-family: "Lato", sans-serfif;
}

	*************How to clip parts of elements using clip-path:
	clip-path: polygon(x y, x y, x y, x y);
		clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);



SECTION TWO, LESSON 7:

*************  the easiest way to center anything with the transform, top and left properties:

 // SPAN means just style some text differently

 .text-box {
	position: absolute;
		/* this top and left are IN RELATION TO THE PARENT ELEMENT*/
	top: 50%;
	left: 50%;
	background-color: blue;
	/* those -50% are now no longer in relation to parent element, but of the element itself*/
	/* so it we say we want -50% it will be shifted half of the width to the left side*/
	/* and same thing for the height it will be shifted 50% of the element's height to the top*/
	transform: translate(-50%, -50%);
}

.heading-primary-main {
		/* block-level elements occupy the entire width that they have available & create line breaks after and before them*/
	display: block;
}


SECTION TWO, LESSON 8:
*************  how to implement CSS animation using @keyframes and the animations property:

.heading-primary {
	color: #fff;
	text-transform: uppercase;

  /* prevents the weird shaky thing that happens with animations */
  /* no one knows why it happens, but this is the fix:*/
  /* backface-visability the entire element moves determines if the backpart of the element is hidden or visible to the user*/
	backface-visibility: hidden;

}
	/* shorthand for animations   - name of animation, duration, transition, delay*/
	animation: moveInRight 1s ease-out .75s;


.heading-primary-main {
		/* block-level elements occupy the entire width that they have available & create line breaks after and before them*/
	display: block;
	font-size: 60px;
	font-weight: 400;
	letter-spacing: 35px;

	animation-name: moveInLeft;
	animation-duration: 1s;
	/* how the animation will proceed over time*/
	animation-timing-function: ease-out;


	/* this will apply the properties of  animation time 0% before the animation starts*/
	animation-fill-mode: backwards;
	/*iteration = how many times you want it to repeat*/
	/*animation-iteration-count: 3;*/
	/*animation-delay: 0.5s;*/

}

/* for browser performance, best to onliny animate two different properties, opacity and transform */
@keyframes moveInLeft {
	0% {
		opacity: 0;
		transform: translateX(-100px);
		/*transform: translateX(-100px) rotate(-50deg);*/
	}

/*	60% {
		transform: rotate(120deg);
	}*/

	80% {
		transform: translateX(10px);
	}

	100% {
		opacity: 1;
		/* if we say translate 0, that's saying just "normal", aka how it looks with no animations*/
		transform: translate(0);
	}
}




YOU CAN ALSO USE ANIMATIONS ON HOVER FOR EXAMPLE - NOT JUST PAGE LOAD:
.logo:hover {
	animation: moveInRight 1s ease-out;
}

SECTION TWO, LESSON 9:

***************** What pseudo-elements and pseudo-classes are:
/*pseudo classes are a special state of the selector, we use them to style
elements under a certain condition */
.btn:link,
.btn:visited {
	text-transform: uppercase;
	text-decoration: none;
	padding: 15px 40px;
	display: inline-block;
	border-radius: 100px;
	transition: all .2s;
}



***************** How to create a creative hover animation effect using the transition property:
.btn:hover {
	/* y in css moves from top to bottom, so to go up you need a negative value*/
	transform: translateY(-3px);
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}


SECTION TWO, LESSON 10:

***************** How and why to use the ::after pseudo-element:

.btn:link,
.btn:visited {
	text-transform: uppercase;
	text-decoration: none;
	padding: 15px 40px;
	display: inline-block;
	border-radius: 100px;
	transition: all .2s;
	position: relative;
}

.btn::after {
	content: "";
	display: inline-block;
	height: 100%;
	width: 100%;
	border-radius: 100px;
	/* this psuedo element button needs to go behind the real button, */
	/* so we set this position absolute, but also position relative to btn:visited above*/
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	transition: all .4s;
}

.btn-white::after {
	background-color: #fff;
}

.btn:hover::after {
	transform: scaleX(1.4) scaleY(1.6);
	opacity: 0;
}

.btn-animated {
	animation: moveInButton 0.5s ease-out .75s;
	/* animation fill mode  will apply the properties of  animation time 0% before the animation starts*/
	animation-fill-mode: backwards;
}

