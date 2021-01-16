<template>
  <div class="row justify-center q-my-lg">
        <div class="col-xs-8 col-sm-6 col-md-4">
            <q-form
                class="q-gutter-md"
                >
                <q-input
                    filled
                    v-model="name"
                    label="Your name"
                    hint="Ex. John Doe"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Please type your name']"
                    v-show="submission==='signup'"
                />

                <q-input
                    filled
                    v-model="email"
                    label="Your email"
                    type="email"
                    hint="Ex. johndoe@doe.com"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Please type your email']"
                />

                <q-input 
                    label="Your password" 
                    v-model="password" 
                    filled 
                    :rules="[ val => val && val.length > 0 || 'Please type your password']"
                    :type="isPwd ? 'password' : 'text'" 
                    >
                    <template v-slot:append>
                    <q-icon
                        :name="isPwd ? 'fas fa-eye-slash' : 'fas fa-eye'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                    />
                    </template>
                </q-input>


                <div>
                    <q-btn :label="submission==='signup'? 'Sign Up' : 'Sign In'" 
                    type="button" 
                    @click="handleSubmit"
                    color="primary"/>
                </div>
            </q-form>
        </div>
  </div>
</template>

<script>
export default {
    props: {
        submission: String,
    },
    data(){
        return {
            name: null,
            email: null,
            password: null,
            isPwd: true,
        }
    },
    mounted () {

    },
    computed: {
        LogStatus(){
            return this.$store.state.authStore.isLoggedIn
        }
    },
    methods: {
        async handleSubmit() {
            if( this.submission === "signin" ) {
                const form = { "login": this.email, "password": this.password};
                await this.$store.dispatch("authStore/signInUser", form);
            } else if( this.submission === "signup" ){
                const form = { "email": this.email, "password": this.password, "name": this.name};
                await this.$store.dispatch("authStore/signUpUser", form);
            }
            if(this.LogStatus){
                this.$q.notify({
                    color: 'green-4',
                    textColor: 'white',
                    icon: 'fas fa-thumbs-up',
                    message: 'Logged User In',
                    position: 'top',
                    timeout: 1500,
                })
            }
        }
    }
}
</script>

<style>

</style>