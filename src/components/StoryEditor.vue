<template>
  <div class="editor-page">
    <div class="menu-overlay" v-if="menuOpen" @click="menuOpen = false"></div>
    <div class="top-bar">
      <button class="burger" @click="menuOpen = !menuOpen">☰</button>
      <div class="top-title">
        Редактор историй
        <span v-if="form.title" class="top-story-name">— {{ form.title }}</span>
        <span v-if="isDirty" class="dirty-dot" title="Несохранённые изменения">●</span>
      </div>
    </div>

    <div class="side-menu" :class="{ open: menuOpen }">
      <div class="side-header">
        <div>
          <div class="menu-title">Истории</div>
          <div class="muted small">Выбор истории и сохранение</div>
        </div>
        <div class="side-actions">
          <button class="btn ghost tiny" @click="createNew">Новая</button>
          <button class="btn tiny danger" @click="menuOpen = false">✕</button>
        </div>
      </div>
      <div class="stories-list">
        <div class="list-header">
          <span>Истории на сервере</span>
          <button class="btn small" @click="loadStories" :disabled="loading">Обновить</button>
        </div>
        <div v-if="listLoading" class="muted">Загрузка...</div>
        <div v-else-if="stories.length === 0" class="muted">Историй нет</div>
        <div v-else class="list">
          <button
            v-for="story in stories"
            :key="story.id"
            class="list-item"
            :class="{ active: story.id === form.id }"
            @click="selectStory(story.id)"
          >
            <div class="title">{{ story.title || story.id }}</div>
            <div class="meta">{{ story.tagline || story.duration }}</div>
          </button>
        </div>
      </div>
      <div class="form">
        <label>
          ID истории
          <input v-model="form.id" placeholder="например, pele" />
        </label>
        <label>
          Заголовок
          <input v-model="form.title" placeholder="Название истории" />
        </label>
        <label>
          Теглайн
          <input v-model="form.tagline" placeholder="Короткое описание" />
        </label>
        <label>
          Длительность/мета
          <input v-model="form.duration" placeholder="Например, 10 шагов" />
        </label>
        <button class="btn primary" @click="save" :disabled="loading" :class="{ dirty: isDirty }">
          {{ loading ? 'Сохранение...' : (isDirty ? '● Сохранить историю' : 'Сохранить историю') }}
        </button>
        <div v-if="error" class="error">{{ error }}</div>
        <div v-if="success" class="success">{{ success }}</div>

        <div class="accordion">
          <button class="accordion-header" @click="showCharactersPanel = !showCharactersPanel">
            <span>Персонажи</span>
            <span>{{ showCharactersPanel ? '▲' : '▼' }}</span>
          </button>
          <div v-if="showCharactersPanel" class="accordion-body">
            <div class="characters-header">
              <div class="muted">Глобальные персонажи истории</div>
              <button class="btn tiny" @click="addStoryCharacter">+ Персонаж</button>
            </div>
            <div v-if="form.characters.length === 0" class="muted">Пока нет персонажей</div>
            <div
              v-for="(char, chIdx) in form.characters"
              :key="chIdx"
              class="story-char-card"
            >
              <div class="story-char-row">
                <input v-model="char.name" placeholder="Имя персонажа" />
                <button class="btn tiny danger" @click="removeStoryCharacter(chIdx)">✕</button>
              </div>
              <input v-model="char.image" placeholder="URL основного изображения" />
          <div class="variants-row">
            <div class="variants-header">
              <span class="muted">Вариации</span>
              <div class="variant-actions">
                <button class="btn tiny ghost" @click="addVariant(chIdx)">+ Вариант</button>
                <input type="file" accept="image/*" @change="onUploadStoryCharImage(chIdx, $event)" title="Загрузить основное фото" />
              </div>
            </div>
            <div v-if="!char.variants || char.variants.length === 0" class="muted">Нет вариантов</div>
            <div
              v-for="(variant, vIdx) in char.variants"
              :key="vIdx"
              class="variant-item"
            >
              <input v-model="variant.name" placeholder="Имя вариации (например, Бикини)" />
              <div class="variant-upload-row">
                <input v-model="variant.image" placeholder="URL изображения вариации" />
                <input type="file" accept="image/*" @change="onUploadVariantImage(chIdx, vIdx, $event)" title="Загрузить файл" />
              </div>
              <button class="btn tiny danger" @click="removeVariant(chIdx, vIdx)">✕</button>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion">
          <button class="accordion-header" @click="showBackgroundsPanel = !showBackgroundsPanel">
            <span>Фоны</span>
            <span>{{ showBackgroundsPanel ? '▲' : '▼' }}</span>
          </button>
          <div v-if="showBackgroundsPanel" class="accordion-body">
            <div class="characters-header">
              <div class="muted">Глобальные фоны истории</div>
              <button class="btn tiny" @click="addBackground">+ Фон</button>
            </div>
            <div v-if="form.backgrounds.length === 0" class="muted">Пока нет фонов</div>
            <div
              v-for="(bg, bgIdx) in form.backgrounds"
              :key="bgIdx"
              class="story-char-card"
            >
              <div class="story-char-row">
                <input v-model="bg.name" placeholder="Название фона" />
                <button class="btn tiny danger" @click="removeBackground(bgIdx)">✕</button>
              </div>
              <div class="variant-upload-row">
                <input v-model="bg.image" placeholder="URL фонового изображения" readonly />
                <input type="file" accept="image/*" @change="onUploadBackground(bgIdx, $event)" title="Загрузить фон" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div class="layout">
      <!-- КОЛОНКА 1: Граф -->
      <div class="editor-graph">
        <div class="graph-panel">
          <div class="graph-toolbar">
            <div class="toolbar-left">
              <button class="btn tiny ghost icon-btn" @click="undo" :disabled="!canUndo" title="Отменить Ctrl+Z">↩</button>
              <button class="btn tiny ghost icon-btn" @click="redo" :disabled="!canRedo" title="Повторить Ctrl+Y">↪</button>
              <span class="toolbar-sep"></span>
              <button class="btn tiny ghost icon-btn" @click="fitToView" title="Вписать всё в экран">⊡</button>
            </div>
            <div class="toolbar-stats" v-if="form.steps.length">
              <span>{{ storyStats.steps }} блоков</span>
              <span>·</span>
              <span>{{ storyStats.words }} слов</span>
              <span v-if="storyStats.endNodes > 0">·</span>
              <span v-if="storyStats.endNodes > 0" class="stat-end">{{ storyStats.endNodes }} финалов</span>
              <span v-if="brokenLinksCount > 0">·</span>
              <span v-if="brokenLinksCount > 0" class="stat-broken">⚠ {{ brokenLinksCount }} ошибок</span>
            </div>
            <div class="toolbar-right">
              <button class="btn tiny" @click="addStep('step')">+ Блок</button>
              <button class="btn tiny ghost" @click="addStep('choice')">+ Выбор</button>
            </div>
          </div>
          <div
            class="graph-canvas"
            :class="{ panning }"
            ref="graph"
            @wheel.prevent="onWheel"
            @mousedown="onCanvasMouseDown"
            @contextmenu.prevent="onCanvasContextMenu"
          >
            <div class="graph-inner" :style="graphTransform">
            <svg class="graph-lines" :width="graphWidth" :height="graphHeight">
              <path
                v-for="(edge, idx) in graphEdges"
                :key="`hit-${idx}`"
                :d="edge.path"
                class="edge-hit"
                stroke="transparent"
                stroke-width="14"
                fill="none"
                pointer-events="stroke"
                @mousemove="onEdgeHover(edge, $event)"
                @mouseleave="clearEdgeHover"
              ></path>
              <path
                v-for="(edge, idx) in graphEdges"
                :key="idx"
                :d="edge.path"
                stroke="#94a3b8"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                marker-end="url(#arrowhead)"
                style="pointer-events: none"
              ></path>
              <path
                v-if="tempEdge"
                :d="tempEdge.path"
                stroke="#a855f7"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                style="pointer-events: none"
                stroke-dasharray="4 4"
              ></path>
              <defs>
                <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="2" orient="auto">
                  <polygon points="0 0, 4 2, 0 4" fill="#94a3b8" />
                </marker>
              </defs>
            </svg>
            <button
              v-if="hoveredEdge && hoveredEdge.edge?.deletable"
              class="edge-delete"
              :style="edgeDeleteStyle()"
              @click.stop="removeEdge(hoveredEdge.edge)"
              @mouseenter.stop="cancelHoverClear"
              @mouseleave.stop="clearEdgeHover"
              >
                ✕
              </button>
            <div
              v-for="node in graphNodes"
              :key="node.id"
              class="graph-node"
              :class="{
                active: previewIndex === node.idx,
                broken: brokenLinks.has(node.id),
                'node-choice': node.type === 'choice',
                'node-start': node.idx === 0,
                'node-end': isEndNode(node)
              }"
              :style="getNodeStyle(node)"
              @mousedown.prevent="startGraphDrag(node, $event)"
              @click.stop="goToStep(node.idx)"
            >
              <div class="node-type-badge" v-if="node.type === 'choice'">Выбор</div>
              <div class="node-type-badge start-badge" v-else-if="node.idx === 0">Старт</div>
              <div class="node-type-badge end-badge" v-else-if="isEndNode(node)">Финал</div>
              <div class="graph-node-title">{{ node.id }}</div>
              <div class="graph-node-text">{{ node.label }}</div>
              <div class="graph-node-meta">
                <span v-if="node.choices && node.choices.length">🔀 {{ node.choices.length }}</span>
                <span v-if="node.charCount > 0">👤 {{ node.charCount }}</span>
                <span v-if="node.hasBgm">🎵</span>
              </div>
              <button
                class="node-test-btn"
                @click.stop="testFromStep(node.idx)"
                title="Тестировать с этого шага"
              >▶</button>
              <div class="ports">
                <span
                  class="port in"
                  @mousedown.stop.prevent="completeLink(node.id, $event)"
                  @mouseup.stop.prevent="completeLink(node.id, $event)"
                  :style="getPortStyle('in', node)"
                ></span>
                <span
                  class="port out"
                  v-for="(c, cidx) in (node.choices && node.choices.length ? node.choices : [{}])"
                  :key="cidx"
                  @mousedown.stop.prevent="startLink(node, cidx, $event)"
                  :style="getPortStyle('out', node, cidx)"
                ></span>
              </div>
            </div>
            </div>
          </div>
          <!-- Контекстное меню правого клика -->
          <div
            v-if="contextMenu.visible"
            class="context-menu"
            :style="contextMenuStyle"
          >
            <button @click="addStepAtContextMenu('step')">📝 Добавить блок</button>
            <button @click="addStepAtContextMenu('choice')">🔀 Добавить выбор</button>
            <div class="context-sep"></div>
            <button @click="closeContextMenu" class="context-cancel">Отмена</button>
          </div>
        </div>
      </div>

      <!-- КОЛОНКА 2: Редактор блока (всегда виден) -->
      <div class="editor-block">
        <div class="block-editor-panel">
          <div v-if="selectedBlock">
            <div class="block-header">
              <div class="block-title-row">
                <span class="block-id-badge">{{ selectedBlock.id }}</span>
                <span class="block-type-tag" :class="'type-' + (selectedBlock.type || 'step')">
                  {{ selectedBlock.type === 'choice' ? 'Выбор' : 'Блок' }}
                </span>
                <span class="block-index-info">{{ previewIndex + 1 }} / {{ form.steps.length }}</span>
              </div>
              <div class="block-header-actions">
                <button class="btn tiny" @click="testFromStep(previewIndex)" title="Тест с этого шага">▶ Тест</button>
                <button class="btn tiny danger" @click="removeStep(previewIndex)" title="Удалить блок">✕</button>
              </div>
            </div>

            <div class="block-section">
              <label class="block-label">
                ID блока
                <input v-model="selectedBlock.id" placeholder="id шага" />
              </label>
              <label class="block-label">
                Текст
                <textarea v-model="selectedBlock.text" rows="4" placeholder="Текст шага"></textarea>
              </label>
            </div>

            <div class="block-section">
              <div class="section-title">Сцена</div>
              <label class="block-label">
                Фон
                <select v-model="selectedBlock.bgKey" @change="applyBackgroundSelection(previewIndex)">
                  <option value="">Без фона</option>
                  <option v-for="opt in backgroundOptions" :key="opt.value" :value="opt.value">
                    {{ opt.label }}
                  </option>
                </select>
              </label>
              <label class="block-label">
                Музыка (BGM)
                <input v-model="selectedBlock.bgm" placeholder="URL или ключ музыки" />
              </label>
            </div>

            <div class="block-section">
              <div class="section-title-row">
                <span class="section-title">Персонажи</span>
                <button class="btn tiny" @click="addCharacter(previewIndex)">+</button>
              </div>
              <div v-if="!selectedBlock.characters || selectedBlock.characters.length === 0" class="empty-hint">Нет персонажей</div>
              <div v-for="(char, cidx) in selectedBlock.characters" :key="cidx" class="char-item">
                <div class="char-select-row">
                  <select v-model="char.variantKey" @change="applyVariantSelection(previewIndex, cidx)">
                    <option value="">Выбери персонажа</option>
                    <option v-for="opt in characterVariantOptions" :key="opt.value" :value="opt.value">
                      {{ opt.label }}
                    </option>
                    <option value="custom">Другая ссылка (URL)</option>
                  </select>
                  <button class="btn tiny danger" @click="removeCharacter(previewIndex, cidx)">✕</button>
                </div>
                <div v-if="char.variantKey === 'custom'" class="char-custom-url">
                  <input v-model="char.image" placeholder="URL изображения" />
                </div>
                <div class="char-pos-row">
                  <label>X%<input type="number" v-model.number="char.x" min="0" max="100" /></label>
                  <label>Y%<input type="number" v-model.number="char.y" min="0" max="100" /></label>
                  <label>W%<input type="number" v-model.number="char.size" min="1" max="100" /></label>
                </div>
              </div>
            </div>

            <div class="block-section">
              <div class="section-title-row">
                <span class="section-title">Выборы / ветвление</span>
                <button class="btn tiny" @click="addChoice(previewIndex)">+</button>
              </div>
              <div v-if="!selectedBlock.choices || selectedBlock.choices.length === 0" class="empty-hint">Нет выборов — линейный шаг</div>
              <div v-for="(choice, chidx) in selectedBlock.choices" :key="chidx" class="choice-item">
                <div class="choice-row">
                  <input v-model="choice.text" placeholder="Текст выбора" class="choice-text" />
                  <button class="btn tiny danger" @click="removeChoice(previewIndex, chidx)">✕</button>
                </div>
                <div class="choice-next-row">
                  <span class="choice-arrow">→</span>
                  <input v-model="choice.next" placeholder="ID следующего шага" :class="{ 'input-broken': choice.next && !stepIdExists(choice.next) }" />
                </div>
              </div>
            </div>

            <div class="block-section">
              <div class="section-title-row">
                <span class="section-title">Теги / переменные</span>
                <button class="btn tiny" @click="addTagChange(previewIndex)">+</button>
              </div>
              <datalist id="tag-suggestions">
                <option v-for="opt in tagSuggestions" :key="opt.name" :value="opt.name">{{ opt.label }}</option>
              </datalist>
              <div v-if="Object.keys(currentPreviewTags).length" class="tag-current">
                <div class="tag-current-list">
                  <span v-for="(val, key) in currentPreviewTags" :key="key" class="tag-chip">{{ key }}: {{ val }}</span>
                </div>
              </div>
              <div v-if="!selectedBlock.tagChanges || selectedBlock.tagChanges.length === 0" class="empty-hint">Нет изменений тегов</div>
              <div v-for="(tag, tidx) in selectedBlock.tagChanges" :key="tidx" class="tag-row">
                <input v-model="tag.name" placeholder="тег" list="tag-suggestions" class="tag-name" />
                <select v-model="tag.op" class="tag-op">
                  <option value="set">=</option>
                  <option value="inc">+</option>
                  <option value="dec">-</option>
                </select>
                <input type="number" v-model.number="tag.value" class="tag-val" />
                <button class="btn tiny danger" @click="removeTagChange(previewIndex, tidx)">✕</button>
              </div>
            </div>
          </div>
          <div v-else class="no-block-hint">
            <div class="no-block-icon">📋</div>
            <div>Выбери блок на графе</div>
            <div class="muted small">или создай новый</div>
          </div>
        </div>
      </div>

      <!-- КОЛОНКА 3: Предпросмотр -->
      <div class="editor-right">
          <div class="phone-frame" ref="phone">
            <div class="phone-header">
              <div>{{ form.title || 'Предпросмотр' }}</div>
              <div class="preview-progress">{{ previewHistory.length }} / {{ form.steps.length || 0 }}</div>
            </div>
          <div class="phone-body" :style="previewStyle">
            <div v-if="currentStep" class="phone-layer">
              <div class="tag-badge" v-if="currentPreviewTags && Object.keys(currentPreviewTags).length">
                <span v-for="(val, key) in currentPreviewTags" :key="key">{{ key }}: {{ val }}</span>
              </div>
              <div
                v-for="(char, idx) in currentChars"
                :key="idx"
                class="phone-char"
                :class="{ selected: selectedChar === idx }"
                :style="getCharStyle(char)"
                @mousedown.prevent="startDrag(idx, $event)"
                @click.stop="selectChar(idx)"
              >
                <img :src="char.image" alt="" />
                <div class="resize-handle" @mousedown.stop.prevent="startResize(idx, $event)"></div>
              </div>
              <div class="phone-text-box">
                {{ currentStepSafe.text || 'Пустой шаг' }}
              </div>
            </div>
            <div v-else class="phone-text muted">Нет шагов</div>
          </div>
          <div class="phone-choices" v-if="currentStep && currentStep.choices && currentStep.choices.length">
            <button
              v-for="(choice, cidx) in currentStep.choices"
              :key="cidx"
              class="phone-choice-btn"
              @click="previewChoice(choice)"
              :disabled="!choice.next"
            >{{ choice.text || 'Выбор ' + (cidx+1) }}</button>
          </div>
          <div class="phone-footer">
            <button class="btn ghost" @click="prevStep" :disabled="previewHistory.length <= 1">← Назад</button>
            <button class="btn ghost" @click="nextStep" :disabled="getNextPreviewIndex() < 0">Далее →</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { getStories, getStory, saveStory, uploadFile } from '@/services/apiClient';
