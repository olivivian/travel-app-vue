<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <city-alphabat></city-alphabat>
    </div>
</template>

<script>
    import CityHeader from './components/Header'
    import CitySearch from './components/Search'
    import CityList from './components/List'
    import CityAlphabat from './components/Alphabat'
    export default {
        name: "City",
        components:{
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabat,

        }
    }
</script>

<style scoped>

</style>
