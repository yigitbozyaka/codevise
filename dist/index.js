/***/ 5915:
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
const fs_1 = __nccwpck_require__(9896);
const core = __importStar(__nccwpck_require__(7484));
const ollama_1 = __nccwpck_require__(2621);
const rest_1 = __nccwpck_require__(5772);
const parse_diff_1 = __importDefault(__nccwpck_require__(2673));
const minimatch_1 = __nccwpck_require__(6507);
const octokit = new rest_1.Octokit({ auth: GITHUB_TOKEN });
/***/ 4914:
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
const os = __importStar(__nccwpck_require__(857));
const utils_1 = __nccwpck_require__(302);
    return (0, utils_1.toCommandValue)(s)
    return (0, utils_1.toCommandValue)(s)
/***/ 7484:
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
exports.platform = exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = exports.markdownSummary = exports.summary = exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
const command_1 = __nccwpck_require__(4914);
const file_command_1 = __nccwpck_require__(4753);
const utils_1 = __nccwpck_require__(302);
const os = __importStar(__nccwpck_require__(857));
const path = __importStar(__nccwpck_require__(6928));
const oidc_utils_1 = __nccwpck_require__(5306);
})(ExitCode || (exports.ExitCode = ExitCode = {}));
    const convertedVal = (0, utils_1.toCommandValue)(val);
        return (0, file_command_1.issueFileCommand)('ENV', (0, file_command_1.prepareKeyValueMessage)(name, val));
    (0, command_1.issueCommand)('set-env', { name }, convertedVal);
    (0, command_1.issueCommand)('add-mask', {}, secret);
        (0, file_command_1.issueFileCommand)('PATH', inputPath);
        (0, command_1.issueCommand)('add-path', {}, inputPath);
        return (0, file_command_1.issueFileCommand)('OUTPUT', (0, file_command_1.prepareKeyValueMessage)(name, value));
    (0, command_1.issueCommand)('set-output', { name }, (0, utils_1.toCommandValue)(value));
    (0, command_1.issue)('echo', enabled ? 'on' : 'off');
    (0, command_1.issueCommand)('debug', {}, message);
    (0, command_1.issueCommand)('error', (0, utils_1.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
    (0, command_1.issueCommand)('warning', (0, utils_1.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
    (0, command_1.issueCommand)('notice', (0, utils_1.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
    (0, command_1.issue)('group', name);
    (0, command_1.issue)('endgroup');
        return (0, file_command_1.issueFileCommand)('STATE', (0, file_command_1.prepareKeyValueMessage)(name, value));
    (0, command_1.issueCommand)('save-state', { name }, (0, utils_1.toCommandValue)(value));
var summary_1 = __nccwpck_require__(1847);
var summary_2 = __nccwpck_require__(1847);
var path_utils_1 = __nccwpck_require__(1976);
/**
 * Platform utilities exports
 */
exports.platform = __importStar(__nccwpck_require__(8968));
/***/ 4753:
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
const crypto = __importStar(__nccwpck_require__(6982));
const fs = __importStar(__nccwpck_require__(9896));
const os = __importStar(__nccwpck_require__(857));
const utils_1 = __nccwpck_require__(302);
    fs.appendFileSync(filePath, `${(0, utils_1.toCommandValue)(message)}${os.EOL}`, {
    const delimiter = `ghadelimiter_${crypto.randomUUID()}`;
    const convertedValue = (0, utils_1.toCommandValue)(value);
/***/ 5306:
const http_client_1 = __nccwpck_require__(4844);
const auth_1 = __nccwpck_require__(4552);
const core_1 = __nccwpck_require__(7484);
                (0, core_1.debug)(`ID token url is ${id_token_url}`);
                (0, core_1.setSecret)(id_token);
/***/ 1976:
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
const path = __importStar(__nccwpck_require__(6928));
/***/ 8968:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDetails = exports.isLinux = exports.isMacOS = exports.isWindows = exports.arch = exports.platform = void 0;
const os_1 = __importDefault(__nccwpck_require__(857));
const exec = __importStar(__nccwpck_require__(5236));
const getWindowsInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const { stdout: version } = yield exec.getExecOutput('powershell -command "(Get-CimInstance -ClassName Win32_OperatingSystem).Version"', undefined, {
        silent: true
    });
    const { stdout: name } = yield exec.getExecOutput('powershell -command "(Get-CimInstance -ClassName Win32_OperatingSystem).Caption"', undefined, {
        silent: true
    });
    return {
        name: name.trim(),
        version: version.trim()
    };
});
const getMacOsInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const { stdout } = yield exec.getExecOutput('sw_vers', undefined, {
        silent: true
    });
    const version = (_b = (_a = stdout.match(/ProductVersion:\s*(.+)/)) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : '';
    const name = (_d = (_c = stdout.match(/ProductName:\s*(.+)/)) === null || _c === void 0 ? void 0 : _c[1]) !== null && _d !== void 0 ? _d : '';
    return {
        name,
        version
    };
});
const getLinuxInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const { stdout } = yield exec.getExecOutput('lsb_release', ['-i', '-r', '-s'], {
        silent: true
    });
    const [name, version] = stdout.trim().split('\n');
    return {
        name,
        version
    };
});
exports.platform = os_1.default.platform();
exports.arch = os_1.default.arch();
exports.isWindows = exports.platform === 'win32';
exports.isMacOS = exports.platform === 'darwin';
exports.isLinux = exports.platform === 'linux';
function getDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        return Object.assign(Object.assign({}, (yield (exports.isWindows
            ? getWindowsInfo()
            : exports.isMacOS
                ? getMacOsInfo()
                : getLinuxInfo()))), { platform: exports.platform,
            arch: exports.arch,
            isWindows: exports.isWindows,
            isMacOS: exports.isMacOS,
            isLinux: exports.isLinux });
    });
}
exports.getDetails = getDetails;
//# sourceMappingURL=platform.js.map

/***/ }),

/***/ 1847:
const os_1 = __nccwpck_require__(857);
const fs_1 = __nccwpck_require__(9896);
/***/ 302:
/***/ 5236:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getExecOutput = exports.exec = void 0;
const string_decoder_1 = __nccwpck_require__(3193);
const tr = __importStar(__nccwpck_require__(6665));
/**
 * Exec a command.
 * Output will be streamed to the live console.
 * Returns promise with return code
 *
 * @param     commandLine        command to execute (can include additional args). Must be correctly escaped.
 * @param     args               optional arguments for tool. Escaping is handled by the lib.
 * @param     options            optional exec options.  See ExecOptions
 * @returns   Promise<number>    exit code
 */
function exec(commandLine, args, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const commandArgs = tr.argStringToArray(commandLine);
        if (commandArgs.length === 0) {
            throw new Error(`Parameter 'commandLine' cannot be null or empty.`);
        }
        // Path to tool to execute should be first arg
        const toolPath = commandArgs[0];
        args = commandArgs.slice(1).concat(args || []);
        const runner = new tr.ToolRunner(toolPath, args, options);
        return runner.exec();
    });
}
exports.exec = exec;
/**
 * Exec a command and get the output.
 * Output will be streamed to the live console.
 * Returns promise with the exit code and collected stdout and stderr
 *
 * @param     commandLine           command to execute (can include additional args). Must be correctly escaped.
 * @param     args                  optional arguments for tool. Escaping is handled by the lib.
 * @param     options               optional exec options.  See ExecOptions
 * @returns   Promise<ExecOutput>   exit code, stdout, and stderr
 */
function getExecOutput(commandLine, args, options) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        let stdout = '';
        let stderr = '';
        //Using string decoder covers the case where a mult-byte character is split
        const stdoutDecoder = new string_decoder_1.StringDecoder('utf8');
        const stderrDecoder = new string_decoder_1.StringDecoder('utf8');
        const originalStdoutListener = (_a = options === null || options === void 0 ? void 0 : options.listeners) === null || _a === void 0 ? void 0 : _a.stdout;
        const originalStdErrListener = (_b = options === null || options === void 0 ? void 0 : options.listeners) === null || _b === void 0 ? void 0 : _b.stderr;
        const stdErrListener = (data) => {
            stderr += stderrDecoder.write(data);
            if (originalStdErrListener) {
                originalStdErrListener(data);
            }
        };
        const stdOutListener = (data) => {
            stdout += stdoutDecoder.write(data);
            if (originalStdoutListener) {
                originalStdoutListener(data);
            }
        };
        const listeners = Object.assign(Object.assign({}, options === null || options === void 0 ? void 0 : options.listeners), { stdout: stdOutListener, stderr: stdErrListener });
        const exitCode = yield exec(commandLine, args, Object.assign(Object.assign({}, options), { listeners }));
        //flush any remaining characters
        stdout += stdoutDecoder.end();
        stderr += stderrDecoder.end();
        return {
            exitCode,
            stdout,
            stderr
        };
    });
}
exports.getExecOutput = getExecOutput;
//# sourceMappingURL=exec.js.map

/***/ }),

/***/ 6665:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.argStringToArray = exports.ToolRunner = void 0;
const os = __importStar(__nccwpck_require__(857));
const events = __importStar(__nccwpck_require__(4434));
const child = __importStar(__nccwpck_require__(5317));
const path = __importStar(__nccwpck_require__(6928));
const io = __importStar(__nccwpck_require__(4994));
const ioUtil = __importStar(__nccwpck_require__(5207));
const timers_1 = __nccwpck_require__(3557);
/* eslint-disable @typescript-eslint/unbound-method */
const IS_WINDOWS = process.platform === 'win32';
/*
 * Class for running command line tools. Handles quoting and arg parsing in a platform agnostic way.
 */
