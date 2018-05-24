<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1> Built-in Directives</h1>
                <!-- text -->
                <p v-text="'Vue\'s text directive'"></p>
                <!-- html -->
                <p v-html="'<strong>Vue\'s text directive</strong>'"></p>
                <!--  -->
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1> Custom Global Directives</h1>
                <!-- Global directive -->
                <p v-highlight>Color this</p>

                <!-- Binding Value -->
                <p v-highlight2="'lightblue'">Color this</p>

                <p v-highlight3:background="'yellow'">Color this</p>

                <!-- Modifier -->
                <p v-highlight4:background.delayed="'tomato'">Color this</p>
            </div>
        </div>
        <hr>
        <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
             <h1> Custom Local Directives</h1>

                  <!-- Local directive -->
                <p v-local-highlight:background.delayed="'pink'">Color this</p>

                <!-- Multiple Modifiers -->
                <p v-local-highlight2:background.delayed.blink="'rebeccapurple'">Color this</p>

                <!-- More Complex Values to directives -->
                <p v-local-highlight3:background.delayed.blink="{mainColor:'rebeccapurple', secondColor: 'lightblue', delay: 500}">Color this</p>                
        </div>
    </div>
    </div>
</template>

<script>
// LOCAL DIRECTIVES
export default {
  directives: {
    // local directive I
    "local-highlight": {
      bind(el, binding, vnode) {
        /** MOFIFIER */
        var delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 2000;
        }

        setTimeout(() => {
          if (binding.arg == "background") {
            el.style.background = binding.value;
          } else {
            el.style.color = binding.value;
          }
        }, delay);
      }
    },

    // local directive II
    "local-highlight2": {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value;
          let secondColor = "lightblue";
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);
              if (binding.arg == "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, 1000);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg == "background") {
              el.style.backgroundColor = binding.value.mainColor;
            } else {
              el.style.color = binding.value.mainColor;
            }
          }, delay);
        }
      }
    },

    // local directive III
    "local-highlight3": {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);
              if (binding.arg == "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg == "background") {
              el.style.backgroundColor = binding.value.mainColor;
            } else {
              el.style.color = binding.value.mainColor;
            }
          }, delay);
        }
      }
    }
  }
};
</script>

<style>

</style>
