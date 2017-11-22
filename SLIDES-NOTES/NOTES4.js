*********************************************************************************************************


***** How to make text flow around shapes with shape-outside and float
.story {
	width: 75%;
	margin: 0 auto;
	box-shadow: 0 3rem 6rem rgba($color-black, .1);
	background-color: $color-white;
	border-radius: 3px;
	padding: 6rem;
	font-size: $default-font-size;

	&__shape {
		/*  first part makes the text wrap around a circle */
		width: 15rem;
		height: 15rem;
		background-color: fuchsia;
		float: left;
		/* circle: 1st num = radius */
		/* shape-outside for this only works if the element has definied dimension (width, height) & floated*/
		-webkit-shape-outside: circle(50% at 50% 50%);
		shape-outside: circle(50% at 50% 50%);

		/* this shows the circle*/
		-webkit-clip-path: circle(50% at 50% 50%);
		clip-path: circle(50% at 50% 50%);
	}
}

***** How to apply FILTER to images


***** How to create a background video covering an entire section


***** How to use the <video> HTML element


***** How and when to use the OBJECT-FIT property


