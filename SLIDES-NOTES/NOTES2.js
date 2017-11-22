SECTION 3 - behind the scenes of CSS:


***** THREE PILLARS OF WRITING GOOD HTML AND CSS FOR GOOD WEBSITES:
	
	1 - RESPONSIVE DESIGN
			fluid layout, media queries, responsive images, correct units, desktop-first vs mobile-first

	2 - MAINTAINABLE AND SCALABLE CODE
			clean, easy-to-understand, growth, reusable, how to organize files, how to name classes, how to structure HTML

	3 - WEB PERFORMANCE
			less http requests, less code, compress code, use a css preprocessor, less images, compress images
			(biggest impact possibly is:  reduce the use of images)

*********************************************************************************************************


Q:  What happens to CSS when we load up a webpage?
	load HTML -> parse html -----------------------------------------------------> DOM (document object model)  -|
								|																																															 |
								load css ->    parse css ------------------------------------->  CSS Object Model (CSSOM)			-|
														(resolve conflicting css declarations (cascade), 																	 |
															process final css values)																												 |
																																																							 |
																																																							 |
					final rendered website<-										website redering:								<- render tree			 <---|
																									the visual formatting model:
																				calcs things like box model, floats, positioning

*********************************************************************************************************

HOW CSS IS PARSED - Part 1:  the cascade and specificity


A CSS RULE - selector (.my-class) plus declaration block ({ })
	.myclass {
		color: blue;
		text-align: center;
		font-size: 20px;
	};

CASCADE:  the process of combining different stylesheets and resolving conflicts between
					different CSS rules and declarations, when more than one rule applies to a 
					certain element.

					CSS can also come from different sources;

a delcaration for font size can appear in several stylesheets or a single stylesheet,
but also different sources such as Author (developer), User (CSS coming from the user - like changing font size on browser),
or Browser (user agent)

Cascase combines the CSS declarations from all of those sources

CSS looks at it like this to weigh:

******************  IMPORTANCE(WEIGHT) > SPECIFICITY > SOURCE ORDER.;



IMPORTANCE													|		SPECIFICITY                          	|		SOURCE ORDER
																		|																					|
1. User !important declarations			|	1. Inline styles 												|   the last declaration in the code will
2. Author !important declarations		| 2. IDs																	|   override all other declarations and 
3. Author declarations							| 3. Classes, pseudo-classes, attribute		|   will be applied
4. User declarations								| 4. Elements, pseudo-elements						|
5. Default browser declarations			|



* CSS Declarations marked with !important have the highest priority
* but, only ever use !important as a last resources - it's better to use corect speicificities for more maintainable code
* inline styles in html will always have priority over styles in external stylesheets (not a good practice though)
* a select that contains 1 ID is more specific than one with 1000 classes
* a selector that contains 1 CLASS is more specific than one with 1000 elements
* the universal selector "*" has no specificity value (0, 0, 0, 0) - which means all other selectors have precedence over it
* rely more on specificity than on the order of selectors - this is helpful when you want to re-arrange your code! it prevents messups and surprises

* when you use external 3rd party stylesheets THEN you need to make sure of the order - 
	YOUR stylesheet needs to be able to override the 3rd party if you want so order yours LAST


*********************************************************************************************************
HOW CSS IS PARSED PART 2:   value processing


How CSS Values are processed (everything gets put to pixels)

each CSS element has a built-in padding - initial value

** THE PARENT Element information is what is references for percentage-based calculations

* em's' use the parent element for font-sizes, rem's' use the ROOT element for font-sizes

* each property has an initial value, used if nothing is declared (and if there is no inheritance)
* browsers specify a ROOT FONT-SIZE for each page (usually 16px)
* percentages and relative values are always converted to pixels
* percentages are measured relative to their parent's' FONT-SIZE, if used to specify font-size;
* em are measured relative to their parent font-size is used to speiciy font-size
* em are measured relative to CURRENT font size if used to specify lengths
* rem are always measured relative to document root font-size
* vh and vw are simply percentage measurements of the viewport's' height and width


*********************************************************************************************************
HOW CSS IS PARSED PART 3:   inheritance

* inheritance passes the values for () some specific properties from parents to children = more maintainable CODE
* properties related to text are inherited: font-family, font-size, color, etc.
* the computed value of a property is what gets inherited, NOT the delared value
* inheritance of a property only works if no one declares a value for() that property
* the "inherit" keyword forces inheritance on a certain property
* the "initial" keyword resets a property to its initial value


*********************************************************************************************************
CONVERTING PX TO REM AND WHY


root font size is set in the HTML Selector 

rem is always in relation to the root font size

if root font size is 10px, 1rem is 10px    - 1 rem is one unit of root size
	if the root font size was 13px, 1 rem is equal to 13px
		so choose a number that is easy to work with for () the root font size - like 10!


ems depend on the parent element, not the root  - so they are more difficult to manage
rem is a better solution

BUT if you set html { font-size: 10px} then users with bad eye sight cannot change the
font size - so if you set html {font-size: 100%} we work with a 100%, which is normally 16px but
could be more depending on the user settings
BUT we do not want to be working with 16px, so if we want to work with ten pixels,
to set a percentage we would do 10 / 16 = 62.5%    html {font-size: 62.5%}

then use rems from that!


rems not supposed below internet explorer 9

box-sizing property is NOT inheritied, so if we want all things to have it, we use the keyword 
under the * section to say box-sizing: inherit
- just a slightly better practice



*********************************************************************************************************
THE VISUAL FORMATTING Model
Definition:  Algorithm that calculates boxes and determines the layout of these
						boxes, for () each element in the render tree, in order to determine
						the final layout of the page

* Dimensions of boxes:  the box model;
* Box type: inline, block and inline-block;
* Positioning scheme: floats and positioning;
* Stacking contexts;
* Other elements in the render tree;
* Viewport size, dimensions of images, etc.

 - by putting all of those above factors, the browser figures out how the screen will looks

 -------- box model 

 	remember the FILL AREA for() background color and images will fill up everything,
 	whereas the content, like text, just stays in the content AREA

 	---- box types:  inline, block-level and inline-block

 	---- position schemes: normal flow, floats and absolute positioning



*********************************************************************************************************
CSS Architecture and BEM - Block Element Modifier

	BEM:
		.block{}
		.block__element{}
		.block__element--modifier{}


******************
SASS is a CSS preprocessor, an extension of CSS that adds power and elegance to the basic language

SASS SOURCE CODE --------- Sass compiler ------->  COMPILED CSS CODE



























