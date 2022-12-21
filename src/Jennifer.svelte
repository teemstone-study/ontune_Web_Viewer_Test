<!-- HTML -->

<svg height="100%" width="100%">
	<!-- <rect id="rect1" x="0" y="5" width="10" height="10" style="fill:#dddddd; stroke:red; stroke-width:5" />
	<rect id="rect2" x="0" y="20" width="10" height="10" style="fill:#dddddd; stroke:blue; stroke-width:5" />
	<rect id="rect3" x="0" y="35" width="10" height="10" style="fill:#dddddd; stroke:green; stroke-width:5" />
	<rect id="rect4" x="0" y="50" width="10" height="10" style="fill:#dddddd; stroke:yellow; stroke-width:5" />
	<rect id="rect5" x="0" y="65" width="10" height="10" style="fill:#dddddd; stroke:purple; stroke-width:5" /> -->	
	{#each restList as item}	
		{colorSet = item % 3}
		{console.log("-------")}
		{console.log(colorSet)}
		{console.log(item)}
		{console.log("===========")}
		{#if colorSet === 0}
			<rect class="rect" x="0" y={item + 20} width="10" height="10" style="fill:#dddddd; stroke:red; stroke-width:5" />
		{:else if colorSet === 1}
			<rect class="rect" x="0" y={item + 20} width="10" height="10" style="fill:#dddddd; stroke:orange; stroke-width:5" />
		{:else if colorSet === 2}
			<rect class="rect" x="0" y={item + 20} width="10" height="10" style="fill:#dddddd; stroke:yellow; stroke-width:5" />
		{:else if colorSet === 3}
			<rect class="rect" x="0" y={item + 20} width="10" height="10" style="fill:#dddddd; stroke:green; stroke-width:5" />			
		{:else if colorSet === 4}
			<rect class="rect" x="0" y={item + 20} width="10" height="10" style="fill:#dddddd; stroke:blue; stroke-width:5" />
		{:else if colorSet === 5}
			<rect class="rect" x="0" y={item + 20} width="10" height="10" style="fill:#dddddd; stroke:Indigo; stroke-width:5" />
		{:else if colorSet === 6}
			<rect class="rect" x="0" y={item + 20} width="10" height="10" style="fill:#dddddd; stroke:purple; stroke-width:5" />
		{/if}
	{/each}

	<ellipse cx="500" cy="40" rx="5" ry="30" style="fill:purple; stroke:red; stroke-width:1"  />
	<ellipse cx="510" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="520" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="530" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="540" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="550" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="560" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="570" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="580" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="590" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="600" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="610" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="620" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="630" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="640" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="650" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="660" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="670" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="680" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="690" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="700" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="710" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="720" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="730" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="740" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="750" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="760" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="770" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="780" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="790" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="800" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="810" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="820" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="830" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="840" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="850" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="860" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="870" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="880" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="890" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="900" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="910" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="920" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="930" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="940" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="950" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="960" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="970" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="980" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="990" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="1000" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
	<ellipse cx="1010" cy="40" rx="5" ry="30" style="fill:red; stroke:red; stroke-width:1"  />
		{#each restList as item}	
		{colorSet = item % 3}
		{console.log(colorSet)}
		{console.log(colorList)}
		{#if colorSet === 0}
			<rect class="outrect" x="0" y={item + 20} width="10" height="10" style="fill:#dddddd; stroke:red; stroke-width:5" />
		{:else if colorSet === 1}
			<rect class="outrect" x="0" y={item + 20} width="10" height="10" style="fill:#dddddd; stroke:orange; stroke-width:5" />
		{:else if colorSet === 2}
			<rect class="outrect" x="0" y={item + 20} width="10" height="10" style="fill:#dddddd; stroke:yellow; stroke-width:5" />
		{:else if colorSet === 3}
			<rect class="outrect" x="0" y={item + 20} width="10" height="10" style="fill:#dddddd; stroke:green; stroke-width:5" />			
		{:else if colorSet === 4}
			<rect class="outrect" x="0" y={item + 20} width="10" height="10" style="fill:#dddddd; stroke:blue; stroke-width:5" />
		{:else if colorSet === 5}
			<rect class="outrect" x="0" y={item + 20} width="10" height="10" style="fill:#dddddd; stroke:Indigo; stroke-width:5" />
		{:else if colorSet === 6}
			<rect class="outrect" x="0" y={item + 20} width="10" height="10" style="fill:#dddddd; stroke:purple; stroke-width:5" />
		{/if}
		{colorList = colorList+ 1}
	{/each}
</svg>


<script>
	import { tweened } from 'svelte/motion';
	window.onload = tmp_Event;
	let colorList = 0;
	let colorSet;


	const restList = Array.from({ length: 40 }).map((_, i) => i) 

	function logs() {
		let el1 = document.getElementById("rect");

		console.log(el1);
	}

	function DrawAnimation() {
		document.writeln("<svg><ellipse cx='10' cy='40' rx='5' ry='30' style='fill:red; stroke:red; stroke-width:1'  /></svg>")
		
	}

	function tmp_Event() {
		// let el1 = document.getElementById("rect1");
		// let el2 = document.getElementById("rect2");
		// let el3 = document.getElementById("rect3");
		// let el4 = document.getElementById("rect4");
		// let el5 = document.getElementById("rect5");
		colorList = 1;
		//DrawAnimation();
		let rectclass = document.getElementsByClassName("rect");
		let outrectclass = document.getElementsByClassName("outrect");


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
					duration: 1500 - (startTime * (20)),       // 밀리초 지정 
					fill: 'forwards',     // 종료 시 속성을 지님
					easing: 'ease-out',       // 가속도 종류
					iterations: Infinity  // 반복 횟수
				}
		);		
		}

		let endTime = 0;
		for(let i =0; i < outrectclass.length; i++) {
			endTime++;
			outrectclass[i].animate(
				{ transform: ['translateX(62%)', 'translateX(100%)'] },   // 시작 값 // 종료 값
				{
					duration: 1500 - (endTime * (20)),       // 밀리초 지정 
					fill: 'forwards',     // 종료 시 속성을 지님
					easing: 'ease-In',       // 가속도 종류
					iterations: Infinity  // 반복 횟수
				}
				);	

			// outrectclass[i].animate(
			// 	[{transform: 'translateX(0%)', 'translateX(50%)'},
			// 	  {transform: 'translateX(50%) translateY(80%)'}]   // 시작 값 // 종료 값
			// 	{
			// 		duration: 2000 - (endTime * (20)),       // 밀리초 지정 
			// 		fill: 'forwards',     // 종료 시 속성을 지님
			// 		easing: 'ease',       // 가속도 종류
			// 		iterations: Infinity  // 반복 횟수
			// 	}
			// 	);	
			// 	outrectclass[i].animate([{0% transform:translateX(0px) translateY(0px)}]);
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

	.flowgun {
		width:50px;
		height:50px;
		top:220px;
		left:220px;
		border:5px solid #FFBB00;
		/* 추가된 부분 */
		animation:square-2 2.5s infinite cubic-bezier(0.415, 0.547, 0, 0.809);
	}

	@keyframes flowgun {
		0% {transform:translateX(0px)}
		50% {transform:translateX(150px)}
		100% {transform:translateX(200px)}
	}

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