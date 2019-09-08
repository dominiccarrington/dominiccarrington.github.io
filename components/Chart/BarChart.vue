<script>
import { Bar, Doughnut, HorizontalBar, Line, Pie, Scatter } from 'vue-chartjs';

export default {
  extends: Bar,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options);
  }
}
</script>
