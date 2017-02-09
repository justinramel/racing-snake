<template>
  <div>
    <tabs>
      <tab header="lbs">
        <div class="panel panel-default">
          <div class="panel-heading text-center">Race weight</div>
          <div class="panel-body text-center">
            <h4>
              <i-odometer :value=rider.minPounds></i-odometer> lbs
            </h4>
            <h4>to</h4>
            <h4>
              <i-odometer :value=rider.maxPounds></i-odometer> lbs
            </h4>
          </div>
        </div>
      </tab>
      <tab header="Kg">
        <div class="panel panel-default">
          <div class="panel-heading text-center">Race weight</div>
          <div class="panel-body text-center">
            <h4>
              <i-odometer :value=rider.minKg></i-odometer> Kg
            </h4>
            <h4>to</h4>
            <h4>
              <i-odometer :value=rider.maxKg></i-odometer> Kg
            </h4>
          </div>
        </div>
      </tab>
      <tab header="Stone">
        <div class="panel panel-default">
          <div class="panel-heading text-center">Race weight</div>
          <div class="panel-body text-center">
            <h4>
              <i-odometer :value=rider.minStone.stone></i-odometer> St
              <i-odometer :value=rider.minStone.pounds></i-odometer> lbs
            </h4>
            <h4>to</h4>
            <h4>
              <i-odometer :value=rider.maxStone.stone></i-odometer> St
              <i-odometer :value=rider.maxStone.pounds></i-odometer> lbs
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
    }
  }

</script>
<style scoped>
  .odometer {
    font-size: 2em;
    margin: 0;
  }
</style>
