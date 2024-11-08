<template>
    <button
      :class="['custom-button', `size-${size}`, variant, { disabled }]"
      :disabled="disabled"
      @click="onClick"
    >
      <slot>{{ label }}</slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'Button',
    props: {
      label: {
        type: String,
        default: 'Button',
      },
      variant: {
        type: String,
        default: 'primary',
        validator: (value) => ['primary', 'secondary', 'danger', 'success'].includes(value),
      },
      size: {
        type: String,
        default: 'medium',
        validator: (value) => ['small', 'medium', 'large'].includes(value),
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      onClick(event) {
        if (!this.disabled) {
          this.$emit('click', event);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .custom-button {
    padding: 0.5em 1em;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .custom-button.primary {
    background-color: var(--colorBrand600);
    color: white;
  }
  .custom-button.secondary {
    background-color: #f5f5f5;
    color: #7f56d9;
  }
  .custom-button.danger {
    background-color: #e74c3c;
    color: white;
  }
  .custom-button.success {
    background-color: #2ecc71;
    color: white;
  }
  .custom-button.size-small {
    font-size: 12px;
    padding: 0.25em 0.5em;
  }
  .custom-button.size-medium {
    font-size: 14px;
    padding: 0.5em 1em;
  }
  .custom-button.size-large {
    font-size: 16px;
    padding: 0.75em 1.5em;
  }
  .custom-button.disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  </style>