class ToolRunner extends events.EventEmitter {
    constructor(toolPath, args, options) {
        super();
        if (!toolPath) {
            throw new Error("Parameter 'toolPath' cannot be null or empty.");
        }
        this.toolPath = toolPath;
        this.args = args || [];
        this.options = options || {};
    }
    _debug(message) {
        if (this.options.listeners && this.options.listeners.debug) {
            this.options.listeners.debug(message);
        }
    }
    _getCommandString(options, noPrefix) {
        const toolPath = this._getSpawnFileName();
        const args = this._getSpawnArgs(options);
        let cmd = noPrefix ? '' : '[command]'; // omit prefix when piped to a second tool
        if (IS_WINDOWS) {
            // Windows + cmd file
            if (this._isCmdFile()) {
                cmd += toolPath;
                for (const a of args) {
                    cmd += ` ${a}`;
                }
            }
            // Windows + verbatim
            else if (options.windowsVerbatimArguments) {
                cmd += `"${toolPath}"`;
                for (const a of args) {
                    cmd += ` ${a}`;
                }
            }
            // Windows (regular)
            else {
                cmd += this._windowsQuoteCmdArg(toolPath);
                for (const a of args) {
                    cmd += ` ${this._windowsQuoteCmdArg(a)}`;
                }
            }
        }
        else {
            // OSX/Linux - this can likely be improved with some form of quoting.
            // creating processes on Unix is fundamentally different than Windows.
            // on Unix, execvp() takes an arg array.
            cmd += toolPath;
            for (const a of args) {
                cmd += ` ${a}`;
            }
        }
        return cmd;
    }
    _processLineBuffer(data, strBuffer, onLine) {
        try {
            let s = strBuffer + data.toString();
            let n = s.indexOf(os.EOL);
            while (n > -1) {
                const line = s.substring(0, n);
                onLine(line);
                // the rest of the string ...
                s = s.substring(n + os.EOL.length);
                n = s.indexOf(os.EOL);
            }
            return s;
        }
        catch (err) {
            // streaming lines to console is best effort.  Don't fail a build.
            this._debug(`error processing line. Failed with error ${err}`);
            return '';
        }
    }
    _getSpawnFileName() {
        if (IS_WINDOWS) {
            if (this._isCmdFile()) {
                return process.env['COMSPEC'] || 'cmd.exe';
            }
        }
        return this.toolPath;
    }
    _getSpawnArgs(options) {
        if (IS_WINDOWS) {
            if (this._isCmdFile()) {
                let argline = `/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;
                for (const a of this.args) {
                    argline += ' ';
                    argline += options.windowsVerbatimArguments
                        ? a
                        : this._windowsQuoteCmdArg(a);
                }
                argline += '"';
                return [argline];
            }
        }
        return this.args;
    }
    _endsWith(str, end) {
        return str.endsWith(end);
    }
    _isCmdFile() {
        const upperToolPath = this.toolPath.toUpperCase();
        return (this._endsWith(upperToolPath, '.CMD') ||
            this._endsWith(upperToolPath, '.BAT'));
    }
    _windowsQuoteCmdArg(arg) {
        // for .exe, apply the normal quoting rules that libuv applies
        if (!this._isCmdFile()) {
            return this._uvQuoteCmdArg(arg);
        }
        // otherwise apply quoting rules specific to the cmd.exe command line parser.
        // the libuv rules are generic and are not designed specifically for cmd.exe
        // command line parser.
        //
        // for a detailed description of the cmd.exe command line parser, refer to
        // http://stackoverflow.com/questions/4094699/how-does-the-windows-command-interpreter-cmd-exe-parse-scripts/7970912#7970912
        // need quotes for empty arg
        if (!arg) {
            return '""';
        }
        // determine whether the arg needs to be quoted
        const cmdSpecialChars = [
            ' ',
            '\t',
            '&',
            '(',
            ')',
            '[',
            ']',
            '{',
            '}',
            '^',
            '=',
            ';',
            '!',
            "'",
            '+',
            ',',
            '`',
            '~',
            '|',
            '<',
            '>',
            '"'
        ];
        let needsQuotes = false;
        for (const char of arg) {
            if (cmdSpecialChars.some(x => x === char)) {
                needsQuotes = true;
                break;
            }
        }
        // short-circuit if quotes not needed
        if (!needsQuotes) {
            return arg;
        }
        // the following quoting rules are very similar to the rules that by libuv applies.
        //
        // 1) wrap the string in quotes
        //
        // 2) double-up quotes - i.e. " => ""
        //
        //    this is different from the libuv quoting rules. libuv replaces " with \", which unfortunately
        //    doesn't work well with a cmd.exe command line.
        //
        //    note, replacing " with "" also works well if the arg is passed to a downstream .NET console app.
        //    for example, the command line:
        //          foo.exe "myarg:""my val"""
        //    is parsed by a .NET console app into an arg array:
        //          [ "myarg:\"my val\"" ]
        //    which is the same end result when applying libuv quoting rules. although the actual
        //    command line from libuv quoting rules would look like:
        //          foo.exe "myarg:\"my val\""
        //
        // 3) double-up slashes that precede a quote,
        //    e.g.  hello \world    => "hello \world"
        //          hello\"world    => "hello\\""world"
        //          hello\\"world   => "hello\\\\""world"
        //          hello world\    => "hello world\\"
        //
        //    technically this is not required for a cmd.exe command line, or the batch argument parser.
        //    the reasons for including this as a .cmd quoting rule are:
        //
        //    a) this is optimized for the scenario where the argument is passed from the .cmd file to an
        //       external program. many programs (e.g. .NET console apps) rely on the slash-doubling rule.
        //
        //    b) it's what we've been doing previously (by deferring to node default behavior) and we
        //       haven't heard any complaints about that aspect.
        //
        // note, a weakness of the quoting rules chosen here, is that % is not escaped. in fact, % cannot be
        // escaped when used on the command line directly - even though within a .cmd file % can be escaped
        // by using %%.
        //
        // the saving grace is, on the command line, %var% is left as-is if var is not defined. this contrasts
        // the line parsing rules within a .cmd file, where if var is not defined it is replaced with nothing.
        //
        // one option that was explored was replacing % with ^% - i.e. %var% => ^%var^%. this hack would
        // often work, since it is unlikely that var^ would exist, and the ^ character is removed when the
        // variable is used. the problem, however, is that ^ is not removed when %* is used to pass the args
        // to an external program.
        //
        // an unexplored potential solution for the % escaping problem, is to create a wrapper .cmd file.
        // % can be escaped within a .cmd file.
        let reverse = '"';
        let quoteHit = true;
        for (let i = arg.length; i > 0; i--) {
            // walk the string in reverse
            reverse += arg[i - 1];
            if (quoteHit && arg[i - 1] === '\\') {
                reverse += '\\'; // double the slash
            }
            else if (arg[i - 1] === '"') {
                quoteHit = true;
                reverse += '"'; // double the quote
            }
            else {
                quoteHit = false;
            }
        }
        reverse += '"';
        return reverse
            .split('')
            .reverse()
            .join('');
    }
    _uvQuoteCmdArg(arg) {
        // Tool runner wraps child_process.spawn() and needs to apply the same quoting as
        // Node in certain cases where the undocumented spawn option windowsVerbatimArguments
        // is used.
        //
        // Since this function is a port of quote_cmd_arg from Node 4.x (technically, lib UV,
        // see https://github.com/nodejs/node/blob/v4.x/deps/uv/src/win/process.c for details),
        // pasting copyright notice from Node within this function:
        //
        //      Copyright Joyent, Inc. and other Node contributors. All rights reserved.
        //
        //      Permission is hereby granted, free of charge, to any person obtaining a copy
        //      of this software and associated documentation files (the "Software"), to
        //      deal in the Software without restriction, including without limitation the
        //      rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
        //      sell copies of the Software, and to permit persons to whom the Software is
        //      furnished to do so, subject to the following conditions:
        //
        //      The above copyright notice and this permission notice shall be included in
        //      all copies or substantial portions of the Software.
        //
        //      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        //      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        //      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        //      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        //      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
        //      FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
        //      IN THE SOFTWARE.
        if (!arg) {
            // Need double quotation for empty argument
            return '""';
        }
        if (!arg.includes(' ') && !arg.includes('\t') && !arg.includes('"')) {
            // No quotation needed
            return arg;
        }
        if (!arg.includes('"') && !arg.includes('\\')) {
            // No embedded double quotes or backslashes, so I can just wrap
            // quote marks around the whole thing.
            return `"${arg}"`;
        }
        // Expected input/output:
        //   input : hello"world
        //   output: "hello\"world"
        //   input : hello""world
        //   output: "hello\"\"world"
        //   input : hello\world
        //   output: hello\world
        //   input : hello\\world
        //   output: hello\\world
        //   input : hello\"world
        //   output: "hello\\\"world"
        //   input : hello\\"world
        //   output: "hello\\\\\"world"
        //   input : hello world\
        //   output: "hello world\\" - note the comment in libuv actually reads "hello world\"
        //                             but it appears the comment is wrong, it should be "hello world\\"
        let reverse = '"';
        let quoteHit = true;
        for (let i = arg.length; i > 0; i--) {
            // walk the string in reverse
            reverse += arg[i - 1];
            if (quoteHit && arg[i - 1] === '\\') {
                reverse += '\\';
            }
            else if (arg[i - 1] === '"') {
                quoteHit = true;
                reverse += '\\';
            }
            else {
                quoteHit = false;
            }
        }
        reverse += '"';
        return reverse
            .split('')
            .reverse()
            .join('');
    }
    _cloneExecOptions(options) {
        options = options || {};
        const result = {
            cwd: options.cwd || process.cwd(),
            env: options.env || process.env,
            silent: options.silent || false,
            windowsVerbatimArguments: options.windowsVerbatimArguments || false,
            failOnStdErr: options.failOnStdErr || false,
            ignoreReturnCode: options.ignoreReturnCode || false,
            delay: options.delay || 10000
        };
        result.outStream = options.outStream || process.stdout;
        result.errStream = options.errStream || process.stderr;
        return result;
    }
    _getSpawnOptions(options, toolPath) {
        options = options || {};
        const result = {};
        result.cwd = options.cwd;
        result.env = options.env;
        result['windowsVerbatimArguments'] =
            options.windowsVerbatimArguments || this._isCmdFile();
        if (options.windowsVerbatimArguments) {
            result.argv0 = `"${toolPath}"`;
        }
        return result;
    }
    /**
     * Exec a tool.
     * Output will be streamed to the live console.
     * Returns promise with return code
     *
     * @param     tool     path to tool to exec
     * @param     options  optional exec options.  See ExecOptions
     * @returns   number
     */
    exec() {
        return __awaiter(this, void 0, void 0, function* () {
            // root the tool path if it is unrooted and contains relative pathing
            if (!ioUtil.isRooted(this.toolPath) &&
                (this.toolPath.includes('/') ||
                    (IS_WINDOWS && this.toolPath.includes('\\')))) {
                // prefer options.cwd if it is specified, however options.cwd may also need to be rooted
                this.toolPath = path.resolve(process.cwd(), this.options.cwd || process.cwd(), this.toolPath);
            }
            // if the tool is only a file name, then resolve it from the PATH
            // otherwise verify it exists (add extension on Windows if necessary)
            this.toolPath = yield io.which(this.toolPath, true);
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                this._debug(`exec tool: ${this.toolPath}`);
                this._debug('arguments:');
                for (const arg of this.args) {
                    this._debug(`   ${arg}`);
                }
                const optionsNonNull = this._cloneExecOptions(this.options);
                if (!optionsNonNull.silent && optionsNonNull.outStream) {
                    optionsNonNull.outStream.write(this._getCommandString(optionsNonNull) + os.EOL);
                }
                const state = new ExecState(optionsNonNull, this.toolPath);
                state.on('debug', (message) => {
                    this._debug(message);
                });
                if (this.options.cwd && !(yield ioUtil.exists(this.options.cwd))) {
                    return reject(new Error(`The cwd: ${this.options.cwd} does not exist!`));
                }
                const fileName = this._getSpawnFileName();
                const cp = child.spawn(fileName, this._getSpawnArgs(optionsNonNull), this._getSpawnOptions(this.options, fileName));
                let stdbuffer = '';
                if (cp.stdout) {
                    cp.stdout.on('data', (data) => {
                        if (this.options.listeners && this.options.listeners.stdout) {
                            this.options.listeners.stdout(data);
                        }
                        if (!optionsNonNull.silent && optionsNonNull.outStream) {
                            optionsNonNull.outStream.write(data);
                        }
                        stdbuffer = this._processLineBuffer(data, stdbuffer, (line) => {
                            if (this.options.listeners && this.options.listeners.stdline) {
                                this.options.listeners.stdline(line);
                            }
                        });
                    });
                }
                let errbuffer = '';
                if (cp.stderr) {
                    cp.stderr.on('data', (data) => {
                        state.processStderr = true;
                        if (this.options.listeners && this.options.listeners.stderr) {
                            this.options.listeners.stderr(data);
                        }
                        if (!optionsNonNull.silent &&
                            optionsNonNull.errStream &&
                            optionsNonNull.outStream) {
                            const s = optionsNonNull.failOnStdErr
                                ? optionsNonNull.errStream
                                : optionsNonNull.outStream;
                            s.write(data);
                        }
                        errbuffer = this._processLineBuffer(data, errbuffer, (line) => {
                            if (this.options.listeners && this.options.listeners.errline) {
                                this.options.listeners.errline(line);
                            }
                        });
                    });
                }
                cp.on('error', (err) => {
                    state.processError = err.message;
                    state.processExited = true;
                    state.processClosed = true;
                    state.CheckComplete();
                });
                cp.on('exit', (code) => {
                    state.processExitCode = code;
                    state.processExited = true;
                    this._debug(`Exit code ${code} received from tool '${this.toolPath}'`);
                    state.CheckComplete();
                });
                cp.on('close', (code) => {
                    state.processExitCode = code;
                    state.processExited = true;
                    state.processClosed = true;
                    this._debug(`STDIO streams have closed for tool '${this.toolPath}'`);
                    state.CheckComplete();
                });
                state.on('done', (error, exitCode) => {
                    if (stdbuffer.length > 0) {
                        this.emit('stdline', stdbuffer);
                    }
                    if (errbuffer.length > 0) {
                        this.emit('errline', errbuffer);
                    }
                    cp.removeAllListeners();
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(exitCode);
                    }
                });
                if (this.options.input) {
                    if (!cp.stdin) {
                        throw new Error('child process missing stdin');
                    }
                    cp.stdin.end(this.options.input);
                }
            }));
        });
    }
}
exports.ToolRunner = ToolRunner;
/**
 * Convert an arg string to an array of args. Handles escaping
 *
 * @param    argString   string of arguments
 * @returns  string[]    array of arguments
 */
