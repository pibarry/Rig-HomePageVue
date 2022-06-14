<template>
  <div style="height: 100%; width: 100%">
    <!-- 中文繁體 -->
    <b-container fluid v-if="changeLang === 'tw'">
      <b-row align-h="center" class="mb-5">
        <b-col cols="12" class="service-title"
          ><span class="mb-2">服務項目</span></b-col
        >
      </b-row>
      <b-row align-h="center">
        <b-col sm="6" class="service-text content-text">
          <p>
            專精於網路平台架構、軟體技術的整合與開發，我們提供的服務項目如下：
          </p>
          <p>1. 遊戲管理平台的開發與建置</p>
          <p>2. 會員與客服管理平台的開發與建置 (CRM)</p>
          <p>3. 行銷服務管理平台的開發與建置 (SEO)</p>
          <p>4. 視覺與網頁設計</p>
        </b-col>
        <b-col sm="4">
          <img class="content-icon" src="@/assets/service-icon.png" />
        </b-col>
      </b-row>
    </b-container>
    <!-- 中文簡體 -->
    <b-container fluid v-else-if="changeLang === 'cn'">
      <b-row align-h="center" class="mb-5">
        <b-col cols="12" class="service-title"
          ><span class="mb-2">服务项目</span></b-col
        >
      </b-row>
      <b-row align-h="center">
        <b-col sm="6" class="service-text content-text">
          <p>
            专精于网路平台架构、软体技术的整合与开发，我们提供的服务项目如下：
          </p>
          <p>1. 游戏管理平台的开发与建置</p>
          <p>2. 会员与客户管理平台的开发与建置 (CRM)</p>
          <p>3. 行销服务管理平台的开发与建置 (SEO)</p>
          <p>4. 视觉与网页设计</p>
        </b-col>
        <b-col sm="4">
          <img class="content-icon" src="@/assets/service-icon.png" />
        </b-col>
      </b-row>
    </b-container>
    <!-- 英文 -->
    <b-container fluid v-else-if="changeLang === 'en'">
      <b-row align-h="center" class="mb-5">
        <b-col cols="12" class="service-title"
          ><span class="mb-2">Our Services</span></b-col
        >
      </b-row>
      <b-row align-h="center">
        <b-col sm="6" class="service-text content-text">
          <p>
            Specializing in the integration and development of network platform
            architecture and software technology, the services we provide are as
            follows:
          </p>
          <p>1. Development and establishment of game management platform.</p>
          <p>
            2. Development and establishment of member and customer management
            platform (CRM).
          </p>
          <p>
            3. Development and establishment of marketing service management
            platform (SEO).
          </p>
          <p>4. Visual and Web Design.</p>
        </b-col>
        <b-col sm="4">
          <img class="content-icon" src="@/assets/service-icon.png" />
        </b-col>
      </b-row>
    </b-container>
  </div>
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

<style scoped>
.service-title {
  text-align: center;
  height: 45px;
  padding: 0px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
.service-title span {
  border-bottom: 4px solid #efd769;
  padding-left: 0.68rem;
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  align-items: flex-end;
  text-align: center;
  letter-spacing: 0.5em;
  color: #2e353a;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.service-text p {
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.15em;
  color: #2e353a;
  flex: none;
  order: 0;
  flex-grow: 0;
}
</style>
