<template>
  <div>
    <div class="output">
      <div class="outputCalc">{{ calcValue || 0 }}</div>
    </div>
    <div class="buttons">
      <div
          class="button"
          v-for="(btn,index) in btnArr"
          :key="index"
          :class="{ operator: ['C', '*', '/', '-', '+', '%', '='].includes(btn) }"
      >
        <div class="btn" @click="seclectBtn(btn)">
          {{ btn }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      calcValue: "",
      btnArr: ["C","*","/","-",7,8,9,"+",4,5,6,"%",1,2,3,"=",0,],
      operator: null,
      preCalcValue: "",
      result:false,
    };
  },
  methods:{
    seclectBtn(btn){
      if(!isNaN(btn)){
        if(!this.result) {
          this.calcValue += btn + "";
        }else {
          this.calcValue = btn;
          this.result = false;
        }
      }
      if(btn=="C"){
        this.calcValue = "";
      }
      if(btn=="+"||btn=="-"||btn=="*"||btn=="/"){
        this.preCalcValue = this.calcValue;
        this.calcValue = "";
        this.operator = btn;
      }
      if(btn=="="){
        this.calcValue = eval(this.preCalcValue + this. operator + this.calcValue);
        this.preCalcValue = "";
        this.operator = null;
        this.result = true;
      }
    }
  }
}
</script>

<style scoped>
.output {
  text-align: right;
  background-color: antiquewhite;
  width: min(300px, 70%);
  margin: 10px auto;
  padding: 10px;
  border: 0.5px solid rgb(255, 198, 124);
  border-radius: 4px;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.008),
  6.7px 6.7px 5.3px rgba(0, 0, 0, 0.012),
  12.5px 12.5px 10px rgba(0, 0, 0, 0.015),
  22.3px 22.3px 17.9px rgba(0, 0, 0, 0.018),
  41.8px 41.8px 33.4px rgba(0, 0, 0, 0.022),
  100px 100px 80px rgba(0, 0, 0, 0.03);
}
.outputCalc {
  background-color: rgb(255, 209, 148);
  padding: 15px;
  border-radius: 3px;
}
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  width: min(300px, 70%);
  border: 0.2px solid rgb(255, 198, 124);
  border-radius: 4px;
  align-items: center;
  background-color: antiquewhite;
  justify-content: center;
  margin: 10px auto;
  gap: 5px;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.008),
  6.7px 6.7px 5.3px rgba(0, 0, 0, 0.012),
  12.5px 12.5px 10px rgba(0, 0, 0, 0.015),
  22.3px 22.3px 17.9px rgba(0, 0, 0, 0.018),
  41.8px 41.8px 33.4px rgba(0, 0, 0, 0.022),
  100px 100px 80px rgba(0, 0, 0, 0.03);
}
.button {
  background-color: rgb(255, 209, 148);
  padding: 6px;
  border-radius: 3px;
  margin: 4px;
  font-size: 1.5em;
  font-weight: bold;
  color: #000;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.button:hover {
  background-color: rgb(238, 167, 75);
  color: #000;
}
.operator {
  background-color: rgb(238, 167, 75);
  color: #000;
}
.operator:hover {
  background-color: rgb(255, 209, 148);
}
.MyId:hover {
  cursor: pointer;
  filter: brightness(130%);
}
</style>