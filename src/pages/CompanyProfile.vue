<template>
  <a-card class="company-card" :bordered="false">
    <section class="hero-block">
      <div class="hero-text">
        <div class="hero-kicker">Company Profile</div>
        <h1 class="hero-title">Machining Services</h1>
        <p class="hero-desc">
          Yuanteng Precision Technology Co., Ltd. has consistently provided
          high-precision machining services to industries both domestically and
          internationally. Equipped with advanced machining technology, we
          specialize in manufacturing precision small-sized components.
        </p>
      </div>
    </section>

    <section class="detail-block">
      <p class="detail-text">
        Our capabilities cover a wide range of materials, including plastics,
        steel, stainless steel, aerospace alloys, aluminum, titanium, and
        tungsten, and we can achieve strict tolerances of 0.002 or higher.
        Whether you need a reliable supplier of high-performance components for
        critical applications or a partner capable of transforming innovative
        product concepts into reality, we are your ideal choice. With
        excellence in precision engineering and an unwavering commitment to
        perfection, we are dedicated to driving the success of your projects.
      </p>

      <div class="service-box">
        <div class="service-title">Core Capabilities</div>
        <ul class="service-list">
          <li>Machined Components</li>
          <li>CNC Micromachining</li>
          <li>Lathe Machining</li>
          <li>Precision Machining Manufacturer</li>
          <li>Wire Electrical Discharge Machining (Wire EDM)</li>
          <li>Custom Fixturing</li>
          <li>And more</li>
        </ul>
      </div>

      <div class="detail-gallery">
        <div class="detail-gallery__cell">
          <img class="detail-gallery__img" src="/images/three/1.png" alt="Precision workshop 1" />
        </div>
        <div class="detail-gallery__cell">
          <img class="detail-gallery__img" src="/images/three/2.png" alt="Precision workshop 2" />
        </div>
        <div class="detail-gallery__cell">
          <img class="detail-gallery__img" src="/images/three/3.png" alt="Precision workshop 3" />
        </div>
      </div>

      <p class="detail-text">
        Our CNC machining services encompass milling, turning, boring,
        grinding, wire EDM, micromachining, polishing, and drilling processes.
        If you would like to learn more, please contact us. We are committed to
        providing you with in-depth and specialized support.
      </p>
    </section>

    <section class="materials-block">
      <div class="materials-kicker">Materials</div>
      <h2 class="materials-title">Machinable Materials</h2>
      <p class="materials-desc">
        We select materials based on structural performance, precision
        requirements and final application scenarios, ensuring stable quality
        and efficient manufacturing for every component.
      </p>
      <div class="materials-tags">
        <span v-for="item in tags" :key="item" class="materials-tag">{{ item }}</span>
      </div>

      <div class="materials-list">
        <article
          v-for="(item, idx) in materials"
          :key="item.title"
          class="material-item"
          :class="{ 'material-item--reverse': idx % 2 === 1 }"
        >
          <div class="material-media">
            <img :src="item.image" :alt="item.title" class="material-image" />
          </div>
          <div class="material-content">
            <h3 class="material-title">{{ item.title }}</h3>
            <p class="material-text">{{ item.desc }}</p>
          </div>
        </article>
      </div>
    </section>
  </a-card>
</template>

<script setup lang="ts">
const tags = [
  'Aluminum',
  'Stainless Steel',
  'Steel',
  'Brass',
  'Copper',
  'Plastic',
];

const materials = [
  {
    title: 'Aluminum',
    desc: 'Aluminium is a highly malleable, silvery metal that is lightweight, flexible and non-magnetic. The material is easy to work with and can be moulded into almost any material.',
    image: '/images/Materials/Aluminum.webp',
  },
  {
    title: 'Stainless Steel',
    desc: 'Stainless steel is harder than aluminum and has strong corrosion resistance, heat resistance and toughness. It is one of the best materials for many industrial parts.',
    image: '/images/Materials/Stainless Steel.webp',
  },
  {
    title: 'Steel',
    desc: 'Steel is a common metal alloy material mainly composed of iron and carbon. Steel has excellent plasticity, wear resistance and high hardness, making it ideal for use in demanding industrial, racing and aerospace industries.',
    image: '/images/Materials/Steel.webp',
  },
  {
    title: 'Brass',
    desc: 'Brass, with its attractive golden appearance, is a metal made from copper and zinc. This alloy is non-magnetic, has excellent electrical conductivity, and is easy to work with and manufacture, and is commonly used for all types of parts, including screws and bolts, gears, and decorative items.',
    image: '/images/Materials/Brass.webp',
  },
  {
    title: 'Copper',
    desc: 'Copper is characterised by excellent electrical and thermal conductivity, as well as high resistance to rust and corrosion. Therefore, copper machined parts are widely used in the electrical and industrial fields.',
    image: '/images/Materials/Copper.webp',
  },
  {
    title: 'Plastic',
    desc: 'Plastic has become one of the very common CNC machining materials due to its low price and fast machining time. We offer custom CNC machining services for common plastics including ABS, POM, PEEK, PMMA, PA and more.',
    image: '/images/Materials/Plastic.webp',
  },
];
</script>

<style scoped>
.company-card {
  background: #ffffffaa;
  border-radius: 16px;
  box-shadow: 0 10px 28px rgba(22, 119, 255, 0.1);
  overflow: hidden;
  position: relative;
}

