<script>
	// import "./App.svelte";
	// import { listen } from "svelte/internal";
  // import { Mosaic_Arr } from "./Store";
  import { Data_Infos_Clear, Data_Infos_Refresh } from './uStore_Function.js';
  import { Mosaic_Arr, Data_Infos, WebReceiveGridData } from './store.js';
	import { Binary_Tree, Node } from "./Binary_tree";
	import { PercentToLength, PercentToPx, Position_Check, Position_Fix } from "./ufunction";

  import Grid from './Com_Grid.svelte';
  import Bar_Chart from './Com_BarChart.svelte';
  import Line_Chart from './Com_LineChart.svelte';
  import Pie_Chart from './Com_Pie.svelte';
  // import nice from 'd3-scale/src/nice.js';

	const bst = new Binary_Tree();
	let idx = 0;
	let node_text_idx = 0;
	// let arr = [];
  // export let arr = [];
  // let arr = [];

  let drag_node = null;                 // Null or Node
	let drag_state = "N";                 // N / T / R / B / L
	let drag_bleft = false;               // T = Left / F = Right
	let drop_id    = -1;

  let component_type = [
		{ id: 0, text: "None" },
		{ id: 1, text: "Grid" },
		{ id: 2, text: "Bar Chart" },
		{ id: 3, text: "Line Chart" },
    { id: 4, text: "Pie Chart" }
	];

  function find_target(el) {
    let currentElement = el;
    // console.log("========find_target========");

    while (isNaN(parseInt(currentElement.getAttribute('name')))) {
      currentElement = currentElement.parentElement;
      if (currentElement.tagName == "BODY") {
        return null;
      }
      // console.log(currentElement.name);
      // console.log(currentElement.getAttribute('name'));    
    }
    return currentElement;
  };

  // Grid Data Input
  WebReceiveGridData.subscribe((Item) => {
    let tmp_Main = Item;
    let tmp_Sub = [];
    let tmp_Data = [];


    // let my_Node = $Mosaic_Arr[my_ID];
    // // my_Hieght = 402.5 div 30 => 14 x 3
    // let my_Hieght = my_Node.inset_bottom - my_Node.inset_bottom;

    // 현재 스크롤의 위치와 Hieght를 받아와서 얼마만큼 데이터를 뽑아다가 컴포넌트에 던져줄지 결정해서 추출한다.
    // for (let i = 0; i < tmp_Main.length; i++) {
    //   tmp_Sub = tmp_Main[i];
    //   tmp_Data.push({
    //     hostname: tmp_Sub[0], 
    //     col1: parseInt(tmp_Sub[3]), col2: parseInt(tmp_Sub[4]), col3: tmp_Sub[5],  col4: tmp_Sub[6],  col5: tmp_Sub[10],  col6: tmp_Sub[11],  col7: tmp_Sub[12],  col8: tmp_Sub[13],  col9: tmp_Sub[14],  col10: tmp_Sub[17], 
    //     col11: tmp_Sub[18], col12: tmp_Sub[21], col13: tmp_Sub[22], col14: tmp_Sub[23], col15: tmp_Sub[24], col16: tmp_Sub[25], col17: tmp_Sub[26], col18: tmp_Sub[27], col19: tmp_Sub[28], col20: tmp_Sub[29], 
    //     col21: tmp_Sub[30], col22: tmp_Sub[31], col23: tmp_Sub[32], col24: tmp_Sub[33], col25: tmp_Sub[34], col26: tmp_Sub[35], col27: tmp_Sub[36], col28: tmp_Sub[37], col29: tmp_Sub[38], col30: tmp_Sub[39]  
    //   });
    // };

    // data = tmp_Data;

    // Top | Bottom Div의 padding 변경
    // ???
  });    

