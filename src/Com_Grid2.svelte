<script>
  export let data = [
    { name: "", email: "", col1: "" , col2: "" , col3: "" , col4: "" , col5: "" , col6: "" , col7: "" , col8: "" , col9: "" , col10: "" }
  ];

  const default_data = [
    { name: "", email: "", col1: "" , col2: "" , col3: "" , col4: "" , col5: "" , col6: "" , col7: "" , col8: "" , col9: "" , col10: ""}
  ];  

  // if (data.length == 0) {
  //   data = [...default_data];
  // };

	$:{data.length === 0 ? data = default_data : null};	  

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
      <div class="row_cell">{item.name}</div>
      <div class="row_cell">{item.email}</div>
      <div class="row_cell">{item.col1}</div>
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

    background-color: midnightblue;
    display: flex;
    /* white-space: nowrap; */
    /* overflow: auto; */
  }

  .header_cell {
    width: 100px;
    height: 30px;
    min-width: 100px;

    justify-content: center;
    align-items: center;

    background-color: deeppink;
  }

  .row_body {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .row_div {
    position: relative;
    background-color: darkmagenta;
    display: flex;  
  }

  .row_cell {
    height: 30px;
    min-width: 100px;

    justify-content: center;
    align-items: center;

    background-color: lightskyblue;
    display: flex;
  }

</style>