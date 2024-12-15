import{cL as t,cM as a,dD as n,dE as i,cP as o,dF as e,_ as r,n as s,b as l,t as c,a as d,dG as h,x as m,e as p,dH as u,r as g,dI as _,dJ as f,dK as v,dL as b,dM as y,l as z}from"./card-4e88bdfb.js";
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w={},C=t(class extends a{constructor(){super(...arguments),this.ot=w}render(t,a){return a()}update(t,[a,i]){if(Array.isArray(a)){if(Array.isArray(this.ot)&&this.ot.length===a.length&&a.every(((t,a)=>t===this.ot[a])))return n}else if(this.ot===a)return n;return this.ot=Array.isArray(a)?Array.from(a):a,this.render(a,i)}});class x{constructor(){this._options=null,this._viewportIntersecting=null,this._microphoneMuteTimer=new i,this._root=null,this._eventListeners=new Map,this._children=[],this._target=null,this._mutationObserver=new MutationObserver(this._mutationHandler.bind(this)),this._intersectionObserver=new IntersectionObserver(this._intersectionHandler.bind(this)),this._mediaLoadedHandler=async t=>{this._target?.index===t&&(await this._unmuteTargetIfConfigured(this._target.selected?"selected":"visible"),await this._playTargetIfConfigured(this._target.selected?"selected":"visible"))},this._visibilityHandler=async()=>{await this._changeVisibility("visible"===document.visibilityState)},this._changeVisibility=async t=>{t?(await this._unmuteTargetIfConfigured("visible"),await this._playTargetIfConfigured("visible")):(await this._pauseAllIfConfigured("hidden"),await this._muteAllIfConfigured("hidden"))},this._microphoneChangeHandler=async t=>{"unmuted"===t?await this._unmuteTargetIfConfigured("microphone"):"muted"===t&&this._options?.autoMuteConditions?.includes("microphone")&&this._microphoneMuteTimer.start(this._options.microphoneMuteSeconds??60,(async()=>{await this._muteTargetIfConfigured("microphone")}))}}setOptions(t){this._options=t,this._options?.microphoneManager&&(this._options.microphoneManager.removeListener(this._microphoneChangeHandler),this._options.microphoneManager.addListener(this._microphoneChangeHandler))}hasRoot(){return!!this._root}destroy(){this._viewportIntersecting=null,this._microphoneMuteTimer.stop(),this._root=null,this._removeChildHandlers(),this._children=[],this._target=null,this._mutationObserver.disconnect(),this._intersectionObserver.disconnect(),this._options?.microphoneManager?.removeListener(this._microphoneChangeHandler),document.removeEventListener("visibilitychange",this._visibilityHandler)}async setTarget(t,a){this._target?.index===t&&this._target?.selected===a||(this._target?.selected&&(await this._pauseTargetIfConfigured("unselected"),await this._muteTargetIfConfigured("unselected"),this._microphoneMuteTimer.stop()),this._target={selected:a,index:t},a?(await this._unmuteTargetIfConfigured("selected"),await this._playTargetIfConfigured("selected")):(await this._unmuteTargetIfConfigured("visible"),await this._playTargetIfConfigured("visible")))}unsetTarget(){this._target=null}async _playTargetIfConfigured(t){null!==this._target&&this._options?.autoPlayConditions?.includes(t)&&await this._play(this._target.index)}async _play(t){await(this._children[t]?.play())}async _unmuteTargetIfConfigured(t){null!==this._target&&this._options?.autoUnmuteConditions?.includes(t)&&await this._unmute(this._target.index)}async _unmute(t){await(this._children[t]?.unmute())}async _pauseAllIfConfigured(t){if(this._options?.autoPauseConditions?.includes(t))for(const t of this._children.keys())await this._pause(t)}async _pauseTargetIfConfigured(t){null!==this._target&&this._options?.autoPauseConditions?.includes(t)&&await this._pause(this._target.index)}async _pause(t){await(this._children[t]?.pause())}async _muteAllIfConfigured(t){if(this._options?.autoMuteConditions?.includes(t))for(const t of this._children.keys())await this._mute(t)}async _muteTargetIfConfigured(t){null!==this._target&&this._options?.autoMuteConditions?.includes(t)&&await this._mute(this._target.index)}async _mute(t){await(this._children[t]?.mute())}_mutationHandler(t,a){this._initializeRoot()}_removeChildHandlers(){for(const[t,a]of this._eventListeners.entries())t.removeEventListener("frigate-card:media:loaded",a);this._eventListeners.clear()}initialize(t){this._root=t,this._initializeRoot(),document.addEventListener("visibilitychange",this._visibilityHandler),this._intersectionObserver.disconnect(),this._intersectionObserver.observe(t),this._mutationObserver.disconnect(),this._mutationObserver.observe(this._root,{childList:!0,subtree:!0})}_initializeRoot(){if(this._options&&this._root){this._removeChildHandlers(),this._children=[...this._root.querySelectorAll(this._options.playerSelector)];for(const[t,a]of this._children.entries()){const n=()=>this._mediaLoadedHandler(t);this._eventListeners.set(a,n),a.addEventListener("frigate-card:media:loaded",n)}}}async _intersectionHandler(t){const a=this._viewportIntersecting;this._viewportIntersecting=t.some((t=>t.isIntersecting)),null!==a&&a!==this._viewportIntersecting&&await this._changeVisibility(this._viewportIntersecting)}}const I={active:!0,breakpoints:{},lazyLoadCount:0};function A(t={}){let a,n,i;const o=new Set,e=["init","select"],r=["select"];function s(){"hidden"===document.visibilityState&&a.lazyUnloadConditions?.includes("hidden")?o.forEach((t=>{a.lazyUnloadCallback&&(a.lazyUnloadCallback(t,i[t]),o.delete(t))})):"visible"===document.visibilityState&&a.lazyLoadCallback&&c()}function l(t){return o.has(t)}function c(){const t=a.lazyLoadCount,e=n.selectedScrollSnap(),r=new Set;for(let a=1;a<=t&&e-a>=0;a++)r.add(e-a);r.add(e);for(let a=1;a<=t&&e+a<i.length;a++)r.add(e+a);r.forEach((t=>{!l(t)&&a.lazyLoadCallback&&(o.add(t),a.lazyLoadCallback(t,i[t]))}))}function d(){const t=n.previousScrollSnap();l(t)&&a.lazyUnloadCallback&&(a.lazyUnloadCallback(t,i[t]),o.delete(t))}return{name:"autoLazyLoad",options:t,init:function(o,l){const{mergeOptions:h,optionsAtMedia:m}=l,p=h(I,t);a=m(p),n=o,i=n.slideNodes(),a.lazyLoadCallback&&e.forEach((t=>n.on(t,c))),a.lazyUnloadCallback&&a.lazyUnloadConditions?.includes("unselected")&&r.forEach((t=>n.on(t,d))),document.addEventListener("visibilitychange",s)},destroy:function(){a.lazyLoadCallback&&e.forEach((t=>n.off(t,c))),a.lazyUnloadCallback&&r.forEach((t=>n.off(t,d))),document.removeEventListener("visibilitychange",s)}}}function L(){let t,a=[];const n=[];function i(i){const o=i.composedPath();for(const[e,r]of[...a.entries()].reverse())if(o.includes(r)){n[e]=i.detail,e!==t.selectedScrollSnap()&&i.stopPropagation();break}}function e(i){const o=i.composedPath();for(const[e,r]of a.entries())if(o.includes(r)){delete n[e],e!==t.selectedScrollSnap()&&i.stopPropagation();break}}function r(){const i=t.selectedScrollSnap(),e=n[i];e&&o(a[i],e)}return{name:"autoMediaLoadedInfo",options:{},init:function(n){t=n,a=t.slideNodes();for(const t of a)t.addEventListener("frigate-card:media:loaded",i),t.addEventListener("frigate-card:media:unloaded",e);t.on("init",r),t.containerNode().addEventListener("frigate-card:carousel:force-select",r)},destroy:function(){for(const t of a)t.removeEventListener("frigate-card:media:loaded",i),t.removeEventListener("frigate-card:media:unloaded",e);t.off("init",r),t.containerNode().removeEventListener("frigate-card:carousel:force-select",r)}}}class S{constructor(t){this._scrolling=!1,this._shouldReInitOnScrollStop=!1,this._scrollingStart=()=>{this._scrolling=!0},this._scrollingStop=()=>{this._scrolling=!1,this._shouldReInitOnScrollStop&&(this._shouldReInitOnScrollStop=!1,this._debouncedReInit())},this._debouncedReInit=e((()=>{this._scrolling=!1,this._shouldReInitOnScrollStop=!1,this._emblaApi?.reInit()}),500,{trailing:!0}),this._emblaApi=t,this._emblaApi.on("scroll",this._scrollingStart),this._emblaApi.on("settle",this._scrollingStop),this._emblaApi.on("destroy",this.destroy)}destroy(){this._emblaApi.off("scroll",this._scrollingStart),this._emblaApi.off("settle",this._scrollingStop),this._emblaApi.off("destroy",this.destroy)}reinit(){this._scrolling?this._shouldReInitOnScrollStop=!0:this._debouncedReInit()}}function T(){let t,a=null,n=null;const i=new Map,o=new ResizeObserver((function(t){let a=!1;for(const n of t){const t={height:n.contentRect.height,width:n.contentRect.width},o=i.get(n.target);t.width&&t.height&&(o?.height!==t.height||o?.width!==t.width)&&(i.set(n.target,t),a=!0)}a&&s()})),r=new IntersectionObserver((function(t){const i=t.some((t=>t.isIntersecting));if(i!==n){const t=i&&null!==n;n=i,t&&a?.reinit()}})),s=e((()=>function(){const{slideRegistry:n,options:{axis:i}}=t.internalEngine();if("y"===i)return;t.containerNode().style.removeProperty("max-height");const o=n[t.selectedScrollSnap()],e=t.slideNodes(),r=Math.max(...o.map((t=>e[t].getBoundingClientRect().height)));!isNaN(r)&&r>0&&(t.containerNode().style.maxHeight=`${r}px`);a?.reinit()}()),200,{trailing:!0});return{name:"autoSize",options:{},init:function(n){t=n,a=new S(t),r.observe(t.containerNode()),o.observe(t.containerNode());for(const a of t.slideNodes())o.observe(a);t.containerNode().addEventListener("frigate-card:media:loaded",s),t.on("settle",s)},destroy:function(){r.disconnect(),o.disconnect(),a?.destroy(),t.containerNode().removeEventListener("frigate-card:media:loaded",s),t.off("settle",s)}}}let $=class extends d{constructor(){super(...arguments),this.disabled=!1,this.label="",this._embedThumbnailTask=h(this,(()=>this.hass),(()=>this.thumbnail))}set controlConfig(t){t?.size&&this.style.setProperty("--frigate-card-next-prev-size",`${t.size}px`),this._controlConfig=t}render(){if(this.disabled||!this._controlConfig||"none"==this._controlConfig.style)return m``;const t=!this.thumbnail||["chevrons","icons"].includes(this._controlConfig.style),a={controls:!0,left:"left"===this.side,right:"right"===this.side,thumbnails:!t,icons:t,button:t};if(t){const t=this.thumbnail&&this.icon&&"chevrons"!==this._controlConfig.style?this.icon:"left"===this.side?"mdi:chevron-left":"mdi:chevron-right";return m` <ha-icon-button class="${p(a)}" .label=${this.label}>
        <ha-icon icon=${t}></ha-icon>
      </ha-icon-button>`}return u(this,this._embedThumbnailTask,(t=>t?m`<img
              src="${t}"
              class="${p(a)}"
              title="${this.label}"
              aria-label="${this.label}"
            />`:m``),{inProgressFunc:()=>m`<div class=${p(a)}></div>`})}static get styles(){return g("ha-icon-button.button {\n  color: var(--secondary-color, white);\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  padding: 0px;\n  margin: 3px;\n  --ha-icon-display: block;\n  /* Buttons can always be clicked */\n  pointer-events: auto;\n  opacity: 0.9;\n}\n\n@keyframes pulse {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.6;\n  }\n  100% {\n    opacity: 1;\n  }\n}\nha-icon[data-domain=alert][data-state=on],\nha-icon[data-domain=automation][data-state=on],\nha-icon[data-domain=binary_sensor][data-state=on],\nha-icon[data-domain=calendar][data-state=on],\nha-icon[data-domain=camera][data-state=streaming],\nha-icon[data-domain=cover][data-state=open],\nha-icon[data-domain=fan][data-state=on],\nha-icon[data-domain=humidifier][data-state=on],\nha-icon[data-domain=light][data-state=on],\nha-icon[data-domain=input_boolean][data-state=on],\nha-icon[data-domain=lock][data-state=unlocked],\nha-icon[data-domain=media_player][data-state=on],\nha-icon[data-domain=media_player][data-state=paused],\nha-icon[data-domain=media_player][data-state=playing],\nha-icon[data-domain=script][data-state=on],\nha-icon[data-domain=sun][data-state=above_horizon],\nha-icon[data-domain=switch][data-state=on],\nha-icon[data-domain=timer][data-state=active],\nha-icon[data-domain=vacuum][data-state=cleaning],\nha-icon[data-domain=group][data-state=on],\nha-icon[data-domain=group][data-state=home],\nha-icon[data-domain=group][data-state=open],\nha-icon[data-domain=group][data-state=locked],\nha-icon[data-domain=group][data-state=problem] {\n  color: var(--paper-item-icon-active-color, #fdd835);\n}\n\nha-icon[data-domain=climate][data-state=cooling] {\n  color: var(--cool-color, var(--state-climate-cool-color));\n}\n\nha-icon[data-domain=climate][data-state=heating] {\n  color: var(--heat-color, var(--state-climate-heat-color));\n}\n\nha-icon[data-domain=climate][data-state=drying] {\n  color: var(--dry-color, var(--state-climate-dry-color));\n}\n\nha-icon[data-domain=alarm_control_panel] {\n  color: var(--alarm-color-armed, var(--label-badge-red));\n}\n\nha-icon[data-domain=alarm_control_panel][data-state=disarmed] {\n  color: var(--alarm-color-disarmed, var(--label-badge-green));\n}\n\nha-icon[data-domain=alarm_control_panel][data-state=pending],\nha-icon[data-domain=alarm_control_panel][data-state=arming] {\n  color: var(--alarm-color-pending, var(--label-badge-yellow));\n  animation: pulse 1s infinite;\n}\n\nha-icon[data-domain=alarm_control_panel][data-state=triggered] {\n  color: var(--alarm-color-triggered, var(--label-badge-red));\n  animation: pulse 1s infinite;\n}\n\nha-icon[data-domain=plant][data-state=problem],\nha-icon[data-domain=zwave][data-state=dead] {\n  color: var(--state-icon-error-color);\n}\n\n/* Color the icon if unavailable */\nha-icon[data-state=unavailable] {\n  color: var(--state-unavailable-color);\n}\n\nha-icon-button[data-domain=alert][data-state=on],\nha-icon-button[data-domain=automation][data-state=on],\nha-icon-button[data-domain=binary_sensor][data-state=on],\nha-icon-button[data-domain=calendar][data-state=on],\nha-icon-button[data-domain=camera][data-state=streaming],\nha-icon-button[data-domain=cover][data-state=open],\nha-icon-button[data-domain=fan][data-state=on],\nha-icon-button[data-domain=humidifier][data-state=on],\nha-icon-button[data-domain=light][data-state=on],\nha-icon-button[data-domain=input_boolean][data-state=on],\nha-icon-button[data-domain=lock][data-state=unlocked],\nha-icon-button[data-domain=media_player][data-state=on],\nha-icon-button[data-domain=media_player][data-state=paused],\nha-icon-button[data-domain=media_player][data-state=playing],\nha-icon-button[data-domain=script][data-state=on],\nha-icon-button[data-domain=sun][data-state=above_horizon],\nha-icon-button[data-domain=switch][data-state=on],\nha-icon-button[data-domain=timer][data-state=active],\nha-icon-button[data-domain=vacuum][data-state=cleaning],\nha-icon-button[data-domain=group][data-state=on],\nha-icon-button[data-domain=group][data-state=home],\nha-icon-button[data-domain=group][data-state=open],\nha-icon-button[data-domain=group][data-state=locked],\nha-icon-button[data-domain=group][data-state=problem] {\n  color: var(--paper-item-icon-active-color, #fdd835);\n}\n\nha-icon-button[data-domain=climate][data-state=cooling] {\n  color: var(--cool-color, var(--state-climate-cool-color));\n}\n\nha-icon-button[data-domain=climate][data-state=heating] {\n  color: var(--heat-color, var(--state-climate-heat-color));\n}\n\nha-icon-button[data-domain=climate][data-state=drying] {\n  color: var(--dry-color, var(--state-climate-dry-color));\n}\n\nha-icon-button[data-domain=alarm_control_panel] {\n  color: var(--alarm-color-armed, var(--label-badge-red));\n}\n\nha-icon-button[data-domain=alarm_control_panel][data-state=disarmed] {\n  color: var(--alarm-color-disarmed, var(--label-badge-green));\n}\n\nha-icon-button[data-domain=alarm_control_panel][data-state=pending],\nha-icon-button[data-domain=alarm_control_panel][data-state=arming] {\n  color: var(--alarm-color-pending, var(--label-badge-yellow));\n  animation: pulse 1s infinite;\n}\n\nha-icon-button[data-domain=alarm_control_panel][data-state=triggered] {\n  color: var(--alarm-color-triggered, var(--label-badge-red));\n  animation: pulse 1s infinite;\n}\n\nha-icon-button[data-domain=plant][data-state=problem],\nha-icon-button[data-domain=zwave][data-state=dead] {\n  color: var(--state-icon-error-color);\n}\n\n/* Color the icon if unavailable */\nha-icon-button[data-state=unavailable] {\n  color: var(--state-unavailable-color);\n}\n\n:host {\n  --frigate-card-next-prev-size: 48px;\n  --frigate-card-next-prev-size-hover: calc(var(--frigate-card-next-prev-size) * 2);\n  --frigate-card-left-position: 45px;\n  --frigate-card-right-position: 45px;\n  --mdc-icon-button-size: var(--frigate-card-next-prev-size);\n  --mdc-icon-size: calc(var(--mdc-icon-button-size) / 2);\n}\n\n.controls {\n  position: absolute;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.controls.left {\n  left: var(--frigate-card-left-position);\n}\n\n.controls.right {\n  right: var(--frigate-card-right-position);\n}\n\n.controls.icons {\n  top: calc(50% - var(--frigate-card-next-prev-size) / 2);\n}\n\n.controls.thumbnails {\n  border-radius: 50%;\n  height: var(--frigate-card-next-prev-size);\n  top: calc(50% - var(--frigate-card-next-prev-size) / 2);\n  box-shadow: var(--frigate-card-css-box-shadow, 0px 0px 20px 5px black);\n  transition: all 0.2s ease-out;\n  opacity: 0.8;\n  aspect-ratio: 1/1;\n}\n\n.controls.thumbnails:hover {\n  opacity: 1 !important;\n  height: var(--frigate-card-next-prev-size-hover);\n  top: calc(50% - var(--frigate-card-next-prev-size-hover) / 2);\n}\n\n.controls.left.thumbnails:hover {\n  left: calc(var(--frigate-card-left-position) - (var(--frigate-card-next-prev-size-hover) - var(--frigate-card-next-prev-size)) / 2);\n}\n\n.controls.right.thumbnails:hover {\n  right: calc(var(--frigate-card-right-position) - (var(--frigate-card-next-prev-size-hover) - var(--frigate-card-next-prev-size)) / 2);\n}")}};r([s({attribute:!1})],$.prototype,"side",void 0),r([s({attribute:!1})],$.prototype,"hass",void 0),r([l()],$.prototype,"_controlConfig",void 0),r([s({attribute:!1})],$.prototype,"thumbnail",void 0),r([s({attribute:!1})],$.prototype,"icon",void 0),r([s({attribute:!0,type:Boolean})],$.prototype,"disabled",void 0),r([s()],$.prototype,"label",void 0),$=r([c("frigate-card-next-previous-control")],$);class P{constructor(t){this._config=null,this._hass=null,this._cameraManager=null,this._cameraID=null,this._host=t}setConfig(t){this._config=t??null,this._host.setAttribute("data-orientation",t?.orientation??"horizontal"),this._host.setAttribute("data-position",t?.position??"bottom-right"),this._host.setAttribute("style",Object.entries(t?.style??{}).map((([t,a])=>`${t}:${a}`)).join(";"))}getConfig(){return this._config}setCamera(t,a){this._cameraManager=t??null,this._cameraID=a??null}setForceVisibility(t){this._forceVisibility=t}handleAction(t,a){t.stopPropagation();const n=t.detail.action,i=_(n,a);i&&f(this._host,{action:i,...a&&{config:a}})}hasUsefulAction(){const t={pt:!0,z:!0,home:!0};if(!this._cameraID)return t;const a=this._cameraManager?.getCameraCapabilities(this._cameraID);if(!a||!a.hasPTZCapability())return t;const n=a.getPTZCapabilities();return{pt:!!(n?.up||n?.down||n?.left||n?.right),z:!!n?.zoomIn||!!n?.zoomOut,home:!!n?.presets?.length}}shouldDisplay(){return void 0!==this._forceVisibility?this._forceVisibility:"auto"===this._config?.mode?!!this._cameraID&&!!this._cameraManager?.getCameraCapabilities(this._cameraID)?.hasPTZCapability():"on"===this._config?.mode}getPTZActions(){const t=t=>({start_tap_action:v({ptzAction:t?.ptzAction,ptzPhase:"start",ptzPreset:t?.preset}),end_tap_action:v({ptzAction:t?.ptzAction,ptzPhase:"stop",ptzPreset:t?.preset})}),a={};return a.up=t({ptzAction:"up"}),a.down=t({ptzAction:"down"}),a.left=t({ptzAction:"left"}),a.right=t({ptzAction:"right"}),a.zoom_in=t({ptzAction:"zoom_in"}),a.zoom_out=t({ptzAction:"zoom_out"}),a.home={tap_action:v()},a}}let k=class extends d{constructor(){super(...arguments),this._controller=new P(this),this._actions=this._controller.getPTZActions(),this._actionPresence=null}willUpdate(t){t.has("config")&&this._controller.setConfig(this.config),(t.has("cameraManager")||t.has("cameraID"))&&this._controller.setCamera(this.cameraManager,this.cameraID),t.has("forceVisibility")&&this._controller.setForceVisibility(this.forceVisibility),(t.has("cameraID")||t.has("cameraManager"))&&(this._actionPresence=this._controller.hasUsefulAction())}render(){if(!this._controller.shouldDisplay())return;const t=(t,a,n)=>n?m`<ha-icon
            class=${p({[t]:!0,disabled:!n})}
            icon=${a}
            .actionHandler=${b({hasHold:y(n?.hold_action),hasDoubleClick:y(n?.double_tap_action)})}
            .title=${z(`elements.ptz.${t}`)}
            @action=${t=>this._controller.handleAction(t,n)}
          ></ha-icon>`:m``,a=this._controller.getConfig();return m` <div class="ptz">
      ${!a?.hide_pan_tilt&&this._actionPresence?.pt?m`<div class="ptz-move">
            ${t("right","mdi:arrow-right",this._actions.right)}
            ${t("left","mdi:arrow-left",this._actions.left)}
            ${t("up","mdi:arrow-up",this._actions.up)}
            ${t("down","mdi:arrow-down",this._actions.down)}
          </div>`:""}
      ${!a?.hide_zoom&&this._actionPresence?.z?m` <div class="ptz-zoom">
            ${t("zoom_in","mdi:plus",this._actions.zoom_in)}
            ${t("zoom_out","mdi:minus",this._actions.zoom_out)}
          </div>`:m``}
      ${!a?.hide_home&&this._actionPresence?.home?m`<div class="ptz-home">
            ${t("home","mdi:home",this._actions.home)}
          </div>`:m``}
    </div>`}static get styles(){return g(":host {\n  position: absolute;\n  width: fit-content;\n  height: fit-content;\n  --frigate-card-ptz-icon-size: 24px;\n}\n\n:host([data-position$=-left]) {\n  left: 5%;\n}\n\n:host([data-position$=-right]) {\n  right: 5%;\n}\n\n:host([data-position^=top-]) {\n  top: 5%;\n}\n\n:host([data-position^=bottom-]) {\n  bottom: 5%;\n}\n\n/*****************\n * Main Containers\n *****************/\n.ptz {\n  display: flex;\n  gap: 10px;\n  color: var(--light-primary-color);\n  opacity: 0.4;\n  transition: opacity 0.3s ease-in-out;\n}\n\n:host([data-orientation=vertical]) .ptz {\n  flex-direction: column;\n}\n\n:host([data-orientation=horizontal]) .ptz {\n  flex-direction: row;\n}\n\n.ptz:hover {\n  opacity: 1;\n}\n\n:host([data-orientation=vertical]) .ptz div {\n  width: calc(var(--frigate-card-ptz-icon-size) * 3);\n}\n\n:host([data-orientation=horizontal]) .ptz div {\n  height: calc(var(--frigate-card-ptz-icon-size) * 3);\n}\n\n.ptz-move,\n.ptz-zoom,\n.ptz-home {\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.ptz-move {\n  height: calc(var(--frigate-card-ptz-icon-size) * 3);\n  width: calc(var(--frigate-card-ptz-icon-size) * 3);\n  border-radius: 50%;\n}\n\n:host([data-orientation=horizontal]) .ptz .ptz-zoom,\n:host([data-orientation=horizontal]) .ptz .ptz-home {\n  width: calc(var(--frigate-card-ptz-icon-size) * 1.5);\n}\n\n:host([data-orientation=vertical]) .ptz .ptz-zoom,\n:host([data-orientation=vertical]) .ptz .ptz-home {\n  height: calc(var(--frigate-card-ptz-icon-size) * 1.5);\n}\n\n.ptz-zoom,\n.ptz-home {\n  border-radius: var(--ha-card-border-radius, 4px);\n}\n\n/***********\n * PTZ Icons\n ***********/\nha-icon {\n  position: absolute;\n  --mdc-icon-size: var(--frigate-card-ptz-icon-size);\n}\n\nha-icon:not(.disabled) {\n  cursor: pointer;\n}\n\n.disabled {\n  color: var(--disabled-text-color);\n}\n\n.up {\n  top: 5px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.down {\n  bottom: 5px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.left {\n  left: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.right {\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n:host([data-orientation=vertical]) .zoom_in {\n  right: 5px;\n  top: 50%;\n}\n\n:host([data-orientation=vertical]) .zoom_out {\n  left: 5px;\n  top: 50%;\n}\n\n:host([data-orientation=horizontal]) .zoom_in {\n  left: 50%;\n  top: 5px;\n}\n\n:host([data-orientation=horizontal]) .zoom_out {\n  left: 50%;\n  bottom: 5px;\n}\n\n:host([data-orientation=vertical]) .zoom_in,\n:host([data-orientation=vertical]) .zoom_out {\n  transform: translateY(-50%);\n}\n\n:host([data-orientation=horizontal]) .zoom_in,\n:host([data-orientation=horizontal]) .zoom_out {\n  transform: translateX(-50%);\n}\n\n.home {\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}")}};r([s({attribute:!1})],k.prototype,"config",void 0),r([s({attribute:!1})],k.prototype,"cameraManager",void 0),r([s({attribute:!1})],k.prototype,"cameraID",void 0),r([s({attribute:!1})],k.prototype,"forceVisibility",void 0),k=r([c("frigate-card-ptz")],k);const M=(t,a)=>{void 0!==a?.fit?t.style.setProperty("--frigate-card-media-layout-fit",a.fit):t.style.removeProperty("--frigate-card-media-layout-fit");for(const n of["x","y"])void 0!==a?.position?.[n]?t.style.setProperty(`--frigate-card-media-layout-position-${n}`,`${a.position[n]}%`):t.style.removeProperty(`--frigate-card-media-layout-position-${n}`);for(const n of["top","bottom","left","right"])void 0!==a?.view_box?.[n]?t.style.setProperty(`--frigate-card-media-layout-view-box-${n}`,`${a.view_box[n]}%`):t.style.removeProperty(`--frigate-card-media-layout-view-box-${n}`)},E=2,H=(t,a)=>{t._controlsHideTimer&&(t._controlsHideTimer.stop(),delete t._controlsHideTimer,delete t._controlsOriginalValue),t.controls=a},O=(t,a=1)=>{const n=t._controlsOriginalValue??t.controls;H(t,!1),t._controlsHideTimer??=new i,t._controlsOriginalValue=n;const o=()=>{H(t,n),t.removeEventListener("loadstart",o)};t.addEventListener("loadstart",o),t._controlsHideTimer.start(a,(()=>{H(t,n)}))},R=async(t,a)=>{if(a?.play)try{await a.play()}catch(n){if("NotAllowedError"===n.name&&!t.isMuted()){await t.mute();try{await a.play()}catch(t){}}}};export{A,x as M,L as a,T as b,E as c,O as h,C as i,R as p,H as s,M as u};