function argStringToArray(argString) {
    const args = [];
    let inQuotes = false;
    let escaped = false;
    let arg = '';
    function append(c) {
        // we only escape double quotes.
        if (escaped && c !== '"') {
            arg += '\\';
        }
        arg += c;
        escaped = false;
    }
    for (let i = 0; i < argString.length; i++) {
        const c = argString.charAt(i);
        if (c === '"') {
            if (!escaped) {
                inQuotes = !inQuotes;
            }
            else {
                append(c);
            }
            continue;
        }
        if (c === '\\' && escaped) {
            append(c);
            continue;
        }
        if (c === '\\' && inQuotes) {
            escaped = true;
            continue;
        }
        if (c === ' ' && !inQuotes) {
            if (arg.length > 0) {
                args.push(arg);
                arg = '';
            }
            continue;
        }
        append(c);
    }
    if (arg.length > 0) {
        args.push(arg.trim());
    }
    return args;
}
exports.argStringToArray = argStringToArray;
class ExecState extends events.EventEmitter {
    constructor(options, toolPath) {
        super();
        this.processClosed = false; // tracks whether the process has exited and stdio is closed
        this.processError = '';
        this.processExitCode = 0;
        this.processExited = false; // tracks whether the process has exited
        this.processStderr = false; // tracks whether stderr was written to
        this.delay = 10000; // 10 seconds
        this.done = false;
        this.timeout = null;
        if (!toolPath) {
            throw new Error('toolPath must not be empty');
        }
        this.options = options;
        this.toolPath = toolPath;
        if (options.delay) {
            this.delay = options.delay;
        }
    }
    CheckComplete() {
        if (this.done) {
            return;
        }
        if (this.processClosed) {
            this._setResult();
        }
        else if (this.processExited) {
            this.timeout = timers_1.setTimeout(ExecState.HandleTimeout, this.delay, this);
        }
    }
    _debug(message) {
        this.emit('debug', message);
    }
    _setResult() {
        // determine whether there is an error
        let error;
        if (this.processExited) {
            if (this.processError) {
                error = new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`);
            }
            else if (this.processExitCode !== 0 && !this.options.ignoreReturnCode) {
                error = new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`);
            }
            else if (this.processStderr && this.options.failOnStdErr) {
                error = new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`);
            }
        }
        // clear the timeout
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        this.done = true;
        this.emit('done', error, this.processExitCode);
    }
    static HandleTimeout(state) {
        if (state.done) {
            return;
        }
        if (!state.processClosed && state.processExited) {
            const message = `The STDIO streams did not close within ${state.delay /
                1000} seconds of the exit event from process '${state.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;
            state._debug(message);
        }
        state._setResult();
    }
}
//# sourceMappingURL=toolrunner.js.map

/***/ }),

/***/ 4552:
/***/ 4844:
const http = __importStar(__nccwpck_require__(8611));
const https = __importStar(__nccwpck_require__(5692));
const pm = __importStar(__nccwpck_require__(4988));
const tunnel = __importStar(__nccwpck_require__(770));
const undici_1 = __nccwpck_require__(6752);
            token: `Basic ${Buffer.from(`${proxyUrl.username}:${proxyUrl.password}`).toString('base64')}`
/***/ 4988:
            return new DecodedURL(proxyVar);
                return new DecodedURL(`http://${proxyVar}`);
class DecodedURL extends URL {
    constructor(url, base) {
        super(url, base);
        this._decodedUsername = decodeURIComponent(super.username);
        this._decodedPassword = decodeURIComponent(super.password);
    }
    get username() {
        return this._decodedUsername;
    }
    get password() {
        return this._decodedPassword;
    }
}
/***/ 5207:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCmdPath = exports.tryGetExecutablePath = exports.isRooted = exports.isDirectory = exports.exists = exports.READONLY = exports.UV_FS_O_EXLOCK = exports.IS_WINDOWS = exports.unlink = exports.symlink = exports.stat = exports.rmdir = exports.rm = exports.rename = exports.readlink = exports.readdir = exports.open = exports.mkdir = exports.lstat = exports.copyFile = exports.chmod = void 0;
const fs = __importStar(__nccwpck_require__(9896));
const path = __importStar(__nccwpck_require__(6928));
_a = fs.promises
// export const {open} = 'fs'
, exports.chmod = _a.chmod, exports.copyFile = _a.copyFile, exports.lstat = _a.lstat, exports.mkdir = _a.mkdir, exports.open = _a.open, exports.readdir = _a.readdir, exports.readlink = _a.readlink, exports.rename = _a.rename, exports.rm = _a.rm, exports.rmdir = _a.rmdir, exports.stat = _a.stat, exports.symlink = _a.symlink, exports.unlink = _a.unlink;
// export const {open} = 'fs'
exports.IS_WINDOWS = process.platform === 'win32';
// See https://github.com/nodejs/node/blob/d0153aee367422d0858105abec186da4dff0a0c5/deps/uv/include/uv/win.h#L691
exports.UV_FS_O_EXLOCK = 0x10000000;
exports.READONLY = fs.constants.O_RDONLY;
function exists(fsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.stat(fsPath);
        }
        catch (err) {
            if (err.code === 'ENOENT') {
                return false;
            }
            throw err;
        }
        return true;
    });
}
exports.exists = exists;
function isDirectory(fsPath, useStat = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const stats = useStat ? yield exports.stat(fsPath) : yield exports.lstat(fsPath);
        return stats.isDirectory();
    });
}
exports.isDirectory = isDirectory;
/**
 * On OSX/Linux, true if path starts with '/'. On Windows, true for paths like:
 * \, \hello, \\hello\share, C:, and C:\hello (and corresponding alternate separator cases).
 */
function isRooted(p) {
    p = normalizeSeparators(p);
    if (!p) {
        throw new Error('isRooted() parameter "p" cannot be empty');
    }
    if (exports.IS_WINDOWS) {
        return (p.startsWith('\\') || /^[A-Z]:/i.test(p) // e.g. \ or \hello or \\hello
        ); // e.g. C: or C:\hello
    }
    return p.startsWith('/');
}
exports.isRooted = isRooted;
/**
 * Best effort attempt to determine whether a file exists and is executable.
 * @param filePath    file path to check
 * @param extensions  additional file extensions to try
 * @return if file exists and is executable, returns the file path. otherwise empty string.
 */