// ==================================================================================================================================================
// =================================================================== Button Event =================================================================
// ==================================================================================================================================================
  const Add_Div = (e) => {
    // TODO inset 계산
    // console.log('===========DIV 추가===========');

    // 0을 1|2로 Div 추가하기
    const insert_result = bst.insert($Mosaic_Arr[e.target.id], $Mosaic_Arr.length, node_text_idx);

    if (insert_result) {
      //arr.push(insert_result[0]);
      //arr.push(insert_result[1]);
      idx = idx + 2;
      node_text_idx = node_text_idx + 1;

      // setArr([...arr, insert_result[0], insert_result[1]]);
			// arr = [...arr, insert_result[0], insert_result[1]];
      // arr = [...arr, insert_result[0], insert_result[1]];

      $Mosaic_Arr.push(insert_result[0]);
      $Mosaic_Arr.push(insert_result[1]);
      $Mosaic_Arr = $Mosaic_Arr;

      Data_Infos_Refresh();
    };

    //setArr([...arr]);
    // setIdx(idx + 1);
    // console.log(arr);
  };

  // filter를 써서 새 배열 만들고 arr배열을 변경해줘야함.
  const Del_Div = (e) => {
    if ($Mosaic_Arr[e.id].p_id === null){
      return false;
    }

    // console.log('===========DIV 삭제===========');

    // 기존 배열에서 inset 값을 변경 후 가져와야한다.
    if ($Mosaic_Arr[$Mosaic_Arr[$Mosaic_Arr[e.id].p_id].p_id]) {
      bst.remove($Mosaic_Arr[$Mosaic_Arr[$Mosaic_Arr[e.id].p_id].p_id], $Mosaic_Arr[$Mosaic_Arr[e.id].p_id], $Mosaic_Arr[e.id]);
    } else {
      bst.remove(null, $Mosaic_Arr[$Mosaic_Arr[e.id].p_id], $Mosaic_Arr[e.id]);
    } 

    // inset 재조정
    bst.resize_div($Mosaic_Arr);

    // 배열 갱신

    // setArr([...arr]);
		// arr = [...arr];
    // Mosaic_Arr.set([...arr]);
    // Mosaic_Arr.update(a => [...a]);
    $Mosaic_Arr = $Mosaic_Arr;
    // console.log(arr);
    Data_Infos_Refresh();
  };

  // const Changes = () => {
  //   console.log('===========Arr 변경===========');

  //   // 기존 배열에서 inset 값을 변경 후 가져와야한다.
  //   let tmp_arr = [];
  //   let tmp_node = new Node(3, "N", "C", "windwos3", 50, 50, 50, 50, 100, 0, null, null);
  //   arr.map((e) => {
  //     e.node_text = "windwos 123";
  //     tmp_arr.push(e);
  //   });

  //   // tmp_arr.push(tmp_node)
  //   arr = tmp_arr;

  //   console.log(arr);
  // };

  const Set_Random_Data = (e) => {
    console.log('----Set_Random_Data-----');
    // console.log(arr[e.target.id]);

    // 노드의 Random Data 생성 함수를 실행시킨다.
    // arr[e.target.id].arr_Data = [];
    // arr[e.target.id].arr_Data = [...bst.set_random_data(arr[e.target.id], tmp_counter)];
    $Mosaic_Arr[e.target.id].set_timer();
    // console.log(tmp_counter);    
    // Random_Timer(e);
  };

  function Set_Data_Info(item) {
    console.log('----Set Data Info Change-----');

    // Data_Infos_Clear();
    Data_Infos_Refresh();
  };
    // console.log(item.node_text);
    
    // $Mosaic_Arr[e.target.id].
    // Data_Info에 기존 값 변경하고 .
    // $Mosaic_Arr[e.target.id].set_timer();
  // };  

