<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <!-- Dynamic Names Attributes -->
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <h6>Dynamic Names Attributes</h6>
                  <transition :name="alertAnimation">
                    <!-- v-show merely adds display: none -->
                    <div class="alert alert-danger" v-show="show">This is some info</div>
                </transition>

                <hr>
                <!-- toggle alert banner -->
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br>
                <!-- Vue Transition component -->
                <transition name="fade">
                    <!-- v-show merely adds display: none -->
                    <div class="alert alert-info" v-show="show">This is some info</div>
                </transition>

                 <transition name="slide">
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>

                <!-- mix both chose what css property should control it ie: transition or animation-->
                <transition name="slide" type="animation">
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>

                <!-- on-load animation-->
                <transition name="fade" appear>
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>

                <!-- add Animate css-->
                <h6>Animate CSS</h6>
                <transition
                    appear 
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake">
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>

                <!-- Transitioning Between Multipel Elements-->
                <h6>Transitioning Between Multipel Elements</h6>
                <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-success" v-if="show" key="success">This is some success info</div>
                    <div class="alert alert-warning" v-else key="warning">This is some warning</div>
                </transition>
                <hr>

                <!-- JavaScript Animations-->
                <h6>JavaScript Animations</h6>
                <button class="btn btn-primary" @click="load = !load">Load/Remove Element</button>
                <br>
                <!-- Vue events -->
                <!-- tell vue you're nor using CSS -->
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"
                    
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    
                    :css="false">
                    <div style="width: 300px; height: 100px; background-color: tomato" v-if="load"></div>
                </transition>
                <hr>

                <!-- Animating Dynamic Components -->
                <h2> Animating Dynamic Components </h2>
                <button class="btn btn-info" @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'">Toggle Components</button>
                <!-- checkout out ie: out-in which 1st removes the first component before updating the next one-->
                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>
                <hr>

                <!-- Animating Multiple Elements w/ Vue's Transition Group -->
                <h2> Animating Multiple Elements w/ Vue's Transition Group </h2>
                <button class="btn btn-primary" @click="addItem">Add Item</button>
                <br><br>
                <!-- transition group renders as a span in the DOM. You may overwrite it by setting <transition-group tag="TAG">-->
                <ul class="list-group">
                    <transition-group name="slide">
                        <li class="list-group-item" 
                            v-for="(number, index) in numbers" 
                            @click="removeItem(index)"
                            style="cursor: pointer"
                            v-bind:key="number"
                            >{{number}}</li>
                     </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import DangerAlert from "./components/DangerAlert.vue";
import SuccessAlert from "./components/SuccessAlert.vue";
export default {
  data() {
    return {
      show: false,
      //show: true,
      alertAnimation: "fade",
      load: true,
      elementWidth: 100,
      selectedComponent: "app-success-alert",
      numbers: [1, 2, 3, 4, 5]
    };
  },
  //places to animate is on enter() and leave()
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter");
      //reset animation
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el, done) {
      console.log("enter");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          //tell vue once animation finishes
          done();
        }
      }, 15);
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    enterCancelled(el) {
      console.log("enterCancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave(el, done) {
      console.log("leave");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          //tell vue once animation finishes
          done();
        }
      }, 15);
    },
    afterLeave() {
      console.log("afterLeave");
    },
    leaveCancelled() {
      console.log("leaveCanceled");
    },
    //transition group methods
    addItem() {
      const position = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(position, 0, this.numbers.length + 1);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    }
  },
  components: {
    appDangerAlert: DangerAlert,
    appSuccessAlert: SuccessAlert
  }
};
</script>

<style>
div {
  margin-top: 20px;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
  /* opacity: 1; already defaults to 1*/
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  /* uncomment to see the jump*/
  /* transition: opacity 3s; */
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}
/*Transition Group*/
.slide-move {
  transition: transform 1s;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