function tryGetExecutablePath(filePath, extensions) {
    return __awaiter(this, void 0, void 0, function* () {
        let stats = undefined;
        try {
            // test file exists
            stats = yield exports.stat(filePath);
        }
        catch (err) {
            if (err.code !== 'ENOENT') {
                // eslint-disable-next-line no-console
                console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
            }
        }
        if (stats && stats.isFile()) {
            if (exports.IS_WINDOWS) {
                // on Windows, test for valid extension
                const upperExt = path.extname(filePath).toUpperCase();
                if (extensions.some(validExt => validExt.toUpperCase() === upperExt)) {
                    return filePath;
                }
            }
            else {
                if (isUnixExecutable(stats)) {
                    return filePath;
                }
            }
        }
        // try each extension
        const originalFilePath = filePath;
        for (const extension of extensions) {
            filePath = originalFilePath + extension;
            stats = undefined;
            try {
                stats = yield exports.stat(filePath);
            }
            catch (err) {
                if (err.code !== 'ENOENT') {
                    // eslint-disable-next-line no-console
                    console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
                }
            }
            if (stats && stats.isFile()) {
                if (exports.IS_WINDOWS) {
                    // preserve the case of the actual file (since an extension was appended)
                    try {
                        const directory = path.dirname(filePath);
                        const upperName = path.basename(filePath).toUpperCase();
                        for (const actualName of yield exports.readdir(directory)) {
                            if (upperName === actualName.toUpperCase()) {
                                filePath = path.join(directory, actualName);
                                break;
                            }
                        }
                    }
                    catch (err) {
                        // eslint-disable-next-line no-console
                        console.log(`Unexpected error attempting to determine the actual case of the file '${filePath}': ${err}`);
                    }
                    return filePath;
                }
                else {
                    if (isUnixExecutable(stats)) {
                        return filePath;
                    }
                }
            }
        }
        return '';
    });
}
exports.tryGetExecutablePath = tryGetExecutablePath;
function normalizeSeparators(p) {
    p = p || '';
    if (exports.IS_WINDOWS) {
        // convert slashes on Windows
        p = p.replace(/\//g, '\\');
        // remove redundant slashes
        return p.replace(/\\\\+/g, '\\');
    }
    // remove redundant slashes
    return p.replace(/\/\/+/g, '/');
}
// on Mac/Linux, test the execute bit
//     R   W  X  R  W X R W X
//   256 128 64 32 16 8 4 2 1
function isUnixExecutable(stats) {
    return ((stats.mode & 1) > 0 ||
        ((stats.mode & 8) > 0 && stats.gid === process.getgid()) ||
        ((stats.mode & 64) > 0 && stats.uid === process.getuid()));
}
// Get the path of cmd.exe in windows
function getCmdPath() {
    var _a;
    return (_a = process.env['COMSPEC']) !== null && _a !== void 0 ? _a : `cmd.exe`;
}
exports.getCmdPath = getCmdPath;
//# sourceMappingURL=io-util.js.map

/***/ }),

/***/ 4994:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.findInPath = exports.which = exports.mkdirP = exports.rmRF = exports.mv = exports.cp = void 0;
const assert_1 = __nccwpck_require__(2613);
const path = __importStar(__nccwpck_require__(6928));
const ioUtil = __importStar(__nccwpck_require__(5207));
/**
 * Copies a file or folder.
 * Based off of shelljs - https://github.com/shelljs/shelljs/blob/9237f66c52e5daa40458f94f9565e18e8132f5a6/src/cp.js
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See CopyOptions.
 */
function cp(source, dest, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const { force, recursive, copySourceDirectory } = readCopyOptions(options);
        const destStat = (yield ioUtil.exists(dest)) ? yield ioUtil.stat(dest) : null;
        // Dest is an existing file, but not forcing
        if (destStat && destStat.isFile() && !force) {
            return;
        }
        // If dest is an existing directory, should copy inside.
        const newDest = destStat && destStat.isDirectory() && copySourceDirectory
            ? path.join(dest, path.basename(source))
            : dest;
        if (!(yield ioUtil.exists(source))) {
            throw new Error(`no such file or directory: ${source}`);
        }
        const sourceStat = yield ioUtil.stat(source);
        if (sourceStat.isDirectory()) {
            if (!recursive) {
                throw new Error(`Failed to copy. ${source} is a directory, but tried to copy without recursive flag.`);
            }
            else {
                yield cpDirRecursive(source, newDest, 0, force);
            }
        }
        else {
            if (path.relative(source, newDest) === '') {
                // a file cannot be copied to itself
                throw new Error(`'${newDest}' and '${source}' are the same file`);
            }
            yield copyFile(source, newDest, force);
        }
    });
}
exports.cp = cp;
/**
 * Moves a path.
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See MoveOptions.
 */
function mv(source, dest, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        if (yield ioUtil.exists(dest)) {
            let destExists = true;
            if (yield ioUtil.isDirectory(dest)) {
                // If dest is directory copy src into dest
                dest = path.join(dest, path.basename(source));
                destExists = yield ioUtil.exists(dest);
            }
            if (destExists) {
                if (options.force == null || options.force) {
                    yield rmRF(dest);
                }
                else {
                    throw new Error('Destination already exists');
                }
            }
        }
        yield mkdirP(path.dirname(dest));
        yield ioUtil.rename(source, dest);
    });
}
exports.mv = mv;
/**
 * Remove a path recursively with force
 *
 * @param inputPath path to remove
 */
function rmRF(inputPath) {
    return __awaiter(this, void 0, void 0, function* () {
        if (ioUtil.IS_WINDOWS) {
            // Check for invalid characters
            // https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file
            if (/[*"<>|]/.test(inputPath)) {
                throw new Error('File path must not contain `*`, `"`, `<`, `>` or `|` on Windows');
            }
        }
        try {
            // note if path does not exist, error is silent
            yield ioUtil.rm(inputPath, {
                force: true,
                maxRetries: 3,
                recursive: true,
                retryDelay: 300
            });
        }
        catch (err) {
            throw new Error(`File was unable to be removed ${err}`);
        }
    });
}
exports.rmRF = rmRF;
/**
 * Make a directory.  Creates the full path with folders in between
 * Will throw if it fails
 *
 * @param   fsPath        path to create
 * @returns Promise<void>
 */
function mkdirP(fsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        assert_1.ok(fsPath, 'a path argument must be provided');
        yield ioUtil.mkdir(fsPath, { recursive: true });
    });
}
exports.mkdirP = mkdirP;
/**
 * Returns path of a tool had the tool actually been invoked.  Resolves via paths.
 * If you check and the tool does not exist, it will throw.
 *
 * @param     tool              name of the tool
 * @param     check             whether to check if tool exists
 * @returns   Promise<string>   path to tool
 */
function which(tool, check) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tool) {
            throw new Error("parameter 'tool' is required");
        }
        // recursive when check=true
        if (check) {
            const result = yield which(tool, false);
            if (!result) {
                if (ioUtil.IS_WINDOWS) {
                    throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`);
                }
                else {
                    throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`);
                }
            }
            return result;
        }
        const matches = yield findInPath(tool);
        if (matches && matches.length > 0) {
            return matches[0];
        }
        return '';
    });
}
exports.which = which;
/**
 * Returns a list of all occurrences of the given tool on the system path.
 *
 * @returns   Promise<string[]>  the paths of the tool
 */
function findInPath(tool) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tool) {
            throw new Error("parameter 'tool' is required");
        }
        // build the list of extensions to try
        const extensions = [];
        if (ioUtil.IS_WINDOWS && process.env['PATHEXT']) {
            for (const extension of process.env['PATHEXT'].split(path.delimiter)) {
                if (extension) {
                    extensions.push(extension);
                }
            }
        }
        // if it's rooted, return it if exists. otherwise return empty.
        if (ioUtil.isRooted(tool)) {
            const filePath = yield ioUtil.tryGetExecutablePath(tool, extensions);
            if (filePath) {
                return [filePath];
            }
            return [];
        }
        // if any path separators, return empty
        if (tool.includes(path.sep)) {
            return [];
        }
        // build the list of directories
        //
        // Note, technically "where" checks the current directory on Windows. From a toolkit perspective,
        // it feels like we should not do this. Checking the current directory seems like more of a use
        // case of a shell, and the which() function exposed by the toolkit should strive for consistency
        // across platforms.
        const directories = [];
        if (process.env.PATH) {
            for (const p of process.env.PATH.split(path.delimiter)) {
                if (p) {
                    directories.push(p);
                }
            }
        }
        // find all matches
        const matches = [];
        for (const directory of directories) {
            const filePath = yield ioUtil.tryGetExecutablePath(path.join(directory, tool), extensions);
            if (filePath) {
                matches.push(filePath);
            }
        }
        return matches;
    });
}
exports.findInPath = findInPath;
function readCopyOptions(options) {
    const force = options.force == null ? true : options.force;
    const recursive = Boolean(options.recursive);
    const copySourceDirectory = options.copySourceDirectory == null
        ? true
        : Boolean(options.copySourceDirectory);
    return { force, recursive, copySourceDirectory };
}
function cpDirRecursive(sourceDir, destDir, currentDepth, force) {
    return __awaiter(this, void 0, void 0, function* () {
        // Ensure there is not a run away recursive copy
        if (currentDepth >= 255)
            return;
        currentDepth++;
        yield mkdirP(destDir);
        const files = yield ioUtil.readdir(sourceDir);
        for (const fileName of files) {
            const srcFile = `${sourceDir}/${fileName}`;
            const destFile = `${destDir}/${fileName}`;
            const srcFileStat = yield ioUtil.lstat(srcFile);
            if (srcFileStat.isDirectory()) {
                // Recurse
                yield cpDirRecursive(srcFile, destFile, currentDepth, force);
            }
            else {
                yield copyFile(srcFile, destFile, force);
            }
        }
        // Change the mode for the newly created directory
        yield ioUtil.chmod(destDir, (yield ioUtil.stat(sourceDir)).mode);
    });
}
// Buffered file copy
function copyFile(srcFile, destFile, force) {
    return __awaiter(this, void 0, void 0, function* () {
        if ((yield ioUtil.lstat(srcFile)).isSymbolicLink()) {
            // unlink/re-link it
            try {
                yield ioUtil.lstat(destFile);
                yield ioUtil.unlink(destFile);
            }
            catch (e) {
                // Try to override file permission
                if (e.code === 'EPERM') {
                    yield ioUtil.chmod(destFile, '0666');
                    yield ioUtil.unlink(destFile);
                }
                // other errors = it doesn't exist, no work to do
            }
            // Copy over symlink
            const symlinkFull = yield ioUtil.readlink(srcFile);
            yield ioUtil.symlink(symlinkFull, destFile, ioUtil.IS_WINDOWS ? 'junction' : null);
        }
        else if (!(yield ioUtil.exists(destFile)) || force) {
            yield ioUtil.copyFile(srcFile, destFile);
        }
    });
}
//# sourceMappingURL=io.js.map

