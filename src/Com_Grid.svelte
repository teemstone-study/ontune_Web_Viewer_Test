<script>
  import Grid from "gridjs-svelte"

  let arr1 = ["ㄱ", "ㄴ"];

  const data = [
    { name: "John", email: "john@example.com", col1: "가", col2: "A", col3: "a", col4: "1", col5: arr1, col6: arr1[0], col7: arr1[1], col8: "1", col9: "1", col10: "1"},
    { name: "Mark", email: "mark@gmail.com", col1: "나", col2: "B", col3: "b", col4: "2", col5: arr1, col6: arr1[0], col7: arr1[1], col8: "2", col9: "2", col10: "2"},
    { name: "John", email: "mark@gmail.com", col1: "나", col2: "B", col3: "b", col4: "2", col5: arr1[0], col6: arr1[0], col7: arr1[1], col8: "3", col9: "3", col10: "3"},
    { name: "John", email: "mark@gmail.com", col1: "나", col2: "B", col3: "b", col4: "2", col5: arr1[0], col6: arr1[0], col7: arr1[1], col8: "4", col9: "4", col10: "4"},
    { name: "John", email: "mark@gmail.com", col1: "나", col2: "B", col3: "b", col4: "2", col5: arr1[0], col6: arr1[0], col7: arr1[1], col8: "5", col9: "5", col10: "5"},
    { name: "John", email: "mark@gmail.com", col1: "나", col2: "B", col3: "b", col4: "2", col5: arr1[0], col6: arr1[0], col7: arr1[1], col8: "6", col9: "6", col10: "6"},
    { name: "John", email: "mark@gmail.com", col1: "나", col2: "B", col3: "b", col4: "2", col5: arr1[0], col6: arr1[0], col7: arr1[1], col8: "7", col9: "7", col10: "7"},
  ]

  function Sort_Col () {
    // Col Data Sort


  }
</script>

<Grid {data} />

<style global>
  @import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css";
  
</style>