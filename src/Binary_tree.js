// class Node {
  import { Mosaic_Arr } from './store.js';  

  export class Node {
    constructor(
      id,                           // 자신의 ID
      div_type = "N",               // DIV 표시 방식(None / Col / Row)
      node_type = "C",              // 노드 타입(Disable / Parent / Child )
      node_text = "None",           // Body Text -> Chart Type
      inset_top = 0,
      inset_right = 0,
      inset_bottom = 0,
      inset_left = 0,
      ratio = 50,
  
      p_id = null,
      left = null,
      right = null,
      arr_Data = [],
      host_List = []
    ) {
      this.id = id;
      this.div_type = div_type;
      this.node_type = node_type;
      this.node_text = node_text;
  
      this.inset_top = inset_top;
      this.inset_right = inset_right;
      this.inset_bottom = inset_bottom;
      this.inset_left = inset_left;
      this.ratio = ratio;
  
      this.p_id = p_id;
      this.left = left;
      this.right = right;
      this.arr_Data = arr_Data;
      this.host_List = host_List;

      this.t_timer;
      this.t_counter = 0;
    };


    // Grid Data Random 생성
    create_grid_data(counter) {
      let tmp_data = [];

      for (let i = 0; i < 500; i++) {
        tmp_data.push(
          {
            hostname: "data_" + parseInt(i+counter),
            email: "data_" + parseInt(i+counter) + "@email.com",
            col1: parseInt(i+counter),
            col2: parseInt(i+counter),
            col3: "A" + parseInt(i+counter),
            col4: "B" + parseInt(i+counter),
            col5: "C" + parseInt(i+counter),
            col6: "D" + parseInt(i+counter),
            col7: "E" + parseInt(i+counter),
            col8: "F" + parseInt(i+counter),
            col9: "G" + parseInt(i+counter),
            col10: "H" + parseInt(i+counter),
            col11: "I" + parseInt(i+counter),
            col12: "J" + parseInt(i+counter),
            col13: "K" + parseInt(i+counter),
            col14: "L" + parseInt(i+counter),
            col15: "M" + parseInt(i+counter),
            col16: "N" + parseInt(i+counter),
            col17: "O" + parseInt(i+counter),
            col18: "P" + parseInt(i+counter),
            col19: "Q" + parseInt(i+counter),
            col20: "R" + parseInt(i+counter),
            col21: "S" + parseInt(i+counter),
            col22: "T" + parseInt(i+counter),
            col23: "U" + parseInt(i+counter),
            col24: "V" + parseInt(i+counter),
            col25: "W" + parseInt(i+counter),
            col26: "X" + parseInt(i+counter),
            col27: "Y" + parseInt(i+counter),
            col28: "Z" + parseInt(i+counter),
            col29: "a" + parseInt(i+counter),
            col30: "b" + parseInt(i+counter)
          },
        );
      }

      return tmp_data;
    }

    // Bar Chart Data Random 생성
    create_bar_data(counter) {
      let tmp_data = [];

      for (let i = 0; i < 10; i++) {
        if (((i*10)+counter) == 0) {
          tmp_data.push(
            {
              host: (i),
              value1: 0,
              value2: 0
            },
          );
        } else {
          tmp_data.push(
            {
              host: (i),
              value1: (i*5)+counter,
              value2: (i*10)+counter,
            },
          );
        }
        // 	{ year: 1990, birthrate: 16.7 },
      }
      // console.log(tmp_data);
      return tmp_data;
    }

    // Line Chart Data Random 생성
    create_line_data(counter) {
      let tmp_data = [];

      for (let i = 0; i < 10; i++) {
        if (((i*10)+counter) == 0) {
          tmp_data.push(
            {
              x: (i),
              y: 0,
            },
          );
        } else {
          tmp_data.push(
            {
              x: (i),
              y: (i*10)+counter,
            },
          );
        }
      }
      // console.log(tmp_data);
      return tmp_data;
    }        

    GetRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    }
    
    create_pie_data(counter) {
        return [this.GetRandomInt(0, 100), this.GetRandomInt(0, 100)];
    }

    set_timer() {
      if (this.t_counter >= 9) {
        this.t_counter = 0;
      } else {
        this.t_counter += 1;
      };
      // console.log(this.t_counter);

      clearTimeout(this.t_timer);
      this.t_timer = setTimeout(() => {
        // this.arr_Data = [...this.set_random_data(this.t_counter)];
        this.arr_Data = this.set_random_data(this.t_counter);

        Mosaic_Arr.update(arr => arr);
        // console.log(this.arr_Data);
        // $arr[this.id].arr_Data = 

        // $arr = $arr;
  
        this.set_timer();
      }, 1000);
    };

    set_random_data(counter) {
      let tmp_arr = [];

      // console.log(this.node_text);

      if        (this.node_text == "Grid") {
        tmp_arr =  this.create_grid_data(counter);
      } else if (this.node_text == "Bar Chart") {
        tmp_arr = this.create_bar_data(counter);
      } else if (this.node_text == "Line Chart") {
        tmp_arr = this.create_line_data(counter);
      } else if (this.node_text == "Pie Chart") {
        tmp_arr = this.create_pie_data(counter);
      } else {
        tmp_arr = [];
      }

      // target_node.arr_Data = [...tmp_arr];

      return tmp_arr;
    }        
  }
  
  // function find_node(target_id) {
  //   function searchTree(node) {
  //     if (node.id === target_id) {
  //       // console.log('node.id = ' + node.id);
  //       // console.log('target_id = ' + target_id);
  
  //       return node;
  //     } else {
  //       if (node.left) {
  //         searchTree(node.left);
  //       }
  
  //       if (node.right) {
  //         searchTree(node.right);
  //       }
  //     }
  
  //     console.log('node.id = ' + node.id);
  //     console.log('target_id = ' + target_id);
  //   }
  //   // traverse(this.root);
  //   return null;
  // };
  
  export class Binary_Tree {
    constructor() {
      this.root = null;
    }
  
    // 추가 버튼을 통해 노드 추가 요청이 온다. 이때, 자신의 node_ID(key)를 들고 오기 때문에 Parent ID 또한 알 수 있다.
    // 기존 DIV는 좌(상)에 위치하기 때문에, 추가는 무조건 우(하)에 된다. => Right Node에 Node를 추가함.
    // 그렇다면 Left는 언제 생기냐? 추가 버튼이 눌려서 이벤트가 생성될 때, 해당 Div에 있는 key를 알 수 있으니, 그걸로 Left로 지정한다.
    // Right가 생길 때, Left가 null 일 수는 없다. 이때는 노드 자체를 삭제하고 상위 부모 자리에 Right 노드 정보를 넣어주어야한다.
    insert(parent_node, new_id, text_idx) {
      console.log("===========insert 1회============");
  
      // 부모 node 정보를 불러와서 left, right 로 분류하여 추가해준다.(기존 Left, 신규 Right)
      // const old_node = this.find_node(parent_id);
      const old_node   = parent_node;
      const left_node  = new Node(new_id,     "N", "C",  old_node.node_text, old_node.inset_top, old_node.inset_right, old_node.inset_bottom, old_node.inset_left, 50, old_node.id);
      // const right_node = new Node(new_id + 1, "N", "C", "windows " + (text_idx + 1), old_node.inset_top, old_node.inset_right, old_node.inset_bottom, old_node.inset_left, 50, old_node.id);
      const right_node = new Node(new_id + 1, "N", "C",              "None", old_node.inset_top, old_node.inset_right, old_node.inset_bottom, old_node.inset_left, 50, old_node.id);
  
      // console.log("부모 ID = " + old_node.id);
      // console.log(old_node);
  
      // target 노드를 찾아왔으니, Left Right 값을 입력한다.
      if (old_node) {
        // 화면 너비
        let calc_width  = (100 - (old_node.inset_left + old_node.inset_right))  / 2;
  
        // 화면 높이
        let calc_height = (100 - (old_node.inset_top  + old_node.inset_bottom)) / 2;
  
        // (abs(R - L) > abs(B - T) ?)
        if (calc_width >= calc_height) {
          // 타입변경
          old_node.div_type = "C";
  
          // inset 값 셋팅
          left_node.inset_right = old_node.inset_right + calc_width;
          right_node.inset_left = old_node.inset_left  + calc_width;
        } else {
          // 타입변경
          old_node.div_type = "R";
  
          // inset 값 셋팅
          left_node.inset_bottom = old_node.inset_bottom + calc_height;
          right_node.inset_top   = old_node.inset_top    + calc_height;
        }
  
        // 기존 old도 값을 바꿔주고
        old_node.node_type = "P";
        old_node.node_text = "";
        old_node.host_List = [];
  
        // Left node에 대한 내용 채워주고
        // left_node.node_type = "C";
  
        // Right node에 대한 내용 채워주고
        // right_node.node_type = "C";
  
        // Left | right 입력
        // old_node.left_id  = left_node.id;
        // old_node.right_id = right_node.id;
        left_node.host_List = [1,2,3,4,5,6,7,8,9,10];
        right_node.host_List = [1,2,3,4,5,6,7,8,9,10];

        old_node.left  = left_node;
        old_node.right = right_node;
  
        return [left_node, right_node];//[left_node, left_node, right_node];
      }
      return null;//left_node;//old_node.left;
      // return left_node;//old_node.left;
    }
  
    change(parent_node, new_id, change_node, display_type, bLeft) {
      console.log("===========change 1회============");
  
      // 부모 node 정보를 불러와서 left, right 로 분류하여 추가해준다.(기존 Left, 신규 Right)
      // const old_node = this.find_node(parent_id);
      const old_node   = parent_node;
      const left_node  = new Node(new_id,     "N", "C", "None", 0, 0, 0, 0, 50, old_node.id);
      const right_node = new Node(new_id + 1, "N", "C", "None", 0, 0, 0, 0, 50, old_node.id);
  
      if (bLeft === true) {
        left_node.node_text  = change_node.node_text;
        right_node.node_text = old_node.node_text;

        left_node.host_List  = change_node.host_List;
        right_node.host_List = old_node.host_List;
      } else {
        left_node.node_text  = old_node.node_text;
        right_node.node_text = change_node.node_text;

        left_node.host_List  = old_node.host_List;
        right_node.host_List = change_node.host_List;
      }
  
      // target 노드를 찾아왔으니, Left Right 값을 입력한다.
      if (old_node) {
        // 기존 old도 값을 바꿔주고
        if ((display_type === "L") || (display_type === "R")) {
          old_node.div_type  = "C";
        } else {
          old_node.div_type  = "R";
        }
        old_node.node_type = "P";
        old_node.node_text = "";
        old_node.host_List = [];
  
        // Left | right 입력
        old_node.left  = left_node;
        old_node.right = right_node;
  
        return [left_node, right_node];//[left_node, left_node, right_node];
      }
      return null;//left_node;//old_node.left;
    }
  
  
    // 삭제시, 
    // 자신과 형제노드 - 부모노드 간의 연결을 해제하고
    // 조부모노드와 자신의 정보를 연결해준다.
    remove(grand_node, parent_node, del_node) {
      console.log("===========delete 1회============");    
      // 조부모 노드의 존재 여부에 따라 로직이 달라짐
      if (grand_node) {
  
        // 형제 노드의 p_id를 바꿔준다.
        // 삭제할 노드의 위치가 Left?
        if (parent_node.left.id === del_node.id) {
          parent_node.right.p_id = grand_node.id;
  
          // 부모의 inset 값을 형제노드에 대입해준다.
          this.copy_inset(parent_node, parent_node.right);
          parent_node.right.ratio = parent_node.ratio;
  
          //parent_node.right.node_text    = parent_node.node_text;
  
          // 삭제할 노드의 부모노드가 조부모노드 기준 L? R? 체크
          if (grand_node.left.id === parent_node.id) {
            grand_node.left = parent_node.right;
          } else {
            grand_node.right = parent_node.right;
          }
        } else {
          parent_node.left.p_id = grand_node.id;
  
          // 부모의 inset 값을 형제노드에 대입해준다.
          this.copy_inset(parent_node, parent_node.left);
          parent_node.left.ratio = parent_node.ratio;
          
          //parent_node.left.node_text    = parent_node.node_text;        
  
          // 삭제할 노드의 부모노드가 조부모노드 기준 L? R? 체크
          if (grand_node.left.id === parent_node.id) {
            grand_node.left = parent_node.left;
          } else {
            grand_node.right = parent_node.left;
          }          
        }
      } else {
        // 삭제할 노드의 위치가 Left?
        if (parent_node.left.id === del_node.id) {
          parent_node.right.p_id = null;
  
          // 부모의 inset 값을 형제노드에 대입해준다.
          this.copy_inset(parent_node, parent_node.right);
          parent_node.right.ratio = parent_node.ratio;
  
          //parent_node.right.node_text    = parent_node.node_text;
        } else {
          parent_node.left.p_id = null;
  
          // 부모의 inset 값을 형제노드에 대입해준다.
          this.copy_inset(parent_node, parent_node.left);
          parent_node.left.ratio = parent_node.ratio;
          
          //parent_node.left.node_text    = parent_node.node_text;            
        }
        // // 부모노드와 삭제노드의 Type을 D(Delete)로 바꿔주고 형제노드 정보의 부모ID를 null로 바꾼다.(Root가 된다)
        // // del_node.p_id = -1;
        // del_node.node_type = "D";
  
        // // parent_node.p_id  = -1;
        // // parent_node.div_type = "N";
        // parent_node.node_type = "D";
  
        // parent_node.left  = null;
        // parent_node.right = null;
      }
  
      // 부모노드와 삭제노드의 Type을 D(Delete)로 바꿔주고 형제노드 정보의 부모ID를 null로 바꾼다.(Root가 된다)
      // del_node.p_id = -1;
      del_node.node_type = "D";
  
      // parent_node.p_id  = -1;
      // parent_node.div_type = "N";
      parent_node.node_type = "D";
  
      parent_node.left  = null;
      parent_node.right = null;    
      // this.root = removeNode(this.root, del_id);
      return false; 
    }
  
    copy_inset(tmp_source, tmp_dst) {
      tmp_dst.inset_top    = tmp_source.inset_top;
      tmp_dst.inset_right  = tmp_source.inset_right;
      tmp_dst.inset_bottom = tmp_source.inset_bottom;
      tmp_dst.inset_left   = tmp_source.inset_left;
    }
  
    resize_div(tmp_arr) {
      tmp_arr.forEach(tmp_node => {
        // 인자가 부모 노드이면(= 노드타입이 P인 경우, 하위 노드의 inset 값을 재조정함. 하위 노드가 P인 경우도 마찬가지)
        if (tmp_node.node_type === "P") {
          let tmp_left  = tmp_node.left;
          let tmp_right = tmp_node.right;
  
          // inset OverWrite
          this.copy_inset(tmp_node, tmp_left);
          this.copy_inset(tmp_node, tmp_right);
  
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
  //      console.log(tmp_node);
      });
    }

    // // Grid Data Random 생성
    // create_grid_data(counter) {
    //   let tmp_data = [];

    //   for (let i = 0; i < 7; i++) {
    //     tmp_data.push(
    //       {
    //         name: "data_" + parseInt(i+counter),
    //         email: "data_" + parseInt(i+counter) + "@email.com",
    //         col1: "A" + parseInt(i+counter),
    //         col2: "B" + parseInt(i+counter),
    //         col3: "C" + parseInt(i+counter),
    //         col4: "D" + parseInt(i+counter),
    //         col5: "E" + parseInt(i+counter),
    //         col6: "F" + parseInt(i+counter),
    //         col7: "G" + parseInt(i+counter),
    //         col8: "H" + parseInt(i+counter),
    //         col9: "I" + parseInt(i+counter),
    //         col10: "J" + parseInt(i+counter),
    //       },
    //     );
    //   }

    //   return tmp_data;
    // }

    // // Bar Chart Data Random 생성
    // create_bar_data(counter) {
    //   let tmp_data = [];

    //   for (let i = 0; i < 10; i++) {
    //     if (((i*10)+counter) == 0) {
    //       tmp_data.push(
    //         {
    //           host: (i),
    //           value: 0,
    //         },
    //       );
    //     } else {
    //       tmp_data.push(
    //         {
    //           host: (i),
    //           value: (i*10)+counter,
    //         },
    //       );
    //     }
    //     // 	{ year: 1990, birthrate: 16.7 },
    //   }
    //   // console.log(tmp_data);
    //   return tmp_data;
    // }

    // // Line Chart Data Random 생성
    // create_line_data(counter) {
    //   let tmp_data = [];

    //   for (let i = 0; i < 10; i++) {
    //     if (((i*10)+counter) == 0) {
    //       tmp_data.push(
    //         {
    //           x: (i),
    //           y: 0,
    //         },
    //       );
    //     } else {
    //       tmp_data.push(
    //         {
    //           x: (i),
    //           y: (i*10)+counter,
    //         },
    //       );
    //     }
    //   }
    //   // console.log(tmp_data);
    //   return tmp_data;
    // }        

    // set_random_data(target_node, counter) {
    //   let tmp_arr = [];

    //   console.log(target_node.node_text);

    //   if        (target_node.node_text == "Grid") {
    //     tmp_arr =  this.create_grid_data(counter);
    //   } else if (target_node.node_text == "Bar Chart") {
    //     tmp_arr = this.create_bar_data(counter);
    //   } else if (target_node.node_text == "Line Chart") {
    //     tmp_arr = this.create_line_data(counter);
    //   } else {
    //     tmp_arr = [];
    //   }

    //   // target_node.arr_Data = [...tmp_arr];

    //   return tmp_arr;
    // }
  }