<!-- HTML -->

<svg height="100%" width="100%">

	<!-- 들어가는 부분 -->
	{#each startBulletMaker as item}	
		{colorSet = item % 4}
		{#if colorSet === 0}
			<circle class="inBullet" cx="0" cy={getStartHeight()} r="5" style="fill:#dddddd; stroke:red; stroke-width:1" />
		{:else if colorSet === 1}
			<circle class="inBullet" cx="0" cy={getStartHeight()} r="5" style="fill:#dddddd; stroke:orange; stroke-width:1" />
		{:else if colorSet === 2}
			<circle class="inBullet" cx="0" cy={getStartHeight()} r="5" style="fill:#dddddd; stroke:yellow; stroke-width:1" />
		{:else if colorSet === 3}
			<circle class="inBullet" cx="0" cy={getStartHeight()} r="5" style="fill:#dddddd; stroke:green; stroke-width:1" />			
		{:else if colorSet === 4}
			<circle class="inBullet" cx="0" cy={getStartHeight()} r="5" style="fill:#dddddd; stroke:blue; stroke-width:1" />
		{:else if colorSet === 5}
			<circle class="inBullet" cx="0" cy={getStartHeight()} r="5" style="fill:#dddddd; stroke:Indigo; stroke-width:1" />
		{:else if colorSet === 6}
			<circle class="inBullet" cx="0" cy={getStartHeight()} r="5" style="fill:#dddddd; stroke:purple; stroke-width:1" />
		{/if}
	{/each}

	<!-- 나오는 부분 -->
	{#each endBulletMaker as item}	
		{colorSet = item % 4}
		{#if colorSet === 0}
			<circle class="outBullet" cx="0" cy={getStartHeight()} r="5" style="fill:red; stroke:red; stroke-width:1" />
		{:else if colorSet === 1}
			<circle class="outBullet" cx="0" cy={getStartHeight()} r="5" style="fill:orange; stroke:orange; stroke-width:1" />
		{:else if colorSet === 2}
			<circle class="outBullet" cx="0" cy={getStartHeight()} r="5" style="fill:yellow; stroke:yellow; stroke-width:1" />
		{:else if colorSet === 3}
			<circle class="outBullet" cx="0" cy={getStartHeight()} r="5" style="fill:green; stroke:green; stroke-width:1" />			
		{:else if colorSet === 4}
			<circle class="outBullet" cx="0" cy={getStartHeight()} r="5" style="fill:blue; stroke:blue; stroke-width:1" />
		{:else if colorSet === 5}
			<circle class="outBullet" cx="0" cy={getStartHeight()} r="5" style="fill:Indigo; stroke:Indigo; stroke-width:1" />
		{:else if colorSet === 6}
			<circle class="outBullet" cx="0" cy={getStartHeight()} r="5" style="fill:purple; stroke:purple; stroke-width:1" />
		{/if}
	{/each}

	<!-- 디스크 -->
	{#each diskMaker as disk, idx}
		{#if disk === 1}
			<ellipse class = "disk" cx={(sizeWidth * 0.25) + (idx * 6)}px cy="40" rx="3" ry="20" style="fill:red; stroke:red; stroke-width:1"  />
		{:else if disk == 2}
			<ellipse class = "disk" cx={(sizeWidth * 0.25) + (idx * 6)}px cy="40" rx="3" ry="20" style="fill:orange; stroke:orange; stroke-width:1"  />
		{:else if disk == 3}
			<ellipse class = "disk" cx={(sizeWidth * 0.25) + (idx * 6)}px cy="40" rx="3" ry="20" style="fill:yellow; stroke:yellow; stroke-width:1"  />
		{:else if disk == 4}
			<ellipse class = "disk" cx={(sizeWidth * 0.25) + (idx * 6)}px cy="40" rx="3" ry="20" style="fill:green; stroke:green; stroke-width:1"  />
		{/if}
	{/each}

	<!-- 총알 터지는 부분 -->
	{#each circleBubble as item}	
	{colorSet = item % 4}
	{#if colorSet === 0}
		<circle class="bubble" cx="{(sizeWidth * 0.25) - 10 + (getRandomInt(-4, 4))}" cy={40 + (getRandomInt(-4, 4))} r="10" style="fill:red; stroke:red; stroke-width:1; transition: .5s" />
	{:else if colorSet === 1}
		<circle class="bubble" cx="{(sizeWidth * 0.25) - 10 + (getRandomInt(-2, 4))}" cy={40 + (getRandomInt(-4, 4))} r="10" style="fill:orange; stroke:orange; stroke-width:1; transition: .5s" />
	{:else if colorSet === 2}
		<circle class="bubble" cx="{(sizeWidth * 0.25) - 10 + (getRandomInt(-2, 4))}" cy={40 + (getRandomInt(-4, 4))} r="10" style="fill:yellow; stroke:yellow; stroke-width:1; transition: .5s" />
	{:else if colorSet === 3}
		<circle class="bubble" cx="{(sizeWidth * 0.25) - 10 + (getRandomInt(-2, 4))}" cy={40 + (getRandomInt(-4, 4))} r="10" style="fill:green; stroke:green; stroke-width:1; transition: .5s" />			
	{:else if colorSet === 4}
		<circle class="bubble" cx="{(sizeWidth * 0.25) - 10 + (getRandomInt(-2, 4))}" cy={40 + (getRandomInt(-4, 4))} r="10" style="fill:blue; stroke:blue; stroke-width:1; transition: .5s" />
	{:else if colorSet === 5}
		<circle class="bubble" cx="{(sizeWidth * 0.25) - 10 + (getRandomInt(-2, 4))}" cy={40 + (getRandomInt(-4, 4))} r="10" style="fill:Indigo; stroke:Indigo; stroke-width:1; transition: .5s" />
	{:else if colorSet === 6}
		<circle class="bubble" cx="{(sizeWidth * 0.25) - 10 + (getRandomInt(-2, 4))}" cy={40 + (getRandomInt(-4, 4))} r="10" style="fill:purple; stroke:purple; stroke-width:1; transition: .5s" />
	{/if}
{/each}
</svg>


<script>
	import { tweened } from 'svelte/motion';
	addEventListener('load', updateListener);
	window.onload = start_Event;
	const startHeight = 15;
	const diskStartPositionX = 450;
	let updateTimer;
	let colorSet;
	let sizeData = document.getElementById("div_mosaic_menubar");
	let sizeWidth = 0;
	let sizeHeight = 0;
	let resizeTimer;


	const startBulletList = Array.from({ length: 15 }).map((_, i) => i);
	const lastBulletList = Array.from({ length: 15 }).map((_, i) => i);
	let diskList = Array.from({ length: 80 }).map((_, i) => i) 
	let bulletList = Array.from({ length: 15 }).map((_, i) => i) 
	let diskcount = new Array();
	$: startBulletMaker = startBulletList;
	$: endBulletMaker = lastBulletList;

	$: diskMaker = diskList;
	$: circleBubble = bulletList;

	function updateListener() {
    clearTimeout(updateTimer);
    updateTimer = setTimeout( function() {
	  DiskGenerator();
	  updateListener();
    },3000);
   }

	function getStartHeight() {
		return getRandomInt(startHeight, startHeight + 50);
	}

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
	}

	function DiskGenerator() {
		let first = 0;
		let second = 0;
		let third = 0;
		let forth = 0;
		sizeData = document.getElementById("div_mosaic_menubar");
		sizeWidth = sizeData.offsetWidth;
		sizeHeight = sizeData.offsetHeight;

		let diskLength = ((sizeWidth * 0.5) / 6) + 2 ;
		diskList = Array.from({ length: diskLength }).map((_, i) => i); 	
		first = getRandomInt(0,diskList.length);
		second = getRandomInt(0,diskList.length - first);
		third = getRandomInt(0,diskList.length - first - second);
		forth = diskList.length - first - second - third;

		for(let i = 0; i < diskList.length; i++) {
			if(i < first) {
				diskList[i] = 1;
			} else if (i < first + second) {
				diskList[i] = 2;
			} else if (i < first + second + third) {
				diskList[i] = 3;
			} else {
				diskList[i] = 4;
			}	
		}
		diskcount[0] = first;
		diskcount[1] = second;
		diskcount[2] = third;
		diskcount[3] = forth;
	}

	function DiskRebalance() {
		let first = 0;
		let second = 0;
		let third = 0;
		let forth = 0;
		const baseLength = diskList.length;
		sizeData = document.getElementById("div_mosaic_menubar");
		sizeWidth = sizeData.offsetWidth;
		sizeHeight = sizeData.offsetHeight;

		let diskLength = ((sizeWidth * 0.5) / 6) + 2 ;
		diskList = Array.from({ length: diskLength }).map((_, i) => i); 	
		first = diskLength * diskcount[0] / baseLength;
		second = diskLength * diskcount[1] / baseLength;
		third = diskLength * diskcount[2] / baseLength;
		forth = diskLength * diskcount[3] / baseLength;

		for(let i = 0; i < diskList.length; i++) {
			if(i < first) {
				diskList[i] = 1;
			} else if (i < first + second) {
				diskList[i] = 2;
			} else if (i < first + second + third) {
				diskList[i] = 3;
			} else {
				diskList[i] = 4;
			}	
		}
		diskcount[0] = first;
		diskcount[1] = second;
		diskcount[2] = third;
		diskcount[3] = forth;
	}
	
	function isresize(event) {		
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			//전체가 재랜더링 되면 안되고 항목 비율로 줄어들 수 있도록 처리
			DiskRebalance();
			bulletList = Array.from({ length: 20 }).map((_, i) => i);
			//$: circleBubble = bulletList;
			reDraw(); // disk 항목만 새로 만들고 나머지는 그대로 처리
		}, 300);
	}

	function diskDraw() {

	}

	function bulletDraw() {
		sizeData = document.getElementById("div_mosaic_menubar");
		sizeWidth = sizeData.offsetWidth;
		sizeHeight = sizeData.offsetHeight;
	
		diskMaker = diskList;
		
		//DrawAnimation();
		let inbulletclass = document.getElementsByClassName("inBullet");
		let outbulletclass = document.getElementsByClassName("outBullet");
		let circleBubbleclass = document.getElementsByClassName("bubble");


		let startTime = 0;
		for(let i =0; i < inbulletclass.length; i++) {
			startTime++;
			let rectPosition = inbulletclass[i].getBoundingClientRect();
			//console.log(((newTest.top)));
			inbulletclass[i].animate(
				{ transform: ['translateX(0px)',
							  'translateX(' + (sizeWidth * 0.07) +'px)', 
							  'translateX(' + (sizeWidth * 0.14) +'px)', 
							  'translateX(' + (sizeWidth * 0.2) +'px)', 
							  'translate(' + (sizeWidth * 0.25) +'px, ' +(((sizeHeight / 2) - rectPosition.top - rectPosition.height + 2)) + 'px)' ] },   // 시작 값 // 종료 값
				{
					duration: 1000 - (startTime * (20)),       // 밀리초 지정 
					fill: 'forwards',     // 종료 시 속성을 지님
					easing: 'linear',       // 가속도 종류
					iterations: Infinity  // 반복 횟수					
				}
		);		
		}

		let endTime = 0;

		for(let i =0; i < outbulletclass.length; i++) {
			endTime++;
			let rectPosition = outbulletclass[i].getBoundingClientRect();
			let originValue = rectPosition.top - rectPosition.height + 2;
			outbulletclass[i].animate(
				{ transform: ['translate(' + (sizeWidth * 0.75) +'px, ' +(((sizeHeight / 2) - rectPosition.top - rectPosition.height + 2)) + 'px)',
							  'translate(' + (sizeWidth * 0.80) +'px, 0px)',
							  'translate(' + (sizeWidth * 0.90) +'px, 0px)',
						      'translate(' + (sizeWidth * 1) +'px, 0px)'] },   // 시작 값 // 종료 값
				{
					duration: 1000 - (endTime * (20)),       // 밀리초 지정 
					fill: 'forwards',     // 종료 시 속성을 지님
					easing: 'linear',       // 가속도 종류
					iterations: Infinity  // 반복 횟수
				}
				);	
		}

		let EffectTime = 0;
		for(let i =0; i < circleBubbleclass.length; i++) {
			startTime++;
			//console.log(((newTest.top)));
			// scale: [ 1, 1.5], 
			
			circleBubbleclass[i].animate(
				{ scale: [ 1, 1.08], 
				  transform: ['translate(0px, 0px) translate(0px, 0px)'],
				  opacity: [1, 1, 0.8, 0.8, 0.8, 0.8, 0]
				  },   // 시작 값 // 종료 값
				{
					duration: 1500 - (startTime * (20)),       // 밀리초 지정 
					fill: 'forwards',     // 종료 시 속성을 지님
					direction: 'normal',
					easing: 'ease-out',       // 가속도 종류
					iterations: Infinity  // 반복 횟수					
				}
		);		
		}

		startBulletMaker = startBulletList;
		endBulletMaker = lastBulletList;
	}

	function reDraw() {
		bulletDraw();
	}

	function start_Event() {
		window.onresize = isresize;
		DiskGenerator();
		reDraw();	
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
</style>