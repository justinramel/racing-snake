<template>
  <section>
    <div class="row">
      <div class="col-xs-12">
        <InputForm v-on:calculate="calculate">
          <Weight :rider=rider />
        </InputForm>
      </div>
    </div>
    <hr />
    <Blurb />
  </section>
</template>

<script>
import calculator from '../calculator'
import IOdometer from 'vue-odometer'
import Weight from './Weight'
import InputForm from './InputForm'
import Blurb from './Blurb'

export default {
  components: {
    IOdometer,
    Weight,
    InputForm,
    Blurb
  },
  data () {
    return {
      inches: 0,
      male: true
    }
  },
  computed: {
    rider: function () {
      return calculator({inches: this.inches, male: this.male})
    }
  },
  methods: {
    calculate: function (data) {
      this.inches = data.inches
      this.male = data.male
    }
  },
  filters: {
    number: function (value) {
      if (!value) return ''
      return value.toFixed(2)
    }
  },
  mounted () {

  }
}

</script>

<style scoped>
  .odometer {
    font-size: 2em;
    margin: 0;
  }
</style>