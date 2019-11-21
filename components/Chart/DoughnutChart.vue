<script lang="ts">
import { Component, Prop, Watch } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { Doughnut } from 'vue-chartjs';
import { ChartData, ChartOptions } from 'chart.js';

@Component({})
export default class BarChart extends mixins(Doughnut) {
  @Prop({ type: Object, required: true }) readonly data!: ChartData;
  @Prop({ type: Object, required: true }) readonly options!: ChartOptions;

  @Watch('data')
  @Watch('options')
  changeChart() {
    this.$data._chart.data = this.data;
    this.$data._chart.options = this.options;
    this.$data._chart.update();
  }

  mounted() {
    this.renderChart(this.data, this.options);
  }
}
</script>