/***/ }),

/***/ 7864:
/***/ 1897:
var import_universal_user_agent = __nccwpck_require__(3843);
var import_before_after_hook = __nccwpck_require__(2732);
var import_request = __nccwpck_require__(8636);
var import_graphql = __nccwpck_require__(7);
var import_auth_token = __nccwpck_require__(7864);
var VERSION = "5.2.0";
/***/ 4471:
var import_universal_user_agent = __nccwpck_require__(3843);
var VERSION = "9.0.5";
/***/ 7:
var import_request3 = __nccwpck_require__(8636);
var import_universal_user_agent = __nccwpck_require__(3843);
var VERSION = "7.1.0";
var import_request2 = __nccwpck_require__(8636);
var import_request = __nccwpck_require__(8636);
/***/ 8082:
var VERSION = "11.3.1";
  "GET /enterprises/{enterprise}/copilot/usage",
  "GET /orgs/{org}/copilot/usage",
  "GET /orgs/{org}/team/{team_slug}/copilot/usage",
  "GET /repos/{owner}/{repo}/environments/{environment_name}/secrets",
  "GET /repos/{owner}/{repo}/environments/{environment_name}/variables",
/***/ 6966:
/***/ 4935:
var VERSION = "13.2.2";
      "POST /repos/{owner}/{repo}/environments/{environment_name}/variables"
      "PUT /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"
      "GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/public-key"
      "GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"
      "GET /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"
      "GET /repos/{owner}/{repo}/environments/{environment_name}/secrets"
      "GET /repos/{owner}/{repo}/environments/{environment_name}/variables"
      "PATCH /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"
    listCopilotSeats: ["GET /orgs/{org}/copilot/billing/seats"],
    usageMetricsForEnterprise: ["GET /enterprises/{enterprise}/copilot/usage"],
    usageMetricsForOrg: ["GET /orgs/{org}/copilot/usage"],
    usageMetricsForTeam: ["GET /orgs/{org}/team/{team_slug}/copilot/usage"]
    checkPrivateVulnerabilityReporting: [
      "GET /repos/{owner}/{repo}/private-vulnerability-reporting"
    ],
/***/ 3708:
var import_deprecation = __nccwpck_require__(4150);
var import_once = __toESM(__nccwpck_require__(5560));
/***/ 8636:
var import_endpoint = __nccwpck_require__(4471);
var import_universal_user_agent = __nccwpck_require__(3843);
var VERSION = "8.4.0";
var import_request_error = __nccwpck_require__(3708);
  var _a, _b, _c, _d;
    redirect: (_c = requestOptions.request) == null ? void 0 : _c.redirect,
    signal: (_d = requestOptions.request) == null ? void 0 : _d.signal,
/***/ 5772:
var import_core = __nccwpck_require__(1897);
var import_plugin_request_log = __nccwpck_require__(6966);
var import_plugin_paginate_rest = __nccwpck_require__(8082);
var import_plugin_rest_endpoint_methods = __nccwpck_require__(4935);
var VERSION = "20.1.1";
/***/ 9380:
/***/ 2732:
var register = __nccwpck_require__(1063);
var addHook = __nccwpck_require__(2027);
var removeHook = __nccwpck_require__(9934);
/***/ 2027:
/***/ 1063:
/***/ 9934:
/***/ 4691:
var balanced = __nccwpck_require__(9380);
/***/ 4150:
/***/ 5560:
var wrappy = __nccwpck_require__(8264)
/***/ 2673:
/***/ 770:
module.exports = __nccwpck_require__(218);
/***/ 218:
var net = __nccwpck_require__(9278);
var tls = __nccwpck_require__(4756);
var http = __nccwpck_require__(8611);
var https = __nccwpck_require__(5692);
var events = __nccwpck_require__(4434);
var assert = __nccwpck_require__(2613);
var util = __nccwpck_require__(9023);
/***/ 6752:
const Client = __nccwpck_require__(6197)
const Dispatcher = __nccwpck_require__(992)
const errors = __nccwpck_require__(8707)
const Pool = __nccwpck_require__(5076)
const BalancedPool = __nccwpck_require__(1093)
const Agent = __nccwpck_require__(9965)
const util = __nccwpck_require__(3440)
const api = __nccwpck_require__(6615)
const buildConnector = __nccwpck_require__(9136)
const MockClient = __nccwpck_require__(7365)
const MockAgent = __nccwpck_require__(7501)
const MockPool = __nccwpck_require__(4004)
const mockErrors = __nccwpck_require__(2429)
const ProxyAgent = __nccwpck_require__(2720)
const RetryHandler = __nccwpck_require__(3573)
const { getGlobalDispatcher, setGlobalDispatcher } = __nccwpck_require__(2581)
const DecoratorHandler = __nccwpck_require__(8840)
const RedirectHandler = __nccwpck_require__(8299)
const createRedirectInterceptor = __nccwpck_require__(4415)
  __nccwpck_require__(6982)
      fetchImpl = (__nccwpck_require__(2315).fetch)
  module.exports.Headers = __nccwpck_require__(6349).Headers
  module.exports.Response = __nccwpck_require__(8676).Response
  module.exports.Request = __nccwpck_require__(5194).Request
  module.exports.FormData = __nccwpck_require__(3073).FormData
  module.exports.File = __nccwpck_require__(3041).File
  module.exports.FileReader = __nccwpck_require__(2160).FileReader
  const { setGlobalOrigin, getGlobalOrigin } = __nccwpck_require__(5628)
  const { CacheStorage } = __nccwpck_require__(4738)
  const { kConstruct } = __nccwpck_require__(296)
  const { deleteCookie, getCookies, getSetCookies, setCookie } = __nccwpck_require__(3168)
  const { parseMIMEType, serializeAMimeType } = __nccwpck_require__(4322)
  const { WebSocket } = __nccwpck_require__(5171)
/***/ 9965:
const { InvalidArgumentError } = __nccwpck_require__(8707)
const { kClients, kRunning, kClose, kDestroy, kDispatch, kInterceptors } = __nccwpck_require__(6443)
const DispatcherBase = __nccwpck_require__(1)
const Pool = __nccwpck_require__(5076)
const Client = __nccwpck_require__(6197)
const util = __nccwpck_require__(3440)
const createRedirectInterceptor = __nccwpck_require__(4415)
const { WeakRef, FinalizationRegistry } = __nccwpck_require__(3194)()
/***/ 158:
const { addAbortListener } = __nccwpck_require__(3440)
const { RequestAbortedError } = __nccwpck_require__(8707)
/***/ 4660:
const { AsyncResource } = __nccwpck_require__(290)
const { InvalidArgumentError, RequestAbortedError, SocketError } = __nccwpck_require__(8707)
const util = __nccwpck_require__(3440)
const { addSignal, removeSignal } = __nccwpck_require__(158)
/***/ 6862:
} = __nccwpck_require__(2203)
} = __nccwpck_require__(8707)
const util = __nccwpck_require__(3440)
const { AsyncResource } = __nccwpck_require__(290)
const { addSignal, removeSignal } = __nccwpck_require__(158)
const assert = __nccwpck_require__(2613)
/***/ 4043:
const Readable = __nccwpck_require__(9927)
} = __nccwpck_require__(8707)
const util = __nccwpck_require__(3440)
const { getResolveErrorBodyCallback } = __nccwpck_require__(7655)
const { AsyncResource } = __nccwpck_require__(290)
const { addSignal, removeSignal } = __nccwpck_require__(158)
/***/ 3560:
const { finished, PassThrough } = __nccwpck_require__(2203)
} = __nccwpck_require__(8707)
const util = __nccwpck_require__(3440)
const { getResolveErrorBodyCallback } = __nccwpck_require__(7655)
const { AsyncResource } = __nccwpck_require__(290)
const { addSignal, removeSignal } = __nccwpck_require__(158)
/***/ 1882:
const { InvalidArgumentError, RequestAbortedError, SocketError } = __nccwpck_require__(8707)
const { AsyncResource } = __nccwpck_require__(290)
const util = __nccwpck_require__(3440)
const { addSignal, removeSignal } = __nccwpck_require__(158)
const assert = __nccwpck_require__(2613)
/***/ 6615:
module.exports.request = __nccwpck_require__(4043)
module.exports.stream = __nccwpck_require__(3560)
module.exports.pipeline = __nccwpck_require__(6862)
module.exports.upgrade = __nccwpck_require__(1882)
module.exports.connect = __nccwpck_require__(4660)
/***/ 9927:
const assert = __nccwpck_require__(2613)
const { Readable } = __nccwpck_require__(2203)
const { RequestAbortedError, NotSupportedError, InvalidArgumentError } = __nccwpck_require__(8707)
const util = __nccwpck_require__(3440)
const { ReadableStreamFrom, toUSVString } = __nccwpck_require__(3440)
        Blob = (__nccwpck_require__(181).Blob)
