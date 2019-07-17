<template>
<div class="outer">
    <h1>Ledige sykler</h1>
    <div class="stations">
        <Station
            v-for="station in show_stations"
            v-bind:key="station.station_id"
            v-bind:name="station.name"
            v-bind:num_available_bikes="getAvailableBikes(station.station_id)"
        ></Station>
        <!-- <ring-loader :loading="loading" :color="color" :size="size"></ring-loader> -->
    </div>
    


  </div>
</template>

<script>
// import RingLoader from 'vue-spinner/src/RingLoader.vue'
import Station from "../components/Station";

export default {
  name: 'Sykkel',
  components: {
    Station,
    // RingLoader
  },
  data: function()  {
      return {
          show_stations: [],
          id_stations: [],
          availability_stations: [],
          max_lat: 59.925737,
          min_lat: 59.922624,
          max_lon: 10.748228,
          min_lon: 10.736927,
          loading: true,
          color: '#41B883',
      }
    
  },
  beforeRouteEnter (to, from, next) {
  next(vm => {
    vm.loading = true;
    vm.getData();
    vm.loading = false;
    next();
  })
    },
    methods: {
        getData() {
            var xhttp = new XMLHttpRequest();
            var proxy_url = "https://cors-anywhere.herokuapp.com/";
            var id_station_url = "https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json";
            var url = proxy_url + id_station_url;
            xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                // Typical action to be performed when the document is ready:
                var json = JSON.parse(xhttp.response);
                var i;
                for (i = 0; i < json.data.stations.length; i++){
                    this.id_stations.push(json.data.stations[i]);
                }
                this.getAvailabilityData();
                }
            };
            
            xhttp.open("GET", url, true);
            xhttp.setRequestHeader("Client-Identifier", "simenvg.com")
            xhttp.send();
        },
        getAvailabilityData() {
            var xhttp = new XMLHttpRequest();
            var proxy_url = "https://cors-anywhere.herokuapp.com/";
            var availability_station_url = "https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json";
            var url = proxy_url + availability_station_url;
            xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                // Typical action to be performed when the document is ready:
                var json = JSON.parse(xhttp.response);
                var i;
                for (i = 0; i < json.data.stations.length; i++){
                    this.availability_stations.push(json.data.stations[i]);
                }
                this.getShowStations();
                }
            };
            
            xhttp.open("GET", url, true);
            xhttp.setRequestHeader("Client-Identifier", "simenvg.com")
            xhttp.send();
        },
        getShowStations(){
            var i;
            for (i = 0; i < this.id_stations.length; i++){
                var station_lat = this.id_stations[i].lat;
                var station_lon = this.id_stations[i].lon;
                if (station_lat >= this.min_lat && station_lat <= this.max_lat &&
                    station_lon >= this.min_lon && station_lon <= this.max_lon){
                        this.show_stations.push(this.id_stations[i]);
                    }
            }
        },
        getAvailableBikes(id){
            var i;
            for (i = 0; i < this.availability_stations.length; i++){
                if (this.availability_stations[i].station_id === id){
                    var hei = this.availability_stations[i].num_bikes_available;
                    return hei;
                }
            }
        }

    

    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


h1{
    color: white;
    margin: 10px;
    margin-top: 30px;
}

.outer{
    /* width: 100%; */
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    /* align-items: center; */
}

.stations{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
}




</style>