// ==================================================================================================================================================
// =================================================================== Bar Event ====================================================================
// ==================================================================================================================================================
const onMouseDown_bar_event = (e) => {
    drag_node = null;

    // console.log("==============Bar Down=============");

    // 마우스 다운 이벤트 발생 => 마우스의 움직임에 따라, onMouseMove 이벤트를 유지한다(onMouseUp이 될 때까지 or onMouseLeave)
    // 마우스 움직임에 따른 이벤트 등록
    const bar = e.target;
    bar.addEventListener('dragstart', onMouseDragstart_bar_event);
    bar.addEventListener('drag',      onMouseDrag_bar_event);
    bar.addEventListener('dragend',   onMouseDragend_bar_event);

    // bar.addEventListener("touchmove", onMouseDrag_bar_event, TOUCH_EVENT_OPTIONS);
    // bar.addEventListener("touchend", onMouseDragend_bar_event, true);

    function onMouseDragstart_bar_event(event) {
      // console.log("============Bar Drag Start===========");

      // let cv = new ImageBitmap();
      // cv.width  = 0;
      // cv.height = 0;
      // event.dataTransfer.setDragImage(cv, 0, 0);      
    }    

    function onMouseDrag_bar_event(event) {
      // console.log("==============Bar Drag=============");
      // console.log(event);
      // event.dataTransfer.dragEffect = "move";
      event.preventDefault();
      // console.log(event.dataTransfer.dragEffect)
      // event.dataTransfer.effectAllowed = "move";
      // console.log(this);
    }

    function onMouseDragend_bar_event(event) {
      // console.log("==============Bar Up=============");

      // 배율 변경
      if (event.x > 0 || event.y > 0) {
        // 부모노드와 자식노드에 대한 내용을 변수에 받아온다.
        let tmp_p = $Mosaic_Arr[parseInt(e.target.getAttribute('name'))];
        let tmp_l = tmp_p.left;
        let tmp_r = tmp_p.right;

        let tmp_tree   = document.getElementById("div_tree").offsetWidth;
        let tmp_title  = document.getElementById("div_mosaic_menubar").offsetHeight;
        let tmp_width  = e.target.parentElement.offsetWidth;
        let tmp_height = e.target.parentElement.offsetHeight;

        // 현재 마우스의 좌표를 기준으로, 몇퍼센트인지 역계산을 해줘야한다.
        // 대상의 부모의 Width와 Left 좌표값을 가지고 계산하면 된다.
        // ((마우스의 현재 좌표 - 기준좌표)  / 부모의 길이) * 100
        // 부모의 div type이 C | R 에 따라 다르다.
        if (tmp_p.div_type === "C") {
          // tmp_l.ratio = ((event.clientX - (tmp_p.inset_left * (window.innerWidth  / 100))) / (window.innerWidth))  * 100;
          tmp_l.ratio = (((event.clientX - tmp_tree)  - (tmp_p.inset_left *  (tmp_width   / 100))) / (PercentToLength(tmp_width,  tmp_p.inset_left, tmp_p.inset_right ))) * 100;
        } else {
          // tmp_l.ratio = ((event.clientY - (tmp_p.inset_top  * (window.innerHeight / 100))) / (window.innerHeight)) * 100;
          // tmp_l.ratio = (((event.clientY - tmp_title) - (tmp_p.inset_top  * ((tmp_height - tmp_title)  / 100))) / (PercentToLength((tmp_height - tmp_title), tmp_p.inset_top,  tmp_p.inset_bottom))) * 100;
          tmp_l.ratio = (((event.clientY - tmp_title) - (tmp_p.inset_top  *  (tmp_height  / 100))) / (PercentToLength(tmp_height, tmp_p.inset_top,  tmp_p.inset_bottom))) * 100;
        } 
        if (tmp_l.ratio < 15) {
          tmp_l.ratio = 15;
        } else if (tmp_l.ratio > 85) {
          tmp_l.ratio = 85;
        }
        tmp_r.ratio = 100 - tmp_l.ratio;

        // if(prevState!==currentState){

        // }
        // inset 재조정
        bst.resize_div($Mosaic_Arr);

        // 배열 갱신
        // setArr([...arr]);        
				// arr = [...arr];
        // Mosaic_Arr.set([...arr]);
        // Mosaic_Arr.update(a => [...a]);
        $Mosaic_Arr = $Mosaic_Arr;
        // console.log("=============client 좌표");
        // console.log(event.clientX + " / " + event.clientY);
      };

      bar.removeEventListener('dragstart', onMouseDragstart_bar_event);
      bar.removeEventListener('drag',      onMouseDrag_bar_event);
      bar.removeEventListener('dragend',   onMouseDragend_bar_event);

      // bar.removeEventListener("touchmove", onMouseDrag_bar_event,TOUCH_EVENT_OPTIONS);
      // bar.removeEventListener("touchend", onMouseDragend_bar_event, true);

      // console.log(arr);

      // // inset 재조정
      // bst.resize_div(arr);

      // // 배열 갱신
      // setArr([...arr]);
    }    
  };

