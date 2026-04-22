<template>
  <a-card class="page-card" :bordered="false">
    <section class="hero">
      <div class="hero-kicker">Precision Manufacturing</div>
      <h1 class="hero-title">Sheet Metal Fabrication</h1>
      <div class="hero-desc">
        <p>
          Yuanteng Precision Technology specializes in high-precision custom sheet metal fabrication. Integrating laser cutting, CNC bending, stamping, welding, riveting, surface treatment and finished assembly, we provide one-stop custom sheet metal structure solutions for global customers.
        </p>
        <p>
          Equipped with a full set of automated CNC sheet metal production equipment and strict ISO quality control, we ensure accurate dimensions, excellent appearance and stable structure. We support non-standard customization, rapid prototyping, small-batch flexible production and mass manufacturing. Our products are widely used in automation equipment, industrial cabinets, medical devices, aerospace, new energy, electronics and communication industries.
        </p>
      </div>
    </section>

    <section class="tech-section">
      <div class="section-header">
        <div class="section-kicker">Expertise</div>
        <h2 class="section-title">Our Sheet Metal Processing Technologies</h2>
      </div>
      <div class="tech-list">
        <div class="tech-item">Laser cutting</div>
        <div class="tech-item">CNC punching</div>
        <div class="tech-item">CNC bending</div>
        <div class="tech-item">Precision stamping</div>
        <div class="tech-item">Rivet nut installation</div>
        <div class="tech-item">TIG/MIG/laser welding</div>
        <div class="tech-item">Deburring</div>
        <div class="tech-item">Overall assembly of sheet metal structural parts</div>
      </div>
    </section>

    <section class="materials-section">
      <div class="section-header">
        <div class="section-kicker">Materials</div>
        <h2 class="section-title">Available Materials</h2>
      </div>
      <div class="materials-grid">
        <div class="material-card">
          <div class="material-icon">🔩</div>
          <div class="material-name">Cold-rolled steel sheet</div>
        </div>
        <div class="material-card">
          <div class="material-icon">⚙️</div>
          <div class="material-name">Hot-rolled steel sheet</div>
        </div>
        <div class="material-card">
          <div class="material-icon">🛡️</div>
          <div class="material-name">Stainless steel sheet</div>
        </div>
        <div class="material-card">
          <div class="material-icon">🔧</div>
          <div class="material-name">Aluminum alloy sheet</div>
        </div>
        <div class="material-card">
          <div class="material-icon">⚡</div>
          <div class="material-name">Galvanized steel sheet</div>
        </div>
        <div class="material-card">
          <div class="material-icon">🔌</div>
          <div class="material-name">Electro-galvanized steel sheet</div>
        </div>
        <div class="material-card">
          <div class="material-icon">🥉</div>
          <div class="material-name">Copper</div>
        </div>
      </div>
      <div class="thickness-info">
        <div class="thickness-badge">Sheet thickness range</div>
        <div class="thickness-value">0.5mm – 10mm</div>
      </div>
    </section>

    <section class="precision-section">
      <div class="section-header">
        <div class="section-kicker">Quality</div>
        <h2 class="section-title">Sheet Metal Processing Precision</h2>
      </div>
      <div class="precision-grid">
        <div class="precision-card">
          <div class="precision-label">Bending tolerance</div>
          <div class="precision-value">±0.1mm</div>
        </div>
        <div class="precision-card">
          <div class="precision-label">Cutting tolerance</div>
          <div class="precision-value">±0.05mm</div>
        </div>
        <div class="precision-card">
          <div class="precision-label">Batch consistency</div>
          <div class="precision-value">Stable</div>
        </div>
      </div>
    </section>

    <section class="finishes-section">
      <div class="section-header">
        <div class="section-kicker">Surface Treatment</div>
        <h2 class="section-title">Surface Finishes</h2>
      </div>
      <div class="finishes-list">
        <div class="finish-item">Powder coating</div>
        <div class="finish-item">Anodizing</div>
        <div class="finish-item">Brushing</div>
        <div class="finish-item">Plating</div>
        <div class="finish-item">Electrophoresis</div>
        <div class="finish-item">Passivation</div>
        <div class="finish-item">Sandblasting</div>
        <div class="finish-item">Blackening</div>
      </div>
    </section>

    <section class="advantages-section">
      <div class="section-header">
        <div class="section-kicker">Why Choose Us</div>
        <h2 class="section-title">Core Advantages</h2>
      </div>
      <div class="advantages-list">
        <article class="advantage-card">
          <div class="advantage-number">1</div>
          <h3 class="advantage-title">Full in-house production</h3>
          <p class="advantage-desc">No middlemen, fast lead time and high cost-effectiveness.</p>
        </article>
        <article class="advantage-card">
          <div class="advantage-number">2</div>
          <h3 class="advantage-title">Flexible production</h3>
          <p class="advantage-desc">Multi-variety, small-batch production with rapid prototyping service.</p>
        </article>
        <article class="advantage-card">
          <div class="advantage-number">3</div>
          <h3 class="advantage-title">High-precision equipment</h3>
          <p class="advantage-desc">CNC equipment for stable dimensions and smooth, burr-free surfaces.</p>
        </article>
        <article class="advantage-card">
          <div class="advantage-number">4</div>
          <h3 class="advantage-title">One-stop service</h3>
          <p class="advantage-desc">Design Optimization → Prototyping → Production → Surface Treatment → Assembly → Delivery.</p>
        </article>
      </div>
    </section>

    <section class="products-section">
      <div class="section-header">
        <div class="section-kicker">Portfolio</div>
        <h2 class="section-title">Main Products</h2>
      </div>
      <div class="products-grid">
        <div class="product-item">Equipment enclosures</div>
        <div class="product-item">Chassis & cabinets</div>
        <div class="product-item">Machine frames</div>
        <div class="product-item">Sheet metal brackets</div>
        <div class="product-item">Panels</div>
        <div class="product-item">Bases</div>
        <div class="product-item">Shielding covers</div>
        <div class="product-item">Hardware structural parts</div>
        <div class="product-item">Custom non-standard sheet metal assemblies</div>
      </div>
    </section>

    <section class="gallery-section">
      <div class="section-header">
        <div class="section-kicker">Showcase</div>
        <h2 class="section-title">Product Gallery</h2>
      </div>
      <div class="gallery-grid">
        <figure v-for="(image, index) in galleryImages" :key="index" class="gallery-item">
          <img class="gallery-img" :src="image" :alt="'Sheet Metal Fabrication ' + (index + 1)" />
          <figcaption class="gallery-caption">Product {{ index + 1 }}</figcaption>
        </figure>
      </div>
    </section>
  </a-card>
