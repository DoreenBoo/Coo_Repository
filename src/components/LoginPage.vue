<template>
    <!-- 登录/注册表单 -->

        <div class="login-wrapper">
            <div class="header">Login</div>
            <div class="form-wrapper">
                <input type="text" name="username" placeholder="username" class="input-item">
                <input type="password" name="password" placeholder="password" class="input-item">
                <div class="btn">Login</div>
            </div>
            <div class="msg">
                Don't have account?
                <a href="#">Sign up</a>
            </div>
        </div>
   
</template>

<script>
export default {
  name: 'LoginPage',
};
</script>

<style scoped>
/* * {
     margin: 0;
     padding: 0;
 } */

 /* html {
     height: 100%;
 }

 body {
     height: 100%;
 } */

 /* .container {
     height: 100%;
     background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
 } */

 .login-wrapper {
     background-color: rgb(249, 205, 173);
     width: 358px;
     height: 588px;
      border-radius: 40px;
     padding: 0 50px;
     position: relative;
     left: 35%;
     top: 55%;
 }

 .header {
     font-size: 38px;
     font-weight: bold;
     text-align: center;
     line-height: 200px;
 }

 .input-item {
     display: block;
     width: 100%;
     margin-bottom: 20px;
     border: 0;
     padding: 10px;
     border-bottom: 1px solid rgb(128, 125, 125);
     font-size: 15px;
     outline: none;
      border-radius: 40px;
 }

 .input-item:placeholder {
     text-transform: uppercase;
 }

 .btn {
     text-align: center;
     padding: 10px;
     width: 100%;
     margin-top: 40px;
     background-color:  rgb(254, 67, 101);
     color: #fff;
      border-radius: 40px;
 }

 .msg {
     text-align: center;
     line-height: 88px;
 }

 a {
     text-decoration-line: none;
     color: #abc1ee;
 }
</style>
