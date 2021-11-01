const runtimeInjectionFunctionKey = '__EM_RUNTIME_INJECTION__';

const initializeRuntimeInjection = function (runtimeInjectionFunction) {
    window[runtimeInjectionFunctionKey] = runtimeInjectionFunction;
}

const getRuntimeInjectionFunction = function () {
    return window[runtimeInjectionFunctionKey];
}

module.exports = {
    initializeRuntimeInjection,
    getRuntimeInjectionFunction
}
