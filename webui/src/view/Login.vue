<template>
<div class="container">
    <div class="card-from">
        <form @submit.prevent="login">
            <div class="title">
                <h1>Login</h1>
                <p>Welcome back, please enter your details</p>
            </div>
            <div class="form-input">
                <div class="wrapper">
                    <i class="bi bi-person-fill"></i>
                    <input type="text" placeholder="Username">
                </div>
            </div>
            <div class="form-input">
                <div class="wrapper">
                    <i class="bi bi-lock-fill"></i>
                    <input type="text" placeholder="Password">
                    <button>
                        <i class="bi bi-eye-fill"></i>
                    </button>
                </div>
            </div>
            <button class="btn-login">Login</button>
        </form>
    </div>
</div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const login = () => {
    console.log("Login");
    router.push("/Home");
}
</script>
<style scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.card-from{
    width: 100%;
    max-width: 400px;
    height: 500px;
    padding: 20px;
    border-radius: 10px;
    overflow: hidden;
    background: linear-gradient(135deg, #c2c2c2, #275492);
    backdrop-filter: blur(10px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.title{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
.title h1{
    font-size: 2.5rem;
    font-weight: 600;
    color: #5e21e8;
    margin-bottom: 10px;
}
.title p{
    font-size: 1rem;
    color: #666;
    margin-bottom: 20px;
}
.form-input{
    width: 100%;
    padding: 10px;
}
.wrapper{
    position: relative;
    margin-bottom: 20px;
}
.wrapper i:first-child{
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1rem;
    color: #ccc;
}
.wrapper input{
    width: 100%;
    padding: 10px 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: all 0.3s ease;
}
.wrapper button{
    position: absolute;
    right: 35px;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background-color: transparent;
    cursor: pointer;
}
.wrapper button i{
    font-size: 1rem;
    color: #ccc;
}
.btn-login{
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #5e21e8;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 20px;
    transition: all 0.3s ease;
}
.btn-login:hover{
    background-color: #5e21e8;
}
.btn-login:active{
    background-color: #5f3eaa;
}
.wrapper input:focus{
    border-color: #5e21e8;
}

</style>