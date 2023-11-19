<template>
    <div>
        <h1>Welcome to the Register Page</h1>
        <div class="input-container" id="userInput">
            <p class="label-user">Username:</p>
            <input type="text" v-model="usernameInput" />
        </div>
        <div class="input-container" id="passInput">
            <p class="label-pass">Password:</p>
            <input type="password" v-model="pass1" />
        </div>
        <div class="input-container" id="verifypassInput">
            <p class="label-confirmPass">Confirm Password:</p>
            <input type="password" v-model="pass2" />
        </div>
        <button @click="confirmPass" id="loginBtn">Register</button>

        <p v-if="passMatch">Passwords do not match</p>
    </div>
</template>

<script>

export default {
    data() {
        return {
            pass1: '',
            pass2: '',
        }
    },

    computed: {
        passMatch() {
            return this.pass1 === this.pass2
        }
    },

    methods: {
        confirmPass() {
            if (!(this.passMatch)) {
                alert("Passwords do not match. Please re-enter password")
            }
        },
    }
}
</script>

<style scoped>
.input-container {
    display: flex;
    align-items: center;
    margin-left: 43%;
    padding-bottom: -5px;
}

input {
    font-size: 17px;
}

.label-user {
    margin-right: 68px;
}

.label-pass {
    margin-right: 72px;
}

.label-confirmPass {
    margin-right: 10px;
}
</style>