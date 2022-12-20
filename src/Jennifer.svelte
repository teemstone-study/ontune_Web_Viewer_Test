<!-- HTML -->
<svg height="100%" width="100%">
	<!-- <rect id="rect1" x="0" y="5" width="10" height="10" style="fill:#dddddd; stroke:red; stroke-width:5" />
	<rect id="rect2" x="0" y="20" width="10" height="10" style="fill:#dddddd; stroke:blue; stroke-width:5" />
	<rect id="rect3" x="0" y="35" width="10" height="10" style="fill:#dddddd; stroke:green; stroke-width:5" />
	<rect id="rect4" x="0" y="50" width="10" height="10" style="fill:#dddddd; stroke:yellow; stroke-width:5" />
	<rect id="rect5" x="0" y="65" width="10" height="10" style="fill:#dddddd; stroke:purple; stroke-width:5" /> -->	
	{#each restList as item}	
		{colorSet = colorList % 7}
		{console.log(colorSet)}
		{console.log(colorList)}
		{#if colorSet === 0}
			<rect class="rect" x="0" y={item} width="10" height="10" style="fill:#dddddd; stroke:red; stroke-width:5" />
		{:else if colorSet === 1}
			<rect class="rect" x="0" y={item} width="10" height="10" style="fill:#dddddd; stroke:orange; stroke-width:5" />
		{:else if colorSet === 2}
			<rect class="rect" x="0" y={item} width="10" height="10" style="fill:#dddddd; stroke:yellow; stroke-width:5" />
		{:else if colorSet === 3}
			<rect class="rect" x="0" y={item} width="10" height="10" style="fill:#dddddd; stroke:green; stroke-width:5" />			
		{:else if colorSet === 4}
			<rect class="rect" x="0" y={item} width="10" height="10" style="fill:#dddddd; stroke:blue; stroke-width:5" />
		{:else if colorSet === 5}
			<rect class="rect" x="0" y={item} width="10" height="10" style="fill:#dddddd; stroke:Indigo; stroke-width:5" />
		{:else if colorSet === 6}
			<rect class="rect" x="0" y={item} width="10" height="10" style="fill:#dddddd; stroke:purple; stroke-width:5" />
		{/if}
		{colorList = colorList+ 1}
	{/each}

</svg>

<script>
	window.onload = tmp_Event;
	let colorList = 0;
	let colorSet;
	const restList = Array.from({ length: 70 }).map((_, i) => `${i}`) 

	function logs() {
		let el1 = document.getElementById("rect");

		console.log(el1);
	}

	function tmp_Event() {
		// let el1 = document.getElementById("rect1");
		// let el2 = document.getElementById("rect2");
		// let el3 = document.getElementById("rect3");
		// let el4 = document.getElementById("rect4");
		// let el5 = document.getElementById("rect5");
		colorList = 1;
		let rectclass = document.getElementsByClassName("rect");


		// console.log(el1.clientLeft );
		// console.log(el2);
		// console.log(el3);

		// el1.animate(
		// 	{ transform: ['translateX(0%)', 'translateX(95%)'] },   // 시작 값 // 종료 값
		// 	{
		// 		duration: 5000,       // 밀리초 지정 
		// 		fill: 'forwards',     // 종료 시 속성을 지님
		// 		easing: 'ease',       // 가속도 종류
		// 		iterations: Infinity  // 반복 횟수
		// 	}
		// );

		// el2.animate(
		// { transform: ['translateX(0%)', 'translateX(95%)'] },   // 시작 값 // 종료 값
		// {
		// 	duration: 4000,       // 밀리초 지정
		// 	fill: 'forwards',  		// 종료 시 속성을 지님
		// 	easing: 'ease',  			// 가속도 종류
		// 	iterations: Infinity  // 반복 횟수
		// });

		// el3.animate(
		// { transform: ['translateX(0%)', 'translateX(95%)'] },   // 시작 값 // 종료 값
		// {
		// 	duration: 3000,       // 밀리초 지정 
		// 	fill: 'forwards',     // 종료 시 속성을 지님
		// 	easing: 'ease',       // 가속도 종류
		// 	iterations: Infinity  // 반복 횟수
		// });

		// el4.animate(
		// 	{ transform: ['translateX(0%)', 'translateX(30%)'] },   // 시작 값 // 종료 값
		// 	{
		// 		duration: 2000,       // 밀리초 지정 
		// 		fill: 'forwards',     // 종료 시 속성을 지님
		// 		easing: 'ease',       // 가속도 종류
		// 		iterations: Infinity  // 반복 횟수
		// 	}
		// );

		// el5.animate(
		// 	{ transform: ['translateX(0%)', 'translateX(30%)'] },   // 시작 값 // 종료 값
		// 	{
		// 		duration: 1000,       // 밀리초 지정 
		// 		fill: 'forwards',     // 종료 시 속성을 지님
		// 		easing: 'ease',       // 가속도 종류
		// 		iterations: Infinity  // 반복 횟수
		// 	}
		// );		
			
		// elementlist.forEach(element => {
		// 	startTime++;
		// 	element.animate(
		// 		{ transform: ['translateX(0%)', 'translateX(95%)'] },   // 시작 값 // 종료 값
		// 		{
		// 			duration: 1000 + (startTime * 100),       // 밀리초 지정 
		// 			fill: 'forwards',     // 종료 시 속성을 지님
		// 			easing: 'ease',       // 가속도 종류
		// 			iterations: Infinity  // 반복 횟수
		// 		}
		// );		
		// });
		let startTime = 0;
		for(let i =0; i < rectclass.length; i++) {
			startTime++;
			rectclass[i].animate(
				{ transform: ['translateX(0%)', 'translateX(30%)'] },   // 시작 값 // 종료 값
				{
					duration: 2000 - (startTime * (20)),       // 밀리초 지정 
					fill: 'forwards',     // 종료 시 속성을 지님
					easing: 'ease',       // 가속도 종류
					iterations: Infinity  // 반복 횟수
				}
		);		
		}

		// for(let i =0; i < rectclass.length; i++) {
		// 	startTime++;
		// 	rectclass[i].animate(
		// 		{ transform: ['translateX(0%)', 'translateX(30%)'] },   // 시작 값 // 종료 값
		// 		{
		// 			duration: 1000 + (startTime * (100)),       // 밀리초 지정 
		// 			fill: 'forwards',     // 종료 시 속성을 지님
		// 			easing: 'ease',       // 가속도 종류
		// 			iterations: Infinity  // 반복 횟수
		// 		}
		// );		
		// }


		// for(let i =0; i < rectclass.length; i++) {
		// 	startTime++;
		// 	rectclass[i].animate(
		// 		{ transform: ['translateX(70%)', 'translateX(100%)'] },   // 시작 값 // 종료 값
		// 		{
		// 			duration: 1000 + (startTime * (100)),       // 밀리초 지정 
		// 			fill: 'forwards',     // 종료 시 속성을 지님
		// 			easing: 'ease',       // 가속도 종류
		// 			iterations: Infinity  // 반복 횟수
		// 		}
		// );		
		// }
	}
</script>

<!-- Style -->
<style>
/* rect {
  width: 10px;
  height: 10px;
  display: block;
  position: absolute;
  background: white;
  top: 10px;
  left: 10px;
  
  transition: all 3s;
  z-index: 10;
} */
</style>