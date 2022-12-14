<script>
    import {TreeView, TreeBranch, TreeLeaf} from "svelte-tree-view-component"
    import {Svrollbar, Svroller} from "svrollbar"    

    export let nodeItem;
    let viewport;
    let contents;
</script>

<style>
    .wrapper {
      position: relative;
      left: 0px;
      right: 20px;
      bottom: 10px;
      height: 500px;      
      width:inherit;
    }
  
    .viewport {
      position: relative;
      right: 0px;
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

    .contents {
        font: 800;
    }
    
  </style>

<div class="wrapper">
    <div bind:this={viewport} class="viewport">
        <div bind:this={contents} class="contents">

            <TreeView branchHoverColor="yellow" iconColor="black" >
                <TreeBranch rootContent="Linux" >
                    {#each nodeItem as item, i (item)}
                    <TreeLeaf><font color="white">dfdf</font> linux{item}</TreeLeaf>
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