</template>

<script setup lang="ts">
const galleryImages = [
  '/images/six/1.jpg',
  '/images/six/2.jpg',
  '/images/six/3.jpg',
  '/images/six/4.jpg',
  '/images/six/5.jpg',
  '/images/six/6.jpg',
  '/images/six/7.jpg',
  '/images/six/8.jpg',
  '/images/six/9.jpg',
  '/images/six/10.jpg',
  '/images/six/11.jpg',
  '/images/six/12.jpg',
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

.section-header {
  margin-bottom: 16px;
  padding: 14px 14px 16px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(236, 246, 255, 0.68) 0%, rgba(255, 255, 255, 0.95) 100%);
  border: 1px solid rgba(148, 197, 255, 0.35);
}

.section-kicker {
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

.section-title {
  margin: 0;
  font-size: 24px;
  line-height: 1.25;
  font-weight: 800;
  color: #0f3b7a;
}

.tech-section {
  margin: 16px 0;
}

.tech-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}

.tech-item {
  padding: 12px 14px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #0f3b7a;
  background: linear-gradient(180deg, rgba(236, 246, 255, 0.78) 0%, rgba(255, 255, 255, 0.96) 100%);
  border: 1px solid rgba(148, 197, 255, 0.4);
  text-align: center;
}

.materials-section {
  margin: 16px 0;
}

.materials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
  margin-bottom: 16px;
}

