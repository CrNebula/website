<template>
  <a-card class="page-card" :bordered="false">
    <section class="hero">
      <div class="hero-kicker">Product introduction</div>
      <h1 class="hero-title">Product introduction</h1>
      <div class="hero-desc">
        <p>
          Our company is committed to processing and manufacturing precision
          parts. We have our own processing center, CNC lathes milling machines.
          We undertake precision matching parts processing, and the machine with
          advanced processing equipment and testing equipment.
        </p>
        <p>
          What is more, we have the professional, mature and reliable,
          processing technique, high precision processing equipment and advanced
          test instruments which support high quality of our products.
        </p>
        <p>
          We have a professional machining technology team that drives product
          development through precision CNC milling, turning, and flexible
          manufacturing solutions, while ensuring delivery schedules, quality
          control, and competitive pricing.
        </p>
      </div>
    </section>

    <section class="legacy-intro">
      <h2 class="legacy-title">Products and Services</h2>
      <div class="hero-desc">
        <p>
          We are committed to providing high-quality precision mechanical parts
          and services to our customers, and we take pride in adhering to the
          highest quality standards and maintaining a deep commitment to
          understanding customer needs. Our precision machining capabilities are
          second to none in the industry, and we consistently employ flexible,
          innovative approaches to achieve tight-tolerance processing of materials.
        </p>
        <p>
          Yuanteng Precision Technology Co., Ltd offers customized,
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
      <div class="legacy-gallery">
        <figure
          v-for="item in factoryImages"
          :key="item.src"
          class="legacy-item"
          :class="{ 'legacy-item--tall': item.tall }"
        >
          <img class="legacy-img" :src="item.src" :alt="item.title || 'Factory view'" />
          <figcaption v-if="item.title" class="legacy-caption">{{ item.title }}</figcaption>
        </figure>
      </div>
    </section>

    <section class="pre-service-intro">
      <div class="pre-service-main">
        <div class="pre-service-kicker">Product overview</div>
        <h2 class="pre-service-title">Product introduction</h2>
        <div class="pre-service-desc">
          <p>
            Our company is committed to processing and manufacturing precision parts. We have our own processing center,
            CNC lathes milling machines. We undertake precision matching parts processing, and the machine with advanced
            processing equipment and testing equipment.
          </p>
          <p>
            What is more, we have the professional, mature and reliable processing technique, high precision processing
            equipment and advanced test instruments which support high quality of our products.
          </p>
          <p>
            We have a professional machining technology team that drives product development through precision CNC milling,
            turning, and flexible manufacturing solutions, while ensuring delivery schedules, quality control, and
            competitive pricing.
          </p>
        </div>
      </div>
      <div class="pre-service-aside">
        <div class="pre-service-chip">Precision machining</div>
        <div class="pre-service-chip">Stable quality control</div>
        <div class="pre-service-chip">Flexible production</div>
      </div>
    </section>

    <section class="service-grid">
      <article class="service-card">
        <h2 class="service-title">CNC Milling</h2>
        <p class="service-desc">
          We provide precision CNC milling services with 3-axis, 4-axis, and
          5-axis machining capabilities.
        </p>
      </article>
      <article class="service-card">
        <h2 class="service-title">CNC Turning</h2>
        <p class="service-desc">
          We offer CNC turning services, including traditional turning and
          mill-turn capabilities.
        </p>
      </article>
    </section>


    <section class="feature feature--left">
      <div class="feature-text">
        <h3 class="feature-title">CNC Milling Services</h3>
        <p class="feature-desc">
          We always provide CNC machine parts and CNC machining solutions for
          racing, automotive, industrial, aerospace and other fields, which
          allows us to better understand our customers&apos; industry needs and
          better meet their requirements.
        </p>
      </div>
      <div class="feature-media">
        <img :src="sectionImages.milling" alt="CNC Milling Services" />
      </div>
    </section>

    <section class="feature feature--right">
      <div class="feature-text">
        <h3 class="feature-title">5 Axis CNC Machining Services</h3>
        <p class="feature-desc">
          5-axis machining is an absolutely brilliant form of CNC machining and
          is the most accurate and advanced method of manufacturing complex,
          precision metal parts. In a 5 axis machining CNC machine, the tool
          moves in the X, Y, and Z axes, except In addition, the workbench can
          also rotate CNC parts around the X and Y axes. These planes of rotation
          become planes A and B respectively.
        </p>
        <p class="feature-desc">
          As a leading CNC machining factory, these advanced processing
          equipment enable us to manufacture parts that far exceed customer
          expectations.
        </p>
      </div>
      <div class="feature-media">
        <img :src="sectionImages.axis5" alt="5 Axis CNC Machining Services" />
      </div>
    </section>

    <section class="feature feature--left">
      <div class="feature-text">
        <h3 class="feature-title">4 Axis CNC Machinng Serivces</h3>
        <p class="feature-desc">
          CNC 4-axis machining is a processing method that uses computer
          numerical control technology. The machine tool has four axes of motion:
          X, Y, Z and a rotation axis (commonly called the A-axis). This
          configuration allows movement in three linear directions and rotation
          around a rotational axis for more complex and precise part machining,
          especially for complex geometries requiring multi-axis motion.
        </p>
        <p class="feature-desc">
          We are committed to innovation and technological advancement to ensure
          we can meet the requirements for complex geometries and high precision
          in 4-axis CNC machining.
        </p>
      </div>
      <div class="feature-media">
        <img :src="sectionImages.axis4" alt="4 Axis CNC Machinng Serivces" />
      </div>
    </section>

    <section class="feature feature--right">
      <div class="feature-text">
        <h3 class="feature-title">CNC Curved Surface Machining</h3>
        <p class="feature-desc">
          CNC Curved Surface machining is a processing method that processes the
          surface of a workpiece into a complex curved shape, which can meet the
          requirements of different industries for workpiece shape accuracy and
          surface quality.
        </p>
      </div>
      <div class="feature-media">
        <img :src="sectionImages.curved" alt="CNC Curved Surface Machining" />
      </div>
    </section>

    <section class="closing">
      <h3 class="feature-title">Design and Services</h3>
      <p class="feature-desc">
        We optimize product structures and automate production processes as much
        as possible based on customer feedback, significantly enhancing product
        quality, shortening delivery times, and helping customers control costs.
        We strive to provide a reliable and efficient processing service flow for
        our clients.
      </p>
      <p class="feature-desc">
        If you are interested in our company, we welcome you to request a
        quotation. To build confidence in collaborating with us, we offer free
        sample processing based on your drawings for initial engagements.
      </p>
    </section>
  </a-card>
