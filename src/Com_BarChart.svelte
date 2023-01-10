<script>
	import { scaleLinear } from 'd3';

  export let data = [
    { host: 0, value: 0, value2: 0},
    { host: 1, value: 0, value2: 0},
    { host: 2, value: 0, value2: 0},
    { host: 3, value: 0, value2: 0},
    { host: 4, value: 0, value2: 0},
    { host: 5, value: 0, value2: 0},
    { host: 6, value: 0, value2: 0},
    { host: 7, value: 0, value2: 0},
    { host: 8, value: 0, value2: 0},
    { host: 9, value: 0, value2: 0}
  ];  
	// const data = [
	// 	{ year: 1990, birthrate: 16.7 },
	// 	{ year: 1995, birthrate: 14.6 },
	// 	{ year: 2000, birthrate: 14.4 },
	// 	{ year: 2005, birthrate: 14 },
	// 	{ year: 2010, birthrate: 13 },
	// 	{ year: 2015, birthrate: 12.4 }
	// ];
  
  const default_data = [
    { host: 0, value1: 0, value2: 0},
    { host: 1, value1: 0, value2: 0},
    { host: 2, value1: 0, value2: 0},
    { host: 3, value1: 0, value2: 0},
    { host: 4, value1: 0, value2: 0},
    { host: 5, value1: 0, value2: 0},
    { host: 6, value1: 0, value2: 0},
    { host: 7, value1: 0, value2: 0},
    { host: 8, value1: 0, value2: 0},
    { host: 9, value1: 0, value2: 0}
  ];  

	const xTicks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	const yTicks = [0, 50, 100];//, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
	const padding  = { top: 20, right: 15, bottom: 20, left: 25 };

	let width = 500;
	let height = 200;

  // if (data.length == 0) {
  // if (data == undefined) {
  //   data = [...default_data];
  // };  

	function formatMobile(tick) {
		return "'" + tick.toString().slice(-2);
	}

	$:{data.length === 0 ? data = default_data : null};	

	$: xScale = scaleLinear()
		.domain([0, xTicks.length])
		.range([padding.left, width - padding.right]);

	$: yScale = scaleLinear()
		.domain([0, Math.max.apply(null, yTicks)])
		.range([height - padding.bottom, padding.top]);

	$: innerWidth = width - (padding.left + padding.right);
	$: barWidth = innerWidth / xTicks.length;
</script>
{#if (data.length > 0)}
	<div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
		<svg>
			<!-- y axis -->
			<g class="axis y-axis">
				{#each yTicks as tick}
					<g class="tick tick-{tick}" transform="translate(0, {yScale(tick)})">
						<line x2="100%"></line>
						<text y="-4">{tick} {tick === 20 ? '' : ''}</text>
					</g>
				{/each}
			</g>

			<!-- x axis -->
			<g class="axis x-axis">
				{#each data as point, i}
					<g class="tick" transform="translate({xScale(i)},{height})">
						<text x="{barWidth/2}" y="-4">{width > 380 ? point.host : formatMobile(point.host)}</text>
					</g>
				{/each}
			</g>

			<g class='bars'>
				{#each data as point, i}
					<rect class="value1"
						x="{xScale(i) + 4}"
						y="{yScale(point.value1)}"
						width="{(barWidth / 2) - 4}"
						height="{yScale(0) - yScale(point.value1)}"
					></rect>

					<rect class="value2"
						x="{(xScale(i) + 4) + ((barWidth / 2) - 4)}"
						y="{yScale(point.value2)}"
						width="{(barWidth / 2) - 4}"
						height="{yScale(0) - yScale(point.value2)}"
					></rect>				
				{/each}
			</g>
		</svg>
	</div>
{/if}

<style>
	/* h2 {
		text-align: center;
	} */

	.chart {
		width: 100%;
    height: 95%;
		max-width: 95%;
		margin: 0 auto;
	}

	svg {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.tick {
		font-family: Helvetica, Arial;
		font-size: .725em;
		font-weight: 200;
	}

	.tick line {
		stroke: #070707;
		stroke-dasharray: 2;
	}

	.tick text {
		fill: rgb(12, 11, 11);
		text-anchor: start;
	}

	.tick.tick-0 line {
		stroke-dasharray: 0;
	}

	.x-axis .tick text {
		text-anchor: middle;
	}

	/* .bars rect {
		fill: #a11;
		stroke: none;
		opacity: 0.65;
	} */

	.value1 {
		fill: rgb(17, 40, 170);
		stroke: none;
		opacity: 0.8;
	}

	.value2 {
		fill: rgb(247, 121, 4);
		stroke: none;
		opacity: 0.8;
	}	

</style>