.material-card {
  padding: 16px 12px;
  border-radius: 12px;
  text-align: center;
  background: linear-gradient(180deg, rgba(236, 246, 255, 0.78) 0%, rgba(255, 255, 255, 0.96) 100%);
  border: 1px solid rgba(148, 197, 255, 0.4);
  transition: transform 240ms ease, box-shadow 240ms ease;
}

.material-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(22, 119, 255, 0.15);
}

.material-icon {
  font-size: 32px;
  margin-bottom: 8px;
}

.material-name {
  font-size: 13px;
  font-weight: 600;
  color: #0f3b7a;
  line-height: 1.4;
}

.thickness-info {
  padding: 16px;
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(236, 246, 255, 0.72) 0%, rgba(255, 255, 255, 0.96) 100%);
  border: 1px solid rgba(148, 197, 255, 0.35);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.thickness-badge {
  font-size: 14px;
  font-weight: 600;
  color: #0f3b7a;
}

.thickness-value {
  font-size: 18px;
  font-weight: 800;
  color: #1677ff;
}

.precision-section {
  margin: 16px 0;
}

.precision-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}

.precision-card {
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  background: linear-gradient(180deg, rgba(236, 246, 255, 0.78) 0%, rgba(255, 255, 255, 0.96) 100%);
  border: 1px solid rgba(148, 197, 255, 0.4);
}

.precision-label {
  font-size: 13px;
  font-weight: 600;
  color: #0f3b7a;
  margin-bottom: 8px;
}

.precision-value {
  font-size: 24px;
  font-weight: 800;
  color: #1677ff;
}

.finishes-section {
  margin: 16px 0;
}

.finishes-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
}

.finish-item {
  padding: 12px 14px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #0f3b7a;
  background: linear-gradient(180deg, rgba(236, 246, 255, 0.78) 0%, rgba(255, 255, 255, 0.96) 100%);
  border: 1px solid rgba(148, 197, 255, 0.4);
  text-align: center;
}

.advantages-section {
  margin: 16px 0;
}

.advantages-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 14px;
}

.advantage-card {
  padding: 20px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(236, 246, 255, 0.78) 0%, rgba(255, 255, 255, 0.96) 100%);
  border: 1px solid rgba(148, 197, 255, 0.4);
  position: relative;
  padding-left: 70px;
}

.advantage-number {
  position: absolute;
  left: 20px;
  top: 20px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1677ff 0%, #69b1ff 100%);
  color: white;
  font-size: 18px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
}

.advantage-title {
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 700;
  color: #0f3b7a;
}

.advantage-desc {
  margin: 0;
  font-size: 14px;
  color: rgba(15, 59, 122, 0.85);
  line-height: 1.6;
}

.products-section {
  margin: 16px 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 10px;
}

.product-item {
  padding: 14px 16px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #0f3b7a;
  background: linear-gradient(180deg, rgba(236, 246, 255, 0.78) 0%, rgba(255, 255, 255, 0.96) 100%);
  border: 1px solid rgba(148, 197, 255, 0.4);
  text-align: center;
}

.gallery-section {
  margin: 16px 0;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 14px;
}

.gallery-item {
  margin: 0;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 8px 20px rgba(22, 119, 255, 0.12);
  transition: transform 240ms ease, box-shadow 240ms ease;
}

.gallery-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(22, 119, 255, 0.18);
}

.gallery-img {
  width: 100%;
  aspect-ratio: 2 / 2;
  object-fit: cover;
  display: block;
}

.gallery-caption {
  padding: 10px 12px;
  font-size: 13px;
  font-weight: 600;
  color: #1e3a8a;
  text-align: center;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 24px;
  }

  .section-title {
    font-size: 20px;
  }

  .tech-list,
  .finishes-list {
    grid-template-columns: repeat(2, 1fr);
  }

  .materials-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .precision-grid {
    grid-template-columns: 1fr;
  }

  .advantages-list {
    grid-template-columns: 1fr;
  }

  .advantage-card {
    padding-left: 20px;
    padding-top: 60px;
  }

  .advantage-number {
    left: 20px;
    top: 20px;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .thickness-info {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 20px;
  }

  .tech-list,
  .finishes-list {
    grid-template-columns: 1fr;
  }

  .materials-grid {
    grid-template-columns: 1fr;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
