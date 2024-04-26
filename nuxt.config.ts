export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/calendar-3.css'],
  components: {
    HotelDatePicker: 'vue-hotel-datepicker',
  },
});

declare module 'nuxt/config' {
  interface NuxtConfig {
    components: {
      [componentName: string]: string;
    };
  }
}