import { getCharStyle } from '@/utils/storyUtils';

export default {
  name: 'StoryEditor',
  data() {
    return {
      stories: [],
      form: {
        id: '',
        title: '',
        tagline: '',
        duration: '',
        steps: [],
        characters: [],
        backgrounds: []
      },
      previewIndex: 0,
      loading: false,
      listLoading: false,
      error: '',
      success: '',
      selectedChar: null,
      dragging: null,
      resizing: null,
      dragOffset: { x: 0, y: 0 },
      graphDragging: null,
      graphOffset: { x: 0, y: 0 },
      graphSize: { w: 4000, h: 4000 },
      pendingLink: null,
      tempEdge: null,
      menuOpen: false,
      nodeSize: { w: 180, h: 120 },
      portOffset: 10,
      hoveredEdge: null,
      hoverClearTimeout: null,
      previewHistory: [{ idx: 0, tags: {} }],
      zoom: 1,
      pan: { x: 0, y: 0 },
      panning: false,
      panStart: { x: 0, y: 0 },
      panOrigin: { x: 0, y: 0 },
      spacePressed: false,
      showCharactersPanel: true,
      showBackgroundsPanel: true,
      isDirty: false,
      localSaveTimeout: null,
      history: [],
      historyIndex: -1,
      contextMenu: { visible: false, x: 0, y: 0, worldX: 0, worldY: 0 }
    };
  },
  computed: {
    stepsView() {
      return this.form.steps.map((step, idx) => ({ step, idx })).reverse();
    },
    currentStep() {
      if (!this.form.steps || this.form.steps.length === 0) return null;
      return this.form.steps[this.previewIndex] || null;
    },
    currentStepSafe() {
      return this.currentStep || {};
    },
    selectedBlock() {
      return this.form.steps[this.previewIndex] || null;
    },
    currentChars() {
      return this.currentStepSafe.characters || [];
    },
    currentPreviewTags() {
      return this.previewHistory[this.previewHistory.length - 1]?.tags || {};
    },
    backgroundOptions() {
      if (!Array.isArray(this.form.backgrounds)) return [];
      return this.form.backgrounds.map((b, idx) => ({
        value: `bg|${idx}`,
        label: b.name || `Фон ${idx + 1}`,
        image: b.image
      }));
    },
    tagSuggestions() {
      const set = new Map();
      // из текущих накопленных тегов
      Object.entries(this.currentPreviewTags).forEach(([k, v]) => {
        set.set(k, v);
      });
      // из всех изменений в шагах
      this.form.steps.forEach((step) => {
        (step.tagChanges || []).forEach((t) => {
          if (!t?.name) return;
          if (!set.has(t.name)) set.set(t.name, '');
        });
      });
      return Array.from(set.entries()).map(([name, val]) => ({
        name,
        label: val === '' ? name : `${name} (${val})`
      }));
    },
    characterVariantOptions() {
      if (!Array.isArray(this.form.characters)) return [];
      const opts = [];
      this.form.characters.forEach((c, cIdx) => {
        const baseLabel = c.name || `Персонаж ${cIdx + 1}`;
        if (c.image) {
          opts.push({
            value: `${cIdx}|main`,
            label: `${baseLabel} — основной`
          });
        }
        (c.variants || []).forEach((v, vIdx) => {
          opts.push({
            value: `${cIdx}|var|${vIdx}`,
            label: `${baseLabel} — ${v.name || 'вариант'}`
          });
        });
      });
      return opts;
    },
    previewStyle() {
      const bg = this.currentStepSafe.bg;
      return bg ? { backgroundImage: `url(${bg})` } : { backgroundColor: '#0f172a' };
    },
    graphWidth() {
      return this.graphSize.w;
    },
    graphHeight() {
      return this.graphSize.h;
    },
    graphTransform() {
      return {
        transform: `translate(${this.pan.x}px, ${this.pan.y}px) scale(${this.zoom})`,
        transformOrigin: '0 0'
      };
    },
    graphEdges() {
      const map = new Map();
      this.graphNodes.forEach((n) => map.set(n.id, n));
      const edges = [];
      this.graphNodes.forEach((node, idx) => {
        const fallbackNextId = null; // автосвязей нет, всё вручную
        const hasChoices = node.choices && node.choices.length > 0;
        const ports = hasChoices ? node.choices : [];
        ports.forEach((choice, cidx) => {
          const targetId = hasChoices ? choice.next : fallbackNextId;
          const target = map.get(targetId);
          if (target && targetId) {
            const { x: x1, y: y1 } = this.getPortCoords(node, 'out', cidx);
            const { x: x2, y: y2 } = this.getPortCoords(target, 'in');
            const dx = 60;
            const dy = 0;
            edges.push({
              from: node.id,
              to: target.id,
              choiceIndex: hasChoices ? cidx : -1,
              deletable: true,
              path: `M ${x1} ${y1} C ${x1 + dx} ${y1 + dy}, ${x2 - dx} ${y2 - dy}, ${x2} ${y2}`
            });
          }
        });
      });
      return edges;
    },
    brokenLinks() {
      const ids = new Set(this.form.steps.map((s) => s.id));
      const broken = new Set();
      this.form.steps.forEach((step) => {
        (step.choices || []).forEach((c) => {
          if (c.next && !ids.has(c.next)) {
            broken.add(step.id);
          }
        });
      });
      return broken;
    },
    brokenLinksCount() {
      return this.brokenLinks.size;
    },
    canUndo() {
      return this.historyIndex > 0;
    },
    canRedo() {
      return this.historyIndex < this.history.length - 1;
    },
    storyStats() {
      const steps = this.form.steps.length;
      const words = this.form.steps.reduce((acc, s) => acc + (s.text || '').split(/\s+/).filter(Boolean).length, 0);
      const endNodes = this.form.steps.filter((s) => this.isEndNode({ choices: s.choices })).length;
      return { steps, words, endNodes };
    },
    contextMenuStyle() {
      return { left: this.contextMenu.x + 'px', top: this.contextMenu.y + 'px' };
    },
    graphNodes() {
      const cols = 3;
      const spacingX = 220;
      const spacingY = 140;
      return this.form.steps.map((step, idx) => {
        const x = Number(step.layout?.x);
        const y = Number(step.layout?.y);
        const fallbackX = (idx % cols) * spacingX + 40;
        const fallbackY = Math.floor(idx / cols) * spacingY + 40;
        if (!step.layout) step.layout = { x: fallbackX, y: fallbackY };
        return {
          id: step.id || `step${idx + 1}`,
          label: step.text?.slice(0, 50) || 'Шаг',
          x: Number.isFinite(x) ? x : fallbackX,
          y: Number.isFinite(y) ? y : fallbackY,
          idx,
          type: step.type || 'step',
          choices: step.choices || [],
          skipDefaultLink: !!step.skipDefaultLink,
          charCount: (step.characters || []).length,
          hasBgm: !!step.bgm
        };
      });
    }
  },
  methods: {
    selectChar(idx) {
      this.selectedChar = idx;
    },
    getCharStyle,
    getNodeStyle(node) {
      return {
        left: `${node.x}px`,
        top: `${node.y}px`
      };
    },
    getPortCoords(node, type, idx = 0) {
      const width = this.nodeSize.w;
      const height = this.nodeSize.h;
      if (type === 'in') {
        return {
          x: node.x - this.portOffset,
          y: node.y + height / 2
        };
      }
      const total = (node.choices && node.choices.length) || 1;
      const gap = height / (total + 1);
      return {
        x: node.x + width + this.portOffset,
        y: node.y + gap * (idx + 1)
      };
    },
    getPortStyle(type, node, idx = 0) {
      const height = this.nodeSize.h;
      const total = (node.choices && node.choices.length) || 1;
      const gap = height / (total + 1);
      const top = type === 'in' ? height / 2 : gap * (idx + 1);
      return {
        position: 'absolute',
        top: `${top - 6}px`,
        left: type === 'in' ? '-10px' : 'auto',
        right: type === 'out' ? '-10px' : 'auto'
      };
    },
    startGraphDrag(node, event) {
      if (this.spacePressed || this.panning) {
        this.startPan(event);
        return;
      }
      this.graphDragging = node.idx;
      const world = this.screenToWorld(event);
      if (!world) return;
      this.graphOffset = {
        x: world.x - node.x,
        y: world.y - node.y
      };
      window.addEventListener('mousemove', this.onGraphDrag);
      window.addEventListener('mouseup', this.stopGraphDrag);
    },
    onGraphDrag(event) {
      if (this.graphDragging === null) return;
      const world = this.screenToWorld(event);
      if (!world) return;
      const node = this.form.steps[this.graphDragging];
      if (!node) return;
      const newX = world.x - this.graphOffset.x;
      const newY = world.y - this.graphOffset.y;
      node.layout = node.layout || {};
      node.layout.x = newX;
      node.layout.y = newY;
      // если мы тянем линк — обновляем временную линию
      if (this.pendingLink && this.pendingLink.from === node.id && this.tempEdge) {
        const coords = this.getPortCoords({ x: newX, y: newY, choices: node.choices }, 'out', this.pendingLink.portIndex);
        this.tempEdge.x1 = coords.x;
        this.tempEdge.y1 = coords.y;
      }
    },
    stopGraphDrag() {
      this.graphDragging = null;
      window.removeEventListener('mousemove', this.onGraphDrag);
      window.removeEventListener('mouseup', this.stopGraphDrag);
    },
    goToStep(idx) {
      const safe = Math.max(0, Math.min(idx, this.form.steps.length - 1));
      this.previewIndex = safe;
      // прямой переход сбрасывает историю/теги
      this.previewHistory = [{ idx: safe, tags: {} }];
    },
  updateGraphSize() {
      // рабочую площадь делаем большой, чтобы ничего не обрезалось
      this.graphSize = { w: 4000, h: 4000 };
    },
    onWheel(event) {
      const rect = this.$refs.graph?.getBoundingClientRect();
      if (!rect) return;
      const zoomDelta = -event.deltaY * 0.001;
      const newZoom = Math.min(2.5, Math.max(0.5, this.zoom + zoomDelta));
      const wx = (event.clientX - rect.left - this.pan.x) / this.zoom;
      const wy = (event.clientY - rect.top - this.pan.y) / this.zoom;
      this.pan.x = (event.clientX - rect.left) - wx * newZoom;
      this.pan.y = (event.clientY - rect.top) - wy * newZoom;
      this.zoom = newZoom;
    },
    onCanvasMouseDown(event) {
      if (event.button === 1 || this.spacePressed) {
        event.preventDefault();
        this.startPan(event);
        return;
      }
      // клик по пустой области (не по ноде) с левой кнопкой — тоже пан
      if (event.target === this.$refs.graph || event.target.classList.contains('graph-inner') || event.target.classList.contains('graph-lines')) {
        event.preventDefault();
        this.startPan(event);
      }
    },
    startPan(event) {
      this.panning = true;
      this.panStart = { x: event.clientX, y: event.clientY };
      this.panOrigin = { ...this.pan };
      window.addEventListener('mousemove', this.onPanMove);
      window.addEventListener('mouseup', this.stopPan);
    },
    onPanMove(event) {
      if (!this.panning) return;
      this.pan = {
        x: this.panOrigin.x + (event.clientX - this.panStart.x),
        y: this.panOrigin.y + (event.clientY - this.panStart.y)
      };
      this.clearEdgeHover();
    },
    stopPan() {
      this.panning = false;
      window.removeEventListener('mousemove', this.onPanMove);
      window.removeEventListener('mouseup', this.stopPan);
    },
    startLink(node, portIndex, event) {
      const { x: x1, y: y1 } = this.getPortCoords(node, 'out', portIndex);
      this.pendingLink = { from: node.id, portIndex };
      this.tempEdge = { x1, y1, x2: x1, y2: y1, path: `M ${x1} ${y1} L ${x1} ${y1}` };
    },
    updateTempEdge(event) {
      if (!this.pendingLink || !this.tempEdge) return;
      const world = this.screenToWorld(event);
      if (!world) return;
      const x2 = world.x;
      const y2 = world.y;
      const dx = 60;
      const dy = 0;
      this.tempEdge = {
        ...this.tempEdge,
        x2,
        y2,
        path: `M ${this.tempEdge.x1} ${this.tempEdge.y1} C ${this.tempEdge.x1 + dx} ${this.tempEdge.y1 + dy}, ${x2 - dx} ${y2 - dy}, ${x2} ${y2}`
      };
    },
    completeLink(nodeId) {
      if (!this.pendingLink) return;
      this.undoSnapshot();
      const source = this.form.steps.find((s) => s.id === this.pendingLink.from);
      if (source) {
        if (!source.choices) source.choices = [];
        const choice = source.choices[this.pendingLink.portIndex] || {};
        choice.next = nodeId;
        source.choices[this.pendingLink.portIndex] = choice;
      }
      this.pendingLink = null;
      this.tempEdge = null;
    },
    onEdgeHover(edge, event) {
      if (this.hoverClearTimeout) {
        clearTimeout(this.hoverClearTimeout);
        this.hoverClearTimeout = null;
      }
      const world = this.screenToWorld(event);
      if (!world) return;
      this.hoveredEdge = {
        edge,
        x: world.x,
        y: world.y
      };
    },
    clearEdgeHover() {
      if (this.hoverClearTimeout) clearTimeout(this.hoverClearTimeout);
      this.hoverClearTimeout = setTimeout(() => {
        this.hoveredEdge = null;
        this.hoverClearTimeout = null;
      }, 180);
    },
    removeEdge(edge) {
      if (!edge?.deletable) return;
      const source = this.form.steps.find((s) => s.id === edge.from);
      if (!source) return;
      if (edge.choiceIndex >= 0 && source.choices && source.choices[edge.choiceIndex]) {
        source.choices[edge.choiceIndex].next = '';
      } else if (edge.choiceIndex === -1) {
        // отключаем автосвязь для обычного блока
        source.skipDefaultLink = true; // на всякий случай, хотя автосвязей больше нет
      }
      this.hoveredEdge = null;
    },
    screenToWorld(event) {
      const rect = this.$refs.graph?.getBoundingClientRect();
      if (!rect) return null;
      return {
        x: (event.clientX - rect.left - this.pan.x) / this.zoom,
        y: (event.clientY - rect.top - this.pan.y) / this.zoom
      };
    },
    getWorldCenter() {
      const rect = this.$refs.graph?.getBoundingClientRect();
      if (!rect) return null;
      return {
        x: (rect.width / 2 - this.pan.x) / this.zoom,
        y: (rect.height / 2 - this.pan.y) / this.zoom
      };
    },
    edgeDeleteStyle() {
      if (!this.hoveredEdge) return {};
      return {
        left: `${this.hoveredEdge.x}px`,
        top: `${this.hoveredEdge.y}px`
      };
    },
    cancelHoverClear() {
      if (this.hoverClearTimeout) {
        clearTimeout(this.hoverClearTimeout);
        this.hoverClearTimeout = null;
      }
    },
    cancelLink() {
      this.pendingLink = null;
      this.tempEdge = null;
    },
    startDrag(idx, event) {
      this.selectedChar = idx;
      this.dragging = idx;
      const rect = event.currentTarget.parentElement.getBoundingClientRect();
      const parentRect = event.currentTarget.offsetParent.getBoundingClientRect();
      this.dragOffset = {
        x: (event.clientX - parentRect.left) / parentRect.width * 100 - (Number(this.currentChars[idx].x) || 50),
        y: (event.clientY - parentRect.top) / parentRect.height * 100 - (Number(this.currentChars[idx].y) || 50)
      };
      window.addEventListener('mousemove', this.onDrag);
      window.addEventListener('mouseup', this.stopDrag);
    },
    onDrag(event) {
      if (this.dragging === null) return;
      const parent = this.$el.querySelector('.phone-body');
      const rect = parent.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100 - this.dragOffset.x;
      const y = ((event.clientY - rect.top) / rect.height) * 100 - this.dragOffset.y;
      const step = this.currentStepSafe;
      if (step?.characters && step.characters[this.dragging]) {
        step.characters[this.dragging].x = Math.min(100, Math.max(0, x));
        step.characters[this.dragging].y = Math.min(100, Math.max(0, y));
      }
    },
    stopDrag() {
      this.dragging = null;
      this.resizing = null;
      window.removeEventListener('mousemove', this.onDrag);
      window.removeEventListener('mousemove', this.onResize);
      window.removeEventListener('mouseup', this.stopDrag);
    },
    startResize(idx, event) {
      this.selectedChar = idx;
      this.resizing = idx;
      window.addEventListener('mousemove', this.onResize);
      window.addEventListener('mouseup', this.stopDrag);
    },
    onResize(event) {
      if (this.resizing === null) return;
      const parent = this.$el.querySelector('.phone-body');
      const rect = parent.getBoundingClientRect();
      const step = this.currentStepSafe;
      if (!step?.characters || !step.characters[this.resizing]) return;
      const char = step.characters[this.resizing];
      const charRect = event.target.closest('.phone-char')?.getBoundingClientRect();
      const newSize = ((event.clientX - rect.left) / rect.width) * 100 - (Number(char.x) || 50);
      char.size = Math.max(5, Math.min(100, newSize * 2));
    },
    async loadStories() {
      this.listLoading = true;
      this.error = '';
      try {
        const list = await getStories();
        this.stories = Array.isArray(list) ? list : [];
      } catch (e) {
        this.error = e.message || 'Ошибка загрузки списка историй';
      } finally {
        this.listLoading = false;
      }
    },
    async selectStory(id) {
      this.error = '';
      this.success = '';
      try {
        const story = await getStory(id);
        if (story) {
          this.form = {
            id: story.id || '',
            title: story.title || '',
            tagline: story.tagline || '',
            duration: story.duration || '',
            steps: story.steps ? JSON.parse(JSON.stringify(story.steps)) : [],
            characters: story.characters ? JSON.parse(JSON.stringify(story.characters)) : [],
            backgrounds: story.backgrounds ? JSON.parse(JSON.stringify(story.backgrounds)) : []
          };
          // проставляем layout, если не было
          this.form.steps.forEach((step, idx) => {
            if (!step.layout) {
              const cols = 3;
              const spacingX = 220;
              const spacingY = 140;
              step.layout = {
                x: (idx % cols) * spacingX + 40,
                y: Math.floor(idx / cols) * spacingY + 40
              };
            }
          });
          this.previewIndex = 0;
          this.previewHistory = this.form.steps.length ? [{ idx: 0, tags: {} }] : [];
          this.isDirty = false;
          this.$nextTick(() => {
            this.checkAndRestoreDraft(story.id);
            this.fitToView();
          });
        }
      } catch (e) {
        this.error = e.message || 'Ошибка загрузки истории';
      }
    },
    createNew() {
      this.form = {
        id: '',
        title: '',
        tagline: '',
        duration: '',
        steps: [],
        characters: [],
        backgrounds: []
      };
      this.previewIndex = 0;
      this.previewHistory = [];
      this.error = '';
      this.success = '';
    },
    addStep(type = 'step') {
      this.undoSnapshot();
      const nextIndex = this.form.steps.length + 1;
      const center = this.getWorldCenter() || { x: 80, y: 80 };
      const angle = this.form.steps.length * 0.8;
      const spread = 60;
      const layout = {
        x: center.x + Math.cos(angle) * spread,
        y: center.y + Math.sin(angle) * spread
      };
      const base = {
        id: `step${nextIndex}`,
        type,
        text: '',
        characters: [],
        choices: [],
        tagChanges: [],
        layout
      };
      if (type === 'choice') {
        base.choices = [
          { text: 'Вариант 1', next: '', flagName: '', flagValue: '', varName: '', varOp: 'set', varValue: 0 },
          { text: 'Вариант 2', next: '', flagName: '', flagValue: '', varName: '', varOp: 'set', varValue: 0 }
        ];
      }
      this.form.steps.push(base);
      if (this.form.steps.length === 1) {
        this.previewIndex = 0;
        this.previewHistory = [{ idx: 0, tags: {} }];
      }
    },
    addCharacter(stepIndex) {
      const step = this.form.steps[stepIndex];
      if (!step.characters) step.characters = [];
      step.characters.push({ image: '', x: 50, y: 50, size: 30, variantKey: '' });
    },
    addStoryCharacter() {
      if (!this.form.characters) this.form.characters = [];
      this.form.characters.push({ name: '', image: '', variants: [] });
    },
    removeStoryCharacter(idx) {
      if (!this.form.characters) return;
      this.form.characters.splice(idx, 1);
      // очистка ссылок в шагах на удаленных персонажей
      this.form.steps.forEach((step) => {
        (step.characters || []).forEach((ch) => {
          if (!this.resolveVariant(ch.variantKey)) {
            ch.variantKey = '';
            ch.image = '';
            ch.displayLabel = '';
          }
        });
      });
    },
    addVariant(charIdx) {
      if (!this.form.characters || !this.form.characters[charIdx]) return;
      if (!this.form.characters[charIdx].variants) this.form.characters[charIdx].variants = [];
      this.form.characters[charIdx].variants.push({ name: '', image: '' });
    },
    removeVariant(charIdx, variantIdx) {
      if (!this.form.characters || !this.form.characters[charIdx]?.variants) return;
      this.form.characters[charIdx].variants.splice(variantIdx, 1);
    },
    addBackground() {
      if (!this.form.backgrounds) this.form.backgrounds = [];
      this.form.backgrounds.push({ name: '', image: '' });
    },
    removeBackground(idx) {
      if (!this.form.backgrounds) return;
      this.form.backgrounds.splice(idx, 1);
      this.form.steps.forEach((step) => {
        if (step.bgKey && !this.resolveBackground(step.bgKey)) {
          step.bgKey = '';
          step.bg = '';
        }
      });
    },
    resolveBackground(key) {
      if (!key || !key.startsWith('bg|')) return null;
      const idx = Number(key.split('|')[1]);
      if (!Number.isFinite(idx) || !this.form.backgrounds?.[idx]) return null;
      const bg = this.form.backgrounds[idx];
      return { image: bg.image, label: bg.name || `Фон ${idx + 1}` };
    },
    applyBackgroundSelection(stepIdx) {
      const step = this.form.steps[stepIdx];
      if (!step) return;
      const resolved = this.resolveBackground(step.bgKey);
      step.bg = resolved?.image || '';
    },
    async onUploadStoryCharImage(charIdx, event) {
      const file = event.target.files?.[0];
      if (!file) return;
      await this.uploadAndSet(file, (url) => {
        if (!this.form.characters || !this.form.characters[charIdx]) return;
        this.form.characters[charIdx].image = url;
      });
      event.target.value = '';
    },
    async onUploadVariantImage(charIdx, variantIdx, event) {
      const file = event.target.files?.[0];
      if (!file) return;
      await this.uploadAndSet(file, (url) => {
        if (!this.form.characters || !this.form.characters[charIdx]?.variants) return;
        this.form.characters[charIdx].variants[variantIdx].image = url;
      });
      event.target.value = '';
    },
    async onUploadBackground(bgIdx, event) {
      const file = event.target.files?.[0];
      if (!file) return;
      await this.uploadAndSet(file, (url) => {
        if (!this.form.backgrounds || !this.form.backgrounds[bgIdx]) return;
        this.form.backgrounds[bgIdx].image = url;
      });
      event.target.value = '';
    },
    async uploadAndSet(file, setter) {
      try {
        this.loading = true;
        const base64 = await this.fileToBase64(file);
        const resp = await uploadFile(file.name, base64);
        if (resp?.url) setter(resp.url);
      } catch (e) {
        this.error = e.message || 'Ошибка загрузки файла';
      } finally {
        this.loading = false;
      }
    },
    fileToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    },
    resolveVariant(key) {
      if (!key || key === 'custom') return null;
      const parts = key.split('|');
      const cIdx = Number(parts[0]);
      if (!Number.isFinite(cIdx) || !this.form.characters[cIdx]) return null;
      const character = this.form.characters[cIdx];
      if (parts[1] === 'main') {
        return { image: character.image, label: `${character.name || 'Персонаж'} — основной` };
      }
      if (parts[1] === 'var') {
        const vIdx = Number(parts[2]);
        const variant = character.variants?.[vIdx];
        if (variant) {
          return { image: variant.image, label: `${character.name || 'Персонаж'} — ${variant.name || 'вариант'}` };
        }
      }
      return null;
    },
    applyVariantSelection(stepIdx, charIdx) {
      const step = this.form.steps[stepIdx];
      if (!step?.characters || !step.characters[charIdx]) return;
      const target = step.characters[charIdx];
      const resolved = this.resolveVariant(target.variantKey);
      target.image = resolved?.image || '';
      target.displayLabel = resolved?.label || '';
    },
    getVariantLabel(char) {
      const resolved = this.resolveVariant(char?.variantKey);
      return resolved?.label || 'Не выбрано';
    },
    addChoice(stepIndex) {
      const step = this.form.steps[stepIndex];
      if (!step.choices) step.choices = [];
      step.choices.push({
        text: '',
        next: '',
        flagName: '',
        flagValue: '',
        varName: '',
        varOp: 'set',
        varValue: 0
      });
    },
    removeCharacter(stepIndex, charIndex) {
      const step = this.form.steps[stepIndex];
      if (step?.characters) {
        step.characters.splice(charIndex, 1);
      }
    },
    removeChoice(stepIndex, choiceIndex) {
      const step = this.form.steps[stepIndex];
      if (step?.choices) {
        step.choices.splice(choiceIndex, 1);
      }
    },
    addTagChange(stepIndex) {
      const step = this.form.steps[stepIndex];
      if (!step.tagChanges) step.tagChanges = [];
      step.tagChanges.push({ name: '', op: 'set', value: 0 });
    },
    removeTagChange(stepIndex, tagIndex) {
      const step = this.form.steps[stepIndex];
      if (step?.tagChanges) {
        step.tagChanges.splice(tagIndex, 1);
      }
    },
    removeStep(index) {
      this.undoSnapshot();
      this.form.steps.splice(index, 1);
      if (this.previewIndex >= this.form.steps.length) {
        this.previewIndex = Math.max(0, this.form.steps.length - 1);
      }
      if (this.previewHistory.length) {
        this.previewHistory = this.form.steps.length ? [{ idx: this.previewIndex, tags: {} }] : [];
      }
    },
    async save() {
      this.error = '';
      this.success = '';
      if (!this.form.id || !this.form.title || this.form.steps.length === 0) {
        this.error = 'Нужны id, заголовок и хотя бы один шаг';
        return;
      }
      this.loading = true;
      try {
        await saveStory(this.form);
        this.success = 'Сохранено';
        this.isDirty = false;
        this.clearLocalDraft();
        await this.loadStories();
      } catch (e) {
        this.error = e.message || 'Ошибка сохранения';
      } finally {
        this.loading = false;
        setTimeout(() => {
          this.success = '';
        }, 2000);
      }
    },
    getNextPreviewIndex() {
      const current = this.form.steps[this.previewIndex];
      if (!current) return -1;
      const first = Array.isArray(current.choices) && current.choices.length > 0
        ? current.choices.find((c) => c?.next)
        : null;
      if (first?.next) {
        return this.form.steps.findIndex((s) => s.id === first.next);
      }
      return -1;
    },
    nextStep() {
      const nextIdx = this.getNextPreviewIndex();
      if (nextIdx >= 0) {
        this.previewIndex = nextIdx;
        this.pushPreviewHistory(nextIdx);
      }
    },
    prevStep() {
      if (this.previewHistory.length > 1) {
        this.previewHistory.pop();
        const last = this.previewHistory[this.previewHistory.length - 1];
        this.previewIndex = last.idx;
      }
    },
    pushPreviewHistory(idx) {
      if (idx < 0) return;
      const currentTags = { ...(this.previewHistory[this.previewHistory.length - 1]?.tags || {}) };
      this.applyTagChangesToState(currentTags, this.form.steps[this.previewIndex]?.tagChanges);
      // Если уже были в этом шаге — обрезаем историю до него
      const existing = this.previewHistory.findIndex((item) => item.idx === idx);
      if (existing >= 0) {
        this.previewHistory = this.previewHistory.slice(0, existing + 1);
        this.previewHistory[existing] = { idx, tags: currentTags };
        this.previewIndex = idx;
        return;
      }
      this.previewHistory = [...this.previewHistory, { idx, tags: currentTags }];
      this.previewIndex = idx;
    },
    applyTagChangesToState(state, changes) {
      if (!Array.isArray(changes)) return;
      changes.forEach((c) => {
        if (!c?.name) return;
        const key = c.name;
        const val = Number(c.value) || 0;
        if (c.op === 'inc') state[key] = (state[key] || 0) + val;
        else if (c.op === 'dec') state[key] = (state[key] || 0) - val;
        else state[key] = val;
      });
    },
    isEndNode(node) {
      if (!node.choices || node.choices.length === 0) return true;
      return node.choices.every((c) => !c.next);
    },
    stepIdExists(id) {
      return this.form.steps.some((s) => s.id === id);
    },
    testFromStep(idx) {
      this.previewIndex = idx;
      this.previewHistory = [{ idx, tags: {} }];
    },
    previewChoice(choice) {
      if (!choice.next) return;
      const idx = this.form.steps.findIndex((s) => s.id === choice.next);
      if (idx >= 0) this.pushPreviewHistory(idx);
    },
    undoSnapshot() {
      this.history = this.history.slice(0, this.historyIndex + 1);
      this.history.push(JSON.parse(JSON.stringify(this.form)));
      if (this.history.length > 40) this.history.shift();
      this.historyIndex = this.history.length - 1;
    },
    undo() {
      if (!this.canUndo) return;
      this.historyIndex--;
      this.form = JSON.parse(JSON.stringify(this.history[this.historyIndex]));
    },
    redo() {
      if (!this.canRedo) return;
      this.historyIndex++;
      this.form = JSON.parse(JSON.stringify(this.history[this.historyIndex]));
    },
    onCanvasContextMenu(event) {
      const world = this.screenToWorld(event);
      if (!world) return;
      this.contextMenu = { visible: true, x: event.clientX, y: event.clientY, worldX: world.x, worldY: world.y };
    },
    addStepAtContextMenu(type) {
      this.undoSnapshot();
      const nextIndex = this.form.steps.length + 1;
      const base = {
        id: `step${nextIndex}`,
        type,
        text: '',
        characters: [],
        choices: type === 'choice'
          ? [{ text: 'Вариант 1', next: '' }, { text: 'Вариант 2', next: '' }]
          : [],
        tagChanges: [],
        layout: { x: this.contextMenu.worldX - 90, y: this.contextMenu.worldY - 60 }
      };
      this.form.steps.push(base);
      if (this.form.steps.length === 1) {
        this.previewIndex = 0;
        this.previewHistory = [{ idx: 0, tags: {} }];
      }
      this.closeContextMenu();
    },
    closeContextMenu() {
      this.contextMenu.visible = false;
    },
    fitToView() {
      if (!this.graphNodes.length) return;
      const rect = this.$refs.graph?.getBoundingClientRect();
      if (!rect) return;
      const padding = 60;
      const nw = this.nodeSize.w;
      const nh = this.nodeSize.h;
      const minX = Math.min(...this.graphNodes.map((n) => n.x));
      const minY = Math.min(...this.graphNodes.map((n) => n.y));
      const maxX = Math.max(...this.graphNodes.map((n) => n.x)) + nw;
      const maxY = Math.max(...this.graphNodes.map((n) => n.y)) + nh;
      const contentW = maxX - minX || 1;
      const contentH = maxY - minY || 1;
      const scaleX = (rect.width - padding * 2) / contentW;
      const scaleY = (rect.height - padding * 2) / contentH;
      const newZoom = Math.min(2.5, Math.max(0.3, Math.min(scaleX, scaleY)));
      this.zoom = newZoom;
      this.pan = {
        x: padding - minX * newZoom,
        y: padding - minY * newZoom
      };
    },
    saveDraftToLocal() {
      if (!this.form.id && this.form.steps.length === 0) return;
      try {
        localStorage.setItem('story_editor_draft', JSON.stringify({
          storyId: this.form.id,
          savedAt: Date.now(),
          form: this.form
        }));
      } catch {
        // ignore quota errors
      }
    },
    scheduleLocalSave() {
      this.isDirty = true;
      if (this.localSaveTimeout) clearTimeout(this.localSaveTimeout);
      this.localSaveTimeout = setTimeout(() => {
        this.saveDraftToLocal();
        this.localSaveTimeout = null;
      }, 1500);
    },
    clearLocalDraft() {
      try {
        localStorage.removeItem('story_editor_draft');
      } catch {
        // ignore
      }
    },
    checkAndRestoreDraft(storyId) {
      try {
        const raw = localStorage.getItem('story_editor_draft');
        if (!raw) return;
        const draft = JSON.parse(raw);
        if (!draft || draft.storyId !== storyId) return;
        const ageMin = (Date.now() - draft.savedAt) / 60000;
        if (ageMin > 60 * 24) {
          this.clearLocalDraft();
          return;
        }
        if (confirm(`Найден черновик от ${Math.round(ageMin)} мин. назад. Восстановить?`)) {
          this.form = draft.form;
          this.previewIndex = 0;
          this.previewHistory = this.form.steps.length ? [{ idx: 0, tags: {} }] : [];
          this.isDirty = true;
        }
      } catch {
        // ignore
      }
    },
    onKeyDown(event) {
      if (event.code === 'Space') this.spacePressed = true;
      if ((event.ctrlKey || event.metaKey) && event.code === 'KeyS') {
        event.preventDefault();
        this.save();
      }
      if ((event.ctrlKey || event.metaKey) && event.code === 'KeyZ' && !event.shiftKey) {
        event.preventDefault();
        this.undo();
      }
      if ((event.ctrlKey || event.metaKey) && (event.code === 'KeyY' || (event.code === 'KeyZ' && event.shiftKey))) {
        event.preventDefault();
        this.redo();
      }
      if (event.code === 'Escape') {
        this.closeContextMenu();
      }
    },
    onKeyUp(event) {
      if (event.code === 'Space') {
        this.spacePressed = false;
      }
    }
  },
  mounted() {
    this.loadStories();
    this.$nextTick(() => { this.undoSnapshot(); });
    document.addEventListener('click', this.closeContextMenu);
    window.addEventListener('mouseup', this.stopDrag);
    window.addEventListener('resize', this.updateGraphSize);
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    this.$nextTick(this.updateGraphSize);
    const graph = this.$refs.graph;
    if (graph) {
      graph.addEventListener('mousemove', this.updateTempEdge);
      graph.addEventListener('mouseup', this.cancelLink);
      graph.addEventListener('mouseleave', this.cancelLink);
      graph.addEventListener('mouseleave', this.clearEdgeHover);
    }
    this.$watch('form', () => { this.scheduleLocalSave(); }, { deep: true });
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeContextMenu);
    window.removeEventListener('mouseup', this.stopDrag);
    window.removeEventListener('mousemove', this.onDrag);
    window.removeEventListener('mousemove', this.onResize);
    window.removeEventListener('mousemove', this.onGraphDrag);
    window.removeEventListener('mouseup', this.stopGraphDrag);
    window.removeEventListener('mousemove', this.onPanMove);
    window.removeEventListener('mouseup', this.stopPan);
    window.removeEventListener('resize', this.updateGraphSize);
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    const graph = this.$refs.graph;
    if (graph) {
      graph.removeEventListener('mousemove', this.updateTempEdge);
      graph.removeEventListener('mouseup', this.cancelLink);
      graph.removeEventListener('mouseleave', this.cancelLink);
      graph.removeEventListener('mouseleave', this.clearEdgeHover);
    }
  }
};
</script>

