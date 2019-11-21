<template>
  <div class="row text-center">
    <div v-for="(c, i) in countdown" :key="c[0]" :class="'mb-2 col-md-' + (i == 0 ? '12' : '6') + ' display-' + (i == 0 ? 3 : 4)" :style="'font-size:' + (i == 0 ? '4' : '2.5') + 'rem'">
      <div class="countdown">
        <span class="days">{{ padZeros(c[1].days) }}</span>:<span class="hours">{{ padZeros(c[1].hours) }}</span>:<span class="minutes">{{ padZeros(c[1].minutes) }}</span>:<span class="seconds">{{ padZeros(c[1].seconds) }}</span>
      </div>
      <div>
        <small>{{ c[0] }}</small>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import moment from 'moment';

export default Vue.extend({
  head() {
    return {
      title: "Countdown - Dominic Carrington's Personal Website"
    };
  },
  data: () => {
    return {
      times: ([
        ['2019 UK General Election', moment(new Date(2019, 12, 12, 9, 0, 0))],
        ['2020 US Presidental Election', moment(new Date(2020, 11, 3))],
        ['New Year', moment(new Date(new Date().getFullYear() + 1, 1, 1, 0, 0, 0))]
      ] as [string, moment.Moment][]).filter((a) => {
        return a[1].isAfter(moment.now());
      }).sort((a, b) => {
        return a[1].unix() - b[1].unix();
      }),
      now: moment.now()
    };
  },
  computed: {
    countdown() {
      const ret = [] as [string, {days: number, hours: number, minutes: number, seconds: number}][];
      for (const time of this.times) {
        ret.push([time[0], {
          days: time[1].diff(this.now, 'days'),
          hours: time[1].diff(this.now, 'hours') - (time[1].diff(this.now, 'days') * 24),
          minutes: time[1].diff(this.now, 'minutes') - (time[1].diff(this.now, 'hours') * 60),
          seconds: time[1].diff(this.now, 'seconds') - (time[1].diff(this.now, 'minutes') * 60)
        }]);
      }

      return ret;
    }
  },
  mounted() {
    this.update();
    setInterval(this.update, 1000);
  },
  methods: {
    update() {
      this.now = moment.now();
    },
    padZeros(i: number): string {
      if (i < 10) {
        return '0' + i;
      } else {
        return '' + i;
      }
    }
  }
});
</script>

<style scoped>
  .countdown {
    font-family: "Lucida Console", Monaco, monospace;
  }
</style>
