<template>
    <div>
        <br>
        <h3 class="login-banner" style="text-align:center">Welcome to Itunes Album Filter 1.0 <span style="font-size:14px"> Created by Francesc Juille</span></h3>
        <div style="display:flex;justify-content:center">
            <div style="width:300px;margin-top:50px">
                <div class="card" style="padding:20px">
                    <form action="#" @submit.prevent="login">

                        <p style="text-align:center">Login</p>
                        <div class="mb-3">
                            <input class="form-control" placeholder="Email" v-model="form.email" autofocus  type="text" id="login-email" required>
                        </div>
                        <div class="full-width-input">
                            <input class="form-control" type="password" placeholder="Password" v-model="form.password" required>
                        </div>
                        <br>
                        <div class="flex-center">
                            <button type="submit" class="btn btn-primary" >Login</button>
                        </div>    
                        <p style="margin-top:30px">Demo login:</p>
                        <p>user: demo@demo.com</p>
                        <p>password: root</p>
                    </form>    
                </div>
                <br>
                <div class="flex-center">
                 <button v-on:click="loginAsGuest" type="button" class="btn btn-secondary" >Login as Guest</button>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
import ApiService from '../common/services/api.service'

  export default {
    data() {
      return {
        form: {
          email: "",
          password: ""
        },
        
      }
    },
    methods: {
      login() {
        ApiService.httpPost("http://localhost:4000/api/user/login",{email:this.form.email,password:this.form.password}).then(response => {
            console.log(response.data.data);
            this.$router.push('/home');
        }).catch(e=>{
            alert("Incorrect credentials"+e)
        })
      },
      loginAsGuest() {
          this.$router.push('/home');
      }
      }
    }
  
</script>
<style scoped>

.login-banner {
    background-color:rgb(175, 238, 217);
    padding:20px;
}

.form-control {
  margin: 10px 0;
}

.flex-center {
    display:flex;
    justify-content:center;
}
</style>