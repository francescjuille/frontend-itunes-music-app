<template>
   <div>
        <br>
        <h3 class="home-banner" style="text-align:center">Itunes Album 1.0</h3>
        <div style="display:flex;justify-content:center">
           <div>
               <br>
               <h3>Search the albums of your favourite Artist</h3>
               <br>
               <p>Example names of artists availables in Itunes: jack johnson</p>
               <br>
               <div class="flex">
                <input  style="width:200px" placeholder="Artist Name" v-model="artistName" autofocus  type="text" >
                <button v-on:click="searchArtistAlbums" style="margin-left:20px"  class="btn btn-primary" >Search albums</button>
                </div>
                <br><br>
                <h4>Albums results:</h4>
                <div class="card" style="padding:20px">
                    <div v-if="artistsAlbums==null || artistsAlbums.length == 0">
                        <p style="font-align:center">No Albums available</p>
                    </div>
                    <div v-else>
                        <div class="flex">
                            <input  style="width:200px" placeholder="Filter Results" v-model="filterResults" autofocus  type="text" >
                        </div>
                    </div>
                    <ListItem :artistsAlbumsToDisplay="artistsAlbumsToDisplay"/>
                </div>
                <br><br><br>
           </div>
        </div>    
        
    </div>
</template>

<script>
  import ApiService from '../common/services/api.service';
  import ListItem from '../components/ListItem.vue';
  export default {
    components: {
        ListItem
    },
    data() {
        
      return {
        artistName: "",
        artistsAlbums: null,
        artistsAlbumsToDisplay:[],
        filterResults:""
        
      }
    },
    watch: {
        filterResults(value){
            this.filterResults = value;
            this.filterAlbums(value);
        },
    },
    methods: {
      async searchArtistAlbums() {
        ApiService.httpPost("http://localhost:4000/api/artist-data/get-albums-by-artist-name",{artistName:this.artistName}).then(response => {
            console.log("artistsAlbums:");
            console.log(response.data.data.albums);
            this.artistsAlbums = response.data.data.albums;
            this.artistsAlbumsToDisplay = this.artistsAlbums
            this.filterResults="";
        })
      },
      filterAlbums(value) { //collectionName
        this.artistsAlbumsToDisplay = this.artistsAlbums.filter(album => album.collectionName.trim().toLowerCase().includes(value.trim().toLowerCase()));

      }
      },

    }
  
</script>
<style scoped>

.home-banner {
    background-color:rgb(238, 186, 108);
    padding:20px;
}

.form-control {
  margin: 10px 0;
}

.flex-center {
    display:flex;
    justify-content:center;
}
.flex {
    display:flex;
}
</style>