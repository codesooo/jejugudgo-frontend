<template>
  <div class="container">
    <ModalHeader
      title="어떤 장르의 코스를 원하세요?"
      :left-step="-10"
    />
    <div class="content">
      <div class="slider">
        <div
          v-for="(item, index) in keywords"
          :key="index"
          class="slider-item"
          @click="onSuggestionClick(item)"
          :class="{ selected: suggestionCourse === item }"
        >
          <div class="item">
            <CardImage
              :test="'96x96'"
              :icon="false"
              :imageStyle="{
                borderColor: suggestionCourse === item ? '#22F779' : '',
                opacity:
                  suggestionCourse === '' || suggestionCourse === item
                    ? 1
                    : 0.5,
              }"
            />
            <div
              class="image-text body2-bold"
              :style="{
                color: suggestionCourse === item ? '#22F779' : '',
              }"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CardImage } from '@/components';
import { useCreateCourseStore } from '@/stores/recommendedCourse/createCourse';
import { ModalHeader } from './index';
import { storeToRefs } from 'pinia';

const createCourseStore = useCreateCourseStore();
const { suggestionCourse } = storeToRefs(createCourseStore);

const keywords = ['바다', '산', '마을', '맛집', '관광명소', '빵지순례'];

const onSuggestionClick = (item: string) => {
  createCourseStore.updateData('suggestionCourse', item);
};
</script>

<style scoped>
.container {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: var(--margin-m);
}

.slider {
  overflow-x: auto;
  display: inline-flex;
  gap: var(--margin-m);
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.item {
  display: flex;
  flex-direction: column;
  gap: var(--margin-xs);
}

.image-text {
  align-self: center;
  color: var(--color-text-active);
}
</style>
