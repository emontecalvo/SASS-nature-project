SECTION 6 - RESPONSIVE DESIGN 
*********************************************************************************************************

***** How to use SASS Mixing to write all media queries


***** How to use @content and @if Sass directives

(_base file):

html {
  /* defines what 1rem is*/
  font-size: 62.5%;

  @include respond(tab-land) {
  	font-size: 56.25%;
  }

  @include respond(tab-port) {
  	font-size: 50%;
  }

  @include respond(big-desktop) {
  	font-size: 75%;
  }
}

_mixins file:
@mixin respond($breakpoint) {
	@if $breakpoint == phone {
		@media (max-width: 37.5em) { @content };
	}

	@if $breakpoint == tab-port {
		@media (max-width: 56.25em) { @content };
	}

	@if $breakpoint == tab-land {
		@media (max-width: 75em) { @content };		
	}

	@if $breakpoint == big-desktop {
		@media (min-width: 112.5em) { @content };		
	}

}

$breakpoint argument choices:
- phone
- tab-port
- tab-land
- big-desktop


1em = 16px   - ems are better than rems for() media queries








