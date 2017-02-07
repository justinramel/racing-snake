<template>
  <section>
    <div class="row">
      <div class="col-md-offset-2 col-lg-3">
        <form>
          <div class="form-group">
            <label for="height"><h3>Select your height</h3></label>
            <select class="form-control" v-model="inches" name="height">
              <option value="48">4 Foot</option>
              <option value="49">4 Foot, 1 Inch</option>
              <option value="50">4 Foot, 2 Inches</option>
              <option value="51">4 Foot, 3 Inches</option>
              <option value="52">4 Foot, 4 Inches</option>
              <option value="53">4 Foot, 5 Inches</option>
              <option value="54">4 Foot, 6 Inches</option>
              <option value="55">4 Foot, 7 Inches</option>
              <option value="56">4 Foot, 8 Inches</option>
              <option value="57">4 Foot, 9 Inches</option>
              <option value="58">4 Foot, 10 Inches</option>
              <option value="59">4 Foot, 11 Inches</option>
              <option value="60">5 Foot</option>
              <option value="61">5 Foot, 1 Inch</option>
              <option value="62">5 Foot, 2 Inches</option>
              <option value="63">5 Foot, 3 Inches</option>
              <option value="64">5 Foot, 4 Inches</option>
              <option value="65">5 Foot, 5 Inches</option>
              <option value="66">5 Foot, 6 Inches</option>
              <option value="67">5 Foot, 7 Inches</option>
              <option value="68">5 Foot, 8 Inches</option>
              <option value="69">5 Foot, 9 Inches</option>
              <option value="70">5 Foot, 10 Inches</option>
              <option value="71">5 Foot, 11 Inches</option>
              <option value="72">6 Foot</option>
              <option value="73">6 Foot, 1 Inch</option>
              <option value="74">6 Foot, 2 Inches</option>
              <option value="75">6 Foot, 3 Inches</option>
              <option value="76">6 Foot, 4 Inches</option>
              <option value="77">6 Foot, 5 Inches</option>
              <option value="78">6 Foot, 6 Inches</option>
              <option value="79">6 Foot, 7 Inches</option>
              <option value="80">6 Foot, 8 Inches</option>
              <option value="81">6 Foot, 9 Inches</option>
              <option value="82">6 Foot, 10 Inches</option>
              <option value="83">6 Foot, 11 Inches</option>
              <option value="84">7 Foot</option>
            </select>
          </div>
        </form>
      </div>
      <Weight :rider=rider></Weight>
    </div>

    <div class="row">
      <div class="col-lg-10">
        <h2>What's this calculation based on?</h2>
        <blockquote>
          <p>Cycling coach Joe Friel, creator of the Training Bible series of books, has calculated that top male riders generally carry 2.1 to 2.4 pounds per inch.</p>
          <footer>Source - <a href="http://www.bicycling.com/food/reach-your-ideal-cycling-weight" target="_blank">Reach Your Ideal Cycling Weight bicycling.com</a>, I highly recommend you read the full <a href="http://www.bicycling.com/food/reach-your-ideal-cycling-weight" target="_blank">article</a>.</footer>
        </blockquote>
      </div>
    </div>
    <p><strong>Disclaimer: </strong>The information here is provided for information purposes only. Any reliance you place on this information is strictly at your own risk.</p>
  </section>
</template>

<script>
import calculator from '../calculator'
import IOdometer from 'vue-odometer'
import Weight from './Weight'

export default {
  components: {
    IOdometer,
    Weight
  },
  data () {
    return {
      inches: 70,
      defaultFormat: '(,ddd).dd'
    }
  },
  computed: {
    rider: function () {
      const c = calculator({inches: this.inches})
      return c
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