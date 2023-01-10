<script>
  export let data = [
    { hostname: "-", email: "-", 
      col1: 0,     col2: 0,     col3: "-" ,  col4: "-" ,  col5: "-" ,  col6: "-" ,  col7: "-" ,  col8: "-" ,  col9: "-" ,  col10: "-", 
      col11: "-" , col12: "-" , col13: "-" , col14: "-" , col15: "-" , col16: "-" , col17: "-" , col18: "-" , col19: "-" , col20: "-" , 
      col21: "-" , col22: "-" , col23: "-" , col24: "-" , col25: "-" , col26: "-" , col27: "-" , col28: "-" , col29: "-" , col30: "-"  
    }
  ];

  const default_data = [
  { hostname: "-", email: "-", 
    col1: 0,     col2: 0,     col3: "-" ,  col4: "-" ,  col5: "-" ,  col6: "-" ,  col7: "-" ,  col8: "-" ,  col9: "-" ,  col10: "-", 
    col11: "-" , col12: "-" , col13: "-" , col14: "-" , col15: "-" , col16: "-" , col17: "-" , col18: "-" , col19: "-" , col20: "-" , 
    col21: "-" , col22: "-" , col23: "-" , col24: "-" , col25: "-" , col26: "-" , col27: "-" , col28: "-" , col29: "-" , col30: "-"  
  }
  ];  

  // if (data.length == 0) {
  //   data = [...default_data];
  // };

	$:{data.length === 0 ? data = default_data : null};
  // $:{isNaN(document.getElementById("width_bar").offsetWidth) == false ? tmp_width = document.getElementById("width_bar").offsetWidth : 0};

  // const data = [
  //   { name: "John", email: "john@example.com", col1: "가", col2: "A", col3: "a", col4: "1", col5: arr1, col6: arr1[0], col7: arr1[1], col8: "1", col9: "1", col10: "1"},
  //   { name: "Mark", email: "mark@gmail.com", col1: "나", col2: "B", col3: "b", col4: "2", col5: arr1, col6: arr1[0], col7: arr1[1], col8: "2", col9: "2", col10: "2"},
  //   { name: "John", email: "mark@gmail.com", col1: "나", col2: "B", col3: "b", col4: "2", col5: arr1[0], col6: arr1[0], col7: arr1[1], col8: "3", col9: "3", col10: "3"},
  //   { name: "John", email: "mark@gmail.com", col1: "나", col2: "B", col3: "b", col4: "2", col5: arr1[0], col6: arr1[0], col7: arr1[1], col8: "4", col9: "4", col10: "4"},
  //   { name: "John", email: "mark@gmail.com", col1: "나", col2: "B", col3: "b", col4: "2", col5: arr1[0], col6: arr1[0], col7: arr1[1], col8: "5", col9: "5", col10: "5"},
  //   { name: "John", email: "mark@gmail.com", col1: "나", col2: "B", col3: "b", col4: "2", col5: arr1[0], col6: arr1[0], col7: arr1[1], col8: "6", col9: "6", col10: "6"},
  //   { name: "John", email: "mark@gmail.com", col1: "나", col2: "B", col3: "b", col4: "2", col5: arr1[0], col6: arr1[0], col7: arr1[1], col8: "7", col9: "7", col10: "7"},
  // ]
</script>

