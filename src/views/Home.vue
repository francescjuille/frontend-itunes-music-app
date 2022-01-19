<template>
   <div>
      <br>
      <h3 class="home-banner centred-text" >Itunes Album 1.0</h3>
      <div class="home">
          <div>

            <br>
            <h3>Search the albums of your favourite Artist</h3>
            <br>
            <p>Example names of artists availables in Itunes: jack johnson</p>
            <br>

            <div class="flex home-search">
              <input class="home-search-input"  placeholder="Artist Name" v-model="artistName" autofocus  type="text" >
              <button v-on:click="searchArtistAlbums"  class="btn btn-primary home-search-btn" >Search albums</button>
            </div>

            <br><br>
            <h4>Albums results:</h4>

            <div class="card home-search-result">
                <div v-if="artistsAlbums==null || artistsAlbums.length == 0">
                    <p class="centred-text" >No Albums available</p>
                </div>
                <div v-else>
                    <div class="flex">
                        <input  class="home-artist-name-input" placeholder="Filter Results" v-model="filterResults" autofocus  type="text" >
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
  import constants from "../common/constants"

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
        ApiService.httpPost(constants.GET_ITUNE_ALBUMS,{artistName:this.artistName}).then(response => {
            console.log("artistsAlbums:");
            console.log(response.data.data.albums);
            this.artistsAlbums = response.data.data.albums;
            this.artistsAlbumsToDisplay = this.artistsAlbums;
            this.filterResults="";
        })
      },
      filterAlbums(value) {
        this.artistsAlbumsToDisplay = this.artistsAlbums.filter(album => 
            album.collectionName.trim().toLowerCase().includes(value.trim().toLowerCase()));

      }
    },

    }
  
</script>
<style scoped>
.home {
  display:flex;
  justify-content:center;
}
.home-banner {
    background-color:rgb(238, 186, 108);
    padding:20px;
    text-align:center;
}
.home-search-input {
  width:200px;
}
.home-search-btn{
  margin-left:20px;
}
.home-search-result {
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
.centred-text {
  text-align:center
}
</style>