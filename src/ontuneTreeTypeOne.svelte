<script>
    import {TreeView, TreeBranch, TreeLeaf} from "svelte-tree-view-component"
    import {Svrollbar, Svroller} from "svrollbar"    

    export let nodeItem;
    export let isReverse;
    let viewport;
    let contents;
    let onsrc = "img/hostOS_icon_linux.png";
    let offsrc = "img/hostOS_icon_linux_un.png";
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
            <TreeLeaf>
              {#if (i % 2) === 0 && isReverse}
                <img src={onsrc} alt="onimage" />
              {:else}
                <img src={offsrc} alt="offimage" />
              {/if}
                 linux {item}</TreeLeaf>
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