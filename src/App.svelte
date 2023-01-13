<script>
  import { onMount } from 'svelte';
  import { Mosaic_Arr, Data_Infos } from './store.js';

  // import tree from './Tree.svelte';
  import OntuneTreeView from './ontuneTreeView.svelte';
  import Jennifer from './Jennifer.svelte';
  import Mosaic from './Mosaic.svelte';

  export class Node_Item {
    constructor(
      Node_ID = -1,
      Host_List = []
    ) {
      this.Node_ID = Node_ID;
      this.Host_List = Host_List;
    };

    exist_HostId(id){
      // for (let i = 0; i < this.Host_List.length; i++) {
      //   if (this.Host_List[i]) {

      //   };
      // };
      return this.Host_List.find(id) ? true:false;
    };
  };

  export class Info_Item {
    constructor(
      Code = 0,
      Flag_YN = false,
      Node_List = []
    ) {
      this.Code = Code;
      this.Flag_YN = Flag_YN;
      this.Node_List = Node_List;
    };

    update_Node(Node_ID, Host_List){
      let index = this.Node_List.indexOf(Node_ID);

      // this의 Node_List에 Node ID에 대한 데이터 추가 or 갱신
      if (index == -1) {
        // 찾는 Node ID가 없으므로, 추가한다.
        let item = new Node_Item(Node_ID, Host_List);

        this.Flag_YN = true;
        this.Node_List.push(item);

        return true;
      } else {
        this.Node_List[index].Host_List = Host_List;

        return true;
      };
      
      // return false;
    };

    delete_Node(Node_ID){
      let index = this.Node_List.indexOf(Node_ID);

      // this의 Node_List에 Node ID에 대한 데이터 삭제
      if (index > -1) {
        // 찾는 Node ID가 있으므로, 삭제한다.
        this.Node_List = this.Node_List.filter(Node_Item => Node_Item.Node_ID != Node_ID);

        this.Flag_YN = this.Node_List.length > 0 ? true:false;
        return true;
      };
      return false;
    };

    // exist_HostId(id){
    //   for (let i = 0; i < this.Node_Host_List.length; i++) {
    //     if (this.Node_Host_List[i]) {

    //     };
    //   };
    //   return this.Host_List.find(id) ? true:false;
    // };
  };

  export function Data_Infos_Clear() {
    for (let i = 0; i < 7; i++) {
      let Item = new Info_Item(0, false, []);  

      switch (i) {
        case 0:
          Item.Code = 2;
          $Data_Infos.HOST_CODE = Item;
          break;
        case 1:
          Item.Code = 4;
          $Data_Infos.LASTPERF_CODE = Item;
          break;
        case 2:
          Item.Code = 8;
          $Data_Infos.BASIC_CODE = Item;
          break;
        case 3:
          Item.Code = 16;
          $Data_Infos.CPU_CODE = Item;
          break;
        case 4:
          Item.Code = 32;
          $Data_Infos.MEM_CODE = Item;
          break;
        case 5:
          Item.Code = 64;
          $Data_Infos.NET_CODE = Item;
          break;
        case 6:
          Item.Code = 128;
          $Data_Infos.DISK_CODE = Item;
          break;                                        
        // default:
        //   alert( "어떤 값인지 파악이 되지 않습니다." );
      };
    };
  };

  export function Data_Infos_Refresh() {
    // console.log("123123123");
    Data_Infos_Clear;

    // $Data_Info를 다시 셋팅한다.(arr[] 기준으로 다시...)
    for (let i = 0; i < $Mosaic_Arr.length; i++) {
      // 노드의 상태와 (node_text = Chart_Type)에 따라, List를 다시 꾸며야한다.
      if ($Mosaic_Arr[i].node_type === "P") {
        if ($Mosaic_Arr[i].left.node_type === "C"){
          // node_text를 보고 Chart의 성격별로 Item을 생성하여 넣어준다.
          switch ($Mosaic_Arr[i].left.node_text) {
            case "None":
              break;
            case "Grid":
              $Data_Infos.LASTPERF_CODE.update_Node($Mosaic_Arr[i].left.id, $Mosaic_Arr[i].left.host_List);
              break;
            case "Bar Chart":
              $Data_Infos.BASIC_CODE.update_Node($Mosaic_Arr[i].left.id, $Mosaic_Arr[i].left.host_List);
              break;
            case "Line Chart":
              $Data_Infos.CPU_CODE.update_Node($Mosaic_Arr[i].left.id, $Mosaic_Arr[i].left.host_List);
              break;
            case "Pie Chart":
            $Data_Infos.MEM_CODE.update_Node($Mosaic_Arr[i].left.id, $Mosaic_Arr[i].left.host_List);
              break;
            // default:
            //   alert( "어떤 값인지 파악이 되지 않습니다." );
          };
        };

        if ($Mosaic_Arr[i].right.node_type === "C"){
          // node_text를 보고 Chart의 성격별로 Item을 생성하여 넣어준다.
          switch ($Mosaic_Arr[i].right.node_text) {
            case "None":
              break;
            case "Grid":
              $Data_Infos.LASTPERF_CODE.update_Node($Mosaic_Arr[i].right.id, $Mosaic_Arr[i].right.host_List);
              break;
            case "Bar Chart":
              $Data_Infos.BASIC_CODE.update_Node($Mosaic_Arr[i].right.id, $Mosaic_Arr[i].right.host_List);
              break;
            case "Line Chart":
              $Data_Infos.CPU_CODE.update_Node($Mosaic_Arr[i].right.id, $Mosaic_Arr[i].right.host_List);
              break;
            case "Pie Chart":
            $Data_Infos.MEM_CODE.update_Node($Mosaic_Arr[i].right.id, $Mosaic_Arr[i].right.host_List);
              break;
            // default:
            //   alert( "어떤 값인지 파악이 되지 않습니다." );
          };
        };
      } else if ($Mosaic_Arr[i].div_type === "N" && $Mosaic_Arr[i].node_type !== "D" && $Mosaic_Arr[i].p_id == null) {
        if ($Mosaic_Arr[i].node_type === "C"){
          // node_text를 보고 Chart의 성격별로 Item을 생성하여 넣어준다.
          switch ($Mosaic_Arr[i].node_text) {
            case "None":
              break;
            case "Grid":
              $Data_Infos.LASTPERF_CODE.update_Node($Mosaic_Arr[i].id, $Mosaic_Arr[i].host_List);
              break;
            case "Bar Chart":
              $Data_Infos.BASIC_CODE.update_Node($Mosaic_Arr[i].id, $Mosaic_Arr[i].host_List);
              break;
            case "Line Chart":
              $Data_Infos.CPU_CODE.update_Node($Mosaic_Arr[i].id, $Mosaic_Arr[i].host_List);
              break;
            case "Pie Chart":
            $Data_Infos.MEM_CODE.update_Node($Mosaic_Arr[i].id, $Mosaic_Arr[i].host_List);
              break;
            // default:
            //   alert( "어떤 값인지 파악이 되지 않습니다." );
          };
        };
      };
    };
  };

  onMount(() => {
    // Data_Info 초기화
    // Data_Infos_Clear;

    // console.log($Data_Infos);
  });

  function onMouseDown_Main_bar_event(e) {
    // drag_node = null;

    // console.log("============Main Bar Down===========");

    // 마우스 다운 이벤트 발생 => 마우스의 움직임에 따라, onMouseMove 이벤트를 유지한다(onMouseUp이 될 때까지 or onMouseLeave)
    // 마우스 움직임에 따른 이벤트 등록
    let main_bar = e.target;
    main_bar.addEventListener('dragstart', onMouseDragstart_Main_bar_event);
    main_bar.addEventListener('drag',      onMouseDrag_Main_bar_event);
    main_bar.addEventListener('dragend',   onMouseDragend_Main_bar_event);

    // bar.addEventListener("touchmove", onMouseDrag_bar_event, TOUCH_EVENT_OPTIONS);
    // bar.addEventListener("touchend", onMouseDragend_bar_event, true);

    function onMouseDragstart_Main_bar_event(event) {
      // console.log("==========Main Bar Drag Start=========");

      // let cv = new ImageBitmap();
      // cv.width  = 0;
      // cv.height = 0;
      // event.dataTransfer.setDragImage(cv, 0, 0);      
    }    

    function onMouseDrag_Main_bar_event(event) {
      // console.log("===========Main Bar Drag===========");
      event.preventDefault();
    }

    function onMouseDragend_Main_bar_event(event) {
      // console.log("============Main Bar Up===========");
      // 배율 변경
      if (event.x > 0 || event.y > 0) {
        let tmp_ratio = 0;
        let tmp_A = document.getElementById("div_tree");
        let tmp_B = document.getElementById("div_mosaic");
        let tmp_C = document.getElementById("div_mosaic_main");
        let tmp_D = document.getElementById("div_grid");

        // 현재 마우스의 좌표를 기준으로, 몇퍼센트인지 역계산을 해줘야한다.
        // (마우스의 현재 좌표 / 부모의 길이) * 100
        // 대상이 main_Col | main_Row 에 따라 다르다.
        if (main_bar.id === "main_Col") {
          tmp_ratio = ((event.clientX)      / window.innerWidth)  * 100;
        } else {
          tmp_ratio = ((event.clientY - 40) / window.innerHeight) * 100;
        } 
        if (tmp_ratio < 15) {
          tmp_ratio = 15;
        } else if (tmp_ratio > 85) {
          tmp_ratio = 85;
        }

        // debugger;
        if (main_bar.id === "main_Col") {
          tmp_A.style.width  =        tmp_ratio  + '%';
          tmp_B.style.width  = (100 - tmp_ratio) + '%';

          // console.log( tmp_A.style.width);
          // console.log( tmp_B.style.width);
        } else {
          tmp_C.style.height =        tmp_ratio  + '%';
          tmp_D.style.height = (100 - tmp_ratio) + '%';

          // console.log( tmp_C.style.height);
          // console.log( tmp_D.style.height);
        }             
        // `${e.right.inset_top}% ${e.right.inset_right}% ${e.right.inset_bottom}% ${e.right.inset_left}%` 
        // tmp_r.ratio = 100 - tmp_l.ratio;

        // // inset 재조정
        // bst.resize_div(arr);

        // // 배열 갱신
        // setArr([...arr]);        

        // console.log("=============client 좌표");
        // console.log(event.clientX + " / " + event.clientY);
      };

      main_bar.removeEventListener('dragstart', onMouseDragstart_Main_bar_event);          
      main_bar.removeEventListener('drag',      onMouseDrag_Main_bar_event);
      main_bar.removeEventListener('dragend',   onMouseDragend_Main_bar_event);

      // bar.removeEventListener("touchmove", onMouseDrag_bar_event,TOUCH_EVENT_OPTIONS);
      // bar.removeEventListener("touchend", onMouseDragend_bar_event, true);

      // console.log(arr);

      // // inset 재조정
      // bst.resize_div(arr);

      // // 배열 갱신
      // setArr([...arr]);
    }    
  };

  const onDrag_Over_shadow_event = (e) => {
  e.dataTransfer.dropEffect = "move";
  e.preventDefault();
}  
</script>


