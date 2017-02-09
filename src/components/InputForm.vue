<template>
  <div>
    <div class="row">
      <div class="col-md-offset-2 col-lg-offset-3 col-xs-12 col-sm-12 col-md-8 col-lg-6">
        <div class="col-xs-4 text-center">
          <h4>Height</h4>
          <div class="row">
            <div class="col-xs-6">
              <h5>Feet</h5>
              <radio v-model="footValue" checked-value="48">4</radio>
              <radio v-model="footValue" checked-value="60">5</radio>
              <radio v-model="footValue" checked-value="72">6</radio>
            </div>
            <div class="col-xs-6">
              <h5>Inches</h5>
              <radio v-model="inchValue" checked-value="0">0</radio>
              <radio v-model="inchValue" checked-value="1">1</radio>
              <radio v-model="inchValue" checked-value="2">2</radio>
              <radio v-model="inchValue" checked-value="3">3</radio>
              <radio v-model="inchValue" checked-value="4">4</radio>
              <radio v-model="inchValue" checked-value="5">5</radio>
              <radio v-model="inchValue" checked-value="6">6</radio>
              <radio v-model="inchValue" checked-value="7">7</radio>
              <radio v-model="inchValue" checked-value="8">8</radio>
              <radio v-model="inchValue" checked-value="9">9</radio>
              <radio v-model="inchValue" checked-value="10">10</radio>
              <radio v-model="inchValue" checked-value="11">11</radio>
            </div>
          </div>
        </div>
        <div class="col-xs-8 col-sm-8 col-md-6 col-lg-6">
          <div class="row text-center">
            <h4>Sex</h4>
            <div class="col-xs-offset-2 col-xs-4">
              <radio v-model="male" checked-value="true">Male</radio>
            </div>
            <div class="col-xs-4">
              <radio v-model="male" checked-value="false">Female</radio>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <slot></slot>
            </div>
          </div>
          <div class="row text-center">
            <button v-on:click="calculate" class="btn btn-default">Calculate</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    radio
  } from 'vue-strap'

  export default {
    props: ['rider'],
    components: {
      radio
    },
    data () {
      return {
        footValue: '60',
        inchValue: '10',
        male: 'true'
      }
    },
    methods: {
      calculate: function () {
        const inches = parseInt(this.footValue) + parseInt(this.inchValue)
        const male = (this.male === 'true')
        this.$emit('calculate', {inches: 0, male})
        setTimeout(() => this.$emit('calculate', {inches, male}), 0)
      }
    }
  }

</script>
