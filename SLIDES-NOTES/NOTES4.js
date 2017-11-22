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

	&:hover &__img {
		transform: translateX(-4rem) scale(1);
		/* brightness over 100% = brighter, under 100% = darker*/
		filter: blur(3px) brightness(80%);
	}

***** How to create a background video covering an entire section
 - see below - position absolute, opacity, object-fit

***** How to use the <video> HTML element
                <div class="bg-video">
                    <video class="bg-video__content" autoplay muted loop>
                        <source src="img/video.mp4" type="video/mp4">
                        <source src="img/video.webm" type="video/webm">
                        Your browser is not supported for video!
                    </video>
                </div>

***** How and when to use the OBJECT-FIT property

.bg-video {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: -1;
	opacity: .15;
	overflow: hidden;

	&__content {
		height: 100%;
		width: 100%;
		/* similar to background image cover property*/
		object-fit: cover;
	}
}