// ==================================================================================================================================================
// =================================================================== Div Event ====================================================================
// ==================================================================================================================================================
  const onDragStart_div_event = (e) => {
    // console.log("==============Div Drag Start=============");  
    //console.log("Node id = " + e.target.parentElement.getAttribute("name") + " / X 좌표 = " + e.clientX + " / 좌표 Y = " + e.clientY);
    //console.log(e.target);
    // e.preventDefault();
    // console.log(drag_node);

    // 마우스 Over 이벤트 발생 => 마우스의 움직임에 따라, onMouseMove 이벤트를 유지한다(onMouseUp이 될 때까지 or onMouseLeave)
    drag_node  = $Mosaic_Arr[parseInt(e.target.parentElement.getAttribute("name"))];
    drag_state = "N";
    drag_bleft = false;
    drop_id    = parseInt(e.target.parentElement.getAttribute("name"));

    // 드래그가 시작된 노드를 기준으로 
    let tmp_p_node  = null;
    let tmp_c_node  = null;
    let tmp_c2_node = null;
    let tmp_el      = null;

    if (drag_node.p_id !== null) {
      tmp_p_node = $Mosaic_Arr[drag_node.p_id];

      // Drag Node가 L인지 R인지 체크
      if (tmp_p_node.left.id === drag_node.id) {
        tmp_c_node  = tmp_p_node.right;
        tmp_c2_node = tmp_p_node.left;
      } else {
        tmp_c_node  = tmp_p_node.left;
        tmp_c2_node = tmp_p_node.right;
      }

      // 1. 형제 노드의 크기를 부모 노드의 크기만큼 늘려서 Arr[] 에 넣어주고
      bst.copy_inset(tmp_p_node, tmp_c_node);
      tmp_c_node.ratio  = 100;
      tmp_c2_node.ratio = 0;

      // 2. 형제 노드의 Element의 inset 값도 강제로 바꿔주고
      // tmp_el = document.getElementsByName(tmp_c_node.id);
      tmp_el = document.getElementsByName(tmp_c_node.id);
      tmp_el[0].style.inset = `${tmp_p_node.inset_top}% ${tmp_p_node.inset_right}% ${tmp_p_node.inset_bottom}% ${tmp_p_node.inset_left}%`;
      
      // 3. 바도 감추고
      tmp_el = document.getElementsByName(tmp_p_node.id);
      tmp_el[0].style.display = 'none';

      // 4. 자신도 감춘다.
      tmp_el = document.getElementsByName(drag_node.id);
      tmp_el[0].style.zIndex = "2";
      // tmp_el[0].style.pointerEvents = false;
      tmp_el[0].style.opacity = "0";
    }
  }

  const onDragenter_div_event = (e) => {
    let tmp_target = null;

    if (drag_node === null) {
      return false;
    };

    // console.log("==============Div enter=============");  
    // e.preventDefault();

    // drop_id가 -1이 아니고 나 자신이 아닐때 drag_node의 zindex를 뒤로 보낸다!
    if ((drop_id !== -1) || (drop_id !== drag_node.id)) {
      let tmp_el = document.getElementsByName(drag_node.id);
      tmp_el[0].style.zIndex = "0";
    }

    // drag_node이면 제외하고 재계산 해줘야한다.
    $Mosaic_Arr.forEach(tmp_node => {
      // if (tmp_node.p_id !== tmp_p_node.id) {
      // if (tmp_node.p_id !== arr[drag_node.p_id].id) 
      {
        // 인자가 부모 노드이면(= 노드타입이 P인 경우, 하위 노드의 inset 값을 재조정함. 하위 노드가 P인 경우도 마찬가지)
        if (tmp_node.node_type === "P") {
          let tmp_left  = tmp_node.left;
          let tmp_right = tmp_node.right;
  
          // inset OverWrite
          bst.copy_inset(tmp_node, tmp_left);
          bst.copy_inset(tmp_node, tmp_right);
  
          // 부모의 분할 타입에 따라, 부모 대비 자식의 비율을 inset 값에 재조정해준다.
          if (tmp_node.div_type === "C") {
            // C = Col = 가로 = left / right
            let tmp_width = (100 - (tmp_node.inset_left + tmp_node.inset_right));
  
            tmp_left.inset_right = tmp_left.inset_right + (tmp_width * ((100 - tmp_left.ratio)  / 100));
            tmp_right.inset_left = tmp_right.inset_left + (tmp_width * ((100 - tmp_right.ratio) / 100)); //tmp_right.ratio / 100));
          } else {
            // R = Row = 세로 = top / bottom
            let tmp_height = (100 - (tmp_node.inset_top + tmp_node.inset_bottom));
  
            tmp_left.inset_bottom = tmp_left.inset_bottom + (tmp_height * ((100 - tmp_left.ratio)  / 100));
            tmp_right.inset_top   = tmp_right.inset_top   + (tmp_height * ((100 - tmp_right.ratio) / 100)); //tmp_right.ratio / 100));
          }
        }
      }
    });

    // console.log('inset 재계산 이후');
    // console.log(arr);

    let tmp_el = null;
    $Mosaic_Arr.forEach(tmp_node => {
      // 인자가 부모 노드이면(= 노드타입이 C인 경우, 화면에 출력
      if        (tmp_node.node_type === "C") {
        tmp_el = document.getElementsByName(tmp_node.id);
        tmp_el[0].style.inset = `${tmp_node.inset_top}% ${tmp_node.inset_right}% ${tmp_node.inset_bottom}% ${tmp_node.inset_left}%`;
      } else if (tmp_node.node_type === "P") {
        tmp_el = document.getElementsByName(tmp_node.id);
        tmp_el[0].style.inset = `${tmp_node.right.inset_top}% ${tmp_node.right.inset_right}% ${tmp_node.right.inset_bottom}% ${tmp_node.right.inset_left}%`;
      }
    });

    tmp_target = find_target(e.target);
    
    // 마우스 Over 이벤트 발생 => 마우스의 움직임에 따라, onMouseMove 이벤트를 유지한다(onMouseUp이 될 때까지 or onMouseLeave)
    if (tmp_target != null){
      // console.log(tmp_target);
      // console.log("현재 타깃 명 = " + tmp_target.getAttribute("name"));
      drop_id = parseInt(tmp_target.getAttribute("name"));
    } else {
      if (e.target.getAttribute("name") === "root") {
        // console.log("현재 타깃 ID = " + e.target.id);
        drop_id = parseInt(e.target.id);
      };
    };
  };

  const onDragOver_div_event = (e) => {
    let shadow_div = document.getElementById("shadow");
    let tmp_node   = null;
    let tmp_target = null;
    
    if (drag_node === null) {
      return false;
    }

    // 마우스 Over 이벤트 발생 => 마우스의 움직임에 따라, onMouseMove 이벤트를 유지한다(onMouseUp이 될 때까지 or onMouseLeave)
    // console.log("==============Drag Over=============");
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";

    tmp_target = find_target(e.target);
    // console.log("aaaa = " + tmp_target);

    if (tmp_target != null){
      tmp_node = $Mosaic_Arr[parseInt(tmp_target.getAttribute("name"))];
    } else {
      if (e.target.getAttribute("name") === "root") {
        tmp_node = $Mosaic_Arr[parseInt(e.target.id)];
      };
    };    
    // console.log(tmp_node);
    // console.log(`현재 타깃 = $tmp_target`);

    let tmp_tree   = document.getElementById("div_tree").offsetWidth;
    let tmp_title  = document.getElementById("div_mosaic_menubar").offsetHeight;
    let tmp_width  = document.getElementById("div_mosaic_body").offsetWidth;
    let tmp_height = document.getElementById("div_mosaic_body").offsetHeight;
    
    let point_x      = PercentToPx(tmp_width,  tmp_node.inset_left);
    let point_y      = PercentToPx(tmp_height, tmp_node.inset_top);
    let point_width  = PercentToLength(tmp_width,  tmp_node.inset_left, tmp_node.inset_right);
    let point_height = PercentToLength(tmp_height, tmp_node.inset_top,  tmp_node.inset_bottom);

    // console.log("==============Drag Over=============");
    // console.log("Node id = " + e.target.parentElement.getAttribute("name") + " / X 좌표 = " + e.clientX + " / 좌표 Y = " + e.clientY);
    //console.log(e.target);

    // 마우스 움직임에 따른 이벤트 
    // target의 영역 기준으로 마우스 좌표가 9등분 중에 어디에 속해있는지 확인해야한다.
    // Left(x) / Top(y) / Width(px) / Height(px)을 입력하면 LT ~ RB(1 ~ 9) 중에 어디인지 반환해준다.
    let tmp_width_length  = (point_width  * 0.33);
    let tmp_height_length = (point_height * 0.33);

    let result_X = Position_Check((e.clientX - tmp_tree),  point_x, tmp_width_length);
    let result_Y = Position_Check((e.clientY - tmp_title), point_y, tmp_height_length);    

    // point_width 의 위치를 찾고, 결정한다.
    let tmp_position = Position_Fix(result_X, result_Y);
    // console.log(tmp_position);

    // 겹치는 부분이 있으면 좀 다르게 처리해야함.
    if        (tmp_position === "LT") {
      if (drag_state !== "T") {drag_state = "L"}
    } else if (tmp_position === "RT") {
      if (drag_state !== "T") {drag_state = "R"}
    } else if (tmp_position === "LB") {
      if (drag_state !== "B") {drag_state = "L"}
    } else if (tmp_position === "RB") {
      if (drag_state !== "B") {drag_state = "R"}
    } else                    {drag_state = tmp_position}

    if ((tmp_position === "L") || (tmp_position === "T")){drag_bleft = true}
    else                                                 {drag_bleft = false}
    // console.log(drag_state);

    // console.log("여기까지");

    // 현재 마우스의 X, Y 좌표에 따라, 어떤 구역에 속해있는지 확인해서 쉐도우 DIV를 뿌려준다.
    switch (drag_state) {
      case "T":
        shadow_div.style.inset = `${tmp_node.inset_top}% ${tmp_node.inset_right}% ${tmp_node.inset_bottom + ((100 - (tmp_node.inset_top + tmp_node.inset_bottom)) / 2)}% ${tmp_node.inset_left}%`;
        break;
      case "R":
        shadow_div.style.inset = `${tmp_node.inset_top}% ${tmp_node.inset_right}% ${tmp_node.inset_bottom}% ${tmp_node.inset_left + ((100 - (tmp_node.inset_left + tmp_node.inset_right)) / 2)}%`;
        break;
      case "B":
        shadow_div.style.inset = `${tmp_node.inset_top + ((100 - (tmp_node.inset_top + tmp_node.inset_bottom)) / 2)}% ${tmp_node.inset_right}% ${tmp_node.inset_bottom}% ${tmp_node.inset_left}%`;
        break;
      // default: // L
      case "L":
        shadow_div.style.inset = `${tmp_node.inset_top}% ${tmp_node.inset_right + ((100 - (tmp_node.inset_left + tmp_node.inset_right)) / 2)}% ${tmp_node.inset_bottom}% ${tmp_node.inset_left}%`;
        break;
    }          
    shadow_div.style.display = 'block';
    shadow_div.style.zIndex  = "100";

    // console.log(tmp_position);
    // console.log(drag_state);
    // console.log(drag_bleft);
  }  

  const onDragEnd_div_event = (e) => {  
    if (drag_node === null) {
      return false;
    }
    // e.preventDefault();

    let shadow_div = document.getElementById("shadow");

    // console.log("DragEnd");
    shadow_div.style.display = 'none';
    shadow_div.style.zIndex  = "-1";

    // console.log("==============Drop=============");
    // console.log("Node id = " + drop_id);
    // console.log("Node id = " + e.target.parentElement.getAttribute("name") + " / X 좌표 = " + e.clientX + " / 좌표 Y = " + e.clientY);
    // console.log(e.target.parentElement);
    // console.log(e.target.parentElement.getAttribute("name"));

    //if (e.target.tagName !== "BUTTON") {
    if (drag_node.id !== drop_id) {
      // 위치에 따라, Col | Row   /   Left | Right 를 지정하여 Insert / remove 해줘야한다.
      const change_result = bst.change($Mosaic_Arr[drop_id], $Mosaic_Arr.length, drag_node, drag_state, drag_bleft);

      if (change_result) {
        idx = idx + 2;
        // node_text_idx = node_text_idx + 1;

        // arr = [...arr];
        // Mosaic_Arr.set([...arr]);

        //arr.push(tmp_node);
        // arr.push(change_result[0]);
        // arr.push(change_result[1]);
        $Mosaic_Arr.push(change_result[0]);
        $Mosaic_Arr.push(change_result[1]);
        // arr = arr;
        // Mosaic_Arr.update(a => [...a, change_result[0], change_result[1]]);
        $Mosaic_Arr = $Mosaic_Arr;
        // setArr([...arr, change_result[0], change_result[1]]);
      };

      // 기존 배열에서 inset 값을 변경 후 가져와야한다.
      if ($Mosaic_Arr[$Mosaic_Arr[$Mosaic_Arr[drag_node.id].p_id].p_id]) {
        bst.remove($Mosaic_Arr[$Mosaic_Arr[$Mosaic_Arr[drag_node.id].p_id].p_id], $Mosaic_Arr[$Mosaic_Arr[drag_node.id].p_id], $Mosaic_Arr[drag_node.id]);
      } else {
        bst.remove(null, $Mosaic_Arr[$Mosaic_Arr[drag_node.id].p_id], $Mosaic_Arr[drag_node.id]);
      } 
      // drag_node = null;
      // inset 재조정
      bst.resize_div($Mosaic_Arr);

      // console.log("==============Drop after Log=============");
      // console.log(drag_node);
      // console.log(drag_state);
      // console.log(drag_bleft);
      // console.log(arr);

      // 배열 갱신
      // setArr([...arr]);
			$Mosaic_Arr = $Mosaic_Arr;
    }
    //}
    drag_node  = null;
    drag_state = "N";
    drag_bleft = false;
    drop_id    = -1;
  }

	if (bst.root == null) {
		// console.log("===========Root 생성===========");
    // bst.root = new Node(idx, "N", "C", "windows " + (node_text_idx + 1), 0, 0, 0, 0, 100);
    bst.root = new Node(idx, "N", "C", "None", 0, 0, 0, 0, 100);
    $Mosaic_Arr = [bst.root];
    // setArr([bst.root]);
		//arr.push(bst.root);
    node_text_idx = node_text_idx + 1;

    // // 기본 모자이크 생성 1
    // // 0을 1|2로 Div 추가하기
    // const insert1_result = bst.insert($Mosaic_Arr[0], $Mosaic_Arr.length, node_text_idx);

    // if (insert1_result) {
    //   //arr.push(insert_result[0]);
    //   //arr.push(insert_result[1]);
    //   idx = idx + 2;
    //   node_text_idx = node_text_idx + 1;

    //   insert1_result[0].node_text = "Bar Chart";
    //   insert1_result[1].node_text = "2";

    //   // setArr([...arr, insert_result[0], insert_result[1]]);
		// 	// Mosaic_Arr.update(a => [...a, insert1_result[0], insert1_result[1]]);

    //   $Mosaic_Arr.push(insert1_result[0]);
    //   $Mosaic_Arr.push(insert1_result[1]);

    //   $Mosaic_Arr = $Mosaic_Arr;
    // };

    // // 기본 모자이크 생성 2
    // // 0을 1|2로 Div 추가하기
    // const insert2_result = bst.insert($Mosaic_Arr[1], $Mosaic_Arr.length, node_text_idx);

    // if (insert2_result) {
    //   //arr.push(insert_result[0]);
    //   //arr.push(insert_result[1]);
    //   idx = idx + 2;
    //   node_text_idx = node_text_idx + 1;

    //   // insert1_result[0].node_text = "3";
    //   // insert1_result[1].node_text = "4";

    //   // setArr([...arr, insert_result[0], insert_result[1]]);
		// 	// Mosaic_Arr.update(a => [...a, insert2_result[0], insert2_result[1]]);
    //   $Mosaic_Arr.push(insert2_result[0]);
    //   $Mosaic_Arr.push(insert2_result[1]);
    //   $Mosaic_Arr = $Mosaic_Arr;
    // };

    // // 2 -> 3 자리 변경
    // // 위치에 따라, Col | Row   /   Left | Right 를 지정하여 Insert / remove 해줘야한다.
    // const change_result = bst.change($Mosaic_Arr[3], $Mosaic_Arr.length, $Mosaic_Arr[2], "R", false);

    // if (change_result) {
    //   idx = idx + 2;
    //   // node_text_idx = node_text_idx + 1;

    //   $Mosaic_Arr[4].node_text   = "Grid";
    //   change_result[0].node_text = "Bar Chart";
    //   change_result[1].node_text = "Line Chart";

    //   $Mosaic_Arr[4].host_List   = [1,2,3,4,5,6,7,8,9,10];
    //   change_result[0].host_List   = [1,2,3,4,5,6,7,8,9,10];
    //   change_result[1].host_List   = [1,2,3,4,5,6,7,8,9,10];

    //   $Mosaic_Arr.push(change_result[0]);
    //   $Mosaic_Arr.push(change_result[1]);
    //   // setArr([...arr, change_result[0], change_result[1]]);
    // };

    // // 기존 배열에서 inset 값을 변경 후 가져와야한다.
    // if ($Mosaic_Arr[$Mosaic_Arr[$Mosaic_Arr[$Mosaic_Arr[2].id].p_id].p_id]) {
    //   bst.remove($Mosaic_Arr[$Mosaic_Arr[$Mosaic_Arr[2].p_id].p_id], $Mosaic_Arr[$Mosaic_Arr[2].p_id], $Mosaic_Arr[2]);
    // } else {
    //   bst.remove(null, $Mosaic_Arr[$Mosaic_Arr[2].p_id], $Mosaic_Arr[2]);
    // };
    // // drag_node = null;
    // // inset 재조정
    // bst.resize_div($Mosaic_Arr);
    // // console.log($Mosaic_Arr);
		// // console.log('------------Mosaic.svelte');
    
    // Data_Infos_Refresh();
	};
