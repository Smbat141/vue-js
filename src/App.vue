<template>
    <div class="container">
        <div class="form-group">
            <form class="pt-3">
                <label for="email">Email</label>
                <input
                        class="form-control "
                        :class="{'is-invalid':$v.email.$error}"
                        id="email" type="email"
                        v-model="email"
                        @blur="$v.email.$touch()"

                >
                <div class="invalid-feedback" v-if="!$v.email.required">
                    mail required
                </div>
                <div class="invalid-feedback" v-if="!$v.email.email">
                    mail is not correct
                </div>
            </form>
        </div>
        <div class="form-group">
            <form class="pt-3">
                <label for="email">Password</label>
                <input
                        class="form-control "
                        :class="{'is-invalid':$v.email.$error}"
                        id="password" type="password"
                        v-model="password"
                        @blur="$v.email.$touch()"

                >
                <div class="invalid-feedback" v-if="!$v.email.required">
                    password required
                </div>

            </form>
        </div>
    </div>

</template>

<script>
    import {required, email} from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                email: '',
            }
        },
        validations: {
            email: {
                required, email
            }
        }

    }
</script>

