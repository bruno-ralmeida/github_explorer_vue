<template>
  <nav class="nav_menu">
    <div class="nav_logo">
      <image-responsive
        url="https://fontmeme.com/permalink/210320/045dfb8926af735aecd5b35729101b7d.png"
        title="logo"
      />
    </div>
    <div class="nav_ipt">
      <label for="ipt_theme" class="toggle_theme">
        <input
          type="checkbox"
          id="ipt_theme"
          @checked="isChecked"
          v-model="isChecked"
        />

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
  },
  data() {
    return { isChecked: "", notChecked: false };
  },
  mounted() {
    if (localStorage.isChecked) {
      this.bgTheme();
      this.isChecked = Boolean(localStorage.isChecked == "true");
    }
  },
  watch: {
    isChecked(newChecked) {
      localStorage.isChecked = newChecked;
      this.bgTheme();
    }
  },
  methods: {
    bgTheme() {
      if (this.isChecked) {
        document.body.style.backgroundImage =
          "linear-gradient(to right top, #282a36, #2d2f3d, #323543, #383a4a, #3d4051, #3f4254, #424557, #44475a, #44475a, #44475a, #44475a, #44475a)";
      } else {
        document.body.style.backgroundImage =
          "linear-gradient(to right bottom, #4bc0c8, #c779d0, #feac5e )";
      }
    }
  }
};
</script>

<style scoped>
.nav_menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0.5em;
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
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  top: 1px;
  left: 1px;
  background: #fefefe;
  transition: 0.4s;
}

.toggle_theme input:checked ~ .slider {
  background-color: #1e505f;
}

.toggle_theme input:focus ~ .slider {
  box-shadow: 0 0 1px #9e9e9e;
}

.toggle_theme input:checked ~ .slider:before {
  transform: translateX(12px);
}

.slider.round {
  border-radius: 30px;
}

.slider.round:before {
  border-radius: 50%;
}

@media only screen and (max-width: 900px) {
  .nav_logo {
    width: 180px;
  }
}
</style>
