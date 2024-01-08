import { css, html, LitElement } from 'lit'

const iconStyles = css`
  :host {
    display: block;
    inline-size: var(--size-xs);
    block-size: var(--size-xs);
  }

  svg {
    display: block;
    inline-size: 100%;
    block-size: 100%;
  }

  svg path[stroke] {
    stroke: hsl(var(--color-icon-primary));
  }

  svg path[fill] {
    fill: hsl(var(--color-icon-primary));
  }
`

class IconChevronRight extends LitElement {
  static styles = iconStyles
  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 18L15 12L9 6"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `
  }
}

class IconContact extends LitElement {
  static styles = iconStyles
  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 2L11 13"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22 2L15 22L11 13L2 9L22 2Z"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `
  }
}

class IconEmail extends LitElement {
  static styles = iconStyles
  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22 6L12 13L2 6"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `
  }
}

class IconFile extends LitElement {
  static styles = iconStyles
  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14 2V8H20"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16 13H8"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16 17H8"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 9H9H8"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `
  }
}

class IconHome extends LitElement {
  static styles = iconStyles
  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 22V12H15V22"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `
  }
}

class IconLogoAutocomplete extends LitElement {
  static styles = iconStyles
  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2ZM4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11Z"
          fill="#718096"
        />
      </svg>
    `
  }
}

class IconLogoGitHub extends LitElement {
  static styles = iconStyles
  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `
  }
}

class IconLogoHealthwise extends LitElement {
  static styles = iconStyles
  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.143 2.00028C6.58071 1.95938 2 6.45829 2 12.0206C2 13.6566 2.40899 15.2107 3.10428 16.6013C3.10428 16.6422 3.18608 16.6013 3.14518 16.5604C2.73619 15.5788 2.53169 14.5154 2.57259 13.3703C2.69528 9.11674 6.21262 5.72211 10.4661 5.76301C14.7606 5.8039 18.1961 9.23944 18.237 13.5339C18.2779 17.7874 14.8833 21.3047 10.6297 21.4274C9.48456 21.4683 8.42118 21.2638 7.4396 20.8548C7.3987 20.8548 7.3987 20.8957 7.3987 20.8957C8.78927 21.591 10.3434 22 11.9794 22C17.5417 22 22.0815 17.4193 21.9997 11.857C21.9588 6.45829 17.5826 2.08208 12.143 2.00028Z"
          fill="#718096"
        />
        <path
          d="M10.1798 7.43987C6.98969 7.52167 4.33125 10.0983 4.16765 13.3294C4.12675 14.4336 4.33125 15.497 4.78114 16.4377C4.78114 16.4786 4.82203 16.4377 4.82203 16.4377C4.69934 16.0287 4.65844 15.5379 4.65844 15.088C4.78114 13.0022 6.458 11.2844 8.54387 11.2026C10.9569 11.0799 12.961 13.084 12.8383 15.497C12.7565 17.5829 11.0387 19.3006 8.95286 19.3824C8.46207 19.4233 8.01217 19.3415 7.60318 19.2189C7.56228 19.2189 7.56228 19.2597 7.60318 19.2597C8.54386 19.7096 9.60725 19.955 10.7115 19.9141C13.9017 19.7505 16.4783 17.0921 16.601 13.902C16.7237 10.2619 13.779 7.31718 10.1798 7.43987Z"
          fill="#718096"
        />
        <path
          d="M11.2023 15.2516C11.2023 16.5843 10.122 17.6647 8.78928 17.6647C7.45659 17.6647 6.37622 16.5843 6.37622 15.2516C6.37622 13.9189 7.45659 12.8386 8.78928 12.8386C10.122 12.8386 11.2023 13.9189 11.2023 15.2516Z"
          fill="#718096"
        />
      </svg>
    `
  }
}

class IconLogoInstagram extends LitElement {
  static styles = iconStyles
  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.5 6.5H17.51"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `
  }
}