<style scoped>
/* ─── Базовое ─── */
.editor-page {
  position: relative;
  min-height: 100vh;
  padding: 12px 16px 16px;
  box-sizing: border-box;
  background: #f1f5f9;
}
/* ─── Топ-бар ─── */
.top-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}
.burger {
  border: none;
  background: #fff;
  border-radius: 10px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  flex-shrink: 0;
}
.top-title {
  font-weight: 700;
  font-size: 16px;
  flex: 1;
}
.top-story-name {
  font-size: 13px;
  color: #6b7280;
  font-weight: 400;
}
/* ─── Трёхколоночный layout ─── */
.layout {
  display: grid;
  grid-template-columns: 1fr 320px 300px;
  gap: 12px;
  align-items: start;
}
/* ─── Боковое меню ─── */
.side-menu {
  position: fixed;
  left: 0; top: 0; bottom: 0;
  width: 320px;
  background: #fff;
  border-right: 1px solid #e5e7eb;
  box-shadow: 0 12px 40px rgba(0,0,0,0.12);
  padding: 16px;
  box-sizing: border-box;
  z-index: 20;
  transform: translateX(-100%);
  transition: transform 0.25s ease;
  overflow-y: auto;
}
.side-menu.open { transform: translateX(0); }
.menu-overlay { position: fixed; inset: 0; z-index: 19; }
.side-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}
.side-actions { display: flex; gap: 6px; }
.menu-title { font-weight: 700; font-size: 15px; }
.stories-list { margin-bottom: 16px; }
.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 13px;
}
.list { display: grid; gap: 6px; }
.list-item {
  text-align: left;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 8px 10px;
  background: #fff;
  cursor: pointer;
  width: 100%;
}
.list-item.active { border-color: #6366f1; box-shadow: 0 0 0 1px #6366f1; }
.list-item .title { font-weight: 700; font-size: 13px; }
.list-item .meta { font-size: 11px; color: #6b7280; }
.form { display: flex; flex-direction: column; gap: 10px; }
label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 13px;
  color: #374151;
}
input, textarea, select {
  width: 100%;
  padding: 7px 10px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 13px;
  box-sizing: border-box;
  background: #fff;
}
input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 2px rgba(99,102,241,0.12);
}
.accordion {
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 8px;
}
.accordion-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 12px;
  background: #f8fafc;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
}
.accordion-body { padding: 10px 12px; display: grid; gap: 10px; }
.characters-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}
.story-char-card {
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 10px;
  display: grid;
  gap: 7px;
}
.story-char-row { display: flex; gap: 8px; align-items: center; }
.variants-row { display: grid; gap: 7px; }
.variants-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.variant-actions { display: flex; gap: 6px; align-items: center; }
.variant-item {
  display: grid;
  gap: 6px;
  border: 1px dashed #d9e0ea;
  padding: 8px;
  border-radius: 8px;
  background: #f9fbff;
}
.variant-upload-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 6px;
}
.variant-upload-row input[type="file"] { font-size: 11px; width: auto; }

