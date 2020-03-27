function appender() {
  document.querySelectorAll('template')
  .forEach(({id}) => customElements.define(id,
    class extends HTMLElement {
      constructor() {
        super()
        this
        .attachShadow({mode: 'open'})
        .append(
          document.getElementById(id)
          .content
          .cloneNode(true),
          ...this.childNodes
        )
      }
    })
  )
}
window.addEventListener('DOMContentLoaded', appender)