.company-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.28) 0%, transparent 40%),
    radial-gradient(circle at 95% 10%, rgba(59, 130, 246, 0.12), transparent 28%);
  pointer-events: none;
}

.hero-block {
  display: block;
  margin-bottom: 16px;
}

.hero-kicker {
  font-size: 13px;
  letter-spacing: 0.08em;
  font-weight: 700;
  text-transform: uppercase;
  color: #1677ff;
}

.hero-title {
  position: relative;
  display: inline-block;
  margin: 8px 0 10px;
  font-size: 32px;
  line-height: 1.2;
  font-weight: 800;
  color: #0f3b7a;
}

.hero-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 56px;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, #1677ff, rgba(22, 119, 255, 0.15));
}

.hero-desc {
  margin: 0;
  line-height: 1.85;
  color: rgba(15, 59, 122, 0.88);
}

.detail-block {
  padding: 14px 14px 10px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(236, 246, 255, 0.68) 0%, rgba(255, 255, 255, 0.96) 100%);
  border: 1px solid rgba(148, 197, 255, 0.35);
  backdrop-filter: blur(2px);
}

.detail-text {
  margin: 0 0 12px;
  font-size: 15px;
  line-height: 1.85;
  color: rgba(15, 59, 122, 0.9);
}

.service-box {
  margin: 10px 0 14px;
  padding: 12px 14px;
  border-radius: 12px;
  background: #ffffffd9;
  border: 1px solid rgba(148, 197, 255, 0.35);
}

.service-title {
  margin: 0 0 8px;
  font-size: 17px;
  font-weight: 700;
  color: #0f3b7a;
}

.service-list {
  margin: 0;
  padding-left: 18px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 6px 18px;
}

.service-list li {
  position: relative;
  color: rgba(15, 59, 122, 0.9);
  line-height: 1.55;
}

.service-list li::marker {
  color: #1677ff;
}

.detail-gallery {
  margin: 12px 0 14px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  align-items: stretch;
}

/* 三格等高：统一比例外框，图片铺满（略裁切以保持整齐） */
.detail-gallery__cell {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(148, 197, 255, 0.35);
  box-shadow: 0 8px 22px rgba(22, 119, 255, 0.14);
  background: #f0f5fb;
  aspect-ratio: 2/0;
  min-height: 0;
}

.detail-gallery__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.materials-block {
  margin-top: 16px;
  padding: 14px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(236, 246, 255, 0.72) 0%, rgba(255, 255, 255, 0.96) 100%);
  border: 1px solid rgba(148, 197, 255, 0.35);
}

.materials-kicker {
  font-size: 13px;
  letter-spacing: 0.08em;
  font-weight: 700;
  text-transform: uppercase;
  color: #1677ff;
}

.materials-title {
  margin: 8px 0 10px;
  font-size: 30px;
  line-height: 1.2;
  font-weight: 800;
  color: #0f3b7a;
}

.materials-desc {
  margin: 0 0 14px;
  font-size: 15px;
  line-height: 1.85;
  color: rgba(15, 59, 122, 0.9);
}

.materials-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.materials-tag {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(22, 119, 255, 0.1);
  border: 1px solid rgba(22, 119, 255, 0.22);
  color: #0f3b7a;
  font-size: 13px;
  font-weight: 600;
}

.materials-list {
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.material-item {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 16px;
  align-items: center;
  border-radius: 14px;
  padding: 12px;
  background: linear-gradient(180deg, rgba(236, 246, 255, 0.72) 0%, rgba(255, 255, 255, 0.96) 100%);
  border: 1px solid rgba(148, 197, 255, 0.35);
}

.material-item::after {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 14px;
  padding: 1px;
  background: linear-gradient(120deg, rgba(22, 119, 255, 0.5), rgba(103, 232, 249, 0.45), rgba(22, 119, 255, 0.2));
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 240ms ease;
  pointer-events: none;
}

.material-item:hover::after {
  opacity: 1;
}

.material-item::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: 4px;
  border-radius: 14px 0 0 14px;
  background: linear-gradient(180deg, #1677ff, rgba(22, 119, 255, 0.25));
}

.material-item--reverse {
  grid-template-columns: 1.05fr 1fr;
}

.material-item--reverse .material-media {
  order: 2;
}

.material-item--reverse .material-content {
  order: 1;
}

.material-media {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 26px rgba(22, 119, 255, 0.14);
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.material-media:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 30px rgba(22, 119, 255, 0.2);
}

.material-image {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  display: block;
}

.material-content {
  min-width: 0;
}

.material-title {
  position: relative;
  display: inline-block;
  margin: 0 0 8px;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 800;
  color: #0f3b7a;
}

.material-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 44px;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, #1677ff, rgba(22, 119, 255, 0.2));
}

.material-text {
  margin: 0;
  font-size: 15px;
  line-height: 1.85;
  color: rgba(15, 59, 122, 0.9);
}


@media (max-width: 768px) {
  .hero-block {
    margin-bottom: 12px;
  }

  .hero-title {
    font-size: 26px;
  }

  .service-list {
    grid-template-columns: 1fr;
  }

  .detail-gallery {
    grid-template-columns: 1fr;
  }

  .materials-title {
    font-size: 24px;
  }

  .material-item,
  .material-item--reverse {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .material-item--reverse .material-media,
  .material-item--reverse .material-content {
    order: initial;
  }

  .material-title {
    font-size: 21px;
  }

}
</style>

