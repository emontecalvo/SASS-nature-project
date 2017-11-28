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


*********************************************************************************************************
BUILDING THE BOOKING section

*****  How to implement "solid color gradients":
background-image: linear-gradient(105deg, rgba($color-white, .9) 0%, rgba($color-white, .9) 50%, transparent 50%), url(../img/nat-10.jpg);

the background-image puts the linear gradient colors on top of the image, 105deg is how the color gets tilted
and 0%, 50% are the points where we want the changes


.book {
    background-image: linear-gradient(105deg, rgba($color-white, .9) 0%, rgba($color-white, .9) 50%, transparent 50%), url(../img/nat-10.jpg);
    background-size: 100%;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba($color-black, .2);

    height: 50rem;
}

*****    NOTE:  most elements inherit styles but not input elements, so use "inherit" on them for styles (font-family: inhereit)

*****  How the general and adjacent sibling selectors work & why we need them:

	&__input:placeholder-shown + &__label {

	}

the "plus" takes the element sibling right next to it, in this case grabbing
input and label classes:
                                // <div class="form__group">
                                //     <input class="form__input" type="text" id="name" placeholder="Full name" required>
                                //     <label for="name" class="form__label">Full name</label>
                                // </div>

you can use "~" for a general sibling selector instead of the plus
plus is ADJACENT

*****  How to use the ::input-placeholder pseudo-element:
	&__input:placeholder-shown + &__label {
		opacity: 0;
		visibility: hidden;
		transform: translateY(-4rem);
	}

	&::-webkit-input-placeholder {
		color: $color-gray-dark-2;
	}

*****  How to and when to use the :focus, :invalid, placeholder-shown and :checked pseudo-classes:

&focus:invalid is waiting for the browser to check if it is correct

		&:focus {
			outline: none;
			box-shadow: 0 1rem 2rem rgba($color-black, .1);
			border-bottom: 3px solid $color-primary;
		}

		&:focus:invalid {
			border-bottom: 3px solid $color-secondary-dark;
		}




*****  Techniques to build custom radio buttons:

the NAME attriube on the input is what lets the browser know
these radio buttons are together, otherwise you could select both radio buttons

                                // <div class="form__group">
                                //     <div class="form__radio-group">
                                //         <input type="radio" class="form__radio-group" id="small" name="size">
                                //         <label class="form__radio-label" for="small">Small tour group</label>
                                //     </div>
                                //     <div class="form__radio-group">
                                //         <input type="radio" class="form__radio-group" id="large" name="size">
                                //         <label class="form__radio-label" for="large">Large tour group</label>
                                //     </div>
                                // </div>



*********************************************************************************************************
NAVIGATION BUILDING

***** position:fixed:
	position:fixed is the same as position:absolute EXCEPT that is stays on the screen when you scroll
	takes the element out of the flow

using z-index will keep it in front of every other element
			z-index: 1000;


***** What the "checkbox hack" is and how it works:



***** How to create custom animation timing functions using cubic bezier curves:



***** How to animate "solid-color gradients":

radial gradient goes from inside to out on the element: 		background-image: radial-gradient($color-primary-light, $color-primary-dark);

***** How and why to use transform-origin:


























































