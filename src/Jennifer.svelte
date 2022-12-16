<!-- HTML -->
<svg height="100%" width="100%">
	<rect id="rect1" x="10" y="5" width="10" height="10" style="fill:#dddddd; stroke:red; stroke-width:5" />
	<rect id="rect2" x="10" y="20" width="10" height="10" style="fill:#dddddd; stroke:blue; stroke-width:5" />
	<rect id="rect3" x="10" y="35" width="10" height="10" style="fill:#dddddd; stroke:green; stroke-width:5" />
	<rect id="rect4" x="10" y="50" width="10" height="10" style="fill:#dddddd; stroke:yellow; stroke-width:5" />
	<rect id="rect5" x="10" y="65" width="10" height="10" style="fill:#dddddd; stroke:purple; stroke-width:5" />
</svg>

<script>
	window.onload = tmp_Event;

  // import { tweened } from 'svelte/motion';
  // import { flip } from 'svelte/animate';
  // import mojs from '@mojs/core'

  // let count = 5 * 60; // TYPE NUMBER OF SECONDS HERE
	// let timer = tweened(count)

  // setInterval(() => {
  //   if ($timer > 0) {
  //     count += 1;
  //   }
  // }, 1000);


  // const burst = new mojs.Burst();

	// if (el.classList.contains('state-show') === true) {
	// 		el.classList.remove('state-show');
	// } else {
	// 	el.classList.add('state-show');
	// }	

	function logs() {
		let el1 = document.getElementById("rect1");

		console.log(el1);
	}

	function tmp_Event() {
		let el1 = document.getElementById("rect1");
		let el2 = document.getElementById("rect2");
		let el3 = document.getElementById("rect3");
		let el4 = document.getElementById("rect4");
		let el5 = document.getElementById("rect5");

		// console.log(el1.clientLeft );
		// console.log(el2);
		// console.log(el3);

		el1.animate(
			{ transform: ['translateX(10%)', 'translateX(95%)'] },   // 시작 값 // 종료 값
			{
				duration: 5000,       // 밀리초 지정 
				fill: 'forwards',     // 종료 시 속성을 지님
				easing: 'ease',       // 가속도 종류
				iterations: Infinity  // 반복 횟수
			}
		);

		el2.animate(
		{ transform: ['translateX(10%)', 'translateX(95%)'] },   // 시작 값 // 종료 값
		{
			duration: 4000,       // 밀리초 지정
			fill: 'forwards',  		// 종료 시 속성을 지님
			easing: 'ease',  			// 가속도 종류
			iterations: Infinity  // 반복 횟수
		});

		el3.animate(
		{ transform: ['translateX(10%)', 'translateX(95%)'] },   // 시작 값 // 종료 값
		{
			duration: 3000,       // 밀리초 지정 
			fill: 'forwards',     // 종료 시 속성을 지님
			easing: 'ease',       // 가속도 종류
			iterations: Infinity  // 반복 횟수
		});

		el4.animate(
			{ transform: ['translateX(10%)', 'translateX(95%)'] },   // 시작 값 // 종료 값
			{
				duration: 2000,       // 밀리초 지정 
				fill: 'forwards',     // 종료 시 속성을 지님
				easing: 'ease',       // 가속도 종류
				iterations: Infinity  // 반복 횟수
			}
		);

		el5.animate(
			{ transform: ['translateX(10%)', 'translateX(95%)'] },   // 시작 값 // 종료 값
			{
				duration: 1000,       // 밀리초 지정 
				fill: 'forwards',     // 종료 시 속성을 지님
				easing: 'ease',       // 가속도 종류
				iterations: Infinity  // 반복 횟수
			}
		);		
	}
</script>

<!-- Style -->
<style>
  
</style>