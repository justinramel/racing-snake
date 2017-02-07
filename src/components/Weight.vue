<template>
  <div class="col-lg-4">
    <tabs>
      <tab header="Pounds">
        <div class="panel panel-default">
          <div class="panel-heading">Your ideal weight is between</div>
          <div class="panel-body">
            <h4 class="text-center">
              <i-odometer :value=rider.minPounds :format=defaultFormat></i-odometer> lbs -
              <i-odometer :value=rider.maxPounds :format=defaultFormat></i-odometer> lbs
            </h4>
          </div>
        </div>
      </tab>
      <tab header="Kg">
        <div class="panel panel-default">
          <div class="panel-heading">Your ideal weight is between</div>
          <div class="panel-body">
            <h4 class="text-center">
              <i-odometer :value=rider.minKg :format=defaultFormat></i-odometer> Kg -
              <i-odometer :value=rider.maxKg :format=defaultFormat></i-odometer> Kg
            </h4>
          </div>
        </div>
      </tab>
      <tab header="Stone">
        <div class="panel panel-default">
          <div class="panel-heading">Your ideal weight is between</div>
          <div class="panel-body">
            <h4 class="text-center">
              {{ rider.minStone }} - {{ rider.maxStone }}
            </h4>
          </div>
        </div>
      </tab>
    </tabs>
  </div>
</template>
<script>
  import IOdometer from 'vue-odometer'
  import {
    tabs,
    tab
  } from 'vue-strap'

  export default {
    props: ['rider'],
    components: {
      IOdometer,
      tabs,
      tab
    },
    data () {
      return {
        defaultFormat: '(,ddd).dd',
        activeTab: 'one'
      }
    }
  }

</script>
<style scoped>
  .odometer {
    font-size: 2em;
    margin: 0;
  }

</style>
