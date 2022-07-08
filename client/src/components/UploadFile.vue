<template>
<div class="container">
  <div class="wrapper-stepper">
    <div class="stepper">
      <div class="stepper-progress">
        <div class="stepper-progress-bar"></div>
      </div>
      <div class="stepper-item current">
        <div class="stepper-item-counter">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon-success">
              <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span class="number">1</span>
        </div>
        <span class="stepper-item-title">
          First
        </span>
      </div>
    </div>
    <div class="stepper-content">
      <div class="stepper-pane">

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'uploadFile',
};
</script>

<style scoped>
.container{
  width: max(41%, 350px);
  height:80vh;
}
.wrapper-stepper{
  background:#fff;
  padding: 60px;
  border-radius: 2rem;
  box-shadow: rgba(0,0,0,0.09);
  width: 100%;
  height:100%;
}
.stepper{
  display:flex;
  align-items: center;
  justify-content: space-between;
  width:660px;
  position:relative;
  z-index: 0;
  margin-bottom: 24px;
}
.stepper-progress{
  position: absolute;
  background: rgb(152, 152, 152);
  height:2px;
  z-index: -1;
  left:0;
  right:0;
  margin: 0 auto;
}
.stepper-progress-bar{
  position:absolute;
  left:0;
  height:100%;
  width:0%;
  background:lightgreen;
  transition: all ease-in-out 0.3s;
}
.stepper-item{
  display:flex;
  flex-direction: column;
  align-items:center;
  color:rgb(152, 152, 152);
  transition: all ease-in-out 0.3s;
}
.stepper-item-counter{
  height: 68px;
  width: 68px;
  border-radius: 100%;
  display:grid;
  place-items: center;
  background: #fff;
  border: 2px solid rgb(152, 152, 152);;
  position:relative;
}
.icon-success{
  position:absolute;
  opacity: 0;
  transform:scale(0);
  width: 24px;
  transition: all ease-in-out 0.3s;
}
.number{
  font-size:22px;
  transition: all ease-in-out 0.3s;
}
.stepper-item-title{
  position: absolute;
  bottom: -24px;
  font-size:14px;
}
.stepper-item.success .stepper-item-counter{
  border-color:lightgreen;
  background:#c8ebc1;
  color:#fff;
  font-weight:600;
}
.stepper-item.success .stepper-item-counter .icon-success{
  opacity: 1;
  transform:scale(1);
}
.stepper-item.success .stepper-item-counter .number{
  opacity: 0;
  transform:scale(0);
}
.stepper-item.success .stepper-item-title{
  color:lightgreen;
}

.stepper-item.current .stepper-item-counter{
  border-color:lightgreen;
  background: lightgreen;
  color:#fff;
  font-weight: 600;
}
.stepper-item.current .stepper-item-title{
  color:#818181;
}
.stepper-content{
  width:100%;
  height:100%;
}
.stepper-pane{
  color:#333;
  text-align: center;
  padding: 120px 60px;
  box-shadow: 0 8px 12px rgba(0,0,0,0.09);
  margin: 40px 0;
  height: 80%;
  border-radius:10px;
}
</style>
