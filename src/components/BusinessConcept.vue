<template>
  <div style="height: 100%; width: 100%">
    <!-- 中文繁體 -->
    <b-container fluid v-if="changeLang === 'tw'">
      <b-row align-h="center" class="mb-5">
        <b-col cols="12" class="business-concept-title"
          ><span class="mb-2">經營理念</span></b-col
        >
      </b-row>
      <b-row align-h="center">
        <b-col sm="4">
          <img class="content-icon" src="@/assets/business-concept-icon.png" />
        </b-col>
        <b-col sm="6" class="business-concept-text content-text">
          <h5>客戶與服務</h5>
          <br />
          <p>里格科技已不段追求極致的精神來服務我們的客戶。</p>
          <p>每一位員工都以無比的熱誠來改善並提升客戶的滿意度。</p>
          <br />
          <h5>傾聽與溝通</h5>
          <br />
          <p>里格科技注重彼此間的溝通。</p>
          <p>不論主管與部屬，我們都以誠實開放的態度來傾聽。</p>
          <p>不推矮責任，並虛心地接納各方的意見。</p>
        </b-col>
      </b-row>
    </b-container>
    <!-- 中文簡體 -->
    <b-container fluid v-else-if="changeLang === 'cn'">
      <b-row align-h="center" class="mb-5">
        <b-col cols="12" class="business-concept-title"
          ><span class="mb-2">经营理念</span></b-col
        >
      </b-row>
      <b-row align-h="center">
        <b-col sm="4">
          <img class="content-icon" src="@/assets/business-concept-icon.png" />
        </b-col>
        <b-col sm="6" class="business-concept-text content-text">
          <h5>客户与服务</h5>
          <br />
          <p>里格科技以不断追求极致的精神来服务我们的客户。</p>
          <p>每一位员工都以无比的热诚来改善并提升客户的满意度。</p>
          <br />
          <h5>倾听与沟通</h5>
          <br />
          <p>里格科技注重彼此间的沟通。</p>
          <p>不论主管与部属，我们都以诚实开放的态度来倾听。</p>
          <p>不推诿责任，并虚心地接纳各方的意见。</p>
        </b-col>
      </b-row>
    </b-container>
    <!-- 英文 -->
    <b-container fluid v-else-if="changeLang === 'en'">
      <b-row align-h="center" class="mb-5">
        <b-col cols="12" class="business-concept-title"
          ><span class="mb-2">Company Philosophy</span></b-col
        >
      </b-row>
      <b-row align-h="center">
        <b-col sm="4">
          <img class="content-icon" src="@/assets/business-concept-icon.png" />
        </b-col>
        <b-col sm="6" class="business-concept-text content-text">
          <h5>Customer and Service</h5>
          <br />
          <p>
            Rig Technology serves our customers with the spirit of continuous
            pursuit of perfection.
          </p>
          <p>
            Every employee works with unparalleled enthusiasm to improve and
            enhance customer satisfaction.
          </p>
          <br />
          <h5>listen and communicate</h5>
          <br />
          <p>
            Rig Technology pays attention to the communication between each
            other.
          </p>
          <p>
            We listen with honesty and openness to both supervisors and
            subordinates.
          </p>
          <p>
            Do not shirk responsibility, and humbly accept the opinions of all
            parties.
          </p>
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
.business-concept-title {
  text-align: center;
  height: 45px;
  padding: 0px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
.business-concept-title span {
  border-bottom: 4px solid #3f81f5;
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
.business-concept-text p {
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
