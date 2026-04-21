<template>
  <a-tabs
    class="site-tabs"
    :activeKey="activeKey"
    type="line"
    size="large"
    :tabBarGutter="0"
    @change="onChange"
  >
    <a-tab-pane v-for="t in tabs" :key="t.key">
      <template #tab>
        <span class="tab-label">
          <component :is="t.icon" class="tab-icon" />
          <span class="tab-text">{{ t.label }}</span>
        </span>
      </template>
    </a-tab-pane>
  </a-tabs>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import {
  AppstoreOutlined,
  BankOutlined,
  HomeOutlined,
  PhoneOutlined,
  ToolOutlined,
  SafetyOutlined,
} from '@ant-design/icons-vue';
import { useRoute, useRouter } from 'vue-router';

type TabKey = 'home' | 'sheet-metal' | 'product' | 'company' | 'processing' | 'contact';

const tabs: Array<{ key: TabKey; label: string; icon: object }> = [
  { key: 'home', label: 'Home', icon: HomeOutlined },
  { key: 'sheet-metal', label: 'Sheet Metal Fabrication', icon: SafetyOutlined },
  { key: 'product', label: 'Product introduction', icon: AppstoreOutlined },
  { key: 'company', label: 'Company Profile', icon: BankOutlined },
  { key: 'processing', label: 'Processing capacity', icon: ToolOutlined },
  { key: 'contact', label: 'Contact Us', icon: PhoneOutlined },
];

const route = useRoute();
const router = useRouter();

const activeKey = computed(() => {
  return (route.name as TabKey | undefined) ?? 'home';
});

function onChange(key: string) {
  // ant-tabs 返回的 key 是字符串
  const tabKey = key as TabKey;
  router.push({ name: tabKey });
}
</script>

<style scoped>
.site-tabs {
  width: 100%;
  min-width: 0;
  background: rgba(255, 255, 255, 0.62);
  border-radius: 12px;
  padding: 6px 10px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.65);
}

:deep(.ant-tabs-nav) {
  margin: 0;
  justify-content: center;
  flex-wrap: wrap;
}

/* 禁止 Tab 横向滑动/箭头：全部换行展示 */
:deep(.ant-tabs-nav-wrap) {
  overflow: visible !important;
}

:deep(.ant-tabs-nav-list) {
  flex-wrap: wrap !important;
  transform: none !important;
  width: 100%;
}

:deep(.ant-tabs-nav-operations) {
  display: none !important;
}

:deep(.ant-tabs-tab) {
  margin: 0 !important;
  padding: 6px 8px 8px;
  flex: 1 1 0;
  justify-content: center;
  white-space: normal;
  border-radius: 10px;
  transition: background-color 220ms ease, transform 220ms ease;
}

:deep(.ant-tabs-tab:hover) {
  background-color: rgba(22, 119, 255, 0.08);
  transform: translateY(-1px);
}

:deep(.ant-tabs-tab-btn) {
  width: 100%;
  text-align: center;
  color: #35537d;
  transition: color 220ms ease;
}

:deep(.ant-tabs-tab:hover .ant-tabs-tab-btn) {
  color: #1677ff;
}

:deep(.ant-tabs-tab.ant-tabs-tab-active) {
  background-color: rgba(22, 119, 255, 0.1);
}

:deep(.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn) {
  color: #0f4fc2;
}

:deep(.ant-tabs-ink-bar) {
  height: 4px !important;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    rgba(22, 119, 255, 0.2) 0%,
    #1677ff 22%,
    #69b1ff 50%,
    #1677ff 78%,
    rgba(22, 119, 255, 0.2) 100%
  ) !important;
  box-shadow:
    0 0 0 1px rgba(22, 119, 255, 0.15),
    0 3px 10px rgba(22, 119, 255, 0.35);
}

/* 给下划线增加“中心能量点”效果 */
:deep(.ant-tabs-ink-bar)::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, #e6f4ff 0%, #69b1ff 55%, rgba(22, 119, 255, 0) 75%);
  pointer-events: none;
  animation: inkPulse 1.8s ease-in-out infinite;
}

.tab-label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.tab-icon {
  font-size: 14px;
}

.tab-text {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.01em;
  white-space: nowrap;
}

@keyframes inkPulse {
  0% {
    opacity: 0.45;
    transform: translate(-50%, -50%) scale(0.85);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.08);
  }
  100% {
    opacity: 0.45;
    transform: translate(-50%, -50%) scale(0.85);
  }
}

@media (max-width: 600px) {
  .site-tabs {
    min-width: 0;
    width: 100%;
    max-width: 100%;
    padding: 8px 8px 6px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.82);
    overflow: hidden;
    contain: layout paint;
  }

  :deep(.ant-tabs-nav) {
    width: 100% !important;
    max-width: 100%;
    overflow: hidden;
  }

  :deep(.ant-tabs-nav-list) {
    display: inline-flex !important;
    flex-wrap: nowrap !important;
    width: auto !important;
    min-width: 0 !important;
    row-gap: 0;
  }

  :deep(.ant-tabs-nav-wrap) {
    max-width: 100%;
    overflow-x: auto !important;
    overflow-y: hidden !important;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
  }

  :deep(.ant-tabs-nav-wrap::-webkit-scrollbar) {
    display: none;
  }

  :deep(.ant-tabs-tab) {
    flex: 0 0 auto !important;
    max-width: none;
    min-height: 44px;
    padding: 6px 10px;
    border-radius: 10px;
    margin-right: 6px !important;
  }

  :deep(.ant-tabs-tab:hover) {
    transform: none;
  }

  :deep(.ant-tabs-tab.ant-tabs-tab-active) {
    background: linear-gradient(180deg, rgba(22, 119, 255, 0.18) 0%, rgba(22, 119, 255, 0.1) 100%);
    box-shadow: inset 0 0 0 1px rgba(22, 119, 255, 0.18);
  }

  :deep(.ant-tabs-ink-bar) {
    height: 3px !important;
  }

  .tab-label {
    flex-direction: row;
    gap: 5px;
    line-height: 1;
  }

  .tab-icon {
    font-size: 12px;
  }

  .tab-text {
    font-size: 12px;
    font-weight: 700;
    white-space: nowrap;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 120px;
  }
}
</style>