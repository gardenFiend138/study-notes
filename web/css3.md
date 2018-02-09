# CSS3 

## Media Query 

Uses the `@media` rile to include a block of CSS properties that only pertain if a certain condition is true 

__Mobile First__ means designing for mobile before designing for desktop or any other device (This will make the page display faster on smaller devices).

This means that we must make some changes in our CSS.

Instead of changing styles when the width gets smaller than 768px, we should change the design when the width gets larger than 768px. This will make our design Mobile First:

[Article Referenced on CSS3](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)

## CSS Grid 

* [CSS Grid Changes EVERYTHING](https://www.youtube.com/watch?v=7kVeCqQCxlk)

* [CSS Grid Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

Speaker had a challenge: needed content to be in different locations depending on screen size; using vanilla CSS & HTML (& wordpress).

Usually, would use JS (or additional libraries) to move the HTML elements around. This causes issues for accessability, since we are moving elements around.

Since the beginning, HTML layouts have been broken, and we have just been finding ways to slightly fix it. Even using flexbox, we are adding extra, non-essential elements purely to position elements.

He is suggesting to use just semantic tags, and CSS. His solution: CSS Grid.

__WOW__ @ 18:00 in--explaining how it works for responsive designs.

Use 'feature query' to ask browser if something is supported.