<script>
// @ts-nocheck

  import { Tabs, TabList, TabPanel, Tab } from 'svelte-tabs'; 
  import OntuneTreeTypeOne from './ontuneTreeTypeOne.svelte';
  import OntuneTreeTypeTwo from './ontuneTreeTypeTwo.svelte';
  import { fade, draw, fly } from 'svelte/transition';
  import { tweened } from 'svelte/motion';
  import { expoInOut } from 'svelte/easing';
  import {tick} from 'svelte';
  

  import {Svrollbar, Svroller} from "svrollbar"    


  let activeTab;
  let workEvent;
  let intervalTimer;
  let alterWorkTimer;
  let timeOutTimer;
  let isSend = false;
  let drawCount = 1000;
  let updateCount = 500;
  let copyupdateCount = 0;
  let workIntervalTime = 1;
  let isReverse = false;
  let ItemList;
  
  let visibleTestMode = false;

  $: dddd = visibleTestMode;

  ChangeNodeCount();
  
  // onMount(() => {
  //   intervalTimer = setInterval(() => {
  //     WorkInterval();
  //   }, workIntervalTime * 1000)

  // });

  const progress = tweened(0, {
		duration: 400,
		easing: expoInOut
	});

   //addEventListener('load', testWorker);
  
   function testloop() {
    clearTimeout(timeOutTimer);
    timeOutTimer = setTimeout( function() {
      WorkInterval();
      testloop();
    },workIntervalTime * 1000);
   }

  function testWorker() {
    clearInterval(intervalTimer);  
    intervalTimer = setInterval(() => {
      WorkInterval();
    }, workIntervalTime * 1000);      

  }

  async function WorkInterval() {
    let ReturnValue = [];
    if (isReverse === true) 
    {
      ItemList = Array.from({ length: drawCount }).map((_, i) => `item ${i}`) 
        // ReturnValue = Array.from({ length: drawCount }).map((_, i) => `item ${i}`) 
        // for (let i = 0; i < drawCount; i++) {
        //   ItemList.push('item' + i);
        // }    
        isReverse = false;
    }
    else
    {
        ItemList = Array.from({ length: drawCount }).map((_, i) => `item ${i}`) 
        // ReturnValue = Array.from({ length: drawCount }).map((_, i) => `item ${i}`) 
        // for (let i = 0; i < drawCount; i++) {
        //   ItemList.push('item' + i);
        // }        
        isReverse = true;
    }
    // console.log("----------");
    // console.log(ItemList);

    // ItemList = ReturnValue;
    await tick();
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
      removeEventListener('click', testloop);
      addEventListener('click', testloop);
      // clearInterval(intervalTimer);  
      // addEventListener('load', testWorker);
      // intervalTimer = setInterval(() => {
      //   WorkInterval();
      // }, workIntervalTime * 1000);      
      StartProcess();
    }
    else {
      console.log("0초니까 ");
      clearInterval(intervalTimer); 
      clearInterval(alterWorkTimer);     
    }
  }

    function ChangeNodeCount() {
      if (isReverse === false) 
      {
        ItemList = Array.from({ length: drawCount }).map((_, i) => `item ${i}`) 
      }
      else
      {
        ItemList = Array.from({ length: drawCount }).map((_, i) => `item ${drawCount - i}`) 
      }
    }

    function EnterWork(e) {
      if(e.key === "Enter") {
        ChangeNodeCount();
      }
    }

    function ResizeTree(event) {
      let data = document.getElementById("wrapper");

    }

    function StartProcess() {
      clearInterval(alterWorkTimer);   
      alterWorkTimer = setInterval(() => {
        if (isSend === false) {
            isSend = true;
            progress.set(1.0)            
        } else {
            isSend = false;
            progress.set(0.0)            
        }

      }, 1000);   
    }

    let viewport;
    let contents;

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

  #tabsection{  
    position: relative;  
    height: 100%;
    margin-right: 6px;

    /* overflow: hidden; */
  }

  .wrapper {
    position: absolute;
    inset: "0% 0% 0% 0%";

    width: 100%;
    height: 96.3%;

  }
  
  .viewport {
    /* position: relative; */
    display: flex;
    /* height: 100%; */
    width:auto;
    height: inherit;
    /* right: 0px; */
    overflow: scroll;
    /* overflow-y: 100%; */
    /* border: 1px solid gray; */
    /* box-sizing: context-box; */

    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  
    .viewport::-webkit-scrollbar {
      /* hide scrollbar */
      display: none;
    }

    .contents {
        font: 800;
    }

    :global(.svelte-tabs li.svelte-tabs__tab) {
      color:white;
    }

    :global(.svelte-tabs li.svelte-tabs__selected){
      color: #4F81E5;
    }

   
   

</style>

<section id="tabsection">
  <label>
    <input type="checkbox" bind:checked={visibleTestMode}>testMode
  </label>
  <br>
  {#if visibleTestMode}
  <div class="centered" display=none>
    <input type="text" id="txt_showCount" class="inputtext"  bind:value={drawCount} on:keydown={EnterWork}/>
    <button id="btn_showCount" class="inputbutton" on:click={ChangeNodeCount} >표시할 host 개수</button>
    <br>
    <label>데이터 업데이트 주기</label>
    <br>
    <input type="number" id="txt_updateTime" class="inputtext"  bind:value={workIntervalTime} on:keydown={(e) => {if (e.key === "Enter") {ChangeWorkIntervalTime();}}} />
    <input type="range" bind:value={workIntervalTime} min = 0 max = 60 />
    <br>
    <input type="text" id="txt_updateCount" class="inputtext" bind:value={updateCount} on:keydown={(e) => {if (e.key === "Enter") {ChangeChangeCount();}}} />
    <button id="btn_updateCount" class="inputbutton" on:click={ChangeChangeCount} >동시변경개수변경</button>
    <br>
    <button id="btn_updateTime" class="inputbutton" on:click={ChangeWorkIntervalTime}>자동변경 타이머 시작</button>
    <br>
    <progress value={$progress}></progress>
  </div>
  {/if}

  
  <Tabs on:tabChange={tabChange}  >
    <TabList>
      <Tab HtmlTag="host">host</Tab>
      <Tab HtmlTag="vmhost">VMHost</Tab>
      <Tab HtmlTag="group">group</Tab>
    </TabList>
  <div class="wrapper">
    <div bind:this={viewport} class="viewport">
        <div bind:this={contents} class="contents">
            
    <TabPanel>
        <OntuneTreeTypeOne nodeItem={ItemList} isReverse={isReverse} updateCount={updateCount}  />
    </TabPanel>
    <TabPanel>
      <OntuneTreeTypeTwo isReverse={isReverse} />
    </TabPanel>
    <TabPanel>
      <h1>또다른 그룹</h1>
    </TabPanel>
  </div>
  </div>
  <Svrollbar {viewport} {contents} alwaysVisible={true} />
  </div>
  </Tabs>

</section>