/***/ 7655:
const assert = __nccwpck_require__(2613)
} = __nccwpck_require__(8707)
const { toUSVString } = __nccwpck_require__(3440)
/***/ 1093:
} = __nccwpck_require__(8707)
} = __nccwpck_require__(8640)
const Pool = __nccwpck_require__(5076)
const { kUrl, kInterceptors } = __nccwpck_require__(6443)
const { parseOrigin } = __nccwpck_require__(3440)
/***/ 479:
const { kConstruct } = __nccwpck_require__(296)
const { urlEquals, fieldValues: getFieldValues } = __nccwpck_require__(3993)
const { kEnumerableProperty, isDisturbed } = __nccwpck_require__(3440)
const { kHeadersList } = __nccwpck_require__(6443)
const { webidl } = __nccwpck_require__(4222)
const { Response, cloneResponse } = __nccwpck_require__(8676)
const { Request } = __nccwpck_require__(5194)
const { kState, kHeaders, kGuard, kRealm } = __nccwpck_require__(9710)
const { fetching } = __nccwpck_require__(2315)
const { urlIsHttpHttpsScheme, createDeferredPromise, readAllBytes } = __nccwpck_require__(5523)
const assert = __nccwpck_require__(2613)
const { getGlobalDispatcher } = __nccwpck_require__(2581)
/***/ 4738:
const { kConstruct } = __nccwpck_require__(296)
const { Cache } = __nccwpck_require__(479)
const { webidl } = __nccwpck_require__(4222)
const { kEnumerableProperty } = __nccwpck_require__(3440)
/***/ 296:
  kConstruct: (__nccwpck_require__(6443).kConstruct)
/***/ 3993:
const assert = __nccwpck_require__(2613)
const { URLSerializer } = __nccwpck_require__(4322)
const { isValidHeaderName } = __nccwpck_require__(5523)
/***/ 6197:
const assert = __nccwpck_require__(2613)
const net = __nccwpck_require__(9278)
const http = __nccwpck_require__(8611)
const { pipeline } = __nccwpck_require__(2203)
const util = __nccwpck_require__(3440)
const timers = __nccwpck_require__(8804)
const Request = __nccwpck_require__(4655)
const DispatcherBase = __nccwpck_require__(1)
} = __nccwpck_require__(8707)
const buildConnector = __nccwpck_require__(9136)
} = __nccwpck_require__(6443)
  http2 = __nccwpck_require__(5675)
  const diagnosticsChannel = __nccwpck_require__(1637)
const constants = __nccwpck_require__(2824)
const createRedirectInterceptor = __nccwpck_require__(4415)
  const llhttpWasmData = process.env.JEST_WORKER_ID ? __nccwpck_require__(3870) : undefined
    mod = await WebAssembly.compile(Buffer.from(__nccwpck_require__(3434), 'base64'))
    mod = await WebAssembly.compile(Buffer.from(llhttpWasmData || __nccwpck_require__(3870), 'base64'))
/***/ 3194:
const { kConnected, kSize } = __nccwpck_require__(6443)
/***/ 9237:
/***/ 3168:
const { parseSetCookie } = __nccwpck_require__(8915)
const { stringify, getHeadersList } = __nccwpck_require__(3834)
const { webidl } = __nccwpck_require__(4222)
const { Headers } = __nccwpck_require__(6349)
/***/ 8915:
const { maxNameValuePairSize, maxAttributeValueSize } = __nccwpck_require__(9237)
const { isCTLExcludingHtab } = __nccwpck_require__(3834)
const { collectASequenceOfCodePointsFast } = __nccwpck_require__(4322)
const assert = __nccwpck_require__(2613)
/***/ 3834:
const assert = __nccwpck_require__(2613)
const { kHeadersList } = __nccwpck_require__(6443)
/***/ 9136:
const net = __nccwpck_require__(9278)
const assert = __nccwpck_require__(2613)
const util = __nccwpck_require__(3440)
const { InvalidArgumentError, ConnectTimeoutError } = __nccwpck_require__(8707)
        tls = __nccwpck_require__(4756)
/***/ 735:
/***/ ((module) => {

"use strict";


/** @type {Record<string, string | undefined>} */
const headerNameLowerCasedRecord = {}

// https://developer.mozilla.org/docs/Web/HTTP/Headers
const wellknownHeaderNames = [
  'Accept',
  'Accept-Encoding',
  'Accept-Language',
  'Accept-Ranges',
  'Access-Control-Allow-Credentials',
  'Access-Control-Allow-Headers',
  'Access-Control-Allow-Methods',
  'Access-Control-Allow-Origin',
  'Access-Control-Expose-Headers',
  'Access-Control-Max-Age',
  'Access-Control-Request-Headers',
  'Access-Control-Request-Method',
  'Age',
  'Allow',
  'Alt-Svc',
  'Alt-Used',
  'Authorization',
  'Cache-Control',
  'Clear-Site-Data',
  'Connection',
  'Content-Disposition',
  'Content-Encoding',
  'Content-Language',
  'Content-Length',
  'Content-Location',
  'Content-Range',
  'Content-Security-Policy',
  'Content-Security-Policy-Report-Only',
  'Content-Type',
  'Cookie',
  'Cross-Origin-Embedder-Policy',
  'Cross-Origin-Opener-Policy',
  'Cross-Origin-Resource-Policy',
  'Date',
  'Device-Memory',
  'Downlink',
  'ECT',
  'ETag',
  'Expect',
  'Expect-CT',
  'Expires',
  'Forwarded',
  'From',
  'Host',
  'If-Match',
  'If-Modified-Since',
  'If-None-Match',
  'If-Range',
  'If-Unmodified-Since',
  'Keep-Alive',
  'Last-Modified',
  'Link',
  'Location',
  'Max-Forwards',
  'Origin',
  'Permissions-Policy',
  'Pragma',
  'Proxy-Authenticate',
  'Proxy-Authorization',
  'RTT',
  'Range',
  'Referer',
  'Referrer-Policy',
  'Refresh',
  'Retry-After',
  'Sec-WebSocket-Accept',
  'Sec-WebSocket-Extensions',
  'Sec-WebSocket-Key',
  'Sec-WebSocket-Protocol',
  'Sec-WebSocket-Version',
  'Server',
  'Server-Timing',
  'Service-Worker-Allowed',
  'Service-Worker-Navigation-Preload',
  'Set-Cookie',
  'SourceMap',
  'Strict-Transport-Security',
  'Supports-Loading-Mode',
  'TE',
  'Timing-Allow-Origin',
  'Trailer',
  'Transfer-Encoding',
  'Upgrade',
  'Upgrade-Insecure-Requests',
  'User-Agent',
  'Vary',
  'Via',
  'WWW-Authenticate',
  'X-Content-Type-Options',
  'X-DNS-Prefetch-Control',
  'X-Frame-Options',
  'X-Permitted-Cross-Domain-Policies',
  'X-Powered-By',
  'X-Requested-With',
  'X-XSS-Protection'
]

for (let i = 0; i < wellknownHeaderNames.length; ++i) {
  const key = wellknownHeaderNames[i]
  const lowerCasedKey = key.toLowerCase()
  headerNameLowerCasedRecord[key] = headerNameLowerCasedRecord[lowerCasedKey] =
    lowerCasedKey
}

// Note: object prototypes should not be able to be referenced. e.g. `Object#hasOwnProperty`.
Object.setPrototypeOf(headerNameLowerCasedRecord, null)

module.exports = {
  wellknownHeaderNames,
  headerNameLowerCasedRecord
}


/***/ }),

/***/ 8707:
/***/ 4655:
} = __nccwpck_require__(8707)
const assert = __nccwpck_require__(2613)
const { kHTTP2BuildRequest, kHTTP2CopyHeaders, kHTTP1BuildRequest } = __nccwpck_require__(6443)
const util = __nccwpck_require__(3440)
  const diagnosticsChannel = __nccwpck_require__(1637)
        extractBody = (__nccwpck_require__(8923).extractBody)
/***/ 6443:
/***/ 3440:
const assert = __nccwpck_require__(2613)
const { kDestroyed, kBodyUsed } = __nccwpck_require__(6443)
const { IncomingMessage } = __nccwpck_require__(8611)
const stream = __nccwpck_require__(2203)
const net = __nccwpck_require__(9278)
const { InvalidArgumentError } = __nccwpck_require__(8707)
const { Blob } = __nccwpck_require__(181)
const nodeUtil = __nccwpck_require__(9023)
const { stringify } = __nccwpck_require__(3480)
const { headerNameLowerCasedRecord } = __nccwpck_require__(735)
/**
 * Retrieves a header name and returns its lowercase value.
 * @param {string | Buffer} value Header name
 * @returns {string}
 */
function headerNameToString (value) {
  return headerNameLowerCasedRecord[value] || value.toLowerCase()
}

    ReadableStream = (__nccwpck_require__(3774).ReadableStream)
  headerNameToString,
/***/ 1:
const Dispatcher = __nccwpck_require__(992)
} = __nccwpck_require__(8707)
const { kDestroy, kClose, kDispatch, kInterceptors } = __nccwpck_require__(6443)
/***/ 992:
const EventEmitter = __nccwpck_require__(4434)
/***/ 8923:
const Busboy = __nccwpck_require__(9581)
const util = __nccwpck_require__(3440)
} = __nccwpck_require__(5523)
const { FormData } = __nccwpck_require__(3073)
const { kState } = __nccwpck_require__(9710)
const { webidl } = __nccwpck_require__(4222)
const { DOMException, structuredClone } = __nccwpck_require__(7326)
const { Blob, File: NativeFile } = __nccwpck_require__(181)
const { kBodyUsed } = __nccwpck_require__(6443)
const assert = __nccwpck_require__(2613)
const { isErrored } = __nccwpck_require__(3440)
const { isUint8Array, isArrayBuffer } = __nccwpck_require__(8253)
const { File: UndiciFile } = __nccwpck_require__(3041)
const { parseMIMEType, serializeAMimeType } = __nccwpck_require__(4322)
    ReadableStream = (__nccwpck_require__(3774).ReadableStream)
    ReadableStream = (__nccwpck_require__(3774).ReadableStream)
