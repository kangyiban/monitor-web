export * from "./handleEvents";
export * from "./load";
export * from "./replace";
import { setupReplace } from "./load";
import { initOptions, log } from "../../core/src/index";
import { _global } from "../../utils/src/index";
import { SDK_VERSION, SDK_NAME } from "../../shared/src/index";
import { InitOptions } from "../../types/src/index";
function webInit(options: InitOptions = {}): void {
  if (!("XMLHttpRequest" in _global) || options.disabled) return;
  initOptions(options);
  setupReplace();
}

function init(options: InitOptions = {}): void {
  webInit(options);
}

export { SDK_VERSION, SDK_NAME, init, log };
