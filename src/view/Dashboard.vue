<template>
  <div>
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <div class="text-center" v-if="!showDashboard">
          <form class="form-signin">
            <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
            <h1 class="h3 mb-3 font-weight-normal">Admin Toko Roti</h1>
            <label for="inputEmail" class="sr-only">Userna,e</label>
            <input type="text" id="inputEmail" class="form-control" v-model="formLogin.username" placeholder="Username" required autofocus>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" v-model="formLogin.password" placeholder="Password" required>
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"> Remember me
              </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" @click.prevent="login()" type="submit">Sign in</button>
          </form>
          <router-link to="/" class="mt-3 btn btn-default">Back to Store</router-link>
          <div v-if="error" class="alert alert-danger" role="alert">{{errorMessage}}</div>
        </div>
      </div>
      <div class="col"></div>
    </div>
    <template v-if="showDashboard">
      <div class="row">
        <div class="float-right">
          <span class="font-weight-bold">{{dataLogin.nama}}</span>
          <a href="" class="btn btn-default" @click.prevent="logout()">Logout</a>
        </div>
      </div>
      <div class="row">
        <div class="col d-flex">
          <div class="summary">
            <span class="text-center">
              {{summaryOrder.call.length}}
            </span>
            <h3>Call</h3>
          </div>
          <div class="summary">
            <span class="text-center">
              {{summaryOrder.whatsapp.length}}
            </span>
            <h3>Whatsapp</h3>
          </div>
          <div class="summary">
            <span class="text-center">
              {{summaryOrder.email.length}}
            </span>
            <h3>Email</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">Nama</th>
                <th scope="col">Email</th>
                <th scope="col">No Hp</th>
                <th scope="col">Jumlah Roti</th>
                <th scope="col">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(order, index) in orders">
                <tr :key="index">
                  <td>{{order.namaDepan}}{{order.namaBelakang}}</td>
                  <td>{{order.email}}</td>
                  <td>{{order.areaKode == '62'?'08':order.areaKode}}{{order.telepon}}</td>
                  <td>{{order.jumlahOrder}}</td>
                  <td>{{order.keterangan}}</td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </template>
    
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Dashboard',
  data() {
    return {
      formLogin: {
        username: '',
        password: ''
      },
      showDashboard: false,
      error: false,
      errorMessage: '',
      summaryOrder: {
        call: null,
        whatsapp: null,
        email: null
      },
      orders: []
    }
  },
  computed: {
    ...mapGetters('order', ['dataLogin','getOrders']),
  },
  methods: {
    login(){
      if (this.formLogin.username == this.dataLogin.username && this.formLogin.password == this.dataLogin.password) {
        this.showDashboard = true
        this.orders = this.getOrders
        this.summaryOrder.call = this.orders.filter(item => item.typeOrder == 'Call');
        this.summaryOrder.whatsapp = this.orders.filter(item => item.typeOrder == 'Whatsapp');
        this.summaryOrder.email = this.orders.filter(item => item.typeOrder == 'Email');
      } else {
        this.error = true
        this.errorMessage = 'Username atau Password Salah'
      }
      console.log(this.formOrder);
    },
    logout(){
      this.formLogin = {
        username: '',
        password: ''
      }
      this.showDashboard = !this.showDashboard
    },
    resetForm(){
      this.formOrder = {
        typeOrder: '',
        namaDepan: '',
        namaBelakang: '',
        email: '',
        areaKode: '',
        telepon: '',
        jumlahOrder: 0,
        keterangan: ''
      }
    }
  }

}
</script>

<style>
.summary{
  margin: 20px auto;
  padding: 20px 10px;
  border: 1px solid black;
  width: 100%;
  background-color: antiquewhite;
  font-weight: bold;
  font-size: 24px;
}
</style>