import Vue from 'vue';
import { Bar, Doughnut, HorizontalBar, Line, Pie, Scatter } from 'vue-chartjs';

const CHART_MAPPING = {
  "bar-chart": Bar,
  "doughnut-chart": Doughnut,
  "horizontalbar-chart": HorizontalBar,
  "line-chart": Line,
  "pie-chart": Pie,
  "scatter-chart": Scatter
};

for (let id in CHART_MAPPING) {
  Vue.component(id, {
    extend: CHART_MAPPING[id],
    props: ['data', 'options'],
    mounted () {
      this.renderChart(this.data, this.options);
    }
  });
}
