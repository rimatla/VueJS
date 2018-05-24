// SEARCH FOR v-model 
<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <!-- bind data wiht v-model -->
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="userData.email"                
                        >
                        <!-- 
                            this is what v-model works is doing under the hood
                            v-bind:value = "userData.mail"
                            @input="userData.mail = $event.target.value"
                         -->
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <!-- lazy mode prevernts to automatically register on every key-stroke -->
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model.lazy="userData.password"
                                >
                                <p>{{ userData.password}}</p>
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model="userData.age"
                                >
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="message"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="sendEmail"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"
                                    v-model="sendEmail"> Send Infomail
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="gender"> Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <!-- use vue to select and get the values -->
                    <select
                            id="priority"
                            class="form-control"
                            v-model="selectedPriority">
                            <!-- :selected only works if you're not binding v-model above -->
                        <option v-for="priority in priorities" :key="priority" :selected="priority == 'Medium'">{{ priority }}</option>
                    </select>
                </div>
            </div>
             <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                   <app-switch v-model="dataSwitch"></app-switch>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Submit Form -->
                    <button class="btn btn-primary" @click.prevent="submitted">Submit!</button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Age: {{ userData.age }}</p>
                        <!-- plain CSS -->
                        <p style="white-space: pre">Message:{{message}} </p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="item in sendEmail" :key="item">{{item}}</li>
                        </ul>
                        <p>Gender: {{ gender }}</p>
                        <p>Priority: {{ selectedPriority }}</p>
                        <p>Switched: {{ dataSwitch }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Switch from "./components/Switch.vue";
export default {
  data() {
    return {
      userData: {
        email: "",
        password: "",
        age: 28
      },
      message: "A new Text Oooo!",
      sendEmail: [],
      gender: "Male",
      priorities: ["High", "Medium", "Low"],
      selectedPriority: "High",
      dataSwitch: true,
      isSubmitted: false
    };
  },
  components: {
    appSwitch: Switch
  },
  methods: {
      submitted() {
          this.isSubmitted = true;
      }
  }
};
</script>

<style>

</style>
