<template>
  <div class="hello">
    <h1 class="text-left">{{ title }}</h1>
    <div class="row">
      <div class="col-6">
        <form>
          <div class="form-group text-left">
            <label for="asalPesanan">Sumber Pesanan</label>
            <select class="form-control" v-model="formOrder.typeOrder">
              <option selected value="">Asal Pesanan...</option>
              <option v-for="(item, index) in sourceOrder" :value="item" :key="index">{{item}}</option>
            </select>
          </div>
          <div class="text-left form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4" >Name</label>
              <input type="text" class="form-control" v-model="formOrder.namaDepan" placeholder="First Name">
            </div>
            <div class="form-group col-6 pt-2">
              <input type="text" class="form-control mt-4" v-model="formOrder.namaBelakang" placeholder="Last Name">
            </div>
          </div>
          <div class="form-group text-left">
            <label for="exampleFormControlInput1">Email</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" v-model="formOrder.email" placeholder="nama@gmail.com">
          </div>
          <div class="form-row text-left">
            <div class="form-group col-md-3">
              <label for="inputEmail4">Phone Number</label>
              <input type="text" class="form-control" v-model="formOrder.areaKode" placeholder="Area Code">
            </div>
            <div class="form-group col-md-9 pt-2">
              <input type="text" class="form-control mt-4" v-model="formOrder.telepon" placeholder="Phone Number">
            </div>
          </div>
          <div class="form-group text-left col-md-3 pl-0">
            <label for="exampleFormControlInput1">Jumlah Roti</label>
            <input type="number" class="form-control" v-model="formOrder.jumlahOrder" placeholder="nama@gmail.com">
          </div>
          <div class="col-2"></div>
          <div class="form-group text-left">
            <label for="exampleFormControlTextarea1">Keterangan</label>
            <textarea class="form-control" v-model="formOrder.keterangan" rows="3"></textarea>
          </div>
          <hr class="mb-4">
          <button class="btn btn-primary btn-lg btn-block" @click.prevent="submitOrder()" type="submit">Submit</button>
        </form>
        <div v-if="orderSuccess" class="mt-3 alert alert-success alert-dismissible fade show" role="alert">
          <strong>Yeayyy!</strong> Pesanan berhasil dibuat.
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
      <div class="col">
        <div class="float-right">
          <router-link class="btn btn-primary btn-lg" to="/dashboard">
            Dashboard Admin
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'Order',
  created(){},
  data() {
    return {
      title: 'Form Pesanan',
      sourceOrder: ['Whatsapp','Call','Email'],
      formOrder: {
        typeOrder: '',
        namaDepan: '',
        namaBelakang: '',
        email: '',
        areaKode: '',
        telepon: '',
        jumlahOrder: 0,
        keterangan: ''
      },
      orderSuccess: false
    }
  },
  methods: {
    ...mapActions('order',['insertCart']),
    submitOrder(){
      if (this.formOrder != null) {
        this.insertCart(this.formOrder)
        this.resetForm()
        this.orderSuccess = true
      }
      console.log(this.formOrder);
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
