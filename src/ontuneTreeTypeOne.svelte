<script>
    import {TreeView, TreeBranch, TreeLeaf} from "svelte-tree-view-component"
    import {Svrollbar, Svroller} from "svrollbar"    
    import VirtualList from './onTuneScroll.svelte';    

    export let nodeItem;
    export let updateCount;
    export let isReverse;
    let viewport;
    let contents;
    let onsrc = "img/hostOS_icon_linux.png";
    let offsrc = "img/hostOS_icon_linux_un.png";
</script>

<style>
    .treeImage {
      vertical-align: text-bottom;
    }
    
</style>

    <TreeView branchHoverColor="yellow" iconColor="black"  >
      <TreeBranch rootContent="Linux" >
        <VirtualList items={nodeItem} let:item>
          <!-- {#each nodeItem as item, index} -->
          <!-- {#each nodeItem as item, i (item)} -->
          <TreeLeaf>
            <img class="treeImage" src={onsrc} alt="onimage"  />
              <!-- {#if (i % 2) === 0 && isReverse && i < updateCount}
              <img class="treeImage" src={onsrc} alt="onimage"  />
              {:else}
              <img class="treeImage" src={offsrc} alt="offimage" />
              {/if} -->
              linux {item}
          </TreeLeaf>
        <!-- {/each} -->
        </VirtualList>
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