class IconLogoLinkedIn extends LitElement {
  static styles = iconStyles
  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1ZM3 4C3 3.44772 3.44772 3 4 3C4.55228 3 5 3.44772 5 4C5 4.55228 4.55228 5 4 5C3.44772 5 3 4.55228 3 4Z"
          fill="#718096"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.0503 9.05025C12.363 7.7375 14.1435 7 16 7C17.8565 7 19.637 7.7375 20.9497 9.05025C22.2625 10.363 23 12.1435 23 14V21C23 21.5523 22.5523 22 22 22H18C17.4477 22 17 21.5523 17 21V14C17 13.7348 16.8946 13.4804 16.7071 13.2929C16.5196 13.1054 16.2652 13 16 13C15.7348 13 15.4804 13.1054 15.2929 13.2929C15.1054 13.4804 15 13.7348 15 14V21C15 21.5523 14.5523 22 14 22H10C9.44771 22 9 21.5523 9 21V14C9 12.1435 9.7375 10.363 11.0503 9.05025ZM16 9C14.6739 9 13.4021 9.52678 12.4645 10.4645C11.5268 11.4021 11 12.6739 11 14V20H13V14C13 13.2043 13.3161 12.4413 13.8787 11.8787C14.4413 11.3161 15.2043 11 16 11C16.7957 11 17.5587 11.3161 18.1213 11.8787C18.6839 12.4413 19 13.2043 19 14V20H21V14C21 12.6739 20.4732 11.4021 19.5355 10.4645C18.5979 9.52678 17.3261 9 16 9Z"
          fill="#718096"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1 9C1 8.44772 1.44772 8 2 8H6C6.55228 8 7 8.44772 7 9V21C7 21.5523 6.55228 22 6 22H2C1.44772 22 1 21.5523 1 21V9ZM3 10V20H5V10H3Z"
          fill="#718096"
        />
      </svg>
    `
  }
}

class IconLogoSlateUi extends LitElement {
  static styles = iconStyles
  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 17.4196L9.61309 16.1394C9.61309 16.6136 9.74585 17.0308 10.0114 17.3912C10.2769 17.7515 10.5424 17.9886 10.808 18.1024L11.2063 18.3016V22C9.59412 22 8.21906 21.2982 7.08108 19.8947C6.37933 19.0033 6.01897 18.1783 6 17.4196ZM6.2276 7.4623C6.2276 5.37601 7.11901 3.81128 8.90185 2.76814C9.7174 2.27501 10.4855 2.01897 11.2063 2V5.75533C10.7321 5.8881 10.3812 6.22949 10.1536 6.77952C10.0778 6.95021 10.0398 7.13039 10.0398 7.32006C10.0398 8.09768 10.6183 8.7615 11.7752 9.31152C12.0218 9.42532 12.4201 9.59602 12.9701 9.82361C13.8805 10.184 14.5254 10.478 14.9047 10.7055C16.441 11.6159 17.4651 12.5453 17.9772 13.4936C18.3566 14.2333 18.5462 15.0583 18.5462 15.9687C18.5462 17.6946 17.8919 19.174 16.5832 20.4068C15.4642 21.4689 14.1935 22 12.771 22V18.3016C13.5107 18.2067 14.0322 17.8179 14.3357 17.1351C14.4685 16.8317 14.5349 16.4998 14.5349 16.1394C14.5349 15.1721 13.8141 14.3755 12.3727 13.7496C12.1072 13.6358 11.6899 13.4746 11.1209 13.266C10.4571 13.0384 9.99241 12.8582 9.72688 12.7255C8.09578 11.9478 7.05263 10.9426 6.59744 9.70981C6.35088 9.04599 6.2276 8.29682 6.2276 7.4623ZM12.771 5.75533V2C14.3642 2 15.7013 2.6733 16.7824 4.01991C17.4083 4.8165 17.7307 5.53722 17.7496 6.18208L14.0512 7.40541C14.0512 6.60882 13.6624 6.06828 12.8848 5.78378C12.8089 5.76482 12.771 5.75533 12.771 5.75533Z"
          fill="#718096"
        />
      </svg>
    `
  }
}

class IconPhone extends LitElement {
  static styles = iconStyles
  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4741 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4018C21.1469 21.5901 20.9046 21.7335 20.6408 21.8227C20.3769 21.9119 20.0974 21.945 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77383 17.3146 6.72534 15.2661 5.19 12.85C3.49998 10.2412 2.44824 7.27097 2.12 4.17997C2.09501 3.90344 2.12788 3.62474 2.2165 3.3616C2.30513 3.09846 2.44757 2.85666 2.63477 2.6516C2.82196 2.44653 3.04981 2.28268 3.30379 2.1705C3.55778 2.05831 3.83234 2.00024 4.11 1.99997H7.11C7.59531 1.9952 8.06579 2.16705 8.43376 2.48351C8.80173 2.79996 9.04208 3.23942 9.11 3.71997C9.23662 4.68004 9.47145 5.6227 9.81 6.52997C9.94455 6.8879 9.97366 7.27689 9.89391 7.65086C9.81415 8.02482 9.62886 8.36809 9.36 8.63998L8.09 9.90997C9.51356 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0554 17.47 14.19C18.3773 14.5285 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `
  }
}

class IconPosts extends LitElement {
  static styles = iconStyles
  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 3C17.2626 2.73735 17.5744 2.52901 17.9176 2.38687C18.2608 2.24473 18.6286 2.17157 19 2.17157C19.3714 2.17157 19.7392 2.24473 20.0824 2.38687C20.4256 2.52901 20.7374 2.73735 21 3C21.2626 3.26264 21.471 3.57444 21.6131 3.9176C21.7553 4.26077 21.8284 4.62856 21.8284 5C21.8284 5.37143 21.7553 5.73923 21.6131 6.08239C21.471 6.42555 21.2626 6.73735 21 7L7.5 20.5L2 22L3.5 16.5L17 3Z"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `
  }
}

class IconProjects extends LitElement {
  static styles = iconStyles
  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 18L22 12L16 6"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 6L2 12L8 18"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `
  }
}

customElements.define('te-icon-chevron-right', IconChevronRight)
customElements.define('te-icon-contact', IconContact)
customElements.define('te-icon-email', IconEmail)
customElements.define('te-icon-file', IconFile)
customElements.define('te-icon-home', IconHome)
customElements.define('te-icon-logo-autocomplete', IconLogoAutocomplete)
customElements.define('te-icon-logo-github', IconLogoGitHub)
customElements.define('te-icon-logo-healthwise', IconLogoHealthwise)
customElements.define('te-icon-logo-instagram', IconLogoInstagram)
customElements.define('te-icon-logo-linkedin', IconLogoLinkedIn)
customElements.define('te-icon-logo-slateui', IconLogoSlateUi)
customElements.define('te-icon-phone', IconPhone)
customElements.define('te-icon-posts', IconPosts)
customElements.define('te-icon-projects', IconProjects)

export {
  IconChevronRight,
  IconContact,
  IconEmail,
  IconFile,
  IconHome,
  IconLogoAutocomplete,
  IconLogoGitHub,
  IconLogoHealthwise,
  IconLogoInstagram,
  IconLogoLinkedIn,
  IconLogoSlateUi,
  IconPhone,
  IconPosts,
  IconProjects,
}
