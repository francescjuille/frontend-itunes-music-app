<template>
  <div>
   <div v-for="album in artistsAlbumsToDisplay" :key="album.collectionId">
        <br>
        <div class="flex">
            <img :src="album.collectionImage">
            <div style="margin-left:10px">
                <h5>{{album.collectionName}}</h5>
                <h6>{{album.artistName}}</h6>
                <p>Price: {{album.collectionPrice}}€</p>
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
</style>
