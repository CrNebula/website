<template>
  <a-config-provider :theme="{ token: { colorPrimary: '#1677ff' } }">
    <a-layout class="app-layout">
      <a-layout-header class="app-header">
        <div class="header-inner">
          <div class="header-top">
            <div class="brand" aria-label="YUANTENG PRECISION TECHNOLOGY LIMITED">
              <div class="brand-logo" :class="`brand-logo--${logoVariant}`" aria-hidden="true">
                <svg v-if="logoVariant === 'tech'" viewBox="0 0 64 64" role="img">
                  <defs>
                    <linearGradient id="ytg-tech" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stop-color="#1d4ed8" />
                      <stop offset="100%" stop-color="#38bdf8" />
                    </linearGradient>
                  </defs>
                  <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#ytg-tech)" />
                  <path
                    d="M15 18h10l7 10 7-10h10L37 35v11h-10V35L15 18z"
                    fill="#ffffff"
                  />
                  <rect x="26" y="29" width="12" height="5" rx="2.5" fill="#bfdbfe" />
                </svg>
                <svg v-else-if="logoVariant === 'minimal'" viewBox="0 0 64 64" role="img">
                  <defs>
                    <linearGradient id="ytg-minimal" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stop-color="#0f3b7a" />
                      <stop offset="100%" stop-color="#1677ff" />
                    </linearGradient>
                  </defs>
                  <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#ytg-minimal)" />
                  <path
                    d="M18 17h8l6 10 6-10h8L36 34v13h-8V34L18 17z"
                    fill="#ffffff"
                  />
                  <circle cx="32" cy="49" r="2.6" fill="#93c5fd" />
                </svg>
                <svg v-else viewBox="0 0 64 64" role="img">
                  <defs>
                    <linearGradient id="ytg-industry" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stop-color="#0369a1" />
                      <stop offset="100%" stop-color="#0ea5e9" />
                    </linearGradient>
                  </defs>
                  <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#ytg-industry)" />
                  <g fill="#ffffff">
                    <path d="M18 21h7l7 9 7-9h7L36 35v10h-8V35L18 21z" />
                    <path d="M17 45h30v3H17z" opacity="0.65" />
                  </g>
                  <g fill="#bae6fd">
                    <circle cx="14" cy="14" r="2.1" />
                    <circle cx="50" cy="14" r="2.1" />
                    <circle cx="14" cy="50" r="2.1" />
                    <circle cx="50" cy="50" r="2.1" />
                  </g>
                </svg>
              </div>
              <div class="brand-text">
                <div class="brand-en" :class="`brand-en--${logoVariant}`">
                  YUANTENG PRECISION TECHNOLOGY LIMITED
                </div>
                <div class="brand-zh" :class="`brand-zh--${logoVariant}`">远腾精工科技有限公司</div>
              </div>
            </div>
            <div class="header-actions">
              <!-- <a-button type="primary" shape="round" class="header-search-btn" @click="onSearchClick">
                搜索
                <SearchOutlined class="header-search-icon" />
              </a-button> -->
            </div>
          </div>
          <div class="header-bottom">
            <TopTabs />
          </div>
        </div>
      </a-layout-header>
      <a-layout-content class="app-content">
        <router-view />
      </a-layout-content>

      <a-layout-footer class="site-footer">
        <div class="footer-inner">
          <div class="footer-logo" aria-label="Yuanteng logo">
            <svg viewBox="0 0 64 64" role="img">
              <defs>
                <linearGradient id="ytg-footer" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#1d4ed8" />
                  <stop offset="100%" stop-color="#38bdf8" />
                </linearGradient>
              </defs>
              <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#ytg-footer)" />
              <path d="M15 18h10l7 10 7-10h10L37 35v11h-10V35L15 18z" fill="#ffffff" />
              <rect x="26" y="29" width="12" height="5" rx="2.5" fill="#bfdbfe" />
            </svg>
          </div>
          <div class="footer-info">
            <div class="footer-item"><span class="footer-key">Email:</span> xxx@yuantengjg.com</div>
            <div class="footer-item">
              <span class="footer-key">Address:</span> No. 2, Hequeling Street, Baitu Village, Zhongluotan
              Town, Baiyun District, Guangzhou City, China
            </div>
          </div>
        </div>
      </a-layout-footer>

      <div class="side-tools">
        <a-popover trigger="hover" placement="left">
          <template #content>
            <div class="tool-popover">Whatsapp: 86 18219157236</div>
          </template>
          <a-button class="tool-btn" shape="circle" :icon="h(WhatsAppOutlined)" />
        </a-popover>

        <a-popover trigger="hover" placement="left">
          <template #content>
            <div class="tool-popover">Email: xxx@yuantengjg.com</div>
          </template>
          <a-button class="tool-btn" shape="circle" :icon="h(MailOutlined)" />
        </a-popover>

        <a-popover trigger="hover" placement="left">
          <template #content>
            <div class="tool-popover">Phone: +86-18219157236</div>
          </template>
          <a-button class="tool-btn" shape="circle" :icon="h(PhoneOutlined)" />
        </a-popover>

        <a-popover trigger="hover" placement="left">
          <template #content>
            <div class="tool-popover tool-popover--qr">
              <img class="wechat-qr" src="/images/wechat-qr.jpg" alt="WeChat QR Code" />
            </div>
          </template>
          <a-button class="tool-btn" shape="circle" :icon="h(WechatOutlined)" />
        </a-popover>
      </div>

      <a-back-top :visibilityHeight="320">
        <div class="back-top-btn">
          <VerticalAlignTopOutlined />
        </div>
      </a-back-top>
    </a-layout>
  </a-config-provider>
