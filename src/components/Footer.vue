<template>
  <footer class="text-center text-lg-start">
    <!-- 中文繁體 -->
    <div class="footer-icon" v-if="changeLang === 'tw'">
      <p>聯絡我們</p>
      <p>Line:@549prxqj</p>
      <p>+886-2-2517-0008</p>
      <p>台北市中山區南京東路二段140號4樓</p>
    </div>
    <!-- 中文簡體  -->
    <div class="footer-icon" v-else-if="changeLang === 'cn'">
      <p>联络我们</p>
      <p>Line:@549prxqj</p>
      <p>+886-2-2517-0008</p>
      <p>台北市中山区南京东路二段140号4楼</p>
    </div>
    <!-- 英文 -->
    <div class="footer-icon" v-else-if="changeLang === 'en'">
      <p>Contact us</p>
      <p>Line:@549prxqj</p>
      <p>+886-2-2517-0008</p>
      <p>
        4F., No. 140, Sec. 2, Nanjing E. Rd., Zhongshan Dist., Taipei City
        104095 , Taiwan
      </p>
    </div>
    <div class="footer-content p-3">
      <font>Rig Technology ©2022 Copyright All Rights Reserved.</font>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      changeLang: 'tw'
    }
  },
  computed: {
    ...mapState(['lang'])
  },
  watch: {
    lang(value) {
      this.changeLang = value
    }
  }
}
</script>

<style>
.footer-icon {
  padding: 1vw;
  background: url('../assets/bottom_background.png');
}
.footer-icon p {
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 700;
  display: flex;
  color: #ffffff;
}
.footer-content {
  text-align: center;
  background-color: rgba(0, 0, 0);
  color: #ffffff;
}

.footer-content font {
  font-size: 12px;
}
</style>