</template>

<script setup lang="ts">
const sectionImages = {
  milling: '/images/second/CNC Milling Services.webp',
  axis5: '/images/second/5 Axis CNC Machining Services.webp',
  axis4: '/images/second/4 Axis CNC Machinng Serivces.webp',
  curved: '/images/second/CNC Curved Surface Machining.webp',
};


type FactoryGalleryItem = {
  title: string;
  src: string;
  /** 为 true 时图区更高，便于看清竖向内容 */
  tall?: boolean;
};

const factoryImages: FactoryGalleryItem[] = [
  {
    title: '',
    src: '/images/four/1.jpg',
    tall: true,
  },
  {
    title: '',
    src: '/images/four/2.png',
    tall: true,
  },
];
</script>

<style scoped>
.page-card {
  background: #ffffffaa;
  border-radius: 16px;
  box-shadow: 0 10px 28px rgba(22, 119, 255, 0.1);
  overflow: hidden;
}

.hero {
  padding: 8px 6px 16px;
}

.hero-kicker {
  font-size: 13px;
  letter-spacing: 0.08em;
  font-weight: 700;
  text-transform: uppercase;
  color: #1677ff;
}

.hero-title {
  margin: 8px 0 14px;
  font-size: 32px;
  line-height: 1.2;
  font-weight: 800;
  color: #0f3b7a;
}

.hero-desc p {
  margin: 0 0 12px;
  color: rgba(15, 59, 122, 0.9);
  line-height: 1.85;
  font-size: 15px;
}

.legacy-intro {
  margin: 6px 0 16px;
  padding: 14px 14px 16px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(236, 246, 255, 0.68) 0%, rgba(255, 255, 255, 0.95) 100%);
  border: 1px solid rgba(148, 197, 255, 0.35);
}

.legacy-title {
  margin: 0 0 10px;
  font-size: 24px;
  line-height: 1.25;
  font-weight: 800;
  color: #0f3b7a;
}

.legacy-gallery {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.legacy-item {
  margin: 0;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 8px 20px rgba(22, 119, 255, 0.12);
}

.legacy-img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  display: block;
}

