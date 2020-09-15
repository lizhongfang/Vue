<template>
  <div class="hello">
    <div class="login-box">
      <!---->
      <div class="login-logo">
        <p>系统登录</p>
      </div>
      <div class="login-box-body">
        <p class="login-box-msg">登录你的管理员账号</p>
        <form>
          <div class="form-group has-feedback">
            <input type="text" name="username" class="form-control" placeholder="账户名">
            <span class="glyphicon glyphicon-user form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" name="password" class="form-control" placeholder="密码">
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="row">
            <!-- /.col -->
            <div class="col-xs-12">
              <button type="submit" theme="primary" size="flat" class="btn btn-primary btn-flat btn-block" @click="login()">
                登录
              </button>
            </div>
            <!-- /.col-->
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: ''
    }
  },
  created(){

  },
  mounted(){

  },
  methods:{
    login:function(){
      this.$router.push({
        name: 'index',
      })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login-box{
    width: 360px;
    margin: 7% auto;
  }
  .login-logo {
    font-size: 35px;
    text-align: center;
    margin-bottom:25px;
    font-weight:600;
    color:#444;
  }
  .login-box-body {
    background: #fff;
    padding: 20px;
    border-top: 0;
    color: #666;
  }
  .login-box-msg{
    margin: 0;
    text-align: center;
    padding: 0 20px 20px;
  }
  .form-group{
    margin-bottom:10px;
    height: 50px;
  }
  .has-feedback {
    position: relative;
  }
  .form-control {
    display: block;
    width: 100%;
    height: 40px;
    padding: 3px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .form-control:focus {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
  }
  .form-control::-moz-placeholder {
    color: #999;
    opacity: 1;
  }
  .form-control:-ms-input-placeholder {
    color: #999;
  }
  .form-control::-webkit-input-placeholder {
    color: #999;
  }
  .form-control::-ms-expand {
    background-color: transparent;
    border: 0;
  }
  input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #aab2bd;
    font-size: 12px;
  }
  .row {
    margin-right: -15px;
    margin-left: -15px;
  }
  .col-xs-12 {
    width: 100%;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .btn {
    display: inline-block;
    padding: 8px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  .btn.btn-flat {
    border-radius: 0;
    box-shadow: none;
    border-width: 1px;
  }
  .btn-primary {
    color:#fff;
    background-color: #3c8dbc;
    border-color: #367fa9;
  }
  .btn-block {
    display: block;
    width: 100%;
  }
  .form-control-feedback {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    display: block;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    pointer-events: none;
  }
  .glyphicon {
    /*position: relative;*/
    /*top: 1px;*/
    /*display: inline-block;*/
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: normal;
    /*line-height: 1;*/

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .glyphicon-user:before {
    content: "\e008";
  }
  .glyphicon-lock:before {
    content: "\e033";
  }
</style>
