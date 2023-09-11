import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'smart-camera-web': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }

  interface HTMLElementTagNameMap {
    'smart-camera-web': HTMLMyCustomElementElement;
  }
}
