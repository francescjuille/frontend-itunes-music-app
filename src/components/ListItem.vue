<template>
  <div>
   <div v-for="album in artistsAlbumsToDisplay" :key="album.collectionId">
        <br>
        <div class="flex">
            <img :src="album.collectionImage">
            <div class="item-data">
                <h5>{{album.collectionName}}</h5>
                <p>{{album.artistName}}</p>
                <p><b>Price: {{album.collectionPrice}}€</b></p>
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    artistsAlbumsToDisplay: Array
  }
}
</script>

<style scoped>
.flex-center {
    display:flex;
    justify-content:center;
}
.flex {
    display:flex;
}
.item-data {
  margin-left:10px;
}
</style>
