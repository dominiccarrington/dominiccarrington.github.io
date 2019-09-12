<template>
  <footer>
    <div class="footer">
      <div class="mt-4 p-4 bg-light">
        <div class="row">
          <div class="col">
            &copy; Dominic Carrington 2019
          </div>
          <div class="col text-right">
            <nuxt-link to="/privacy-policy">
              Privacy Policy
            </nuxt-link>
            -
            <a href="#" @click="updateCookieSettings">Cookie Settings</a>
          </div>
        </div>
      </div>
    </div>
    <cookie-law ref="cookie-consent" @accept="cookieAccept">
      <div slot-scope="props" class="row" style="width: 100%">
        <div class="col-12 col-md-6">
          This website uses cookies to ensure you get the best experience on our website.
        </div>
        <div class="col-12 col-md-4">
          <b-form-group>
            <b-form-checkbox-group v-model="cookies">
              <b-form-checkbox value="required" disabled>
                Required
              </b-form-checkbox>
              <b-form-checkbox value="analytics">
                Analytics
              </b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
        </div>
        <div class="col-12 col-md-2">
          <nuxt-link to="/privacy-policy" class="btn btn-secondary">
            More Info
          </nuxt-link>
          <button class="btn btn-primary" @click="props.accept">
            Accept
          </button>
        </div>
      </div>
    </cookie-law>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// @ts-ignore: Cannot import types
import CookieLaw from 'vue-cookie-law';

@Component({
  components: {
    CookieLaw
  }
})
export default class Footer extends Vue {
  public cookies = ['required', 'analytics'];

  cookieAccept() {
    window.localStorage.setItem('cookie:required', this.cookies.includes('required').toString());
    window.localStorage.setItem('cookie:analytics', this.cookies.includes('analytics').toString());
  }

  updateCookieSettings() {
    window.localStorage.removeItem('cookie:accepted');
    window.localStorage.removeItem('cookie:required');
    window.localStorage.removeItem('cookie:analytics');

    // @ts-ignore: Undefined function
    this.$refs['cookie-consent'].open();
  }
}
</script>

<style lang="scss" scoped>

</style>