/* ─── Граф (колонка 1) ─── */
.editor-graph { min-width: 0; }
.graph-panel {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.graph-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}
.toolbar-left { display: flex; gap: 4px; align-items: center; }
.toolbar-sep {
  width: 1px;
  height: 20px;
  background: #e5e7eb;
  margin: 0 2px;
}
.toolbar-stats {
  flex: 1;
  display: flex;
  gap: 6px;
  font-size: 12px;
  color: #6b7280;
  align-items: center;
}
.stat-end { color: #10b981; font-weight: 600; }
.stat-broken { color: #ef4444; font-weight: 600; }
.toolbar-right { display: flex; gap: 6px; margin-left: auto; }
.icon-btn { font-size: 14px; padding: 4px 7px; }
.icon-btn:disabled { opacity: 0.35; cursor: default; }
.dirty-dot { color: #f59e0b; margin-left: 4px; font-size: 10px; }
.btn.primary.dirty { background: #f59e0b; }
.graph-canvas {
  position: relative;
  width: 100%;
  height: calc(100vh - 160px);
  min-height: 480px;
  background-color: #f8fafc;
  background-image:
    linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px);
  background-size: 32px 32px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  cursor: grab;
  user-select: none;
}
.graph-canvas.panning { cursor: grabbing; }
.graph-inner {
  position: absolute;
  inset: 0;
  transform-origin: 0 0;
}
.graph-lines {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: visible;
}

/* ─── Ноды графа ─── */
.graph-node {
  position: absolute;
  width: 180px;
  min-height: 110px;
  background: #fff;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(15,23,42,0.07);
  padding: 10px 12px 8px;
  box-sizing: border-box;
  cursor: grab;
  transition: box-shadow 0.15s ease, border-color 0.15s ease;
  overflow: visible;
}
.graph-node:hover { box-shadow: 0 8px 24px rgba(15,23,42,0.12); }
.graph-node:hover .node-test-btn { opacity: 1; }
.graph-node.active {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99,102,241,0.18), 0 8px 24px rgba(15,23,42,0.1);
}
.graph-node.broken {
  border-color: #ef4444;
  box-shadow: 0 0 0 2px rgba(239,68,68,0.18);
}
.graph-node.node-choice { border-color: #a855f7; }
.graph-node.node-choice.active { box-shadow: 0 0 0 3px rgba(168,85,247,0.2); }
.graph-node.node-start { border-color: #10b981; }
.graph-node.node-end { border-color: #f59e0b; }
.node-type-badge {
  position: absolute;
  top: -9px;
  left: 10px;
  font-size: 10px;
  font-weight: 700;
  padding: 1px 7px;
  border-radius: 6px;
  background: #a855f7;
  color: #fff;
  letter-spacing: 0.3px;
}
.start-badge { background: #10b981; }
.end-badge { background: #f59e0b; }
.graph-node-title {
  font-weight: 700;
  font-size: 12px;
  color: #1e293b;
  margin-bottom: 3px;
}
.graph-node-text {
  font-size: 11px;
  color: #64748b;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.graph-node-meta {
  font-size: 11px;
  color: #94a3b8;
  margin-top: 6px;
  display: flex;
  gap: 6px;
}
.node-test-btn {
  position: absolute;
  bottom: 6px;
  right: 6px;
  width: 22px;
  height: 22px;
  border: none;
  border-radius: 6px;
  background: #6366f1;
  color: #fff;
  font-size: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.15s;
  z-index: 2;
}
.node-test-btn:hover { background: #4f46e5; }
.ports { position: absolute; inset: 0; pointer-events: none; }
.port {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
  pointer-events: auto;
  transition: transform 0.12s;
}
.port.in { background: #10b981; box-shadow: 0 0 0 2px #ecfdf3; }
.port.out { background: #6366f1; box-shadow: 0 0 0 2px #eef2ff; }
.port:hover { transform: scale(1.5); }
.edge-hit { cursor: pointer; }
.edge-delete {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid #ef4444;
  background: #fff;
  color: #ef4444;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
  z-index: 4;
  pointer-events: auto;
}
.edge-delete:hover { background: #fee2e2; }

/* ─── Контекстное меню ─── */
.context-menu {
  position: fixed;
  z-index: 100;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.16);
  padding: 6px;
  min-width: 180px;
}
.context-menu button {
  display: block;
  width: 100%;
  text-align: left;
  border: none;
  background: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  color: #111827;
  transition: background 0.12s;
}
.context-menu button:hover { background: #f3f4f6; }
.context-sep { height: 1px; background: #e5e7eb; margin: 4px 6px; }
.context-cancel { color: #6b7280 !important; }

/* ─── Редактор блока (колонка 2) ─── */
.editor-block { min-width: 0; }
.block-editor-panel {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  height: calc(100vh - 100px);
  overflow-y: auto;
  position: sticky;
  top: 10px;
}
.block-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px 10px;
  border-bottom: 1px solid #f1f5f9;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 2;
  border-radius: 14px 14px 0 0;
}
.block-title-row { display: flex; gap: 6px; align-items: center; }
.block-id-badge {
  font-weight: 700;
  font-size: 13px;
  color: #1e293b;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.block-type-tag {
  font-size: 10px;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 6px;
  background: #e0e7ff;
  color: #4338ca;
}
.block-type-tag.type-choice { background: #f3e8ff; color: #7c3aed; }
.block-index-info { font-size: 11px; color: #9ca3af; }
.block-header-actions { display: flex; gap: 6px; }
.block-section {
  padding: 10px 14px;
  border-bottom: 1px solid #f1f5f9;
  display: grid;
  gap: 8px;
}
.block-label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 12px;
  color: #374151;
  font-weight: 500;
}
.block-label input,
.block-label textarea,
.block-label select {
  font-size: 13px;
}
.section-title {
  font-size: 11px;
  font-weight: 700;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.section-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.empty-hint { font-size: 12px; color: #9ca3af; padding: 2px 0; }
.char-item {
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 8px;
  background: #f8fafc;
  display: grid;
  gap: 6px;
}
.char-select-row { display: flex; gap: 6px; align-items: center; }
.char-select-row select { flex: 1; }
.char-custom-url { margin-top: 2px; }
.char-pos-row {
  display: flex;
  gap: 6px;
}
.char-pos-row label {
  flex: 1;
  font-size: 11px;
  color: #6b7280;
  gap: 2px;
}
.char-pos-row input { padding: 4px 6px; font-size: 12px; }
.choice-item {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 8px;
  background: #f8fafc;
  display: grid;
  gap: 5px;
}
.choice-row { display: flex; gap: 6px; align-items: center; }
.choice-text { flex: 1; }
.choice-next-row { display: flex; align-items: center; gap: 6px; }
.choice-arrow { font-size: 12px; color: #6b7280; flex-shrink: 0; }
.input-broken { border-color: #ef4444 !important; background: #fff5f5; }
.tag-row { display: flex; gap: 5px; align-items: center; }
.tag-name { flex: 1; }
.tag-op { width: 48px; flex-shrink: 0; padding: 6px 4px; text-align: center; }
.tag-val { width: 56px; flex-shrink: 0; }
.tag-current { padding: 2px 0; }
.tag-current-list { display: flex; gap: 5px; flex-wrap: wrap; }
.tag-chip {
  background: #ede9fe;
  color: #5b21b6;
  border-radius: 6px;
  padding: 2px 8px;
  font-size: 11px;
  font-weight: 600;
}
.no-block-hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  gap: 8px;
  color: #9ca3af;
  font-size: 14px;
}
.no-block-icon { font-size: 32px; }

/* ─── Предпросмотр (колонка 3) ─── */
.editor-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 10px;
}
.phone-frame {
  width: 280px;
  height: 560px;
  background: #111827;
  border-radius: 24px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  color: #fff;
  box-shadow: 0 12px 40px rgba(0,0,0,0.25);
}
.phone-header, .phone-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 4px;
}
.phone-header { font-size: 12px; font-weight: 600; }
.phone-body {
  flex: 1;
  background: #1f2937;
  border-radius: 12px;
  margin: 6px 0 4px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  position: relative;
}
.phone-layer { position: absolute; inset: 0; overflow: hidden; }
.tag-badge {
  position: absolute;
  top: 8px; right: 8px;
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  background: rgba(0,0,0,0.55);
  color: #fff;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 10px;
}
.phone-char { position: absolute; cursor: move; }
.phone-char.selected { outline: 2px dashed #6366f1; }
.phone-char img { width: 100%; height: auto; display: block; }
.resize-handle {
  position: absolute;
  right: -5px; bottom: -5px;
  width: 10px; height: 10px;
  background: #6366f1;
  border-radius: 50%;
  cursor: se-resize;
}
.phone-text-box {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.85) 100%);
  color: #fff;
  padding: 10px;
  font-size: 13px;
  line-height: 1.45;
}
.phone-choices {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 4px 0;
}
.phone-choice-btn {
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.08);
  color: #fff;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 12px;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s;
}
.phone-choice-btn:hover:not(:disabled) { background: rgba(255,255,255,0.18); }
.phone-choice-btn:disabled { opacity: 0.4; cursor: default; }
.preview-progress { font-size: 11px; color: #9ca3af; }

/* ─── Общие ─── */
.muted { color: #6b7280; font-size: 13px; }
.small { font-size: 12px; }
.btn {
  border: none;
  border-radius: 8px;
  padding: 7px 12px;
  cursor: pointer;
  background: #6366f1;
  color: white;
  font-weight: 600;
  font-size: 13px;
  transition: opacity 0.15s;
  white-space: nowrap;
}
.btn:hover { opacity: 0.88; }
.btn.ghost { background: #f1f5f9; color: #374151; }
.btn.small { padding: 5px 10px; font-size: 12px; }
.btn.tiny { padding: 3px 8px; font-size: 11px; }
.btn.danger { background: #fee2e2; color: #dc2626; }
.btn.danger:hover { background: #fecaca; }
.btn.primary { background: #6366f1; color: #fff; }
.success { color: #10b981; font-size: 12px; }
.error { color: #ef4444; font-size: 12px; }

/* ─── Адаптив ─── */
@media (max-width: 1200px) {
  .layout { grid-template-columns: 1fr 300px; }
  .editor-right { display: none; }
}
@media (max-width: 860px) {
  .layout { grid-template-columns: 1fr; }
  .editor-block { display: none; }
  .side-menu { z-index: 30; }
}
</style>
