<template>
    <div class="card">
        <p class="header">{{name}}</p>
        <div class="separator"></div>
        <p class="card_num">{{num_available_bikes}}</p>
    </div>
</template>

<script>
export default {
  name: 'Station',
  props: {
      num_available_bikes: Number,
      num_available_docks: String,
      name: String,
      is_active: String,
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');

.card{
    height: 100px important!;
    width: 150px important!;
    background-color: #41B883;
    font: 10px black 'Nunito';
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px;
    flex: 1;
    min-width: 150px;
    max-width: 150px;
}

.separator{
    height: 1px;
    background-color: black;
    width: 80%;
    align-self: center;
}

.card__num {
        flex: 5;
        font: 10px solid black bolder 'Nunito';
        text-shadow: longshadow(darken(#5271C2, 15%),#5271C2,100, 0.8);
        justify-self: center;
        align-self: center;
    }


</style>
