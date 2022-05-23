<template>
  <div style="height: 100%; width: 100%">
    <!-- 中文繁體 -->
    <b-container fluid v-if="changeLang === 'tw'">
      <b-row align-h="center" class="mb-5">
        <b-col cols="12" class="recruit-title"
          ><span class="mb-2">人才招募</span></b-col
        >
      </b-row>
      <b-row align-h="center">
        <b-col sm="6" class="recruit-text content-text">
          <b-row>
            <p>
              以「獨特」、「年輕」、「國際」、「團結」為企業核心理念，致力於營造樂於互助溝通、適才適所的工作環境。
            </p>
            <p>
              採用開放式的管理風格，使每位擅於自我管理的同仁得以自由發揮。從上到下之間互相以誠信、坦率、同理心相待，同時鼓勵同仁發表想法及意見，廣納各方不同的聲音，透過集思廣益的方式促成良好的團隊合作，一同攜手朝著目標積極邁進。
            </p>
            <p>
              在此誠摯邀請肯學習肯努力、正向積極、有企圖心的您加入我們的工作團隊，一同實現夢想！
            </p></b-row
          >
          <b-row>
            <b-col class="recruit-href">
              <a
                class="search-job cursorPointer"
                href="https://www.104.com.tw/company/1a2x6blzuo?jobsource=m_cust_same"
                target="_blank"
              >
                查看詳細職缺
                <b-icon icon="chevron-right" font-scale="1"></b-icon>
              </a>
            </b-col>
          </b-row>
        </b-col>
        <b-col sm="4">
          <img class="content-icon" src="@/assets/recruit-icon.png" />
        </b-col>
      </b-row>
    </b-container>
    <!-- 中文簡體 -->
    <b-container fluid v-else-if="changeLang === 'cn'">
      <b-row align-h="center" class="mb-5">
        <b-col cols="12" class="recruit-title"
          ><span class="mb-2">人才招聘</span></b-col
        >
      </b-row>
      <b-row align-h="center">
        <b-col sm="6" class="recruit-text content-text">
          <b-row>
            <p>
              以「独特」、「年轻」、「国际」、「团结」为企业核心理念，致力于营造乐于互助沟通、适才适所的工作环境。
            </p>
            <p>
              采用开放式的管理风格，使每位擅于自我管理的同仁得以自由发挥。从上到下之间互相以诚信、坦率、同理心相待，同时鼓励同仁发表想法及意见，广纳各方不同的声音，透过集思广益的方式促成良好的团队合作，一同携手朝着目标积极迈进。
            </p>
            <p>
              在此诚挚邀请肯学习肯努力、正向积极、有企图心的您加入我们的工作团队，一同实现梦想！
            </p></b-row
          >
          <b-row>
            <b-col class="recruit-href">
              <a
                class="search-job cursorPointer"
                href="https://www.104.com.tw/company/1a2x6blzuo?jobsource=m_cust_same"
                target="_blank"
              >
                查看详细职缺
                <b-icon icon="chevron-right" font-scale="1"></b-icon>
              </a>
            </b-col>
          </b-row>
        </b-col>
        <b-col sm="4">
          <img class="content-icon" src="@/assets/recruit-icon.png" />
        </b-col>
      </b-row>
    </b-container>
    <!-- 英文 -->
    <b-container fluid v-else-if="changeLang === 'en'">
      <b-row align-h="center" class="mb-5">
        <b-col cols="12" class="recruit-title"
          ><span class="mb-2">Recruit</span></b-col
        >
      </b-row>
      <b-row align-h="center">
        <b-col sm="6" class="recruit-text content-text">
          <b-row>
            <p>
              With "unique", "young", "international" and "united" as the core
              concepts of the company, we are committed to creating a working
              environment that is willing to help each other and communicate,
              and is suitable for the right place.
            </p>
            <p>
              An open management style is adopted, so that every colleague who
              is good at self-management can play freely. Treat each other with
              integrity, frankness, and empathy , and encourage colleagues to
              express their ideas and opinions, accept different voices from all
              parties, promote good teamwork through brainstorming, and work
              together towards the goal.
            </p>
            <p>
              We sincerely invite you who are willing to learn, work hard, be
              positive, and have ambition to join us and realize your dreams
              together!
            </p></b-row
          >
          <b-row>
            <b-col class="recruit-href">
              <a
                class="search-job cursorPointer"
                href="https://www.104.com.tw/company/1a2x6blzuo?jobsource=m_cust_same"
                target="_blank"
              >
                View details
                <b-icon icon="chevron-right" font-scale="1"></b-icon>
              </a>
            </b-col>
          </b-row>
        </b-col>
        <b-col sm="4">
          <img class="content-icon" src="@/assets/recruit-icon.png" />
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
.recruit-title {
  text-align: center;
  height: 45px;
  padding: 0px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
.recruit-title span {
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

.recruit-text p {
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
.search-job {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px 20px;
  gap: 4px;
  width: 260px;
  height: 56px;
  background: #efd769;
  flex: none;
  order: 0;
  flex-grow: 0;

  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  text-decoration: none;

  color: #2e353a;
}

.recruit-href {
  text-align: -webkit-right;
}
</style>
