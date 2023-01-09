<script>
  export let data = [
    { hostname: "-", email: "-", col1: 0, col2: 0, col3: "-" , col4: "-" , col5: "-" , col6: "-" , col7: "-" , col8: "-" , col9: "-" , col10: "-" }
  ];

  const default_data = [
    { hostname: "-", email: "-", col1: 0, col2: 0, col3: "-" , col4: "-" , col5: "-" , col6: "-" , col7: "-" , col8: "-" , col9: "-" , col10: "-"}
  ];  
  let tmp_width = 60;

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
  </div>
  {#each data as item, index}
    <!-- {console.log(index)} -->
    <div class="row_div">
      <div class="row_cell">{item.hostname}</div>
      <div class="row_cell">{item.email}</div>
      <div class="row_cell" id="width_bar">
        <div style='width: 40px; height: 100%;'>{item.col1}%</div>

        <div class="div_width_bar" style={`width: calc(100% - 40px); height: 100%;`}>
          <div style='width: {item.col1}%; background-color: rgb(130, 164, 120); height: 100%;'></div>
        </div>

        <!-- {#if isNaN(document.getElementById("width_bar").offsetWidth) > 0 }
          {tmp_width = document.getElementById("width_bar").offsetWidth}
        style={"inset: " + `${item.right.inset_top}% ${item.right.inset_right}% ${item.right.inset_bottom}% ${item.right.inset_left}%`}>
          <div class="div_width_bar" style={"width: " + `${tmp_width}}'width: "{{tmp_width}}"; height: 100%;'>
            
          </div>
        style={`left: calc(78% + ${hoverButton}%)`}

          {/if} -->

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

    /* justify-content: center; */
    align-items: center;

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

  .div_width_bar {
    width: calc(var(--tmp_width) - 40);
  }

</style>