<template>
    <div>
        <h1>Welcome to the Register Page</h1>
        <div class="input-container" id="userInput">
            <p class="label-user">Username:</p>
            <input type="text" v-model="usernameInput" />
        </div>
        <div class="input-container" id="passInput">
            <p class="label-pass">Password:</p>
            <input type="password" v-model="password" />
        </div>
        <div class="input-container" id="verifypassInput">
            <p class="label-confirmPass">Confirm Password:</p>
            <input type="password" v-model="verifyPass" />
        </div>
        <button id="loginBtn">Register</button>
    </div>
</template>

<script>

export default {
    //logic
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