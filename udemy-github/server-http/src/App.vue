<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label for="">Username</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                 <div class="form-group">
                    <label for="">Email</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
                <!-- post data -->
                <button class="btn btn-primary" @click="submit">Submit</button>
                 <!-- get data -->
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users" :key="u.id">
                        {{u.username}} | {{u.email}}
                    </li>
                </ul>
            </div>
        </div>
            <app-resources></app-resources>
    </div>
</template>

<script>
import ResourcesEx from "./components/ResourcesEx.vue";
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: [],
      resource: {}
    };
  },
  components: {
    appResources: ResourcesEx
  },
  methods: {
    //send a POST request to firebase server!
    submit() {
      //console.log(this.user);
      //$http comes from vue resource
      this.$http
        //url is saved globally on main.js
        .post("data.json", this.user)
        .then(
          res => {
            console.log(res);
          },
          error => {
            console.log(error);
          }
        );
    },
    //send a GET request to firebase server!
    fetchData() {
      this.$http
        .get("data.json")
        .then(res => {
          return res.json();
        })
        .then(
          data => {
            console.log(data);
            // trasnform object into array
            const resArray = [];
            for (let key in data) {
              resArray.push(data[key]);
            }

            //now send it to users array
            this.users = resArray;
          },
          error => {
            console.log(error);
          }
        );
    }
  }
};
</script>

<style>

</style>
