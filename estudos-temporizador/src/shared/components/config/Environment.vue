<script setup lang="ts">
import _ from 'lodash'
import { ref, onMounted } from 'vue'
import loadEnv from '@/shared/services/config/environment.config'

const shouldShow = ref<boolean>(false)
const env = ref<Environment>('')

onMounted(() => {
  env.value = loadEnv()
  shouldShow.value = !_.isEmpty(env.value)
})
</script>
