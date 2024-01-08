import{p as t,H as s}from"./hoisted.UqmGaI_o.js";const o=`@layer slate-components-1 {
  slate-tag {
    /* Normalize */
    box-sizing: border-box;
    position: relative;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-4xs);
    border-radius: var(--border-radius-sm);
    padding-block: var(--spacing-3xs);
    padding-inline: var(--spacing-2xs);
    font-size: var(--text-sm-font-size);
    line-height: var(--line-height-none);
    background-color: hsl(var(--color-background-secondary));
  }
}
`,r=t(class extends s{constructor(){super(),this.__registerHost()}static get style(){return o}},[0,"slate-tag"]);function i(){if(typeof customElements>"u")return;["slate-tag"].forEach(n=>{switch(n){case"slate-tag":customElements.get(n)||customElements.define(n,r);break}})}i();
