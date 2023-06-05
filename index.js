function curry(fn) { 
        return function curried(...args) {
                if (fn.length >= args.length) return fn(...args);
                return function(...nextArgs) { 
                        return curried(...args, ...next);
                }
        }
}
