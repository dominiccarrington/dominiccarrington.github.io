<script>
import { Bar, Doughnut, HorizontalBar, Line, Pie, Scatter } from 'vue-chartjs';

export default {
  extends: HorizontalBar,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options);
  }
}
</script>
