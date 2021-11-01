const runtimeInjectionFunctionKey = '__EM_RUNTIME_INJECTION__';

export const initializeRuntimeInjection = function (runtimeInjectionFunction) {
    window[runtimeInjectionFunctionKey] = runtimeInjectionFunction;
}

export const getRuntimeInjectionFunction = function () {
    return window[runtimeInjectionFunctionKey];
}
