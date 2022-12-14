<script>
// @ts-nocheck

  import { Tabs, TabList, TabPanel, Tab } from 'svelte-tabs'; 
  import OntuneTreeTypeOne from './ontuneTreeTypeOne.svelte';

  
  // onMount(() => {
  //   intervalTimer = setInterval(() => {
  //     WorkInterval();
  //   }, workIntervalTime * 1000)

  // });

  function WorkInterval() {
    //여기서 개수 바꾸는거 테스트 하면 될듯\
    for(let i=0;i<copyupdateCount; i++) {
      const randomnum = Math.floor(Math.random()* 10000);
      const secondrandomnum = Math.floor(Math.random()* 10000);
      ItemList[i] = i + "바뀜";// +  randomnum;// + secondrandomnum;

    }
  }
  
  function tabChange(e) {
      activeTab = e.detail;
      console.log(e.detail);
    }

    function ChangeChangeCount() {
      copyupdateCount = updateCount;
    }

  function ChangeWorkIntervalTime() {    
    if (workIntervalTime > 0) {
      clearInterval(intervalTimer);  
      intervalTimer = setInterval(() => {
        WorkInterval();
      }, workIntervalTime * 1000);      
    }
    else {
      console.log("0초니까 ");
      clearInterval(intervalTimer);      
    }
  }

    function ChangeNodeCount() {
      ItemList = Array.from({ length: drawCount }).map((_, i) => `item ${i}`) 
    }

    function EnterWork(e) {
      if(e.key === "Enter") {
        ChangeNodeCount();
      }
    }


    let activeTab;
    let workEvent;
    let intervalTimer;
    let drawCount = 1000;
    let updateCount = 500;
    let copyupdateCount = 0;
    let workIntervalTime = 1;
    let ItemList = Array.from({ length: drawCount }).map((_, i) => `item ${i}`)
    
    let scrollHeight;





    let ttabItems = [
		{ id: 1, label: 'Tab1', back: 'red' },
		{ id: 2, label: 'Tab2', back: 'blue' },
		{ id: 3, label: 'Tab3', back: 'green' },
	];
	let tactiveTab = 0, tstate = 0;
</script>

<style>
  .inputtext {
    width : 50px;
  }
  .inputbutton {
    width : 160px;
  }
  label {
    color: azure;
    font-size: medium;
  }
</style>


<input type="text" id="txt_showCount" class="inputtext"  bind:value={drawCount} on:keydown={EnterWork}/>
<button id="btn_showCount" class="inputbutton" on:click={ChangeNodeCount} >표시할 host 개수</button>
<br>
<label>데이터 업데이트 시간</label><input type="text" id="txt_updateTime" class="inputtext"  bind:value={workIntervalTime} on:keydown={(e) => {if (e.key === "Enter") {ChangeWorkIntervalTime();}}} />
<br>
<input type="text" id="txt_updateCount" class="inputtext" bind:value={updateCount} on:keydown={(e) => {if (e.key === "Enter") {ChangeChangeCount();}}} />
<button id="btn_updateCount" class="inputbutton" on:click={ChangeChangeCount} >동시변경개수변경</button>
<br>
<button id="btn_updateTime" class="inputbutton" on:click={ChangeWorkIntervalTime}>자동변경 타이머 시작</button>
<br>
<section>
  <Tabs on:tabChange={tabChange}>
    <TabList>
      <Tab HtmlTag="svelte-tree-view-component">host</Tab>
      <Tab HtmlTag="sample">Test2</Tab>
      <Tab HtmlTag="sample">Test3</Tab>
    </TabList>
    <TabPanel>
      
        <OntuneTreeTypeOne nodeItem={ItemList} />

    </TabPanel>
  
    <TabPanel>
      <h2>Second panel</h2>
    </TabPanel>
  
    <TabPanel>
      <h2>Third panel</h2>
    </TabPanel>
  </Tabs>
</section>







