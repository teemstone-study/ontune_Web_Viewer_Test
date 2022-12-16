<script>
    import {TreeView, TreeBranch, TreeLeaf} from "svelte-tree-view-component"
    import {Svrollbar, Svroller} from "svrollbar"    

    export let nodeItem;
    let viewport;
    let contents;
</script>

<style>
    /* .wrapper {
      position: relative;
      width:inherit;
    }
  
    .viewport {
      position: relative;
      height: inherit;
      width:inherit;
      right: 0px;
      overflow: scroll;
      border: 1px solid gray;
      box-sizing: border-box;

      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  
    .viewport::-webkit-scrollbar {
      display: none;
    }

    .contents {
        font: 800;
    } */
    
</style>


    <TreeView branchHoverColor="yellow" iconColor="black"  >
        <TreeBranch rootContent="Linux" >
            {#each nodeItem as item, i (item)}
            <TreeLeaf> linux{item}</TreeLeaf>
            {/each}
          </TreeBranch>
    </TreeView>



    <!-- <div class="wrapper">
      <div bind:this={viewport} class="viewport">
          <div bind:this={contents} class="contents">
              <TreeView branchHoverColor="yellow" iconColor="black"  >
                  <TreeBranch rootContent="Linux" >
                      {#each nodeItem as item, i (item)}
                      <TreeLeaf> linux{item}</TreeLeaf>
                      {/each}
                    </TreeBranch>
              </TreeView>
          </div>
        </div>
        <Svrollbar {viewport} {contents} />
      </div> -->