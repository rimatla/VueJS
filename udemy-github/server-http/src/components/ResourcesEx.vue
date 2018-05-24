<template>
    <div class="container">
         <h1>Vue Resources Example</h1>
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
                <button class="btn btn-danger" @click="submit">Submit</button>
                 <br><br>

                <input type="text" class="form-control" v-model="node">
                <br><br>
                 <!-- get data -->
                <button class="btn btn-danger" @click="fetchData">Get Data</button>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users" :key="u.id">
                        {{u.username}} | {{u.email}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: [],
      resource: {},
      node: "data"
    };
  },
  methods: {
    //send a POST request to firebase server!
    submit() {
      //Second approach using resource (https://github.com/pagekit/vue-resource/blob/develop/docs/resource.md)
      //this.resource.save({}, this.user);

      //custom resource
      this.resource.saveAlt(this.user);
    },
    //send a GET request to firebase server!
    fetchData() {
      this.resource
        .getData({ node: this.node })
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log(data);
          // trasnform object into array
          const resArray = [];
          for (let key in data) {
            resArray.push(data[key]);
          }

          //now send it to users array
          this.users = resArray;
        });
    }
  },
  //lifecycle hooks
  created() {
    //custom resource
    const customActions = {
      saveAlt: { method: "POST", url: "mynewdata.json" },
      getData: { method: "GET" }
    };

    /* vue resource */
    //this.resource = this.$resource("data.json"); //from vue-resource

    /*pass custon args*/
    //this.resource = this.$resource("data.json", {}, customActions);

    /* template url */
    this.resource = this.$resource("{node}.json", {}, customActions);
  }
};
</script>