/***/ 7326:
const { MessageChannel, receiveMessageOnPort } = __nccwpck_require__(8167)
/***/ 4322:
const assert = __nccwpck_require__(2613)
const { atob } = __nccwpck_require__(181)
const { isomorphicDecode } = __nccwpck_require__(5523)
/***/ 3041:
const { Blob, File: NativeFile } = __nccwpck_require__(181)
const { types } = __nccwpck_require__(9023)
const { kState } = __nccwpck_require__(9710)
const { isBlobLike } = __nccwpck_require__(5523)
const { webidl } = __nccwpck_require__(4222)
const { parseMIMEType, serializeAMimeType } = __nccwpck_require__(4322)
const { kEnumerableProperty } = __nccwpck_require__(3440)
/***/ 3073:
const { isBlobLike, toUSVString, makeIterator } = __nccwpck_require__(5523)
const { kState } = __nccwpck_require__(9710)
const { File: UndiciFile, FileLike, isFileLike } = __nccwpck_require__(3041)
const { webidl } = __nccwpck_require__(4222)
const { Blob, File: NativeFile } = __nccwpck_require__(181)
/***/ 5628:
/***/ 6349:
const { kHeadersList, kConstruct } = __nccwpck_require__(6443)
const { kGuard } = __nccwpck_require__(9710)
const { kEnumerableProperty } = __nccwpck_require__(3440)
} = __nccwpck_require__(5523)
const { webidl } = __nccwpck_require__(4222)
const assert = __nccwpck_require__(2613)
/***/ 2315:
} = __nccwpck_require__(8676)
const { Headers } = __nccwpck_require__(6349)
const { Request, makeRequest } = __nccwpck_require__(5194)
const zlib = __nccwpck_require__(3106)
} = __nccwpck_require__(5523)
const { kState, kHeaders, kGuard, kRealm } = __nccwpck_require__(9710)
const assert = __nccwpck_require__(2613)
const { safelyExtractBody } = __nccwpck_require__(8923)
} = __nccwpck_require__(7326)
const { kHeadersList } = __nccwpck_require__(6443)
const EE = __nccwpck_require__(4434)
const { Readable, pipeline } = __nccwpck_require__(2203)
const { addAbortListener, isErrored, isReadable, nodeMajor, nodeMinor } = __nccwpck_require__(3440)
const { dataURLProcessor, serializeAMimeType } = __nccwpck_require__(4322)
const { TransformStream } = __nccwpck_require__(3774)
const { getGlobalDispatcher } = __nccwpck_require__(2581)
const { webidl } = __nccwpck_require__(4222)
const { STATUS_CODES } = __nccwpck_require__(8611)
        resolveObjectURL = (__nccwpck_require__(181).resolveObjectURL)
    ReadableStream = (__nccwpck_require__(3774).ReadableStream)
/***/ 5194:
const { extractBody, mixinBody, cloneBody } = __nccwpck_require__(8923)
const { Headers, fill: fillHeaders, HeadersList } = __nccwpck_require__(6349)
const { FinalizationRegistry } = __nccwpck_require__(3194)()
const util = __nccwpck_require__(3440)
} = __nccwpck_require__(5523)
} = __nccwpck_require__(7326)
const { kHeaders, kSignal, kState, kGuard, kRealm } = __nccwpck_require__(9710)
const { webidl } = __nccwpck_require__(4222)
const { getGlobalOrigin } = __nccwpck_require__(5628)
const { URLSerializer } = __nccwpck_require__(4322)
const { kHeadersList, kConstruct } = __nccwpck_require__(6443)
const assert = __nccwpck_require__(2613)
const { getMaxListeners, setMaxListeners, getEventListeners, defaultMaxListeners } = __nccwpck_require__(4434)
        TransformStream = (__nccwpck_require__(3774).TransformStream)
/***/ 8676:
const { Headers, HeadersList, fill } = __nccwpck_require__(6349)
const { extractBody, cloneBody, mixinBody } = __nccwpck_require__(8923)
const util = __nccwpck_require__(3440)
} = __nccwpck_require__(5523)
} = __nccwpck_require__(7326)
const { kState, kHeaders, kGuard, kRealm } = __nccwpck_require__(9710)
const { webidl } = __nccwpck_require__(4222)
const { FormData } = __nccwpck_require__(3073)
const { getGlobalOrigin } = __nccwpck_require__(5628)
const { URLSerializer } = __nccwpck_require__(4322)
const { kHeadersList, kConstruct } = __nccwpck_require__(6443)
const assert = __nccwpck_require__(2613)
const { types } = __nccwpck_require__(9023)

const ReadableStream = globalThis.ReadableStream || (__nccwpck_require__(3774).ReadableStream)
/***/ 9710:
/***/ 5523:
const { redirectStatusSet, referrerPolicySet: referrerPolicyTokens, badPortsSet } = __nccwpck_require__(7326)
const { getGlobalOrigin } = __nccwpck_require__(5628)
const { performance } = __nccwpck_require__(2987)
const { isBlobLike, toUSVString, ReadableStreamFrom } = __nccwpck_require__(3440)
const assert = __nccwpck_require__(2613)
const { isUint8Array } = __nccwpck_require__(8253)

let supportedHashes = []
  crypto = __nccwpck_require__(6982)
  const possibleRelevantHashes = ['sha256', 'sha384', 'sha512']
  supportedHashes = crypto.getHashes().filter((hash) => possibleRelevantHashes.includes(hash))
/* c8 ignore next 3 */
  // 3. If response is not eligible for integrity validation, return false.
  // TODO

  // 4. If parsedMetadata is the empty set, return true.
  // 5. Let metadata be the result of getting the strongest
  const strongest = getStrongestMetadata(parsedMetadata)
  const metadata = filterMetadataListByAlgorithm(parsedMetadata, strongest)
  // 6. For each item in metadata:
    const expectedValue = item.hash
    if (actualValue[actualValue.length - 1] === '=') {
      if (actualValue[actualValue.length - 2] === '=') {
        actualValue = actualValue.slice(0, -2)
      } else {
        actualValue = actualValue.slice(0, -1)
      }
    if (compareBase64Mixed(actualValue, expectedValue)) {
  // 7. Return false.
const parseHashWithOptions = /(?<algo>sha256|sha384|sha512)-((?<hash>[A-Za-z0-9+/]+|[A-Za-z0-9_-]+)={0,2}(?:\s|$)( +[!-~]*)?)?/i
    if (
      parsedToken === null ||
      parsedToken.groups === undefined ||
      parsedToken.groups.algo === undefined
    ) {
    const algorithm = parsedToken.groups.algo.toLowerCase()
    if (supportedHashes.includes(algorithm)) {
/**
 * @param {{ algo: 'sha256' | 'sha384' | 'sha512' }[]} metadataList
 */
function getStrongestMetadata (metadataList) {
  // Let algorithm be the algo component of the first item in metadataList.
  // Can be sha256
  let algorithm = metadataList[0].algo
  // If the algorithm is sha512, then it is the strongest
  // and we can return immediately
  if (algorithm[3] === '5') {
    return algorithm
  }

  for (let i = 1; i < metadataList.length; ++i) {
    const metadata = metadataList[i]
    // If the algorithm is sha512, then it is the strongest
    // and we can break the loop immediately
    if (metadata.algo[3] === '5') {
      algorithm = 'sha512'
      break
    // If the algorithm is sha384, then a potential sha256 or sha384 is ignored
    } else if (algorithm[3] === '3') {
      continue
    // algorithm is sha256, check if algorithm is sha384 and if so, set it as
    // the strongest
    } else if (metadata.algo[3] === '3') {
      algorithm = 'sha384'
    }
  }
  return algorithm
}

function filterMetadataListByAlgorithm (metadataList, algorithm) {
  if (metadataList.length === 1) {
    return metadataList
  }

  let pos = 0
  for (let i = 0; i < metadataList.length; ++i) {
    if (metadataList[i].algo === algorithm) {
      metadataList[pos++] = metadataList[i]
    }
  }

  metadataList.length = pos

  return metadataList
}

/**
 * Compares two base64 strings, allowing for base64url
 * in the second string.
 *
* @param {string} actualValue always base64
 * @param {string} expectedValue base64 or base64url
 * @returns {boolean}
 */
function compareBase64Mixed (actualValue, expectedValue) {
  if (actualValue.length !== expectedValue.length) {
    return false
  }
  for (let i = 0; i < actualValue.length; ++i) {
    if (actualValue[i] !== expectedValue[i]) {
      if (
        (actualValue[i] === '+' && expectedValue[i] === '-') ||
        (actualValue[i] === '/' && expectedValue[i] === '_')
      ) {
        continue
      }
      return false
    }
  }

  return true
}

    ReadableStream = (__nccwpck_require__(3774).ReadableStream)
  normalizeMethodRecord,
  parseMetadata
/***/ 4222:
const { types } = __nccwpck_require__(9023)
const { hasOwn, toUSVString } = __nccwpck_require__(5523)
/***/ 396:
/***/ 2160:
} = __nccwpck_require__(165)
} = __nccwpck_require__(6812)
const { webidl } = __nccwpck_require__(4222)
const { kEnumerableProperty } = __nccwpck_require__(3440)
/***/ 5976:
const { webidl } = __nccwpck_require__(4222)
/***/ 6812:
/***/ 165:
} = __nccwpck_require__(6812)
const { ProgressEvent } = __nccwpck_require__(5976)
const { getEncoding } = __nccwpck_require__(396)
const { DOMException } = __nccwpck_require__(7326)
const { serializeAMimeType, parseMIMEType } = __nccwpck_require__(4322)
const { types } = __nccwpck_require__(9023)
const { StringDecoder } = __nccwpck_require__(3193)
const { btoa } = __nccwpck_require__(181)
/***/ 2581:
const { InvalidArgumentError } = __nccwpck_require__(8707)
const Agent = __nccwpck_require__(9965)
/***/ 8840:
/***/ 8299:
const util = __nccwpck_require__(3440)
const { kBodyUsed } = __nccwpck_require__(6443)
const assert = __nccwpck_require__(2613)
const { InvalidArgumentError } = __nccwpck_require__(8707)
const EE = __nccwpck_require__(4434)
  if (header.length === 4) {
    return util.headerNameToString(header) === 'host'
  }
  if (removeContent && util.headerNameToString(header).startsWith('content-')) {
    return true
  }
  if (unknownOrigin && (header.length === 13 || header.length === 6 || header.length === 19)) {
    const name = util.headerNameToString(header)
    return name === 'authorization' || name === 'cookie' || name === 'proxy-authorization'
  }
  return false
/***/ 3573:
const assert = __nccwpck_require__(2613)
const { kRetryHandlerDefaultRetry } = __nccwpck_require__(6443)
const { RequestRetryError } = __nccwpck_require__(8707)
const { isDisturbed, parseHeaders, parseRangeHeader } = __nccwpck_require__(3440)
/***/ 4415:
const RedirectHandler = __nccwpck_require__(8299)
/***/ 2824:
const utils_1 = __nccwpck_require__(172);
/***/ 3870:
/***/ 3434:
/***/ 172:
/***/ 7501:
const { kClients } = __nccwpck_require__(6443)
const Agent = __nccwpck_require__(9965)
} = __nccwpck_require__(1117)
const MockClient = __nccwpck_require__(7365)
const MockPool = __nccwpck_require__(4004)
const { matchValue, buildMockOptions } = __nccwpck_require__(3397)
const { InvalidArgumentError, UndiciError } = __nccwpck_require__(8707)
const Dispatcher = __nccwpck_require__(992)
const Pluralizer = __nccwpck_require__(1529)
const PendingInterceptorsFormatter = __nccwpck_require__(6142)
/***/ 7365:
const { promisify } = __nccwpck_require__(9023)
const Client = __nccwpck_require__(6197)
const { buildMockDispatch } = __nccwpck_require__(3397)
} = __nccwpck_require__(1117)
const { MockInterceptor } = __nccwpck_require__(1511)
const Symbols = __nccwpck_require__(6443)
const { InvalidArgumentError } = __nccwpck_require__(8707)
/***/ 2429:
const { UndiciError } = __nccwpck_require__(8707)
/***/ 1511:
const { getResponseData, buildKey, addMockDispatch } = __nccwpck_require__(3397)
} = __nccwpck_require__(1117)
const { InvalidArgumentError } = __nccwpck_require__(8707)
const { buildURL } = __nccwpck_require__(3440)
/***/ 4004:
const { promisify } = __nccwpck_require__(9023)
const Pool = __nccwpck_require__(5076)
const { buildMockDispatch } = __nccwpck_require__(3397)
} = __nccwpck_require__(1117)
const { MockInterceptor } = __nccwpck_require__(1511)
const Symbols = __nccwpck_require__(6443)
const { InvalidArgumentError } = __nccwpck_require__(8707)
/***/ 1117:
/***/ 3397:
const { MockNotMatchedError } = __nccwpck_require__(2429)
} = __nccwpck_require__(1117)
const { buildURL, nop } = __nccwpck_require__(3440)
const { STATUS_CODES } = __nccwpck_require__(8611)
} = __nccwpck_require__(9023)
/***/ 6142:
const { Transform } = __nccwpck_require__(2203)
const { Console } = __nccwpck_require__(4236)
/***/ 1529:
/***/ 4869:
/***/ 8640:
const DispatcherBase = __nccwpck_require__(1)
const FixedQueue = __nccwpck_require__(4869)
const { kConnected, kSize, kRunning, kPending, kQueued, kBusy, kFree, kUrl, kClose, kDestroy, kDispatch } = __nccwpck_require__(6443)
const PoolStats = __nccwpck_require__(4622)
/***/ 4622:
const { kFree, kConnected, kPending, kQueued, kRunning, kSize } = __nccwpck_require__(6443)
/***/ 5076:
} = __nccwpck_require__(8640)
const Client = __nccwpck_require__(6197)
} = __nccwpck_require__(8707)
const util = __nccwpck_require__(3440)
const { kUrl, kInterceptors } = __nccwpck_require__(6443)
const buildConnector = __nccwpck_require__(9136)
/***/ 2720:
const { kProxy, kClose, kDestroy, kInterceptors } = __nccwpck_require__(6443)
const { URL } = __nccwpck_require__(7016)
const Agent = __nccwpck_require__(9965)
const Pool = __nccwpck_require__(5076)
const DispatcherBase = __nccwpck_require__(1)
const { InvalidArgumentError, RequestAbortedError } = __nccwpck_require__(8707)
const buildConnector = __nccwpck_require__(9136)
/***/ 8804:
/***/ 8550:
const diagnosticsChannel = __nccwpck_require__(1637)
const { uid, states } = __nccwpck_require__(5913)
} = __nccwpck_require__(2933)
const { fireEvent, failWebsocketConnection } = __nccwpck_require__(3574)
const { CloseEvent } = __nccwpck_require__(6255)
const { makeRequest } = __nccwpck_require__(5194)
const { fetching } = __nccwpck_require__(2315)
const { Headers } = __nccwpck_require__(6349)
const { getGlobalDispatcher } = __nccwpck_require__(2581)
const { kHeadersList } = __nccwpck_require__(6443)
  crypto = __nccwpck_require__(6982)
