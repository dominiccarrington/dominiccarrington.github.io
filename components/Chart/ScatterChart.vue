<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { Bar, Doughnut, HorizontalBar, Line, Pie, Scatter } from 'vue-chartjs';
import { ChartData, ChartOptions } from 'chart.js';

@Component({})
export default class BarChart extends mixins(Scatter) {
  @Prop({ type: Object, required: true }) readonly data!: ChartData;
  @Prop({ type: Object, required: true }) readonly options!: ChartOptions;

  mounted() {
    this.renderChart(this.data, this.options);
  }
}
</script>
