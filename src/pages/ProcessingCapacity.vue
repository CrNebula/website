<template>
  <a-card class="capacity-card" :bordered="false">
    <section class="top-gallery">
      <div class="top-gallery__head">
        <div class="top-gallery__kicker">Factory panorama</div>
        <h2 class="top-gallery__title">Processing Capacity Showcase</h2>
      </div>
      <div class="gallery-grid gallery-grid--top">
        <figure v-for="item in topImages" :key="item.title" class="gallery-item gallery-item--top">
          <img class="gallery-img" :src="item.src" :alt="item.title" />
        </figure>
      </div>
    </section>

    <section class="linked-showcase">
      <div class="linked-showcase__head">
        <div class="top-gallery__kicker">Core categories</div>
        <h2 class="linked-showcase__title">Machining Services Navigation</h2>
      </div>

      <article
        v-for="(group, gidx) in categoryGalleries"
        :id="group.id"
        :key="group.id"
        class="category-block"
      >
        <div class="category-head">
          <div class="category-badge">0{{ gidx + 1 }}</div>
          <div class="category-meta">
            <h3 class="category-title">{{ group.title }}</h3>
            <p class="category-sub">{{ group.images.length }} images</p>
          </div>
        </div>
        <div class="category-grid" :class="{ 'category-grid--five': group.id === 'sheet-metal' }">
          <figure
            v-for="(src, idx) in group.images"
            :key="src"
            class="category-item"
            :class="{ 'category-item--hero': idx === 0 && group.id !== 'sheet-metal' }"
          >
            <img class="category-img" :src="src" :alt="group.title" />
          </figure>
        </div>
      </article>
    </section>

    <section class="content-block">
      <div class="content-kicker">Processing Capacity</div>
      <h1 class="content-title">Products and Services</h1>
      <div class="content-desc">
        <p>
          We are committed to providing high-quality precision mechanical parts
          and services to our customers, and we take pride in adhering to the
          highest quality standards and maintaining a deep commitment to
          understanding customer needs. Our precision machining capabilities are
          second to none in the industry, and we consistently employ flexible,
          innovative approaches to achieve tight-tolerance processing of materials.
        </p>
        <p>
          Yuanteng Precision Technology Co., Ltd. offers customized,
          high-precision machining services, including laser machining,
          super-finishing, precision grinding, and CNC threading. From miniature
          components to large precision parts, we manufacture every product to
          meet your exact accuracy requirements.
        </p>
        <p>
          Leveraging our customized precision machining and grinding
          capabilities, together with professional technical expertise and
          comprehensive, team-oriented customer service, we are dedicated to
          fulfilling the diverse needs of our clients.
        </p>
      </div>

    </section>

    <section class="bottom-gallery">
      <div class="gallery-title">More Factory Views</div>
      <div class="gallery-grid gallery-grid--bottom">
        <figure v-for="item in bottomImages" :key="item.title" class="gallery-item">
          <img class="gallery-img" :src="item.src" :alt="item.title" />
          <figcaption class="gallery-caption">{{ item.title }}</figcaption>
        </figure>
      </div>
    </section>
  </a-card>
</template>

<script setup lang="ts">
import { nextTick, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const topImageFiles = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
  '13.jpg',
  '14.jpg',
  '15.jpg',
  '16.jpg',
  '17.jpg',
  '18.jpg',
  '19.jpg',
  '20.jpg'
] as const;

const topImages = topImageFiles.map((file, idx) => ({
  title: `Factory View ${idx + 1}`,
  src: `/images/five/${file}`,
}));

/** Sheet Metal：按 1.0～1.4、2.0～2.4、3.0～3.4 排列（与 public 下文件名一致；2.2 资源为双点扩展名） */
const SHEET_METAL_PART_IMAGES = [
  '/images/Sheet Metal Parts/1.0.jpg',
  '/images/Sheet Metal Parts/1.1.jpg',
  '/images/Sheet Metal Parts/1.2.jpg',
  '/images/Sheet Metal Parts/1.3.jpg',
  '/images/Sheet Metal Parts/1.4.jpg',
  '/images/Sheet Metal Parts/2.0.jpg',
  '/images/Sheet Metal Parts/2.1.jpg',
  '/images/Sheet Metal Parts/2.2..jpg',
  '/images/Sheet Metal Parts/2.3.jpg',
  '/images/Sheet Metal Parts/2.4.jpg',
  '/images/Sheet Metal Parts/3.0.jpg',
  '/images/Sheet Metal Parts/3.1.jpg',
  '/images/Sheet Metal Parts/3.2.jpg',
  '/images/Sheet Metal Parts/3.3.jpg',
  '/images/Sheet Metal Parts/3.4.jpg',
] as const;

