<template>
  <a-card class="contact-card" :bordered="false">
    <section class="contact-info">
      <h1 class="contact-title">Contact Us</h1>
      <p class="contact-intro">
        For inquiries, quotes, orders, opinions and requests, please use here.
      </p>

      <div class="info-list">
        <p><strong>Business days:</strong> Monday to Friday</p>
        <p class="indent">8:00 am to 5:30 pm (excluding holidays)</p>
        <p>
          <strong>Address:</strong> No. 2, Hequeling Street, Baitu Village,
          Zhongluotan Town, Baiyun District, Guangzhou City, China
        </p>
        <p><strong>Email:</strong> support@yuanteng-precision.com</p>
        <p><strong>Mobile:</strong> +86-18219157236</p>
        <p><strong>Whatsapp:</strong> 8618219157236</p>
      </div>
    </section>

    <section class="form-panel">
      <h2 class="form-title">Send an Email</h2>
      <p class="required-tip">* Required field</p>

      <a-form
        ref="formRef"
        layout="vertical"
        :model="formState"
        :rules="rules"
        @finish="onSubmit"
      >
        <a-row :gutter="14">
          <a-col :xs="24" :md="12">
            <a-form-item label="Name" name="name">
              <a-input v-model:value="formState.name" placeholder="Your name" />
            </a-form-item>
          </a-col>
          <a-col :xs="24" :md="12">
            <a-form-item label="Email" name="email">
              <a-input v-model:value="formState.email" placeholder="Your email" />
            </a-form-item>
          </a-col>
        </a-row>

        <a-form-item label="Subject" name="subject">
          <a-input v-model:value="formState.subject" placeholder="Subject" />
        </a-form-item>

        <a-form-item label="Message" name="message">
          <a-textarea
            v-model:value="formState.message"
            :rows="8"
            placeholder="Please enter your message"
          />
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" class="submit-btn" :loading="submitting">
            Submit
          </a-button>
        </a-form-item>
      </a-form>
    </section>
  </a-card>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { message } from 'ant-design-vue';
import type { FormInstance, Rule } from 'ant-design-vue/es/form';

const formRef = ref<FormInstance>();
const submitting = ref(false);

// Formspree endpoint，示例：https://formspree.io/f/xxxxxxx
const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

const formState = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const rules: Record<string, Rule[]> = {
  name: [{ required: true, message: 'Please enter your name' }],
  email: [
    { required: true, message: 'Please enter your email' },
    { type: 'email', message: 'Please enter a valid email address' },
  ],
  subject: [{ required: true, message: 'Please enter a subject' }],
  message: [{ required: true, message: 'Please enter your message' }],
};


async function onSubmit() {
  if (!formspreeEndpoint) {
    message.error('Form service is not configured yet.');
    return;
  }
  if (submitting.value) return;

  submitting.value = true;
  try {
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: formState.name,
        email: formState.email,
        subject: formState.subject,
        message: formState.message,
      }),
    });

    if (!response.ok) {
      throw new Error('submit failed');
    }

    message.success('Message submitted. We will contact you soon.');
    formRef.value?.resetFields();
  } catch {
    message.error('Failed to send. Please try again later.');
  } finally {
    submitting.value = false;
  }
}
</script>

<style scoped>
.contact-card {
  background: #ffffffaa;
  border-radius: 16px;
  box-shadow: 0 10px 28px rgba(22, 119, 255, 0.1);
}

.contact-info {
  margin-bottom: 16px;
}

.contact-title {
  position: relative;
  display: inline-block;
  margin: 0 0 8px;
  font-size: 30px;
  line-height: 1.2;
  font-weight: 800;
  color: #0f3b7a;
}

.contact-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 50px;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, #1677ff, rgba(22, 119, 255, 0.15));
}

.contact-intro {
  margin: 0 0 12px;
  color: rgba(15, 59, 122, 0.9);
  line-height: 1.8;
}

.info-list p {
  margin: 0 0 8px;
  color: rgba(15, 59, 122, 0.92);
  line-height: 1.75;
}


.indent {
  padding-left: 108px;
}

.form-panel {
  border-radius: 14px;
  border: 1px solid rgba(148, 197, 255, 0.38);
  background: linear-gradient(180deg, rgba(236, 246, 255, 0.72) 0%, rgba(255, 255, 255, 0.96) 100%);
  padding: 14px;
  position: relative;
  overflow: hidden;
}

.form-panel::before {
  content: '';
  position: absolute;
  inset: -120px auto auto -120px;
  width: 280px;
  height: 280px;
  background: radial-gradient(circle, rgba(22, 119, 255, 0.18) 0%, transparent 62%);
  pointer-events: none;
}

.form-title {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: #0f3b7a;
}

.required-tip {
  margin: 8px 0 10px;
  font-size: 13px;
  color: #64748b;
}

.submit-btn {
  min-width: 120px;
  height: 38px;
  border-radius: 999px;
  box-shadow: 0 6px 14px rgba(22, 119, 255, 0.25);
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.submit-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 20px rgba(22, 119, 255, 0.3);
}

:deep(.ant-input:focus),
:deep(.ant-input-focused),
:deep(.ant-input-affix-wrapper:focus),
:deep(.ant-input-affix-wrapper-focused),
:deep(.ant-input-textarea textarea:focus) {
  border-color: #69b1ff;
  box-shadow:
    0 0 0 2px rgba(22, 119, 255, 0.15),
    0 0 0 6px rgba(125, 211, 252, 0.1);
}

@media (max-width: 768px) {
  .contact-title {
    font-size: 24px;
  }

  .form-title {
    font-size: 20px;
  }

  .indent {
    padding-left: 0;
  }

}
</style>

