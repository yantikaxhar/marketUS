<!-- <template>
  <div>
    <h1>(404) Page Not Found</h1>
  </div>
</template>

<script>
export default {
  // Your component logic goes here
}
</script>

<style scoped>
/* Your component styles go here */
</style> -->


<template>
  <div class="not-found">
    <h1>404 - Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
</template>

<!-- <script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
/* CSS cho component NotFound */
</style> -->

<script>

import { useHead } from '@unhead/vue';
import { computed, reactive } from 'vue';

export default {
    setup() {
      
        
        head.meta.push(
            { name: 'description', content: 'Shopee' },
            
        );

        
        head.title = 'Shopee';

        return {};
    }
}
</script>