/***/ 5913:
/***/ 6255:
const { webidl } = __nccwpck_require__(4222)
const { kEnumerableProperty } = __nccwpck_require__(3440)
const { MessagePort } = __nccwpck_require__(8167)
/***/ 1237:
const { maxUnsigned16Bit } = __nccwpck_require__(5913)
  crypto = __nccwpck_require__(6982)
/***/ 3171:
const { Writable } = __nccwpck_require__(2203)
const diagnosticsChannel = __nccwpck_require__(1637)
const { parserStates, opcodes, states, emptyBuffer } = __nccwpck_require__(5913)
const { kReadyState, kSentClose, kResponse, kReceivedClose } = __nccwpck_require__(2933)
const { isValidStatusCode, failWebsocketConnection, websocketMessageReceived } = __nccwpck_require__(3574)
const { WebsocketFrameSend } = __nccwpck_require__(1237)
/***/ 2933:
/***/ 3574:
const { kReadyState, kController, kResponse, kBinaryType, kWebSocketURL } = __nccwpck_require__(2933)
const { states, opcodes } = __nccwpck_require__(5913)
const { MessageEvent, ErrorEvent } = __nccwpck_require__(6255)
/***/ 5171:
const { webidl } = __nccwpck_require__(4222)
const { DOMException } = __nccwpck_require__(7326)
const { URLSerializer } = __nccwpck_require__(4322)
const { getGlobalOrigin } = __nccwpck_require__(5628)
const { staticPropertyDescriptors, states, opcodes, emptyBuffer } = __nccwpck_require__(5913)
} = __nccwpck_require__(2933)
const { isEstablished, isClosing, isValidSubprotocol, failWebsocketConnection, fireEvent } = __nccwpck_require__(3574)
const { establishWebSocketConnection } = __nccwpck_require__(8550)
const { WebsocketFrameSend } = __nccwpck_require__(1237)
const { ByteParser } = __nccwpck_require__(3171)
const { kEnumerableProperty, isBlobLike } = __nccwpck_require__(3440)
const { getGlobalDispatcher } = __nccwpck_require__(2581)
const { types } = __nccwpck_require__(9023)
/***/ 3843:
/***/ 3506:
/***/ 8264:
/***/ 2613:
/***/ 290:
/***/ 181:
/***/ 5317:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 4236:
/***/ 6982:
/***/ 1637:
/***/ 4434:
/***/ 9896:
/***/ 8611:
/***/ 5675:
/***/ 5692:
/***/ 9278:
/***/ 8474:
/***/ 7075:
/***/ 7975:
/***/ 857:
/***/ 6928:
/***/ 2987:
/***/ 3480:
/***/ 2203:
/***/ 3774:
/***/ 3193:
/***/ 3557:
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 4756:
/***/ 7016:
/***/ 9023:
/***/ 8253:
/***/ 8167:
/***/ 3106:
/***/ 7182:
const WritableStream = (__nccwpck_require__(7075).Writable)
const inherits = (__nccwpck_require__(7975).inherits)
const StreamSearch = __nccwpck_require__(4136)
const PartStream = __nccwpck_require__(612)
const HeaderParser = __nccwpck_require__(2271)
/***/ 2271:
const EventEmitter = (__nccwpck_require__(8474).EventEmitter)
const inherits = (__nccwpck_require__(7975).inherits)
const getLimit = __nccwpck_require__(2393)
const StreamSearch = __nccwpck_require__(4136)
/***/ 612:
const inherits = (__nccwpck_require__(7975).inherits)
const ReadableStream = (__nccwpck_require__(7075).Readable)
/***/ 4136:
const EventEmitter = (__nccwpck_require__(8474).EventEmitter)
const inherits = (__nccwpck_require__(7975).inherits)
/***/ 9581:
const WritableStream = (__nccwpck_require__(7075).Writable)
const { inherits } = __nccwpck_require__(7975)
const Dicer = __nccwpck_require__(7182)
const MultipartParser = __nccwpck_require__(1192)
const UrlencodedParser = __nccwpck_require__(855)
const parseParams = __nccwpck_require__(8929)
/***/ 1192:
const { Readable } = __nccwpck_require__(7075)
const { inherits } = __nccwpck_require__(7975)
const Dicer = __nccwpck_require__(7182)
const parseParams = __nccwpck_require__(8929)
const decodeText = __nccwpck_require__(2747)
const basename = __nccwpck_require__(692)
const getLimit = __nccwpck_require__(2393)
/***/ 855:
const Decoder = __nccwpck_require__(1496)
const decodeText = __nccwpck_require__(2747)
const getLimit = __nccwpck_require__(2393)
/***/ 1496:
/***/ 692:
/***/ 2747:
/***/ 2393:
/***/ 8929:
const decodeText = __nccwpck_require__(2747)
/***/ 7305:
/***/ 1803:
const brace_expressions_js_1 = __nccwpck_require__(1090);
const unescape_js_1 = __nccwpck_require__(851);
    get options() {
        return this.#options;
    }
/***/ 1090:
/***/ 800:
/***/ 6507:
const brace_expansion_1 = __importDefault(__nccwpck_require__(4691));
const assert_valid_pattern_js_1 = __nccwpck_require__(7305);
const ast_js_1 = __nccwpck_require__(1803);
const escape_js_1 = __nccwpck_require__(800);
const unescape_js_1 = __nccwpck_require__(851);
            // just collapse multiple ** portions into one
                if (matched) {
                    globParts[i] = [];
                    globParts[j] = matched;
                    break;
                }
        if (fastTest && typeof re === 'object') {
            // Avoids overriding in frozen environments
            Reflect.defineProperty(re, 'test', { value: fastTest });
        }
        return re;
var ast_js_2 = __nccwpck_require__(1803);
var escape_js_2 = __nccwpck_require__(800);
var unescape_js_2 = __nccwpck_require__(851);
/***/ 851:
/***/ 2621:
  Ollama: () => (/* binding */ Ollama),
var external_fs_ = __nccwpck_require__(9896);
var external_path_ = __nccwpck_require__(6928);
var external_crypto_ = __nccwpck_require__(6982);
var external_os_ = __nccwpck_require__(857);
var fetch_umd = __nccwpck_require__(3506);
/******/ 	var __webpack_exports__ = __nccwpck_require__(5915);