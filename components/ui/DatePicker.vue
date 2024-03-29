<template>
  <div class="my-3">
    <v-date-picker
      :popover="{ visibility: 'click' }"
      :value="value"
      :locale="locale"
      :required="required"
      :color="color"
      :is-dark="isDark"
      :disabled="disabled"
      @input="onChangeValue"
    >
      <template #default="{ inputValue, inputEvents }">
        <div class="relative inline-block" v-on="inputEvents">
          <ui-label v-if="label" :label="label" class="block" :disabled="disabled">
            <span v-if="required" class="text-lightTeal font-semibold">*</span>
          </ui-label>
          <input
            class="inline border-2 pl-3 h-8 bg-transparent focus:outline-none cursor-pointer"
            :placeholder="internalPlaceholder"
            :class="internalClasses"
            :value="inputValue"
            v-on="inputEvents"
          />
          <button type="button">
            <calendar :color="iconColor" class="absolute inline right-2 bottom-0.5" />
          </button>
        </div>
      </template>
    </v-date-picker>
    <p v-if="error" class="text-rose-600">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Model, Prop } from 'vue-property-decorator';
import { DATE_PICKER_COLOR, inputClasses, POSSIBLE_LOCALES } from './domain/Domain';
import { clickOutside } from '~/helpers/directives';
import Calendar from '~/components/svg/Calendar.vue';
import { EVuexNamespaces } from '~/@types/domain';

@Component({ directives: { clickOutside }, components: { Calendar } })
export default class DatePicker extends Vue {
  @Model('input') value!: string | Date;
  @Prop({ type: [String, Number], default: '' }) label: string | number;
  @Prop({ type: Boolean, default: false }) required: boolean;
  @Prop({ type: Boolean, default: false }) disabled: boolean;
  // @Prop({ type: Boolean, default: false }) isDark: boolean;
  @Prop({ type: String, default: 'black' }) iconColor: string;
  @Prop({ type: Boolean, default: false }) error: boolean;
  @Prop({ type: String, default: '' }) errorMessage: string;
  @Prop({ type: String, default: 'dd / mm / yyyy' }) placeholder: string;
  @Prop({
    type: String,
    default: 'en-US',
    validator(value: string) {
      return Object.values(POSSIBLE_LOCALES).includes(value);
    }
  }) locale: string;

  color = DATE_PICKER_COLOR;

  private get isDark(): boolean {
    return this.$store.state[EVuexNamespaces.CORE].isDarkTheme;
  }

  onChangeValue(date: Date) {
    this.$emit('input', date);
  }

  private get internalPlaceholder(): string {
    if (this.locale) {
      return this.locale === POSSIBLE_LOCALES.en ? 'dd / mm / yyyy' : 'дд / мм / гггг';
    }

    return this.placeholder;
  }

  private get internalClasses(): string {
    if (this.error) { return inputClasses.isError; }
    if (this.disabled) { return inputClasses.disabled; }

    return inputClasses.default;
  }

  getPlaceholder() {
    return this.locale === 'en-US' ? 'dd / mm / yyyy' : 'дд  / мм / гггг';
  }
}
</script>
