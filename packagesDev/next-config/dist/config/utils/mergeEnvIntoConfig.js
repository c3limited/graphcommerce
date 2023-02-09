"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatAppliedEnv = exports.mergeEnvIntoConfig = exports.configToEnvSchema = void 0;
/* eslint-disable import/no-extraneous-dependencies */
const utilities_1 = require("@apollo/client/utilities");
const chalk_1 = __importDefault(require("chalk"));
const lodash_1 = require("lodash");
const snakeCase_1 = __importDefault(require("lodash/snakeCase"));
const zod_1 = require("zod");
const diff_1 = __importDefault(require("./diff"));
const fmt = (s) => s.split(/(\d+)/).map(snakeCase_1.default).join('');
const pathStr = (path) => ['GC', ...path].map(fmt).join('_').toUpperCase();
const dotNotation = (pathParts) => pathParts
    .map((v) => {
    const idx = Number(v);
    return !Number.isNaN(idx) ? `[${idx}]` : v;
})
    .join('.');
function isJSON(str) {
    if (!str)
        return true;
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
function configToEnvSchema(schema) {
    const envSchema = {};
    const envToDot = {};
    function walk(incomming, path = []) {
        let node = incomming;
        if (node instanceof zod_1.ZodEffects)
            node = node.innerType();
        if (node instanceof zod_1.ZodOptional)
            node = node.unwrap();
        if (node instanceof zod_1.ZodNullable)
            node = node.unwrap();
        if (node instanceof zod_1.ZodObject) {
            if (path.length > 0) {
                envSchema[pathStr(path)] = zod_1.z
                    .string()
                    .optional()
                    .refine(isJSON, { message: `Invalid JSON` })
                    .transform((val) => (val ? JSON.parse(val) : val));
                envToDot[pathStr(path)] = dotNotation(path);
            }
            const typeNode = node;
            Object.keys(typeNode.shape).forEach((key) => {
                walk(typeNode.shape[key], [...path, key]);
            });
            return;
        }
        if (node instanceof zod_1.ZodArray) {
            const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
            if (path.length > 0) {
                envSchema[pathStr(path)] = zod_1.z
                    .string()
                    .optional()
                    .refine(isJSON, { message: `Invalid JSON` })
                    .transform((val) => (val ? JSON.parse(val) : val));
                envToDot[pathStr(path)] = dotNotation(path);
            }
            arr.forEach((key) => {
                walk(node.element, [...path, String(key)]);
            });
            return;
        }
        if (node instanceof zod_1.ZodString || node instanceof zod_1.ZodNumber || node instanceof zod_1.ZodEnum) {
            envSchema[pathStr(path)] = node.optional();
            envToDot[pathStr(path)] = dotNotation(path);
            return;
        }
        if (node instanceof zod_1.ZodBoolean) {
            envSchema[pathStr(path)] = zod_1.z
                .enum(['true', '1', 'false', '0'])
                .optional()
                .transform((v) => {
                if (v === 'true' || v === '1')
                    return true;
                if (v === 'false' || v === '0')
                    return false;
                return v;
            });
            envToDot[pathStr(path)] = dotNotation(path);
            return;
        }
        throw Error(`[@graphcommerce/next-config] Unknown type in schema ${node.constructor.name}. This is probably a bug please create an issue.`);
    }
    walk(schema);
    return [zod_1.z.object(envSchema), envToDot];
}
exports.configToEnvSchema = configToEnvSchema;
function mergeEnvIntoConfig(schema, config, env) {
    const filterEnv = Object.fromEntries(Object.entries(env).filter(([key]) => key.startsWith('GC_')));
    const newConfig = (0, utilities_1.cloneDeep)(config);
    const [envSchema, envToDot] = configToEnvSchema(schema);
    const result = envSchema.safeParse(filterEnv);
    const applyResult = [];
    if (!result.success) {
        Object.entries(result.error.flatten().fieldErrors).forEach(([envVar, error]) => {
            const dotVar = envToDot[envVar];
            const envValue = filterEnv[envVar];
            applyResult.push({ envVar, envValue, dotVar, error });
        });
        return [undefined, applyResult];
    }
    Object.entries(result.data).forEach(([envVar, value]) => {
        const dotVar = envToDot[envVar];
        const envValue = filterEnv[envVar];
        if (!dotVar) {
            applyResult.push({ envVar, envValue });
            return;
        }
        const dotValue = (0, lodash_1.get)(newConfig, dotVar);
        const merged = (0, utilities_1.mergeDeep)(dotValue, value);
        const from = (0, diff_1.default)(merged, dotValue);
        const to = (0, diff_1.default)(dotValue, merged);
        applyResult.push({ envVar, envValue, dotVar, from, to });
        (0, lodash_1.set)(newConfig, dotVar, merged);
    });
    return [newConfig, applyResult];
}
exports.mergeEnvIntoConfig = mergeEnvIntoConfig;
/**
 * Prints the applied env variables to the console
 *
 * The format is:
 *
 * - If from and to is empty, the value is unchanged: `=` (white)
 * - If the from is empty, a new value is applied: `+` (green)
 * - If the to is empty, a value is removed: `-` (red)
 * - If both from and to is not empty, a value is changed: `~` (yellow)
 */
function formatAppliedEnv(applyResult) {
    let hasError = false;
    let hasWarning = false;
    const lines = applyResult.map(({ from, to, envValue, envVar, dotVar, error, warning }) => {
        const fromFmt = chalk_1.default.red(JSON.stringify(from));
        const toFmt = chalk_1.default.green(JSON.stringify(to));
        const envVariableFmt = `${envVar}='${envValue}'`;
        const dotVariableFmt = chalk_1.default.bold.underline(`${dotVar}`);
        const baseLog = `${envVariableFmt} => ${dotVariableFmt}`;
        if (error) {
            hasError = true;
            return `${chalk_1.default.red(` ⨉ ${envVariableFmt}`)} => ${error.join(', ')}`;
        }
        if (warning) {
            hasWarning = true;
            return `${chalk_1.default.yellowBright(` ‼ ${envVariableFmt}`)} => ${warning.join(', ')}`;
        }
        if (!dotVar)
            return chalk_1.default.red(`${envVariableFmt} => ignored (no matching config)`);
        if (from === undefined && to === undefined)
            return ` = ${baseLog}: (ignored, no change/wrong format)`;
        if (from === undefined && to !== undefined)
            return ` ${chalk_1.default.green('+')} ${baseLog}: ${toFmt}`;
        if (from !== undefined && to === undefined)
            return ` ${chalk_1.default.red('-')} ${baseLog}: ${fromFmt}`;
        return ` ${chalk_1.default.yellowBright('~')} ${baseLog}: ${fromFmt} => ${toFmt}`;
    });
    let header = chalk_1.default.blueBright(`info`);
    if (hasWarning)
        header = chalk_1.default.yellowBright(`warning`);
    if (hasError)
        header = chalk_1.default.yellowBright(`error`);
    header += `   - Loaded GraphCommerce env variables`;
    return [header, ...lines].join('\n');
}
exports.formatAppliedEnv = formatAppliedEnv;
