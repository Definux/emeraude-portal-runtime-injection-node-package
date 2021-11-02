const runtimeInjectionFunctionKey = '__EM_RUNTIME_INJECTION__';

const RUNTIME_INJECTION_STYLE_FILE_NAME = 'runtime-injection.style.min.css';

const RUNTIME_INJECTION_BUNDLE_FILE_NAME = 'runtime-injection.bundle.min.js';

const initializeRuntimeInjection = function (runtimeInjectionFunction) {
    window[runtimeInjectionFunctionKey] = runtimeInjectionFunction;
}

const getRuntimeInjectionFunction = function () {
    return window[runtimeInjectionFunctionKey];
}

module.exports = {
    RUNTIME_INJECTION_STYLE_FILE_NAME,
    RUNTIME_INJECTION_BUNDLE_FILE_NAME,
    initializeRuntimeInjection,
    getRuntimeInjectionFunction
}
