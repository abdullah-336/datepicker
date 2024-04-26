<script setup lang="js">
import { ref } from "vue";
import { Calendar } from "vue-calendar-3";
import {HotelDatePicker} from 'vue-hotel-datepicker'
import 'vue-hotel-datepicker/dist/vueHotelDatepicker.css';

const checkIn = ref(null);
const checkOut = ref(null);
const placeholder = { checkIn: "check-in", checkOut: "check-out", }
const startDate = new Date('25-12-2024')

const bookedDates = [
  "2024-06-01",
  "2024-06-02",
  "2024-06-03",
  "2024-06-23",
  "2024-06-24",
  "2024-06-25",
];

function nextDate() {
  console.log('hello next date')
  // Implement your method logic here
}

function previousDate() {
  console.log('hello from the previous date')
  // Implement your method logic here
}

function onCheckInSelect() {
  console.log('emited checkIn select')
  // Implement your method logic here
}

function onCheckOutSelect() {
  console.log('emited checkOut select')
  // Implement your method logic here
}

function clearDates() {
  console.log('emited clear dates')
  // Implement your method logic here
}

const computedLocale = ref(null)


const en = ref([
  {clearDates: "Clear dates",},
  {close: "Close",},
  { days: {
      monday: "Mo",
      tuesday: "Tu",
      wednesday: "We",
      thursday: "Th",
      friday: "Fr",
      saturday: "Sa",
      sunday: "Su",
    },
  },
  {today: "Today",},
  {periodType: {
    weeklyBySaturday: "From Saturday to Saturday",
    weeklyBySunday: "From Sunday to Sunday",
    weeklyByMonday: "From Monday to Monday",
    nightly: "A minimum of %{minimumDuration} night is required",
  },},
  {halfDay: {
    checkIn: "Possible end of stay",
    checkOut: "Possible start of stay",
  },},
])

const periodDates = ref([
  // Nightly
  {
    startAt: "2024-08-01",
    endAt: "2024-08-31",
    minimumDuration: 4,
    periodType: "nightly",
  },
  // Weekly Saturday
  {
    startAt: "2024-09-01",
    endAt: "2024-09-30",
    minimumDuration: 2,
    periodType: "weekly_by_saturday",
  },
  // Weekly Sunday
  {
    startAt: "2024-11-01",
    endAt: "2024-11-29",
    minimumDuration: 1,
    periodType: "weekly_by_sunday",
  },
]);
</script>

<template>

  checkIn => {{ checkIn }}
  <hr/>
  checkOut => {{ checkOut }}
  <div>
    <Calendar
    v-model:checkIn="checkIn"
    v-model:checkOut="checkOut"
    :alwaysVisible="!true"
    :SingleCalendar=true
    :hasFooter="true"
    :placeholder="placeholder"
    :periodDates="periodDates"
    :locale="`en`"
    :BookedDates=bookedDates
    @render-next-date="nextDate()"
    @render-previous-date="previousDate()"
    @update:checkIn="onCheckInSelect()"
    @update:checkOut="onCheckOutSelect()"
    @clear-dates="clearDates()"
    Timezone="Europe/Paris"
    />
  </div>
   <HotelDatePicker/>
</template>

<style>

</style>