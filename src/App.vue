<template>
  <router-view></router-view>
</template>

<script>
export default {};
</script>

<style>

body {
  background: #c779d0;
}

* {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

h3 {
  text-transform: capitalize;
  margin: 0 0.325em;
  color: #4855d1;
  font-size: 22px;
}

p, a {
  font-size: 22px;
  color: #f6f6f6; 
}

.badge {
  margin: 0 .5em;
  padding: 0 0.5em;
  border-radius: 10px;
  box-shadow: 1px 2px 10px #ffffff49;
  text-align: center;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;

}
ul{
  padding: 0;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>
