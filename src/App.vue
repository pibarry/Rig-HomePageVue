<template>
  <div id="app">
    <Router-view />
  </div>
</template>

<style>
#app {
  position: relative;
  height: 100%;
  width: 100%;
}
.cursorPointer {
  cursor: pointer;
}
.content-icon {
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;
}

@media screen and (max-width: 1200px) {
  .content-text p {
    font-size: 16px !important;
    letter-spacing: 0.1em !important;
  }
}
@media screen and (max-width: 1024px) {
  #logStyle {
    width: 175px !important;
  }
  .content-text p {
    font-size: 15px !important;
    letter-spacing: 0.08em !important;
  }
  .title {
    height: 60.4px !important;
  }
  .title-item.lang {
    top: 15.1px !important;
  }
}
@media screen and (max-width: 768px) {
  #logStyle {
    width: 125px !important;
  }
  .content-text p {
    font-size: 13px !important;
    letter-spacing: 0.06em !important;
  }
  .footer-ico p {
    font-size: 1rem;
  }
  .pc-item {
    visibility: hidden;
  }
  .mobile-item {
    visibility: '';
  }
  .title {
    height: 40.4px !important;
  }
  .mobile-item {
    width: 7px;
    height: 7px;
  }
  .title-item.lang {
    top: 20.2px !important;
    right: 40px !important;
  }
  .search-job {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px 20px;
  gap: 4px;
  width: 130px !important;
  height: 28px !important;

  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 700;
  font-size: 12px !important;
  line-height: 0px !important;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0em !important;
  text-decoration: none;

  color: #2e353a;
}
    .recruit-href {
    text-align: -webkit-center !important;
  }
}
@media screen and (min-width: 768px) {
  .mobile-item {
    visibility: hidden;
  }
  .pc-item {
    visibility: '';
  }
}
</style>
