<template>
  <div>
    <tabs nav-style="pills">
      <tab header="lbs">
        <div class="panel panel-default">
          <div class="panel-heading text-center">Race weight</div>
          <div class="panel-body text-center">
            <h4>
              <i-odometer :value=rider.minPounds :format=defaultFormat></i-odometer> lbs
            </h4>
            <h4>to</h4>
            <h4>
              <i-odometer :value=rider.maxPounds :format=defaultFormat></i-odometer> lbs
            </h4>
          </div>
        </div>
      </tab>
      <tab header="Kg">
        <div class="panel panel-default">
          <div class="panel-heading text-center">Race weight</div>
          <div class="panel-body text-center">
            <h4>
              <i-odometer :value=rider.minKg :format=defaultFormat></i-odometer> Kg
            </h4>
            <h4>to</h4>
            <h4>
              <i-odometer :value=rider.maxKg :format=defaultFormat></i-odometer> Kg
            </h4>
          </div>
        </div>
      </tab>
      <tab header="Stone">
        <div class="panel panel-default">
          <div class="panel-heading text-center">Race weight</div>
          <div class="panel-body text-center">
            <h4 class="odometer">
              {{ rider.minStone }}
            </h4>
            <h4>to</h4>
            <h4 class="odometer">
              {{ rider.maxStone }}
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
        defaultFormat: '(,ddd).dd'
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
