<template>
    <div id="header">
        <h1>Welcome to the Login Page</h1>
        <div class="input-container" id="userInput">
            <p class="label-user">Username:</p>
            <input type="text" v-model="usernameInput" />
        </div>
        <div class="input-container" id="passInput">
            <p class="label-pass">Password:</p>
            <input type="password" v-model="passwordInput" />
        </div>
        <button id="loginBtn">Log In</button>
    </div>
</template>

<script>


export default {
    loginUser() {
        const userData = {
            username: this.usernameInput,
            password: this.passwordInput
        }

        const loginAPI = process.env.VUE_APP_API_URL + '/login'

        //making HTTP post request
        fetch(loginAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })

            .then(response => {
                if (response.ok) {
                    //successful login
                    return response.json()
                }
                else {
                    //handle login error
                    return response.json().then(error => Promise.reject(error))
                }
            })

            //handles outputting message
            .then(data => {
                const token = data.access_token;

                //includes jwtToken in the header to successfully pass the protected login
                this.fetchProtectedResource(token)
            })
            .catch(error => {
                alert("Error:" + error)
            })
    },
    fetchProtectedResource(token) {
        const protectedAPI = process.env.VUE_APP_API_URL + '/protected'

        fetch(protectedAPI, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        })
            //handles the response from the backend
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                else {
                    return response.json().then(error => Promise.reject(error))
                }
            })

            //outputs the response from the backend
            .then(data => {
                alert(data)
            })
            .catch(error => {
                alert("Error:" + error)
            })
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
    margin-right: 10px;
}

.label-pass {
    margin-right: 14px;
}
</style>