<!-- HTML -->
<div id="div_tree">
  <OntuneTreeView />  
</div>

<div id="main_Col" draggable="true" on:mousedown={onMouseDown_Main_bar_event}></div>

<div id="div_mosaic">
  <div id="div_mosaic_menubar">
    <Jennifer />

<!-- 			
    <button onclick="change_arr(event)" name="P1">P1</button>
    <button onclick="change_arr(event)" name="P2">P2</button>
    <button onclick="change_arr(event)" name="P3">P3</button>
    <button onclick="change_arr(event)" name="P4">P4</button>
    <button onclick="change_arr(event)" name="P5">P5</button>

    <button onclick="save_arr(event)" name="Save" style="width: 100px">Save</button> 
-->
  </div>

  <div id="div_mosaic_main">
    <div id="div_mosaic_body">
      <div id="shadow" class="div_Shadow" draggable="true" on:dragover={onDrag_Over_shadow_event}></div>
      <!-- <div id="div_mosaic_body">Mosaic Area</div> -->
      <!-- <Mosaic {...mosaic_props} /> -->
      <Mosaic />
    </div>    
  </div>
  <!-- <div id="div_grid_main">
    <div id="div_grid_body">
      <Grid />
    </div>
  </div>   -->
</div>	


<style>

</style>