<!-- Grid -->
<div class="div_Grid">
  <!-- 헤더 -->
  <div class="header_div">
    <!-- Col 1 ~ n -->
    <div class="header_cell">name</div>
    <div class="header_cell">email</div>
    <div class="header_cell">col1</div>
    <div class="header_cell">col2</div>
    <div class="header_cell">col3</div>
    <div class="header_cell">col4</div>
    <div class="header_cell">col5</div>
    <div class="header_cell">col6</div>
    <div class="header_cell">col7</div>
    <div class="header_cell">col8</div>
    <div class="header_cell">col9</div>
    <div class="header_cell">col10</div>
    <div class="header_cell">col11</div>
    <div class="header_cell">col12</div>
    <div class="header_cell">col13</div>
    <div class="header_cell">col14</div>
    <div class="header_cell">col15</div>
    <div class="header_cell">col16</div>
    <div class="header_cell">col17</div>
    <div class="header_cell">col18</div>
    <div class="header_cell">col19</div>
    <div class="header_cell">col20</div>
    <div class="header_cell">col21</div>
    <div class="header_cell">col22</div>
    <div class="header_cell">col23</div>
    <div class="header_cell">col24</div>
    <div class="header_cell">col25</div>
    <div class="header_cell">col26</div>
    <div class="header_cell">col27</div>
    <div class="header_cell">col28</div>
    <div class="header_cell">col29</div>
    <div class="header_cell">col30</div>
  </div>
  {#each data as item, index}
    <!-- {console.log(index)} -->
    <div class="row_div">
      <div class="row_cell">{item.hostname}</div>
      <div class="row_cell">{item.email}</div>
      <div class="row_cell" id="width_bar">
        <div style='width: 40px; height: 100%;'>{item.col1}%</div>

        <div class="div_width_bar" style={`width: calc(100% - 40px); height: 100%; border-color: white; border-width: 1px; border-style: double;`}>
          <div style='width: {item.col1}%; background-color: rgb(112, 118, 194); height: 100%; max-width: 100%'></div>
        </div>
      </div>
      <div class="row_cell">{item.col2}</div>
      <div class="row_cell">{item.col3}</div>
      <div class="row_cell">{item.col4}</div>
      <div class="row_cell">{item.col5}</div>
      <div class="row_cell">{item.col6}</div>
      <div class="row_cell">{item.col7}</div>
      <div class="row_cell">{item.col8}</div>
      <div class="row_cell">{item.col9}</div>
      <div class="row_cell">{item.col10}</div>
      <div class="row_cell">{item.col11}</div>
      <div class="row_cell">{item.col12}</div>
      <div class="row_cell">{item.col13}</div>
      <div class="row_cell">{item.col14}</div>
      <div class="row_cell">{item.col15}</div>
      <div class="row_cell">{item.col16}</div>
      <div class="row_cell">{item.col17}</div>
      <div class="row_cell">{item.col18}</div>
      <div class="row_cell">{item.col19}</div>
      <div class="row_cell">{item.col20}</div>
      <div class="row_cell">{item.col21}</div>
      <div class="row_cell">{item.col22}</div>
      <div class="row_cell">{item.col23}</div>
      <div class="row_cell">{item.col24}</div>
      <div class="row_cell">{item.col25}</div>
      <div class="row_cell">{item.col26}</div>
      <div class="row_cell">{item.col27}</div>
      <div class="row_cell">{item.col28}</div>
      <div class="row_cell">{item.col29}</div>
      <div class="row_cell">{item.col30}</div>      
    </div>
  {/each}
</div>
<!-- Row -->
  <!-- col 1 ~ n -->

<style>
  .div_Grid{
    width: 100%;
    height: 100%;

    position: relative;
    overflow: auto;
    /* overflow-y: hidden; */
    /* transform: translateZ(0);*/
  }

  .header_div {
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 2;

    background-color: midnightblue;
    display: flex;
    /* white-space: nowrap; */
    /* overflow: auto; */
  }

  .header_cell {
    width: 150px;
    height: 30px;
    min-width: 150px;
    display: flex;

    justify-content: left;
    align-items: center;

    font-family: sans-serif;
    color: white;
    font-weight: 600;
    padding-left: 6px;
    background-color: rgb(85, 84, 84);

    border-color: white;
    border-style: groove;
  }

  .row_div {
    position: relative;
    background-color: black;
    display: flex;  
  }

  .row_cell {
    width: 150px;
    height: 30px;
    min-width: 150px;

    justify-content: left;
    align-items: center;

    font-family: sans-serif;
    color: white;
    background-color: black;
    padding-left: 12px;

    display: flex;
  }

  /* Grid Scroll */
  .div_Grid::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }

  .div_Grid::-webkit-scrollbar-thumb {
    background-color: #404247;
    border-radius: 10px;
  }

  .div_Grid::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }

  .div_Grid::-webkit-scrollbar-button{
    background-color: white;
    width: 16px;
    height: 16px;
    /* display: block; */
    /* border-style: solid; */
  }

  /* 스크롤 버튼 */
  /* Up */
  .div_Grid::-webkit-scrollbar-button:vertical:decrement {
    background-image: url("img/grid_scroll/scroll_up_N.png");
  }
  .div_Grid::-webkit-scrollbar-button:vertical:decrement:hover {
    background-image: url("img/grid_scroll/scroll_up_H.png");
  }

  /* Down */
  .div_Grid::-webkit-scrollbar-button:vertical:increment {
    background-image: url("img/grid_scroll/scroll_down_N.png");
  }  
  .div_Grid::-webkit-scrollbar-button:vertical:increment:hover {
    background-image: url("img/grid_scroll/scroll_down_H.png");
  }  

  /* Left */
  .div_Grid::-webkit-scrollbar-button:horizontal:decrement {
    background-image: url("img/grid_scroll/scroll_left_N.png");
  }
  .div_Grid::-webkit-scrollbar-button:horizontal:decrement:hover {
    background-image: url("img/grid_scroll/scroll_left_H.png");
  }

  /* Right */
  .div_Grid::-webkit-scrollbar-button:horizontal:increment {
    background-image: url("img/grid_scroll/scroll_right_N.png");
  }  
  .div_Grid::-webkit-scrollbar-button:horizontal:increment:hover {
    background-image: url("img/grid_scroll/scroll_right_H.png");
  }  



  /* Left */
  /* .div_Grid::-webkit-scrollbar-button::decrement {
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent #404247 transparent;
  } */
  /* .div_Grid::-webkit-scrollbar-button:horizontal:decrement:hover {
    border-color: transparent transparent #777777 transparent;
  } */

  /* Right */
  /* .div_Grid:-webkit-scrollbar-button:horizontal:increment {
    border-width: 8px 8px 0 8px;
    border-color: #404247 transparent transparent transparent;
  } */
  /* .div_Grid::-webkit-scrollbar-button:horizontal:increment:hover {
    border-color: #777777 transparent transparent transparent;
  }     */
</style>