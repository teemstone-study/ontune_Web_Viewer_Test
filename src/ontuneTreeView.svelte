<script>
    import TreeView from "../node_modules/svelte-tree-view-component/TreeView.svelte"
    import TreeBranch from "../node_modules/svelte-tree-view-component/TreeBranch.svelte"
    import TreeLeaf from "../node_modules/svelte-tree-view-component/TreeLeaf.svelte"
    import Svrollbar from "../node_modules/svrollbar/src/Svrollbar.svelte"
    import Svroller from "../node_modules/svrollbar/src/Svroller.svelte"
  import { element, text } from "svelte/internal";

    
    const tree = {
		label: "USA", children: [
			{label: "Florida", children: [
				{label: "Jacksonville"},
				{label: "Orlando", children: [
					{label: "Disney World"},
					{label: "Universal Studio"},
					{label: "Sea World"},
				]},
				{label: "Miami"},
			]},
			{label: "California", children: [
				{label: "San Francisco"},
				{label: "Los Angeles"},
				{label: "Sacramento"},
			]},
		],
	}

    function ChangeData() {
        let searchText = document.getElementById("search_text");
        console.log("go?");
        drawCount++;
        findValue = Array.from({ length: drawCount }).map((_, i) => `item ${i}`)
       // findValue = items.find(searchText);
    }

    function ChangeData_1() {
        let searchText = document.getElementById("search_text");
        console.log("go?");
        drawCount--;
        findValue = Array.from({ length: drawCount }).map((_, i) => `item ${i}`)
       // findValue = items.find(searchText);
    }

    function ChangeData_2() {
        let searchText = document.getElementById("search_text");
        console.log("go?");
        findValue[0] = "123";
       // findValue = items.find(searchText);
    }


 


    let items = Array.from({ length: 50 }).map((_, i) => `item ${i}`)

    let drawCount = 10;
    let findValue = items;
    let viewport
    let contents
    let scrollHeight;

</script>


<style>
  .wrapper {
    position: relative;
    height: inherit;
    width:98%;
  }

  #search_section {
    align-items: center;
  }

  #search_div {
    height: 40px;
    width: auto;
  }

  .viewport {
    position: relative;
    width: inherit;
    height: inherit;
    overflow: scroll;
    border: 1px solid gray;
    box-sizing: border-box;

    /* hide scrollbar */
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .viewport::-webkit-scrollbar {
    /* hide scrollbar */
    display: none;
  }
  
</style>
<section id="draw_section">
    <div id="draw_div">
        <input type="text" id="draw_text"/>
        <button width=100 on:click={ChangeData}>더하기</button>
    </div>
</section>
<section id="search_section">
    <div id="search_div">
        <input type="text" id="search_text"/>
        <button width=100 on:click={ChangeData_1}>빼기</button>
        <button width=100 on:click={ChangeData_2}>바꾸기</button>
    </div>
</section>
<div class="wrapper">
    <div bind:this={viewport} class="viewport">
        <div bind:this={contents} class="contents">

            <TreeView branchHoverColor="yellow">
                <TreeBranch rootContent="Linux" >
                    {#each findValue as item, i (item)}
                    <TreeLeaf>linux{item}</TreeLeaf>
                    {/each}
                  </TreeBranch>
                  <!-- <TreeBranch rootContent="windows" >
                    {#each findValue as item (item)}
                    {console.log(i)}
                    <TreeLeaf>linux{item}</TreeLeaf>
                    {/each}
                </TreeBranch> -->
            </TreeView>
        </div>
    </div>
<Svrollbar {viewport} {contents} />
</div>





