<template>
  <div class="back">
    <div>
      <gmap-map ref="mymap" :center="startLocation" :zoom="14" style="width: 100%; height: 300px">
        <gmap-info-window :options="infoOptions" :position="infoPosition" :opened="infoOpened"
          @closeclick="infoOpened=false">
          {{infoContent}}
        </gmap-info-window>
        <gmap-marker v-for="(item, key) in coordinates" :key="key" :position="getPosition(item)" :clickable="true"
          @click="toggleInfo(item, key)" />
      </gmap-map>
    </div>
    <div>
      <button type="button" class="btn btn-secondary" style="width:100px;margin-left:5px;margin-right:5px;margin-top:10px;margin-bottom:5px;" v-for="(machine, idx) in machines" :key="idx">{{machine.place}}</button>
    </div>
  </div>
</template>
<script>
import { db } from '../db'
const fstore = db.firestore()
export default {
  data(){
    return{
      startLocation: {
      lat: 25,
      lng: 121
      },
      coordinates: {
        0: {
            full_name: '242新北市新莊區中正路510號文開樓',
            lat: '25.037197',
            lng: '121.433522'
          },
          1: {
            full_name: '242新北市新莊區中正路510號伯達樓',
            lat: '25.036874',
            lng: '121.43209'
          },
          2: {
            full_name: '242新北市新莊區中正路510號樹德樓',
            lat: '25.03639',
            lng: '121.431377'
          },
          3: {
            full_name: '242新北市新莊區中正路510號野生樓',
            lat: '25.03343',
            lng: '121.434484'
          },
          4: {
            full_name: '242新北市新莊區中正路510號中美堂',
            lat: '25.037958',
            lng: '121.431936'
          },
          5: {
            full_name: '242新北市新莊區中正路510號國璽樓',
            lat: '25.038487',
            lng: '121.430974'
          },
          6: {
            full_name: '242新北市新莊區中正路510號文華樓',
            lat: '25.036445',
            lng: '121.43382'
          },
          7: {
            full_name: '242新北市新莊區中正路510號文園',
            lat: '25.037188',
            lng: '121.433282'
          },
          8: {
            full_name: '242新北市新莊區中正路510號仁園',
            lat: '25.036333',
            lng: '121.42972'
          },
          9: {
            full_name: '242新北市新莊區中正路510號利瑪竇',
            lat: '25.037286',
            lng: '121.431624'
          }
      },
      infoPosition: null,
      infoContent: null,
      infoOpened: false,
      infoCurrentKey: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      machines:[],
    }
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    getPosition: function(marker) {
      return {
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng)
      }
    },
    toggleInfo: function(marker, key) {
      this.infoPosition = this.getPosition(marker)
      this.infoContent = marker.full_name
      if (this.infoCurrentKey == key) {
        this.infoOpened = !this.infoOpened
      } else {
        this.infoOpened = true
        this.infoCurrentKey = key
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.startLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  },
  firestore() {
        let machines = fstore.collection('Machine');

        return{
            machines,
        }
        //  'z3LeOviIgxOV626HhKwNQlwEivI3'
         
  }
}
</script>
<style lang="css" scoped>
  .back {
    background-color: beige;
    height: 100%;
  }
</style>