<template>
  <div>
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
        <div class="relative inline-block">
          <ui-label v-if="label" :label="label" class="block" :disabled="disabled">
            <span v-if="required" class="text-lightTeal font-semibold">*</span>
          </ui-label>
          <input
            class="inline border-2 pl-3 h-8 focus:outline-none"
            :placeholder="internalPlaceholder"
            :class="internalClasses"
            :value="inputValue"
            v-on="inputEvents"
          />
          <calendar :color="iconColor" class="absolute inline right-2 top-6" />
        </div>
      </template>
    </v-date-picker>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Model, Prop } from 'vue-property-decorator';
import { DATE_PICKER_COLOR, inputClasses, POSSIBLE_LOCALES } from './domain/Domain';
import { clickOutside } from '~/helpers/directives';
import Calendar from '~/components/svg/Calendar.vue';

@Component({ directives: { clickOutside }, components: { Calendar } })
export default class DatePicker extends Vue {
  @Model('input') value!: string | Date;
  @Prop({ type: [String, Number], default: '' }) label: string | number;
  @Prop({ type: Boolean, default: false }) required: boolean;
  @Prop({ type: Boolean, default: false }) disabled: boolean;
  @Prop({ type: Boolean, default: false }) isDark: boolean;
  @Prop({ type: String, default: 'black' }) iconColor: string;
  @Prop({ type: String, default: 'dd / mm / yyyy' }) placeholder: string;
  @Prop({
    type: String,
    default: 'en-US',
    validator(value: string) {
      return Object.values(POSSIBLE_LOCALES).includes(value);
    }
  }) locale: string;

  color = DATE_PICKER_COLOR;

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
    if (this.disabled) {
      return inputClasses.disabled;
    }

    return inputClasses.default;
  }

  getPlaceholder() {
    return this.locale === 'en-US' ? 'dd / mm / yyyy' : 'дд  / мм / гггг';
  }
}
</script>