</template>

<script setup lang="ts">
import { h } from 'vue';
import {
  MailOutlined,
  PhoneOutlined,
  VerticalAlignTopOutlined,
  WechatOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons-vue';
import TopTabs from '@/components/TopTabs.vue';

type LogoVariant = 'tech' | 'minimal' | 'industry';

// 切换品牌风格：'tech' | 'minimal' | 'industry'
const logoVariant: LogoVariant = 'tech';

</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  overflow-x: hidden;
}

.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 120px;
  z-index: 50;
  background: linear-gradient(135deg, #e8f4ff 0%, #cfeaff 100%);
  padding: 0;
  box-shadow: 0 4px 18px rgba(22, 119, 255, 0.12);
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 16px 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.header-top {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.header-bottom {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.header-search-btn {
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(22, 119, 255, 0.35);
}

.header-search-icon {
  margin-inline-start: 6px;
  font-size: 14px;
}

.brand {
  justify-content: flex-start;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  min-width: 0;
  max-width: 100%;
}

.brand-logo {
  width: 44px;
  height: 44px;
  flex: 0 0 44px;
  border-radius: 12px;
}

.brand-logo--tech {
  box-shadow: 0 6px 16px rgba(29, 78, 216, 0.28);
}

.brand-logo--minimal {
  box-shadow: 0 6px 16px rgba(15, 59, 122, 0.28);
}

.brand-logo--industry {
  box-shadow: 0 6px 16px rgba(3, 105, 161, 0.3);
}

.brand-logo svg {
  width: 100%;
  height: 100%;
  display: block;
}

.brand-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  min-width: 0;
}

.brand-en {
  font-size: 13px;
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: 0.035em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.45);
}

.brand-en--tech {
  color: transparent;
  background: linear-gradient(90deg, #1d4ed8 0%, #1677ff 48%, #36a3ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
}

.brand-en--minimal {
  color: transparent;
  background: linear-gradient(90deg, #0f3b7a 0%, #1e40af 100%);
  -webkit-background-clip: text;
  background-clip: text;
}

.brand-en--industry {
  color: transparent;
  background: linear-gradient(90deg, #075985 0%, #0284c7 100%);
  -webkit-background-clip: text;
  background-clip: text;
}

.brand-zh {
  margin-top: 1px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.08;
  letter-spacing: 0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0.9;
}

.brand-zh--tech {
  color: #0f3b7a;
}

.brand-zh--minimal {
  color: #1e3a8a;
}

.brand-zh--industry {
  color: #075985;
}

.app-content {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  background: #f6fbff;
  /* 固定顶栏占位，避免首屏内容被挡住 */
  padding: 20px 16px 40px;
  padding-top: calc(120px + 20px);
}

.site-footer {
  padding: 0;
  background: linear-gradient(135deg, #0f3b7a 0%, #075985 100%);
  border-top: 1px solid rgba(125, 211, 252, 0.25);
}

.footer-inner {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 14px;
}

.footer-logo {
  width: 42px;
  height: 42px;
  flex: 0 0 42px;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(7, 89, 133, 0.45);
}

.footer-logo svg {
  width: 100%;
  height: 100%;
  display: block;
}

.footer-info {
  min-width: 0;
  color: rgba(239, 246, 255, 0.95);
  font-size: 13px;
  line-height: 1.65;
}

.footer-item {
  overflow-wrap: anywhere;
}

.footer-key {
  color: #bae6fd;
  font-weight: 700;
}

.side-tools {
  position: fixed;
  right: 16px;
  top: 58%;
  transform: translateY(-50%);
  z-index: 120;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tool-btn {
  width: 38px;
  height: 38px;
  border-color: rgba(148, 197, 255, 0.45);
  background: linear-gradient(180deg, rgba(239, 246, 255, 0.95) 0%, #ffffff 100%);
  color: #0f4fc2;
  box-shadow: 0 6px 14px rgba(15, 79, 194, 0.2);
}

.tool-btn:hover {
  color: #1677ff;
  border-color: #69b1ff;
}

.tool-popover {
  min-width: 220px;
  font-size: 13px;
  line-height: 1.5;
  color: #0f3b7a;
}

.tool-popover--qr {
  min-width: 0;
  padding: 2px;
}

.wechat-qr {
  width: 220px;
  max-width: 60vw;
  height: auto;
  display: block;
  border-radius: 10px;
}

.back-top-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: linear-gradient(180deg, #1677ff 0%, #0f4fc2 100%);
  box-shadow: 0 8px 18px rgba(15, 79, 194, 0.35);
}

@media (max-width: 600px) {
  .app-header {
    min-height: 0;
  }

  .app-content {
    /* 小屏两行头部 + Tab 略高，多留一点 */
    padding-top: calc(150px + 16px);
  }

  .header-inner {
    padding: 10px 12px 8px;
    gap: 10px;
  }

  .header-top {
    align-items: flex-start;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
  }

  .brand {
    justify-content: flex-start;
    width: 100%;
    max-width: 100%;
  }

  .header-actions {
    justify-content: flex-end;
  }

  .footer-inner {
    align-items: flex-start;
  }

  .side-tools {
    right: 10px;
    top: 62%;
    gap: 6px;
  }

  .tool-btn,
  .back-top-btn {
    width: 34px;
    height: 34px;
  }
}
</style>