/* 指定两张：图区更高，仍铺满宽度、完整感略像竖图展示 */
.legacy-item--tall .legacy-img {
  aspect-ratio: 5 / 4;
  object-fit: contain;
  background: linear-gradient(180deg, #f7fbff 0%, #eef4fb 100%);
}

.legacy-caption {
  padding: 9px 11px 11px;
  font-size: 13px;
  font-weight: 600;
  color: #1e3a8a;
}

.pre-service-intro {
  margin: 8px 0 14px;
  padding: 18px;
  border-radius: 16px;
  background:
    radial-gradient(circle at 88% 18%, rgba(147, 197, 253, 0.3), transparent 40%),
    linear-gradient(150deg, rgba(236, 246, 255, 0.92) 0%, rgba(255, 255, 255, 0.98) 68%);
  border: 1px solid rgba(148, 197, 255, 0.45);
  box-shadow: 0 10px 26px rgba(15, 59, 122, 0.08);
  display: grid;
  grid-template-columns: minmax(0, 2.2fr) minmax(220px, 1fr);
  gap: 16px;
  align-items: stretch;
}

.pre-service-main {
  min-width: 0;
}

.pre-service-kicker {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  margin-bottom: 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0f4fc2;
  background: rgba(219, 234, 254, 0.85);
  border: 1px solid rgba(96, 165, 250, 0.45);
}

.pre-service-title {
  margin: 0 0 12px;
  font-size: 24px;
  line-height: 1.25;
  font-weight: 800;
  color: #0f3b7a;
}

.pre-service-desc p {
  margin: 0 0 12px;
  color: rgba(15, 59, 122, 0.9);
  line-height: 1.85;
  font-size: 15px;
}

.pre-service-desc p:last-child {
  margin-bottom: 0;
}

.pre-service-aside {
  display: grid;
  gap: 10px;
  align-content: center;
}

.pre-service-chip {
  padding: 12px 12px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  color: #0f3b7a;
  border: 1px solid rgba(147, 197, 253, 0.6);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(239, 246, 255, 0.88) 100%);
  box-shadow: 0 6px 14px rgba(22, 119, 255, 0.08);
}

.service-grid {
  margin: 8px 0 14px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}


.service-card {
  border-radius: 14px;
  padding: 14px 16px;
  background: linear-gradient(180deg, rgba(236, 246, 255, 0.78) 0%, rgba(255, 255, 255, 0.96) 100%);
  border: 1px solid rgba(148, 197, 255, 0.4);
}

.service-title {
  margin: 0 0 6px;
  font-size: 20px;
  font-weight: 700;
  color: #0f3b7a;
}

.service-desc {
  margin: 0;
  color: rgba(15, 59, 122, 0.88);
  line-height: 1.75;
}

.feature {
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 18px;
  align-items: center;
  position: relative;
  padding-left: 18px;
}

.feature::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  bottom: 10px;
  width: 3px;
  border-radius: 999px;
  background: linear-gradient(180deg, #1677ff, rgba(22, 119, 255, 0.15));
}

.feature--right {
  grid-template-columns: 1fr 1.1fr;
}

.feature--right .feature-text {
  order: 2;
}

.feature--right .feature-media {
  order: 1;
}

.feature-text {
  min-width: 0;
}

.feature-title {
  position: relative;
  display: inline-block;
  margin: 0 0 10px;
  font-size: 24px;
  line-height: 1.25;
  font-weight: 800;
  color: #0f3b7a;
}

.feature-title::before {
  content: '';
  position: absolute;
  left: -10px;
  top: 4px;
  width: 4px;
  height: 20px;
  border-radius: 999px;
  background: linear-gradient(180deg, #1677ff, rgba(22, 119, 255, 0.2));
}

.feature-desc {
  margin: 0 0 10px;
  color: rgba(15, 59, 122, 0.9);
  line-height: 1.85;
  font-size: 15px;
}

.feature-media {
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 10px 26px rgba(22, 119, 255, 0.16);
  transition: transform 240ms ease, box-shadow 240ms ease;
  border: 1px solid rgba(148, 197, 255, 0.35);
}

.feature-media:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 32px rgba(22, 119, 255, 0.2);
}

.feature-media img {
  width: 100%;
  aspect-ratio: 16 / 11;
  object-fit: cover;
  display: block;
  transition: transform 320ms ease;
}

.feature-media:hover img {
  transform: scale(1.03);
}

.closing {
  margin-top: 20px;
  padding: 16px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(236, 246, 255, 0.72) 0%, rgba(255, 255, 255, 0.96) 100%);
  border: 1px solid rgba(148, 197, 255, 0.35);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 24px;
  }

  .pre-service-intro {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 14px;
  }

  .service-grid {
    grid-template-columns: 1fr;
  }


  .legacy-gallery {
    grid-template-columns: 1fr;
  }

  .feature,
  .feature--right {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .feature--right .feature-text,
  .feature--right .feature-media {
    order: initial;
  }

  .feature-title {
    font-size: 20px;
  }
}
</style>

