<!-- HTML -->

<svg height="100%" width="100%">
	<!-- <rect id="rect1" x="0" y="5" width="10" height="10" style="fill:#dddddd; stroke:red; stroke-width:5" />
	<rect id="rect2" x="0" y="20" width="10" height="10" style="fill:#dddddd; stroke:blue; stroke-width:5" />
	<rect id="rect3" x="0" y="35" width="10" height="10" style="fill:#dddddd; stroke:green; stroke-width:5" />
	<rect id="rect4" x="0" y="50" width="10" height="10" style="fill:#dddddd; stroke:yellow; stroke-width:5" />
	<rect id="rect5" x="0" y="65" width="10" height="10" style="fill:#dddddd; stroke:purple; stroke-width:5" /> -->	
	{#each restList as item}	
		{colorSet = item % 4}
		{#if colorSet === 0}
			<circle class="rect" cx="0" cy={getStartHeight()} r="5" style="fill:#dddddd; stroke:red; stroke-width:1" />
		{:else if colorSet === 1}
			<circle class="rect" cx="0" cy={getStartHeight()} r="5" style="fill:#dddddd; stroke:orange; stroke-width:1" />
		{:else if colorSet === 2}
			<circle class="rect" cx="0" cy={getStartHeight()} r="5" style="fill:#dddddd; stroke:yellow; stroke-width:1" />
		{:else if colorSet === 3}
			<circle class="rect" cx="0" cy={getStartHeight()} r="5" style="fill:#dddddd; stroke:green; stroke-width:1" />			
		{:else if colorSet === 4}
			<circle class="rect" cx="0" cy={getStartHeight()} r="5" style="fill:#dddddd; stroke:blue; stroke-width:1" />
		{:else if colorSet === 5}
			<circle class="rect" cx="0" cy={getStartHeight()} r="5" style="fill:#dddddd; stroke:Indigo; stroke-width:1" />
		{:else if colorSet === 6}
			<circle class="rect" cx="0" cy={getStartHeight()} r="5" style="fill:#dddddd; stroke:purple; stroke-width:1" />
		{/if}
	{/each}

	{#each restList as item}	
		{colorSet = item % 4}
		{#if colorSet === 0}
			<circle class="outrect" cx="0" cy={getStartHeight()} r="5" style="fill:red; stroke:red; stroke-width:1" />
		{:else if colorSet === 1}
			<circle class="outrect" cx="0" cy={getStartHeight()} r="5" style="fill:orange; stroke:orange; stroke-width:1" />
		{:else if colorSet === 2}
			<circle class="outrect" cx="0" cy={getStartHeight()} r="5" style="fill:yellow; stroke:yellow; stroke-width:1" />
		{:else if colorSet === 3}
			<circle class="outrect" cx="0" cy={getStartHeight()} r="5" style="fill:green; stroke:green; stroke-width:1" />			
		{:else if colorSet === 4}
			<circle class="outrect" cx="0" cy={getStartHeight()} r="5" style="fill:blue; stroke:blue; stroke-width:1" />
		{:else if colorSet === 5}
			<circle class="outrect" cx="0" cy={getStartHeight()} r="5" style="fill:Indigo; stroke:Indigo; stroke-width:1" />
		{:else if colorSet === 6}
			<circle class="outrect" cx="0" cy={getStartHeight()} r="5" style="fill:purple; stroke:purple; stroke-width:1" />
		{/if}
	{/each}

	{#each diskList as disk}
	<ellipse cx={(sizeWidth * 0.25) + (disk * 6)}px cy="40" rx="3" ry="20" style="fill:skyblue; stroke:skyblue; stroke-width:1"  />
	{/each}
</svg>


<script>
	import { tweened } from 'svelte/motion';
	window.onload = tmp_Event;
	const startHeight = 15;
	const diskStartPositionX = 450;
	let colorSet;
	let sizeData = document.getElementById("div_mosaic_menubar");
	let sizeWidth = 0;
	let sizeHeight = 0;


	const restList = Array.from({ length: 20 }).map((_, i) => i) 
	let diskList = Array.from({ length: 100 }).map((_, i) => i) 

	function getStartHeight() {
		return getRandomInt(startHeight, startHeight + 40);
	}

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
	}

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
		sizeData = document.getElementById("div_mosaic_menubar");
		sizeWidth = sizeData.offsetWidth;
		sizeHeight = sizeData.offsetHeight;
		let diskLength = ((sizeWidth * 0.5) / 6) + 2 ;
		diskList = Array.from({ length: diskLength }).map((_, i) => i) 
		//DrawAnimation();
		let rectclass = document.getElementsByClassName("rect");
		let outrectclass = document.getElementsByClassName("outrect");

		let startTime = 0;
		for(let i =0; i < rectclass.length; i++) {
			startTime++;
			let rectPosition = rectclass[i].getBoundingClientRect();
			//console.log(((newTest.top)));
			rectclass[i].animate(
				{ transform: ['translateX(0px)',
							  'translateX(' + (sizeWidth * 0.2) +'px)', 
							  'translate(' + (sizeWidth * 0.25) +'px, ' +(((sizeHeight / 2) - rectPosition.top - rectPosition.height + 2)) + 'px)' ] },   // 시작 값 // 종료 값
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
			let rectPosition = outrectclass[i].getBoundingClientRect();
			let originValue = rectPosition.top - rectPosition.height + 2;
			console.log(originValue);
			outrectclass[i].animate(
				{ transform: ['translate(' + (sizeWidth * 0.75) +'px, ' +(((sizeHeight / 2) - rectPosition.top - rectPosition.height + 2)) + 'px)',
							  'translate(' + (sizeWidth * 0.80) +'px, ' + originValue + 'px)',
						      'translate(' + (sizeWidth * 1) +'px, ' + originValue + 'px)'] },   // 시작 값 // 종료 값
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