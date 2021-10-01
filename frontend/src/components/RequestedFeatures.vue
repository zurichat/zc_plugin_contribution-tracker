<template>
  <div>
    <div class="ct-text-brand-black ct-list">
      List of requested features
    </div>
    <div>
      <div class="ct-topbar">Fix the top bar1</div>
      <p class="ct-comment">#001 request added by Mark Essien at 10:00AM</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RequestedFeatures",
  data() {
    return {};
  },
};
</script>

<style>
.ct-list {
  position: absolute;
  width: 749px;
  height: 56px;
  left: 268px;
  top: 252px;
  background: #e1fdf4;
}
.ct-topbar {
  position: absolute;
  width: 106px;
  height: 18px;
  left: 284px;
  top: 321px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: #1d1c1d;
}
.ct-comment {
  position: absolute;
  width: 274px;
  height: 16px;
  left: 284px;
  top: 343px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: #616161;
}
</style>
