import EventBus from "./Eventbus";

// eslint-disable-next-line
// @ts-ignore
if (!window.eventbus) {
  // eslint-disable-next-line
  // @ts-ignore
  window.eventbus = new EventBus();
}
//
export { EventBus };
