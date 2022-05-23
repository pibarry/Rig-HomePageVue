<template>
  <div style="width: 100%; height: 100%">
    <div class="banner" id="Banner">
      <Banner></Banner>
    </div>
    <div class="service" id="Service">
      <Service></Service>
    </div>
    <div class="business-concept" id="BusinessConcept">
      <BusinessConcept></BusinessConcept>
    </div>
    <div class="recruit" id="Recruit">
      <Recruit></Recruit>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import Service from '@/components/Service.vue'
import BusinessConcept from '@/components/BusinessConcept.vue'
import Recruit from '@/components/Recruit.vue'

export default {
  components: {
    Banner,
    Service,
    BusinessConcept,
    Recruit
  }
}
</script>

<style></style>
