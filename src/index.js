const runtimeInjectionFunctionKey = '__EM_RUNTIME_INJECTION__';

export const RUNTIME_INJECTION_STYLE_FILE_NAME = 'runtime-injection.style.min.css';

export const RUNTIME_INJECTION_BUNDLE_FILE_NAME = 'runtime-injection.bundle.min.js';

export const initializeRuntimeInjection = function (runtimeInjectionFunction) {
    window[runtimeInjectionFunctionKey] = runtimeInjectionFunction;
}

export const getRuntimeInjectionFunction = function () {
    return window[runtimeInjectionFunctionKey];
}
