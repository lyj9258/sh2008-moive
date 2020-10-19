<template>
    <div>
        {{num}}
        {{city}}
        {{getCount}}
        <br />
        <button @click="handle4()">点我加13 </button>
        <button @click="handle5()">获取总数</button>
        
    </div>
</template>

<script>
import {mapMutations, mapState, mapActions,mapGetters} from 'vuex'
export default {
    data() {
        return {
            num:1
        }
    },
    mounted() {
        console.log(this.$store.state.count);
        console.log(this.$store.state.city);
    },
    comments:{
        ...mapState(['count,city']),
        ...mapGetters(['getCount'])
    },
    methods:{
        ...mapMutations(['add']),
        ...mapActions()['addAsync'],
        handle1:function(){
            this.$store.commit('add',13)
        },
        handle2:function(){
            this.add(13)
        },
        handle3:function(){
            this.$store.dispatch('addAsync',31)
        },
        handle4:function(){
            this.addAsync(31)
        },

        handle5:function(){
            console.log();
        }

    },
    
    
}
</script>