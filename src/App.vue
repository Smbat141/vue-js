<template>
    <div class="container">
        <form class="pt-3" v-on:submit.prevent>
            <div class="form-group">
                <label for="email">Email</label>
                <input
                        class="form-control"
                        :class="{'is-invalid':$v.email.$error}"
                        id="email" type="email"
                        v-model="$v.email.$model"

                >
                <!--                <div class="invalid-feedback" v-if="!$v.email.required">mail required</div>-->
                <div class="invalid-feedback" v-if="!$v.email.required">mail required</div>
                <div class="invalid-feedback" v-if="!$v.email.email">mail not correct</div>
            </div>
            <div class="form-group">
                <label for="email">Password</label>
                <input
                        class="form-control"
                        :class="{'is-invalid':$v.password.$error}"
                        id="password" type="password"
                        v-model="$v.password.$model"

                >
                <!--                <div class="invalid-feedback" v-if="!$v.email.required">mail required</div>-->
                <div class="invalid-feedback" v-if="!$v.password.minLength">min length of password 6</div>
            </div>
            <div class="form-group">
                <label for="email">Repeat Password</label>
                <input
                        class="form-control"
                        :class="{'is-invalid':$v.repeatPassword.$error}"
                        id="repeatPassword" type="password"
                        v-model="$v.repeatPassword.$model"

                >
                <!--                <div class="invalid-feedback" v-if="!$v.email.required">mail required</div>-->
                <div class="invalid-feedback" v-if="!$v.repeatPassword.sameAs">passwords not match</div>
            </div>
            <button type="submit" class="btn btn-success" :disabled="$v.$invalid" v-on:click="showValues">Success</button>
            <pre>{{$v.$invalid}}</pre>
        </form>

    </div>

</template>

<script>
    import {required, email,minLength,sameAs} from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                email: '',
                password: '',
                repeatPassword:'',
            }
        },
        methods:{
            showValues(){
                console.log(this.email);
                console.log(this.password);
            }
        },
        validations: {
            email: {
                email, required
            },
            password:{
                minLength:minLength(6)
            },
            repeatPassword:{
                sameAs:sameAs('password')
            }


        }

    }
</script>



