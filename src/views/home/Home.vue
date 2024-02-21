<script lang="ts">
export default { name: 'home' };
</script>

<script setup lang="ts">
import { ref, toRefs, reactive }  from 'vue'
import { getBaseInfo } from '@/api/home'
import {routerResponse} from '@/interface/home'

let routerInfo = ref([] as routerResponse[])

const useBaseInfo = async () => {
  try {
    const res = await getBaseInfo();
    const {errno, data} = res;
    if (+errno === 0 && data) {
      routerInfo.value = data.routerInfo
    }
  } catch (error) {
  }
}

useBaseInfo()
console.log(routerInfo)
</script>

<template>
  <div>
    <custom-header title="首页" />
    <div class="home">
      <van-button type="primary" >老虎机</van-button>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>