const categoryGalleries = [
  {
    id: 'cnc-micro',
    title: 'CNC Micromachining',
    images: Array.from({ length: 9 }, (_, i) => `/images/CNC Micromachining/${i + 1}.jpg`),
  },
  {
    id: 'cnc-turned',
    title: 'CNC Turned Parts',
    images: Array.from({ length: 9 }, (_, i) => `/images/CNC Turned Parts/${i + 1}.jpg`),
  },
  {
    id: 'sheet-metal',
    title: 'Sheet Metal Parts',
    images: SHEET_METAL_PART_IMAGES,
  },
] as const;

const bottomImages = [
  { title: 'Workshop View 01', src: '/images/four/four1.jpg' },
  { title: 'Workshop View 02', src: '/images/four/four2.jpg' },
  { title: 'Workshop View 03', src: '/images/four/four3.jpg' },
  { title: 'Workshop View 04', src: '/images/four/four4.jpg' }
];

const route = useRoute();

/** 根据 hash 滚动到对应品类（兼容固定头部） */
function scrollToHashSection(hash: string) {
  if (!hash) return;
  const id = hash.startsWith('#') ? hash.slice(1) : hash;
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

onMounted(() => {
  nextTick(() => {
    scrollToHashSection(route.hash);
  });
});

watch(
  () => route.hash,
  (hash) => {
    nextTick(() => {
      scrollToHashSection(hash);
    });
  }
);

</script>

<style scoped>
.capacity-card {
  background: #ffffffaa;
  border-radius: 16px;
  box-shadow: 0 10px 28px rgba(22, 119, 255, 0.1);
  overflow: hidden;
  position: relative;
}

.capacity-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(22, 119, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(22, 119, 255, 0.04) 1px, transparent 1px);
  background-size: 26px 26px;
  pointer-events: none;
}

.top-gallery {
  margin-bottom: 16px;
  padding: 14px;
  border-radius: 16px;
  background:
    radial-gradient(circle at 90% 10%, rgba(147, 197, 253, 0.35), transparent 36%),
    linear-gradient(180deg, rgba(236, 246, 255, 0.86) 0%, rgba(255, 255, 255, 0.98) 100%);
  border: 1px solid rgba(148, 197, 255, 0.45);
  box-shadow: 0 12px 30px rgba(15, 59, 122, 0.08);
}

.top-gallery__head {
  margin-bottom: 12px;
}

.top-gallery__kicker {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(219, 234, 254, 0.9);
  border: 1px solid rgba(96, 165, 250, 0.45);
  color: #0f4fc2;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
}

.top-gallery__title {
  margin: 8px 0 0;
  font-size: clamp(20px, 2.8vw, 28px);
  line-height: 1.2;
  color: #0f3b7a;
  font-weight: 800;
}

.gallery-title {
  margin: 0 0 12px;
  font-size: 18px;
  font-weight: 700;
  color: #0f3b7a;
}

.gallery-grid {
  display: grid;
  gap: 12px;
}

.gallery-grid--top {
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-auto-rows: 1fr;
}

/* 底部四张：一行两张，共两行 */
.gallery-grid--bottom {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.gallery-item {
  position: relative;
  margin: 0;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 8px 20px rgba(22, 119, 255, 0.12);
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.gallery-item::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent 35%, rgba(255, 255, 255, 0.24) 50%, transparent 65%);
  transform: translateX(-120%);
  transition: transform 520ms ease;
  pointer-events: none;
}

.gallery-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 26px rgba(22, 119, 255, 0.18);
}

.gallery-item:hover::after {
  transform: translateX(120%);
}

.gallery-caption {
  position: relative;
}

.gallery-caption::before {
  content: '';
  position: absolute;
  left: 10px;
  right: 10px;
  top: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(22, 119, 255, 0.35), transparent);
}

.gallery-img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  display: block;
}

.gallery-item--top {
  border: 1px solid rgba(148, 197, 255, 0.42);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.85) inset,
    0 10px 24px rgba(22, 119, 255, 0.12);
  background: linear-gradient(180deg, #ffffff 0%, #f6faff 100%);
}

.gallery-item--top::after {
  display: none;
}

