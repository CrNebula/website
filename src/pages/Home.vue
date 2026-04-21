<template>
	<div ref="homeRevealRoot" class="home-reveal-scope">
		<a-card class="home-card" :bordered="false">
			<!-- 首屏焦点区：自带 is-visible，避免 IO 未触发时整段透明 -->
			<section class="top-showcase reveal is-visible" :style="{ '--d': '0ms' }">
				<div class="top-showcase__panel">
					<header class="top-showcase__head">
						<p class="top-showcase__eyebrow">Product spotlight</p>
						<h2 class="top-showcase__title">Manufacturing strengths at a glance</h2>
						<p class="top-showcase__sub">
							Three core capabilities we deliver every day — tap any card to view product details.
						</p>
					</header>
					<div class="img-grid">
						<button v-for="img in topImages" :key="img.id" type="button" class="img-wrap"
							:class="{ 'img-wrap--pulse': pulseId === img.id }" @click="onTopCardClick(img.id)">
							<div class="img-stage">
								<div class="img-frame">
									<img class="img" :src="img.src" :alt="img.alt" />
								</div>
							</div>
							<div class="img-caption">
								<span class="img-title">{{ img.title }}</span>
							</div>
						</button>
					</div>
				</div>
			</section>


			<!-- 第一行：图片 + 文字 -->
			<section class="feature-row">
				<div class="row-media reveal" :style="{ '--d': '80ms' }">
					<img class="row-img" :src="featureImgA" alt="Precision machining" />
				</div>
				<div class="row-text reveal" :style="{ '--d': '140ms' }">
					<div class="eyebrow">Precision Machining</div>
					<div class="row-title">High Quality / Tailored Manufacturing</div>
					<div class="row-desc">
						At Yuanteng Precision Technology Co., Ltd., we consistently push the
						forefront of precision machining technology, creating intricate parts
						and assemblies for diverse industrial applications. Every component we
						produce meets the highest standards of quality and performance. We
						provide precision components for multiple sectors, adapting our
						processes to meet the unique requirements of each industry. Our parts
						ensure both precision and durability, with every component designed to
						enhance product functionality and longevity.
					</div>
				</div>
			</section>

			<!-- 第二行：文字 + 图片（交替） -->
			<section class="feature-row feature-row--reverse">
				<div class="row-media reveal" :style="{ '--d': '200ms' }">
					<img class="row-img" :src="featureImgB" alt="CNC expertise" />
				</div>
				<div class="row-text reveal" :style="{ '--d': '260ms' }">
					<div class="eyebrow">CNC Expertise</div>
					<div class="row-title">Efficiency with Precision</div>
					<div class="row-desc">
						Leveraging our professional expertise, our company meets the rigorous
						demands of modern mechanical parts processing. From custom prototype
						development to batch production management, we specialize in
						seamlessly integrating efficiency and quality into every manufacturing
						process. Each project, from thread machining to precision grinding,
						embodies our meticulous attention to detail and unwavering commitment to
						excellence.
					</div>
				</div>
			</section>
		</a-card>

		<!-- 仅首页底部：public/images/one/footer1~3.png -->
		<div class="home-footer-pics reveal" aria-label="Footer images">
			<div class="home-footer-pics__inner home-footer-pics__inner--six">
				
				<div v-for="(src, idx) in footerGalleryImages" :key="src" class="home-footer-pics__item">
					<img class="home-footer-pics__img" :src="src" loading="lazy" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.home-card {
		background: #ffffffaa;
		border-radius: 16px;
		box-shadow: 0 10px 28px rgba(22, 119, 255, 0.08);
		position: relative;
		overflow: hidden;
	}

	/* 顶部区域轻微装饰光晕 */
	.home-card::before {
		content: '';
		position: absolute;
		inset: -120px -120px auto -120px;
		height: 220px;
		background: radial-gradient(circle at 30% 20%, rgba(22, 119, 255, 0.18), transparent 60%);
		pointer-events: none;
	}

	.home-card::after {
		content: '';
		position: absolute;
		inset: 0;
		background:
			radial-gradient(circle at 85% 0%, rgba(56, 189, 248, 0.2), transparent 32%),
			radial-gradient(circle at 0% 100%, rgba(59, 130, 246, 0.16), transparent 28%);
		pointer-events: none;
	}

	/* 压在装饰层之上，让首屏区块更「实」、一眼能落点 */
	.top-showcase {
		position: relative;
		z-index: 1;
		padding: 20px 16px 12px;
	}

	.top-showcase__panel {
		max-width: 1100px;
		margin: 0 auto;
		padding: 28px 24px 26px;
		border-radius: 20px;
		background: #ffffff;
		border: 1px solid rgba(22, 119, 255, 0.2);
		box-shadow:
			0 1px 0 rgba(255, 255, 255, 0.95) inset,
			0 20px 50px rgba(22, 119, 255, 0.12),
			0 8px 24px rgba(15, 59, 122, 0.06);
	}

	.top-showcase__head {
		text-align: center;
		max-width: 560px;
		margin: 0 auto 26px;
	}

	.top-showcase__eyebrow {
		margin: 0 0 10px;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: #1677ff;
	}

	.top-showcase__title {
		margin: 0 0 12px;
		font-size: clamp(22px, 4.2vw, 30px);
		font-weight: 800;
		line-height: 1.2;
		color: #0f3b7a;
		letter-spacing: -0.02em;
	}

	.top-showcase__sub {
		margin: 0;
		font-size: 15px;
		line-height: 1.65;
		color: rgba(15, 59, 122, 0.7);
	}

	.img-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 18px;
		padding: 0;
		align-items: stretch;
	}

	/* 平板/手机自适应 */
	@media (max-width: 900px) {
		.top-showcase {
			padding: 16px 12px 10px;
		}

		.top-showcase__panel {
			padding: 22px 16px 20px;
		}

		.top-showcase__head {
			margin-bottom: 20px;
		}

		.img-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 14px;
		}

		.img-stage {
			height: 200px;
		}
	}

	@media (max-width: 520px) {
		.img-grid {
			grid-template-columns: 1fr;
		}
	}

	.img-wrap {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		align-items: stretch;
		margin: 0;
		padding: 0;
		border: 1px solid rgba(15, 59, 122, 0.12);
		border-radius: 14px;
		background: #ffffff;
		overflow: hidden;
		box-shadow:
			0 3px 0 rgba(22, 119, 255, 0.14),
			0 10px 28px rgba(15, 59, 122, 0.08);
		transform: translateZ(0);
		cursor: pointer;
		text-align: center;
		font: inherit;
		color: inherit;
		appearance: none;
		-webkit-tap-highlight-color: transparent;
		transition:
			transform 280ms cubic-bezier(0.34, 1.2, 0.64, 1),
			box-shadow 280ms ease,
			border-color 280ms ease;
	}

	/* 顶栏色带：扫视时先有落点 */
	.img-wrap::before {
		content: '';
		flex-shrink: 0;
		height: 4px;
		background: linear-gradient(90deg, #1677ff 0%, #38bdf8 55%, #7dd3fc 100%);
	}

	.img-wrap:hover {
		transform: translateY(-6px);
		box-shadow:
			0 3px 0 rgba(22, 119, 255, 0.35),
			0 20px 44px rgba(22, 119, 255, 0.14);
		border-color: rgba(22, 119, 255, 0.28);
	}

	.img-wrap:active {
		transform: translateY(-2px) scale(0.99);
	}

	/* 点击后短促弹性反馈（仅用 scale，避免与 hover 的位移打架） */
	@keyframes topCardPulse {
		0% {
			transform: scale(1);
		}

		35% {
			transform: scale(1.045);
		}

		70% {
			transform: scale(0.985);
		}

		100% {
			transform: scale(1);
		}
	}

	.img-wrap--pulse {
		animation: topCardPulse 0.55s cubic-bezier(0.34, 1.3, 0.64, 1);
	}

	/* 略深一档灰衬，和白卡、页面底形成三层关系 */
	.img-stage {
		position: relative;
		flex-shrink: 0;
		height: 256px;
		box-sizing: border-box;
		background: linear-gradient(180deg, #e8ecf1 0%, #dde3ea 100%);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9);
		transition: background 280ms ease;
	}

	.img-wrap:hover .img-stage {
		background: linear-gradient(180deg, #e2e8f0 0%, #d8dee8 100%);
	}

	.img-frame {
		position: absolute;
		z-index: 1;
		inset: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border-radius: 10px;
		background: #ffffff;
		box-shadow:
			0 4px 14px rgba(15, 23, 42, 0.06),
			inset 0 0 0 1px rgba(15, 23, 42, 0.04);
	}

	.img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		object-position: center;
		display: block;
		filter: drop-shadow(0 4px 12px rgba(15, 23, 42, 0.08));
		transition: transform 380ms cubic-bezier(0.34, 1.2, 0.64, 1);
	}

	.img-wrap:hover .img {
		transform: scale(1.03);
	}

	.img-caption {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
		flex: 1;
		padding: 16px 12px 18px;
		background: #f8fafc;
		border-top: 1px solid rgba(22, 119, 255, 0.1);
	}

	.img-title {
		font-size: 15px;
		font-weight: 800;
		letter-spacing: 0.01em;
		line-height: 1.35;
		color: #0f3b7a;
		text-align: center;
		min-height: calc(1.35em * 2);
		display: flex;
		align-items: center;
		justify-content: center;
		padding-bottom: 8px;
		background-image: linear-gradient(90deg,
				transparent 0%,
				rgba(22, 119, 255, 0.35) 50%,
				transparent 100%);
		background-position: center bottom;
		background-size: 56% 3px;
		background-repeat: no-repeat;
	}

	.feature-row {
		position: relative;
		z-index: 1;
		display: flex;
		align-items: center;
		gap: 26px;
		padding: 8px 16px 18px;
	}

	.feature-row--reverse {
		flex-direction: row-reverse;
	}

	.row-media {
		flex: 1;
		min-width: 0;
		position: relative;
	}

	.row-img {
		width: 100%;
		height: 320px;
		object-fit: cover;
		border-radius: 16px;
		box-shadow: 0 10px 28px rgba(22, 119, 255, 0.12);
		transition: transform 320ms ease, box-shadow 320ms ease;
	}

	.row-media:hover .row-img {
		transform: translateY(-2px) scale(1.01);
		box-shadow: 0 14px 34px rgba(22, 119, 255, 0.2);
	}

	.row-media::after {
		content: '';
		position: absolute;
		inset: 8px;
		border-radius: 18px;
		border: 1px solid rgba(148, 197, 255, 0.4);
		pointer-events: none;
	}

	.row-text {
		flex: 1;
		min-width: 0;
	}

	.eyebrow {
		font-size: 13px;
		letter-spacing: 0.08em;
		font-weight: 700;
		color: #1677ff;
		margin-bottom: 10px;
	}

	.row-title {
		position: relative;
		display: inline-block;
		font-size: 22px;
		font-weight: 800;
		color: #0f3b7a;
		margin-bottom: 10px;
	}

	.row-title::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -5px;
		width: 48px;
		height: 3px;
		border-radius: 999px;
		background: linear-gradient(90deg, #1677ff, rgba(22, 119, 255, 0.15));
	}

	.row-desc {
		font-size: 15px;
		line-height: 1.85;
		color: rgba(15, 59, 122, 0.88);
	}

	/* 手机：上下排列 */
	@media (max-width: 768px) {

		.feature-row,
		.feature-row--reverse {
			flex-direction: column;
			padding: 10px 12px 16px;
			gap: 14px;
		}


		.row-img {
			height: 240px;
		}
	}

	/* 滚动进入动画（淡入 + 上滑） */
	.reveal {
		opacity: 0;
		transform: translateY(14px);
		transition: opacity 520ms ease, transform 520ms ease;
		transition-delay: var(--d, 0ms);
	}

	.reveal.is-visible {
		opacity: 1;
		transform: translateY(0);
	}

	/* 首页专属底部三张图（在主页大卡片下方） */
	.home-footer-pics {
		position: relative;
		z-index: 1;
		width: 100%;
		max-width: 100%;
		margin-top: 20px;
		padding: 8px 0 8px;
		overflow-x: hidden;
	}

	.home-footer-pics__inner {
		max-width: 1100px;
		width: 100%;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 16px;
		align-items: start;
	}

	/* 5 张图时：首行 3 张，次行 2 张居中 */
	.home-footer-pics__inner--five {
		grid-template-columns: repeat(6, minmax(0, 1fr));
	}

	.home-footer-pics__inner--five .home-footer-pics__item {
		grid-column: span 2;
	}

	.home-footer-pics__inner--five .home-footer-pics__item:nth-child(4) {
		grid-column: 2 / span 2;
	}

	.home-footer-pics__inner--five .home-footer-pics__item:nth-child(5) {
		grid-column: 4 / span 2;
	}

	.home-footer-pics__item {
		aspect-ratio: 4/ 3;
		border-radius: 14px;
		overflow: hidden;
		background: #fff;
		box-shadow: 0 8px 28px rgba(15, 59, 122, 0.08);
		border: 1px solid rgba(22, 119, 255, 0.1);
	}

	.home-footer-pics__img {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
	}

	@media (max-width: 768px) {
		.home-footer-pics__inner {
			grid-template-columns: 1fr;
			gap: 14px;
		}
	}
</style>

<script setup lang="ts">
	import { nextTick, onMounted, ref } from 'vue';
	import { useRouter } from 'vue-router';

	// 首页底部三张展示图
	const footerGalleryImages = [
	'/images/one/footer1.png',
	'/images/one/footer2.png',
	'/images/one/footer3.jpg',
	'/images/one/footer4.jpg',
	'/images/one/footer5.jpg',
	'/images/one/footer6.jpg'
	] as const;

	// 首页顶部三张图：与 public/images/one 下文件名一一对应
	const topImages = [
		{
			id: 'cnc-micro',
			alt: 'CNC Micromachining',
			title: 'CNC Micromachining',
			src: '/images/one/CNCMicromachining.jpg'
		},
		{
			id: 'cnc-turned',
			alt: 'CNC Turned Parts',
			title: 'CNC Turned Parts',
			src: '/images/one/CNCTurnedParts.jpg'
		},
		{
			id: 'sheet-metal',
			alt: 'Sheet Metal Parts',
			title: 'Sheet Metal Parts',
			src: '/images/one/SheetMetalParts.jpg'
		}
	];

	/** 仅在本页根内查找 .reveal，避免 document 级查询遗漏或误匹配 */
	const homeRevealRoot = ref<HTMLElement | null>(null);

	const router = useRouter();

	const pulseId = ref<string | null>(null);
	let pulseTimer : ReturnType<typeof setTimeout> | null = null;

	const capacityAnchorMap : Record<string, string> = {
		'cnc-micro': 'cnc-micro',
		'cnc-turned': 'cnc-turned',
		'sheet-metal': 'sheet-metal',
	};

	/** 点击卡片：短反馈后跳转到 ProcessingCapacity 对应展示位 */
	function onTopCardClick(id : string) {
		if (pulseTimer) clearTimeout(pulseTimer);
		pulseId.value = null;
		requestAnimationFrame(() => {
			pulseId.value = id;
			pulseTimer = setTimeout(() => {
				pulseId.value = null;
				pulseTimer = null;
			}, 560);
		});
		// 略延迟以便看到点击动效，再进入路由
		setTimeout(() => {
			router.push({ name: 'processing', hash: `#${capacityAnchorMap[id] ?? 'cnc-micro'}` });
		}, 200);
	}


	// 与 public/images/one 下 one.jpg、second.jpg 对应
	const featureImgA = '/images/one/one.jpg';
	const featureImgB = '/images/one/second.jpg';

	onMounted(() => {
		// 等 DOM 挂好再观察；threshold 用 0，避免首屏在固定头下比例达不到 0.12 永远不显示
		nextTick(() => {
			const root = homeRevealRoot.value;
			if (!root) return;

			const els = Array.from(root.querySelectorAll<HTMLElement>('.reveal')).filter(
				(el) => !el.classList.contains('is-visible')
			);

			const io = new IntersectionObserver(
				(entries) => {
					for (const e of entries) {
						if (e.isIntersecting) {
							e.target.classList.add('is-visible');
							io.unobserve(e.target);
						}
					}
				},
				{ threshold: 0, rootMargin: '0px 0px 60px 0px' }
			);

			els.forEach((el) => io.observe(el));

			// 兜底：极少数环境下 IO 不回调时，避免正文永久 opacity:0
			requestAnimationFrame(() => {
				setTimeout(() => {
					els.forEach((el) => {
						if (!el.classList.contains('is-visible')) {
							el.classList.add('is-visible');
						}
					});
				}, 800);
			});
		});
	});
</script>