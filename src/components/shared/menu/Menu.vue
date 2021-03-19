<template>
  <nav class="nav_menu">
    <div class="nav_logo">
      <image-responsive
        url="https://fontmeme.com/permalink/210318/75199687acb5392c2e2629df98f7458d.png"
        title="logo"
      />
    </div>
    <div class="nav_ipt">
      <label for="ipt_theme" class="toggle_theme">
        <input type="checkbox" id="ipt_theme" />
        <span class="slider round"></span>
      </label>
    </div>
  </nav>
</template>

<script>
import ImageResponsive from "../image-responsive/ImageResponsive";

export default {
  components: {
    "image-responsive": ImageResponsive
  }
};
</script>

<style scoped>
.nav_menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em .5em;
  background: #fefefe;
  box-shadow: 0px -1px 5px #cecece;
}

.nav_logo {
    width: 350px;
}
/*Theme*/
.toggle_theme {
    position: relative;
    width: 30px;
    height: 18px;
    border-radius: 30px;
    display: inline-block;
    background: #4da6d1;
}

#ipt_theme {
    display: none;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  top: 1px;
  left: 1px;
  background: #fefefe;
  transition: .4s;
}

.toggle_theme input:checked ~ .slider {
  background-color: #1e505f;
}

.toggle_theme  input:focus ~ .slider {
  box-shadow: 0 0 1px #9e9e9e;
}

.toggle_theme  input:checked ~ .slider:before {
  transform: translateX(12px);
}

.slider.round {
  border-radius: 30px;
}

.slider.round:before {
  border-radius: 50%;
}

</style>