/* 顶部图统一与下方一致：每行 5 张，无首张放大占格 */
.gallery-item--top .gallery-img {
  aspect-ratio: 16 / 10;
  object-fit: cover;
  padding: 0;
  background: transparent;
  transition: transform 260ms ease;
}

.gallery-item--top .gallery-caption {
  text-align: left;
  padding: 8px 10px 10px;
  font-size: 11px;
  letter-spacing: 0.01em;
  color: #0f3b7a;
}

.gallery-item--top:hover .gallery-img {
  transform: scale(1.04);
}

.gallery-caption {
  padding: 8px 10px 10px;
  font-size: 12px;
  font-weight: 600;
  color: #1e3a8a;
}

.content-block {
  margin: 6px 0 18px;
  padding: 14px 14px 12px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(236, 246, 255, 0.72) 0%, rgba(255, 255, 255, 0.96) 100%);
  border: 1px solid rgba(148, 197, 255, 0.35);
}

.linked-showcase {
  margin: 8px 0 16px;
  padding: 16px;
  border-radius: 18px;
  background:
    radial-gradient(circle at 12% 8%, rgba(125, 211, 252, 0.24), transparent 34%),
    radial-gradient(circle at 90% 95%, rgba(147, 197, 253, 0.2), transparent 34%),
    linear-gradient(180deg, rgba(239, 246, 255, 0.9) 0%, rgba(255, 255, 255, 0.98) 100%);
  border: 1px solid rgba(148, 197, 255, 0.42);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.9) inset,
    0 14px 30px rgba(15, 59, 122, 0.1);
}

.linked-showcase__head {
  margin-bottom: 12px;
}

.linked-showcase__title {
  margin: 8px 0 0;
  font-size: clamp(20px, 2.6vw, 28px);
  line-height: 1.2;
  color: #0f3b7a;
  font-weight: 800;
}

.category-block {
  margin-top: 14px;
  padding: 12px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(148, 197, 255, 0.35);
  box-shadow: 0 8px 18px rgba(22, 119, 255, 0.08);
  scroll-margin-top: 160px;
}

.category-head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.category-badge {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 800;
  color: #0f4fc2;
  background: linear-gradient(180deg, #dbeafe 0%, #bfdbfe 100%);
  border: 1px solid rgba(96, 165, 250, 0.5);
}

.category-meta {
  min-width: 0;
}

.category-title {
  margin: 0;
  font-size: 19px;
  font-weight: 800;
  color: #0f3b7a;
}

.category-sub {
  margin: 2px 0 0;
  font-size: 12px;
  color: rgba(15, 59, 122, 0.65);
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 10px;
}

/* Sheet Metal：每行 5 张 */
.category-grid--five {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.category-item {
  margin: 0;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(148, 197, 255, 0.32);
  box-shadow: 0 6px 16px rgba(22, 119, 255, 0.1);
  scroll-margin-top: 160px;
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.category-item--hero {
  grid-column: span 2;
  grid-row: span 2;
}

.category-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(22, 119, 255, 0.15);
}

.category-img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
}

.content-kicker {
  font-size: 13px;
  letter-spacing: 0.08em;
  font-weight: 700;
  text-transform: uppercase;
  color: #1677ff;
}

.content-title {
  position: relative;
  display: inline-block;
  margin: 8px 0 10px;
  font-size: 30px;
  line-height: 1.2;
  font-weight: 700;
  color: #0f3b7a;
}

.content-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 52px;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, #1677ff, rgba(22, 119, 255, 0.2));
}

.content-desc p {
  margin: 0 0 11px;
  font-size: 15px;
  line-height: 1.85;
  color: rgba(15, 59, 122, 0.9);
}


@media (max-width: 1024px) {
  .gallery-grid--top {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .content-title {
    font-size: 24px;
  }

  .gallery-grid--top {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .gallery-item--top .gallery-img {
    aspect-ratio: 4 / 3;
  }

  .gallery-grid--bottom {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .gallery-grid--bottom .gallery-item:nth-child(1),
  .gallery-grid--bottom .gallery-item:nth-child(2),
  .gallery-grid--bottom .gallery-item:nth-child(3),
  .gallery-grid--bottom .gallery-item:nth-child(4),
  .gallery-grid--bottom .gallery-item:nth-child(5) {
    grid-column: span 1;
  }

  .category-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .category-grid--five {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .category-item--hero {
    grid-column: span 3;
    grid-row: span 1;
  }

  .category-img {
    aspect-ratio: 4 / 3;
  }

}
</style>