</script>

<!-- {#each arr as list}
	<div>{list.div_type}</div>
{/each} -->

<!--  on:dragover={onDragOver_div_event} on:dragend={onDragEnd_div_event} on:dragenter={onDragenter_div_event} -->
<!-- HTML 태그 -->

<!-- {console.log("반복문 진행")} -->
<!-- {console.log(arr)} -->

{#each $Mosaic_Arr as item, index}
	<!-- {console.log(item)} -->
  <!-- {arr[5].arr_Data} -->
	
  <!-- <li>{i + 1} : {item.div_type}</li>  -->
	<!-- Node_Type = P 이면, 부모 타입 이므로, 자식 노드에 관련된 노드를 느려야한다. -->
	{#if item.node_type === "P"}
		<!-- 부모 Node가 없을 때 => Root -->
		{#if item.p_id == null}
			<div
				class="div_Main_Background" name="root" id={item.id} on:dragover={onDragOver_div_event} on:dragend={onDragEnd_div_event} on:dragenter={onDragenter_div_event}
				style="inset: 0%">
			</div>
		{/if}

    <!-- P 타입은 부모이므로, 자식을 반드시 소유한다. 따라서, Div Type에 따라 세로선/가로선이 반드시 존재한다. -->
    {#if item.div_type === "C"}
			<div 
				class="div_Col" name={item.id} draggable="true" on:mousedown={onMouseDown_bar_event}
				style={"inset: " + `${item.right.inset_top}% ${item.right.inset_right}% ${item.right.inset_bottom}% ${item.right.inset_left}%`}>
			</div>
		{:else if item.div_type === "R"}
			<div 
				class="div_Row" name={item.id} draggable="true" on:mousedown={onMouseDown_bar_event}
				style={"inset: " + `${item.right.inset_top}% ${item.right.inset_right}% ${item.right.inset_bottom}% ${item.right.inset_left}%`}>
			</div>
		{/if}

		<!-- Left, Right Node가 자식노드 타입이면 화면에 표시해준다 -->
		{#if item.left.node_type === "C"}
			<div
				class="div_Background" name={item.left.id} on:dragover={onDragOver_div_event} on:dragend={onDragEnd_div_event} on:dragenter={onDragenter_div_event}
				style={"inset: " + `${item.left.inset_top}% ${item.left.inset_right}% ${item.left.inset_bottom}% ${item.left.inset_left}%`}
			>
				<div class="div_Title" draggable="true" on:dragstart={onDragStart_div_event}>
          <!-- <button style="width: 100px;" on:click={Set_Random_Data} id={item.left.id}>자동변경 시작</button> -->
          <select bind:value={item.left.node_text} id={item.left.id} on:change={Set_Data_Info(item.left)}>
            {#each component_type as type}
              <option value={type.text}>
                {type.text}
              </option>
            {/each}
          </select>
					<button on:click={Add_Div} id={item.left.id}>추가</button>
					<button on:click={()=>{Del_Div(item.left)}}>삭제</button>
          <!-- <button on:click={Changes}>변경</button> -->
				</div>
        <div class="div_Body">
          <!-- {item.left.node_text} -->
          {#if      (item.left.node_text == "Grid")}
            <Grid data={item.left.arr_Data} />
          {:else if (item.left.node_text == "Bar Chart")}
            <Bar_Chart data={item.left.arr_Data} />
          {:else if (item.left.node_text == "Line Chart")}
            <Line_Chart data={item.left.arr_Data} />
          {:else if (item.left.node_text == "Pie Chart")}
            <Pie_Chart  data={item.left.arr_Data} />
          {/if}
        </div>
			</div>
		{/if}
		{#if item.right.node_type === "C"}
			<div
			class="div_Background" name={item.right.id} on:dragover={onDragOver_div_event} on:dragend={onDragEnd_div_event} on:dragenter={onDragenter_div_event}
			style={"inset: " + `${item.right.inset_top}% ${item.right.inset_right}% ${item.right.inset_bottom}% ${item.right.inset_left}%`}
			>
				<div class="div_Title" draggable="true" on:dragstart={onDragStart_div_event}>
          <!-- <button style="width: 100px;" on:click={Set_Random_Data} id={item.right.id}>자동변경 시작</button> -->
          <select bind:value={item.right.node_text} id={item.right.id} on:change={Set_Data_Info(item.right)}>
            {#each component_type as type}
              <option value={type.text}>
                {type.text}
              </option>
            {/each}
          </select>
					<button on:click={Add_Div} id={item.right.id}>추가</button>
					<button on:click={()=>{Del_Div(item.right)}}>삭제</button>
				</div>
        <div class="div_Body">
          {#if      (item.right.node_text == "Grid")}
            <Grid data={item.right.arr_Data} />
          {:else if (item.right.node_text == "Bar Chart")}
            <Bar_Chart data={item.right.arr_Data} />
          {:else if (item.right.node_text == "Line Chart")}
            <Line_Chart data={item.right.arr_Data} />
          {:else if (item.right.node_text == "Pie Chart")}
            <Pie_Chart  data={item.right.arr_Data} />
          {/if}
        </div>
			</div>
		{/if}
	{:else if (item.div_type === "N" && item.node_type !== "D" && item.p_id == null)}
		<div
			class="div_Main_Background" name="root" id={item.id} on:dragover={onDragOver_div_event} on:dragend={onDragEnd_div_event} on:dragenter={onDragenter_div_event}
			style={"inset: "+`0%`}>
		</div>
		<div
			class="div_Background" name={item.id} on:dragover={onDragOver_div_event} on:dragend={onDragEnd_div_event} on:dragenter={onDragenter_div_event}
			style={"inset: " + `${item.inset_top}% ${item.inset_right}% ${item.inset_bottom}% ${item.inset_left}%`}
		>
			<div class="div_Title" style={"cursor: " + 'default'}>
        <!-- <button style="width: 100px;" on:click={Set_Random_Data} id={item.id}>자동변경 시작</button> -->
        <select bind:value={item.node_text} id={item.id} on:change={Set_Data_Info(item)}>
          {#each component_type as type}
            <option value={type.text}>
              {type.text}
            </option>
          {/each}
        </select>
				<button on:click={Add_Div} id={item.id}>추가</button>
				<button on:click={()=>{Del_Div(item)}}>삭제</button>
			</div>
			<div class="div_Body">
        {#if      (item.node_text == "Grid")}
          <Grid data={item.arr_Data} />
        {:else if (item.node_text == "Bar Chart")}
          <Bar_Chart data={item.arr_Data} />
        {:else if (item.node_text == "Line Chart")}
          <Line_Chart data={item.arr_Data} />
        {:else if (item.node_text == "Pie Chart")}
          <Pie_Chart  data={item.arr_Data} />
        {/if}
      </div>
		</div>
  {/if}
{/each} 



<!-- export default Mosaic; -->