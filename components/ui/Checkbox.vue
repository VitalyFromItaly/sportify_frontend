<template>
  <div class="flex items-baseline">
    <input
      :id="id"
      type="checkbox"
      name=""
      :class="[disabled ? 'cursor-not-allowed': '']"
      :value="value"
      :disabled="disabled"
      :checked="isChecked"
      class="mr-1"
      v-on="events"
    />
    <ui-label :label="label" :for-id="id" :disabled="disabled" />
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator';
import { v4 as uuidv4 } from 'uuid';
import type { TCheckboxValue } from './domain/@types';

@Component
export default class UICheckbox extends Vue {
  @Prop({ type: String, default: '' }) label: string;
  @Prop({ type: Boolean, default: false }) checked: boolean;
  @Prop({ type: Boolean, default: false }) disabled: boolean;
  @Prop({ type: [String, Number, Boolean, Array, Object], default: false }) value: TCheckboxValue;
  @Model('change') readonly model!: string | boolean | [];

  private id = uuidv4();
  private isChecked = false;

  @Watch('checked')
  onChangeChecked(checked: boolean): void {
    this.isChecked = checked;
  }

  private get events(): {} {
    return {
      ...this.$listeners,
      change: this._onChange
    };
  }

  private mounted(): void {
    this.isChecked = this.checked;
  }

  private change(checked: boolean): TCheckboxValue {
    this.isChecked = checked;
    if (Array.isArray(this.model)) {
      const newValue: any = [...this.model];
      if (this.isChecked) {
        newValue.push(this.value);
      } else {
        newValue.splice(newValue.indexOf(this.value), 1);
      }
      return newValue;
    } else {
      return this.isChecked;
    }
  }

  _onChange(event: any) {
    const checked = this.change(event.target.checked);
    this.$emit('change', checked);
  }

  shouldBeChecked() {
    if (this.model !== null) {
      if (Array.isArray(this.model)) {
        // @ts-ignore
        return this.model.includes(this.value);
      }

      return typeof this.model === 'string' ? true : !!this.model;
    }

    return this.isChecked;
  }
}
</script>
<style scoped>
input[type="checkbox"] {
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  /* Remove most all native input styles */
  appearance: none;
  /* For iOS < 15 */
  /* Not removed via appearance */
  font: inherit;
  color: #327387;
  width: 1.15em;
  height: 1.15em;
  border: solid #BEBEBC;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;
}

input[type="checkbox"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  transform: scale(0);
  transform-origin: bottom left;
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em #469BA2;
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}

input[type="checkbox"]:focus {
  outline: none;
}

input[type="checkbox"]:disabled::before {
  --form-control-color: #DFE0D8;
  color: #DFE0D8;
  box-shadow: inset 1em 1em #BEBEBC;
  cursor: not-allowed;
}

</style>
