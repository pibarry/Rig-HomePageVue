<template>
  <div class="title" ref="title">
    <b-container fluid class="title-container me-3 ms-3">
      <b-row>
        <img
          src="@/assets/logo.png"
          id="logStyle"
          class="cursorPointer"
          alt="里格科技"
          @click="anchor('Top')"
        />

        <b-col md="7" align-self="center" class="pc-item">
          <b-nav>
            <b-nav-item
              class="title-item cursorPointer"
              @click="anchor('Service')"
            >
              <template v-if="lang === 'tw'">服務項目</template>
              <template v-else-if="lang === 'cn'">服务项目</template>
              <template v-else-if="lang === 'en'">Our Services</template>
            </b-nav-item>
            <b-nav-item
              class="title-item cursorPointer"
              @click="anchor('BusinessConcept')"
            >
              <template v-if="lang === 'tw'">經營理念</template>
              <template v-else-if="lang === 'cn'">经营理念</template>
              <template v-else-if="lang === 'en'">Company Philosophy</template>
            </b-nav-item>
            <b-nav-item
              class="title-item cursorPointer"
              @click="anchor('Recruit')"
            >
              <template v-if="lang === 'tw'">人才招募</template>
              <template v-else-if="lang === 'cn'">人才招聘</template>
              <template v-else-if="lang === 'en'">Recruit</template>
            </b-nav-item>
          </b-nav>
        </b-col>
      </b-row>
      <span class="title-item lang pc-item">
        <img src="@/assets/Language.png" class="lang-icon me-1" />
        <b-form-select
          class="form-select form-select-sm lang-select cursorPointer"
          v-model="lang"
          @change="setLang(lang)"
        >
          <b-form-select-option value="tw">中文（繁體）</b-form-select-option>
          <b-form-select-option value="cn">中文（簡體）</b-form-select-option>
          <b-form-select-option value="en">English</b-form-select-option>
        </b-form-select>
      </span>
      <b-dropdown
        class="title-item lang mobile-item"
        variant="link"
        toggle-tag="span"
      >
        <template slot="button-content">
          <img
            src="@/assets/item.png"
            class="me-1"
            style="width: 30px; height: 30px"
          />
        </template>
        <b-dropdown-item href="#" @click="anchor('Service')"
          >服務項目</b-dropdown-item
        >
        <b-dropdown-item href="#" @click="anchor('BusinessConcept')"
          >經營理念</b-dropdown-item
        >
        <b-dropdown-item href="#" @click="anchor('Recruit')"
          >人才招募</b-dropdown-item
        >
        <b-dropdown-item href="#">語言</b-dropdown-item>
        <b-dropdown-item href="#" @click="setLang('tw')"
          >中文（繁體）</b-dropdown-item
        >
        <b-dropdown-item href="#" @click="setLang('cn')"
          >中文（簡體）</b-dropdown-item
        >
        <b-dropdown-item href="#" @click="setLang('en')"
          >English</b-dropdown-item
        >
      </b-dropdown>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      lang: 'tw'
    }
  },
  methods: {
    ...mapActions({ callSetLang: 'callSetLang' }),

    setLang(value) {
      this.callSetLang(value)
    },

    anchor(id) {
      if (id === 'Top') {
        document.documentElement.scrollTop = 0
      } else {
      const dom = document.getElementById(id)
      document.documentElement.scrollTop =
        dom.offsetTop - this.$refs.title.offsetHeight
      }
    }
  }
}
</script>

<style scoped>
.title {
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
}

.title-container {
  margin-left: 2vw;
}

.title-item,
.title-item a {
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 500;
  font-size: 1.4vw;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.15em;
  color: #ffffff;
}

.title-item.lang {
  position: absolute;
  right: 20px;
  top: 30.2px;
}

#logStyle {
  width: 250px;
}
.lang-icon {
  width: 1.4vw;
}
.lang-select {
  background-color: transparent;
  color: #ffffff;
  border-color: transparent;
}
.mobile-item {
  position: fixed;
  top: 0;
}
</style>
