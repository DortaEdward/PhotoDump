<template>
  <div className='loading-body'></div>
</template>

<script>
export default {
  name: 'LoadingIcon',
};
</script>

<style scoped>
.loading-body{
  width:3rem;
  height:3rem;
  border: 4px solid rgba(255, 31, 121, 0.678);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s infinite;
  margin: 0 auto;
}
/* .loading-body{
  width:2.5rem;
  height:2.5rem;
  border: 5px solid rgba(255,255,255,0.2);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s infinite;
} */
@keyframes spin{
  100%{
    transform: rotate(360deg);
  }
}
</style>
