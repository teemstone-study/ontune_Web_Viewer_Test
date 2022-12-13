<script>
  import Grid from "gridjs-svelte"

  let arr1 = ["ㄱ", "ㄴ"];

  const data = [
    { name: "John", email: "john@example.com", col1: "가", col2: "A", col3: "a", col4: "1", col5: arr1, col6: arr1[0], col7: arr1[1]},
    { name: "Mark", email: "mark@gmail.com", col1: "나", col2: "B", col3: "b", col4: "2", col5: arr1, col6: arr1[0], col7: arr1[1]},
    { name: "John", email: "mark@gmail.com", col1: "나", col2: "B", col3: "b", col4: "2", col5: arr1[0], col6: arr1[0], col7: arr1[1]},
    { name: "Park", email: "mark@gmail.com", col1: "나", col2: "B", col3: "b", col4: "2", col5: arr1[1], col6: arr1[0], col7: arr1[1]},
  ]
</script>

<Grid {data} />

<style global>
  @import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css";
</style>