SECTION 5 - advanced SASS and CSS with Natours project:


*********************************************************************************************************


/* two command line tabs:*/
/* npm run compile:sass*/
/* live-server */


CSS:
.header {
  height: 95vh;
  background-image: linear-gradient(to right bottom, rgba($color-primary-light, 0.8), rgba($color-primary-dark, 0.8)), url(../img/hero.jpg);
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  position: relative;

}

.header__logo-box {
  position: absolute;
  top: 4rem;
  left: 4rem;
}

WRITTEN WITH SASS:

.header {
  height: 95vh;
  background-image: linear-gradient(to right bottom, rgba($color-primary-light, 0.8), rgba($color-primary-dark, 0.8)), url(../img/hero.jpg);
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  position: relative;

  &__logo-box {
    position: absolute;
    top: 4rem;
    left: 4rem;
  }

}


*********************************************************************************************************

Responsive Design Review:

1) Fluid Grids and Layouts:  to allow content to easily adapt to the current viewport
 width used to browse the website. Uses % rather than px for() all layout-related lengths.

2) Flexible / Responsive Images:  images behave differently than text content, so we need
to ensure that they also adapt nicely to the current viewport.

3) Media Queries:  change style on certain viewport widths (breakpoints) aloows us 
to create different version of our website for() different widths


3 major ways of designing layouts:

FLOAT layouts - supported by all browsers

Flexbox - not all browser support it yet

CSS Grid - not all browser support it yet

*********************************************************************************************************

*************** Building a Custom Grid with Floats:

.row {
  max-width: 114rem;
  background-color: #eee;
  /* margin: 0 auto centers a block elements inside of another block element*/
  margin: 0 auto;
}

*************** How the attribute selector works:

/* select all class elements that start (^) with col*/
/* "*"  means select any that CONTAIN that  */
/* "$" means any class that ENDS with that */
  [class^="col-"] {
    
  }

  [class^="col-"] {
    background-color: orangered;
    float: left;

    &:not(:last-child) {
      margin-right: $gutter-horizontal;
    }
  }

*************** How :not pseudo-class :works: 

.row {
  max-width: $grid-width;
  background-color: #eee;
  /* margin: 0 auto centers a block elements inside of another block element*/
  margin: 0 auto;

  &:not(:last-child) {
    /* not does the opposite of last child, it selects everything EXCEPT last child*/
    margin-bottom: $gutter-vertical;
  }
}


*************** How calc works, and the difference between calc() and simple SASS operations

  .col-1-of-2 {
    width: calc((100% - #{$gutter-horizontal})/2);
  }

  .col-1-of-3 {
    /* subtracting the 2 gutters, dividing by the 3 columns*/
    width: calc((100% - (2 * #{$gutter-horizontal})) / 3);
  }

  .col-1-of-4 {
    /* subtracting the 3 gutters, dividing by the 4 columns*/
    width: calc((100% - (3 * #{$gutter-horizontal})) / 4);
  }

  
*********************************************************************************************************
 BUILDING THE ABOUT SECTIONS

 *******  How and why to use utility classes
  simple classes in css which only have ONE SIMPLE GOAL (like centering text)


            <section class="section-about">
                <div class="u-center-text">
                    <h2 class="heading-secondary">
                        Exciting tours for adventerous people
                    </h2>
                </div>
            </section>

          .u-center-text {
            text-align: center;
          }

The example above has the "u-center-text" as a reusable class{}
that ONLY centers text




 ******* How to use the background-clip property
   .heading-secondary {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark);
    /*webkit background clip sets the background clipped to exactly where the text sits */
    -webkit-background-clip: text;
    color: transparent;
  }


 ****** How to transform multiple properties simultaneously
     &:hover {
      transform: skewY(2deg) skewX(15deg) scale(1.1);
      text-shadow: .5rem 1rem 2rem rgba($color-black, 0.2);
    }

 ****** How to use the outline-offset property together with "outline"

 outline plus outline offset gives you space between the element and the outline,
 if you use a border property, you can not get that space in between it like that

 .composition {
  position: relative;

  &__photo {
    outline-offset: 2rem;

    &:hover {
      outline: 1.5rem solid $color-primary;
    }

  }
}

 ****** How to style elements that are NOT hovered while others are

.composition {
  position: relative;

  /* below this means in css full notation:*/
  /* composition:hover composition__photo:not(:hover)*/
  &:hover &__photo:not(:hover) {
    transform: scale(.95);
  }
}

html:
<div class="composition">
    <img src="img/nat-1-large.jpg" alt="Photo 1" class="composition__photo composition__photo--p1" />
    <img src="img/nat-2-large.jpg" alt="Photo 2" class="composition__photo composition__photo--p2" />
    <img src="img/nat-3-large.jpg" alt="Photo 3" class="composition__photo composition__photo--p3" />
</div>



ALTERNATE BACKGROUND SHAPE TECHNIQUE:
.section-features {
    padding: 20rem 0;
    background-image: linear-gradient(
        to right bottom,
        rgba($color-primary-light, 0.8),
        rgba($color-primary-dark, 0.8)),
    url(../img/nat-4.jpg);
    background-size: cover;

    /* this transform skew technique works like the clip property we used in the header*/
    transform: skewY(-7deg);
    margin-top: -10rem;


    //  this says SELECT ALL THE DIRECT CHILDS

    & > * {
        transform: skewY(7deg);
    }

}



  
*********************************************************************************************************
 BUILDING THE TOURS SECTIONS


*****  HOW TO USE perspective in CSS:
the smaller the number, the more dramatic the perspective, the large the less dramatic

//  moz is for mozilla browsers
  perspective: 150rem;
  -moz-perspective: 150rem;

*****  HOW TO USE THE backface-visibility property:
if set to "hidden" it hides the back part of an element:
      backface-visibility: hidden;



***** USING background blend modes:

// using background-blend over the &--1 background-image section
//  different blend modes, like hue, hard-light, etc.

  &__picture {
    background-size: cover;
    height: 23rem;
    background-blend-mode: screen;

    &--1 {
      background-image: linear-gradient(to right bottom, $color-secondary-light, $color-secondary-dark), url(../img/nat-5.jpg);
    }

***** How and When yo use box-decoration-break:




 












