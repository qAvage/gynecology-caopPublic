/**
 * HeroTooltip component
 */

import { h, Transition, resolveComponent } from 'vue'

const HeroTooltip = ({ showTooltip, title, content, idx, onLeft }, { emit }) => {
  const UISVGIcon = resolveComponent('UISVGIcon')
  idx = String(idx)
  return h('div', { class: onLeft ? 'tooltip on-left u-no-select' : 'tooltip u-no-select', id: 'tooltip' + idx },
    [
      h('div', {
        class: 'bg',
        onMouseover: () => emit('mouseOver', idx),
        onMouseout: () => emit('mouseOut')
      }),
      h('div', { class: 'head' }, [h('span', { class: 'p-sm' }, title), h(UISVGIcon, { icon: 'plus' })]),
      h(Transition, {
        name: 'fade',
        onBeforeEnter: el => {
          el.style.width = document.getElementById('tooltip' + idx).childNodes[1].clientWidth + 'px'
        },
        onEnter: el => {
          el.style.width = el.scrollWidth + 'px'
          el.style.height = el.scrollHeight + 'px'
        },
        onLeave: el => {
          el.style.width = document.getElementById('tooltip' + idx).childNodes[1].firstChild.offsetWidth + 'px'
        }
      },
      () => showTooltip === idx ? h('div', { class: 'body' }, h('p', { class: 'p-sm' }, content)) : '')
    ])
}

HeroTooltip.emits = ['mouseOver', 'mouseOut']
HeroTooltip.props = ['showTooltip', 'title', 'content', 'idx', 'onLeft']

export default HeroTooltip
