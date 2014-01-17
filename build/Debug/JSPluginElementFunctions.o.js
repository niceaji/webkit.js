// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// Capture the output of this into a variable, if you want
(function(FUNCTION_TABLE_OFFSET, parentModule) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  Module.print = parentModule.print;
  Module.printErr = parentModule.printErr;
  Module.cleanups = [];
  var H_BASE = 0;
  // Each module has its own stack
  var STACKTOP = parentModule['_malloc'](TOTAL_STACK);
  assert(STACKTOP % 8 == 0);
  var STACK_MAX = STACKTOP + TOTAL_STACK;
  Module.cleanups.push(function() {
    parentModule['_free'](STACKTOP); // XXX ensure exported
    parentModule['_free'](H_BASE);
  });
// === Auto-generated preamble library stuff ===
//========================================
// Runtime essentials
//========================================
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.pop();
    var func = callback.func;
    if (typeof func === 'number') {
      func = FUNCTION_TABLE[func];
    }
    func(callback.arg === undefined ? null : callback.arg);
  }
}
var __ATINIT__ = []; // functions called during startup
function initRuntime() {
  callRuntimeCallbacks(__ATINIT__);
}
// === Body ===
H_BASE = parentModule["_malloc"](0 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 0;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* no memory initializer */
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Math_min = Math.min;
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    return Module["dynCall_iiiiiii"](index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function asmPrintInt(x, y) {
  Module.print('int ' + x + ',' + y);// + ' ' + new Error().stack);
}
function asmPrintFloat(x, y) {
  Module.print('float ' + x + ',' + y);// + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var asm = (function(global, env, buffer) {
  'almost asm';
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var __ZN7WebCore13JSHTMLElement6s_infoE=env.__ZN7WebCore13JSHTMLElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames9objectTagE=env.__ZN7WebCore9HTMLNames9objectTagE|0;
  var __ZN7WebCore9HTMLNames8embedTagE=env.__ZN7WebCore9HTMLNames8embedTagE|0;
  var __ZN7WebCore9HTMLNames9appletTagE=env.__ZN7WebCore9HTMLNames9appletTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;
  var tempRet1 = 0;
  var tempRet2 = 0;
  var tempRet3 = 0;
  var tempRet4 = 0;
  var tempRet5 = 0;
  var tempRet6 = 0;
  var tempRet7 = 0;
  var tempRet8 = 0;
  var tempRet9 = 0;
  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var abort=env.abort;
  var assert=env.assert;
  var asmPrintInt=env.asmPrintInt;
  var asmPrintFloat=env.asmPrintFloat;
  var Math_min=env.min;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = (i2 | 0) == 0;
 i15 = i13 + 16 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i13 + 20 | 0;
 HEAP32[i16 >> 2] = -1;
 i17 = i13 + 24 | 0;
 HEAP32[i17 >> 2] = (i14 ? 0 : 0) | i2;
 HEAP32[i17 + 4 >> 2] = i14 ? -6 : -5;
 i14 = HEAP32[i4 >> 2] | 0;
 i4 = i3 + 16 | 0;
 i18 = i9 | 0;
 i19 = i11 | 0;
 i20 = i12 | 0;
 i21 = i2;
 while (1) {
  i22 = i21 | 0;
  i2 = HEAP32[i22 >> 2] | 0;
  if ((HEAP8[i2 + 53 | 0] & 32) == 0) {
   i23 = HEAP32[(HEAP32[i4 >> 2] & -65536) + 1076 >> 2] | 0;
   HEAP32[i18 >> 2] = i14;
   i24 = __ZN3JSC9Structure3getERNS_2VMENS_12PropertyNameERjRPNS_6JSCellE(i2, i23, i9, i7, i8) | 0;
   if ((i24 | 0) != -1) {
    i25 = 4;
    break;
   }
   HEAP32[i19 >> 2] = i14;
   if (__ZN3JSC8JSObject22getOwnPropertySlotSlowEPNS_9ExecStateENS_12PropertyNameERNS_12PropertySlotE(i21, i3, i11, i13) | 0) {
    break;
   }
  } else {
   i23 = HEAP32[i2 >> 2] | 0;
   if ((i23 | 0) != 0) {
    if ((i23 | 0) != (HEAP32[i23 >> 2] | 0)) {
     i25 = 13;
     break;
    }
   }
   i23 = HEAP32[(HEAP32[((HEAP32[(i21 & -65536) + 1048 >> 2] | 0) == 2 ? i21 + 8 | 0 : i2 + 32 | 0) >> 2] | 0) + 52 >> 2] | 0;
   HEAP32[i20 >> 2] = i14;
   if (FUNCTION_TABLE_iiiii[i23 & 1](i21, i3, i12, i13) | 0) {
    break;
   }
  }
  i23 = (HEAP32[i22 >> 2] | 0) + 8 | 0;
  i2 = HEAP32[i23 >> 2] | 0;
  if (!((i2 & 0 | 0) == 0 & (HEAP32[i23 + 4 >> 2] & -1 | 0) == (-5 | 0))) {
   i25 = 24;
   break;
  }
  i23 = i2;
  if ((HEAPU8[(HEAP32[i23 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
   i25 = 24;
   break;
  }
  i21 = i23;
 }
 L13 : do {
  if ((i25 | 0) == 4) {
   if ((i24 | 0) < 100) {
    i26 = i21 + (i24 + 1 << 3) | 0;
   } else {
    i26 = (HEAP32[i21 + 4 >> 2] | 0) - 8 + (99 - i24 << 3) | 0;
   }
   i12 = i26 | 0;
   i20 = HEAP32[i12 >> 2] | 0;
   i11 = HEAP32[i12 + 4 >> 2] | 0;
   i12 = i11;
   do {
    if ((HEAP8[(HEAP32[i22 >> 2] | 0) + 58 | 0] & 8) != 0 & ((i12 | 0) == (-5 | 0) & 0 == 0)) {
     if ((HEAP8[(HEAP32[i20 >> 2] | 0) + 52 | 0] | 0) != 8) {
      break;
     }
     i19 = i10 | 0;
     HEAP32[i19 >> 2] = i20 & -1;
     HEAP32[i19 + 4 >> 2] = i11 & 0 | -5;
     __ZN3JSC8JSObject22fillGetterPropertySlotERNS_12PropertySlotENS_7JSValueEji(i21, i13, i10, HEAP32[i7 >> 2] | 0, i24);
     break L13;
    }
   } while (0);
   i19 = HEAP32[i7 >> 2] | 0;
   i8 = i13 + 8 | 0;
   HEAP32[i8 >> 2] = i20 & -1;
   HEAP32[i8 + 4 >> 2] = i12 | i11 & 0;
   HEAP32[i13 >> 2] = i19;
   HEAP32[i13 + 32 >> 2] = i21;
   HEAP32[i15 >> 2] = 1;
   HEAP32[i16 >> 2] = i24;
  } else if ((i25 | 0) == 13) {
   _WTFCrash();
  } else if ((i25 | 0) == 24) {
   HEAP32[i1 + 4 >> 2] = -4;
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i5;
   return;
  }
 } while (0);
 i25 = HEAP32[i15 >> 2] | 0;
 if ((i25 | 0) == 1) {
  i15 = i13 + 8 | 0;
  i24 = HEAP32[i15 + 4 >> 2] | 0;
  i16 = i1 | 0;
  HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i16 + 4 >> 2] = i24;
  STACKTOP = i5;
  return;
 } else if ((i25 | 0) == 4) {
  i24 = i13 + 8 | 0;
  i16 = HEAP32[i13 + 32 >> 2] | 0;
  i15 = (i16 | 0) == 0;
  i21 = FUNCTION_TABLE_iiiiiii[HEAP32[i24 >> 2] & 3](i3, (i15 ? 0 : 0) | i16, (i15 ? -6 : -5) | 0, HEAP32[i17 >> 2] | 0, HEAP32[i17 + 4 >> 2] | 0, HEAP32[i24 + 4 >> 2] | 0) | 0;
  i24 = i1 | 0;
  HEAP32[i24 >> 2] = i21;
  HEAP32[i24 + 4 >> 2] = tempRet0;
  STACKTOP = i5;
  return;
 } else if ((i25 | 0) == 2) {
  __ZNK3JSC12PropertySlot14functionGetterEPNS_9ExecStateE(i1, i13, i3);
  STACKTOP = i5;
  return;
 } else {
  i25 = HEAP32[i13 + 8 >> 2] | 0;
  i24 = HEAP32[i13 + 32 >> 2] | 0;
  i13 = (i24 | 0) == 0;
  i21 = HEAP32[i17 >> 2] | 0;
  i15 = HEAP32[i17 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = i14;
  i14 = FUNCTION_TABLE_iiiiiii[i25 & 3](i3, (i13 ? 0 : 0) | i24, (i13 ? -6 : -5) | 0, i21, i15, i6) | 0;
  i6 = i1 | 0;
  HEAP32[i6 >> 2] = i14;
  HEAP32[i6 + 4 >> 2] = tempRet0;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCoreL10callPluginEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 96 | 0;
 i7 = i2 + 104 | 0;
 i8 = i2 + 112 | 0;
 i9 = i2 + 120 | 0;
 i10 = i2 + 128 | 0;
 i11 = i1 + 24 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 & 0 | 0) == 0 & (HEAP32[i11 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
  i13 = 0;
 } else {
  i13 = i12;
 }
 i12 = __ZN7WebCore18pluginScriptObjectEPN3JSC9ExecStateEPNS_13JSHTMLElementE(i1, i13) | 0;
 i13 = i1 + 32 | 0;
 i11 = HEAP32[i13 >> 2] | 0;
 i14 = i11 - 1 | 0;
 i15 = i5 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i5 + 4 | 0;
 HEAP32[i16 >> 2] = 8;
 i17 = i5 + 72 | 0;
 HEAP32[i17 >> 2] = i5 + 8;
 i18 = i5 + 76 | 0;
 HEAP32[i18 >> 2] = 0;
 L4 : do {
  if ((i14 | 0) != 0) {
   i19 = i3 | 0;
   i20 = 0;
   i21 = i11;
   while (1) {
    if ((i21 - 1 | 0) >>> 0 > i20 >>> 0) {
     i22 = i1 + (i20 + 6 << 3) | 0;
     i23 = HEAP32[i22 >> 2] | 0;
     i24 = HEAP32[i22 + 4 >> 2] | 0;
     i25 = i24 & 0;
     i26 = i23 & -1;
     i27 = i24 & -1;
     i28 = i23 & 0;
    } else {
     i25 = 0;
     i26 = 0;
     i27 = -4;
     i28 = 0;
    }
    i23 = HEAP32[i15 >> 2] | 0;
    i24 = i26 | i28;
    i22 = i25 | i27;
    if ((i23 | 0) < (HEAP32[i16 >> 2] | 0)) {
     i29 = (HEAP32[i17 >> 2] | 0) + (i23 << 3) | 0;
     HEAP32[i29 >> 2] = i24;
     HEAP32[i29 + 4 >> 2] = i22;
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
    } else {
     HEAP32[i19 >> 2] = i24;
     HEAP32[i19 + 4 >> 2] = i22;
     __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i5, i3);
    }
    i22 = i20 + 1 | 0;
    if (i22 >>> 0 >= i14 >>> 0) {
     break L4;
    }
    i20 = i22;
    i21 = HEAP32[i13 >> 2] | 0;
   }
  }
 } while (0);
 i13 = (i12 | 0) == 0;
 i14 = i13 ? -6 : -5;
 i3 = i12;
 if (i13) {
  i30 = 0;
 } else {
  i13 = i12 | 0;
  i27 = HEAP32[i12 >> 2] | 0;
  i25 = HEAP32[i27 >> 2] | 0;
  do {
   if ((i25 | 0) != 0) {
    if ((i25 | 0) == (HEAP32[i25 >> 2] | 0)) {
     break;
    }
    _WTFCrash();
    return 0;
   }
  } while (0);
  i30 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[((HEAP32[(i3 & -65536) + 1048 >> 2] | 0) == 2 ? i12 + 8 | 0 : i27 + 32 | 0) >> 2] | 0) + 28 >> 2] & 1](i13, i6) | 0;
 }
 HEAP32[i8 + 4 >> 2] = i14;
 HEAP32[i8 >> 2] = i3;
 i3 = i1 + 40 | 0;
 i14 = HEAP32[i3 + 4 >> 2] | 0;
 i13 = i9 | 0;
 HEAP32[i13 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i13 + 4 >> 2] = i14;
 HEAP32[i10 >> 2] = HEAP32[i17 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i15 >> 2];
 __ZN3JSC4callEPNS_9ExecStateENS_7JSValueENS_8CallTypeERKNS_8CallDataES2_RKNS_7ArgListE(i7, i1, i8, i30, i6, i9, i10);
 i10 = i7 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 i9 = HEAP32[i10 + 4 >> 2] | 0;
 i10 = HEAP32[i18 >> 2] | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  __ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i10, i4) | 0;
 }
 if ((HEAP32[i16 >> 2] | 0) == 8) {
  STACKTOP = i2;
  return (tempRet0 = i9, i7) | 0;
 }
 i16 = HEAP32[i17 >> 2] | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i2;
  return (tempRet0 = i9, i7) | 0;
 }
 __ZdaPv(i16);
 STACKTOP = i2;
 return (tempRet0 = i9, i7) | 0;
}
function __ZN7WebCore24pluginElementGetCallDataEPNS_13JSHTMLElementERN3JSC8CallDataE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 12 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = HEAP32[i6 + 44 >> 2] | 0;
 i8 = HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0;
 do {
  if ((i7 | 0) == (i8 | 0)) {
   i9 = 10;
  } else {
   i10 = HEAP32[i7 + 12 >> 2] | 0;
   if ((i10 | 0) == (HEAP32[i8 + 12 >> 2] | 0)) {
    if ((HEAP32[i7 + 16 >> 2] | 0) == (HEAP32[i8 + 16 >> 2] | 0)) {
     i9 = 10;
     break;
    }
   }
   i11 = HEAP32[__ZN7WebCore9HTMLNames8embedTagE >> 2] | 0;
   if ((i7 | 0) == (i11 | 0)) {
    i9 = 10;
    break;
   }
   if ((i10 | 0) == (HEAP32[i11 + 12 >> 2] | 0)) {
    if ((HEAP32[i7 + 16 >> 2] | 0) == (HEAP32[i11 + 16 >> 2] | 0)) {
     i9 = 10;
     break;
    }
   }
   i11 = HEAP32[__ZN7WebCore9HTMLNames9appletTagE >> 2] | 0;
   if ((i7 | 0) == (i11 | 0)) {
    i9 = 10;
    break;
   }
   if ((i10 | 0) != (HEAP32[i11 + 12 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i7 + 16 >> 2] | 0) == (HEAP32[i11 + 16 >> 2] | 0)) {
    i9 = 10;
   }
  }
 } while (0);
 do {
  if ((i9 | 0) == 10) {
   i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] | 0;
   i8 = __ZNK7WebCore17HTMLPlugInElement12pluginWidgetEv(i6) | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] & 3](i8) | 0)) {
    break;
   }
   i11 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i8 >> 2] | 0) + 100 >> 2] & 1](i8, i7) | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i7 = i11 | 0;
   i8 = HEAP32[i11 >> 2] | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     if ((i10 | 0) == (HEAP32[i10 >> 2] | 0)) {
      break;
     }
     _WTFCrash();
     return 0;
    }
   } while (0);
   if ((FUNCTION_TABLE_iii[HEAP32[(HEAP32[((HEAP32[(i11 & -65536) + 1048 >> 2] | 0) == 2 ? i11 + 8 | 0 : i8 + 32 | 0) >> 2] | 0) + 28 >> 2] & 1](i7, i4) | 0) == 0) {
    i12 = 0;
    STACKTOP = i3;
    return i12 | 0;
   }
   HEAP32[i2 >> 2] = F_BASE_ii + 2;
   i12 = 1;
   STACKTOP = i3;
   return i12 | 0;
  }
 } while (0);
 i4 = __ZN7WebCore14pluginInstanceERNS_11HTMLElementE(HEAP32[i5 >> 2] | 0) | 0;
 if ((i4 | 0) == 0) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 3](i4) | 0)) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 HEAP32[i2 >> 2] = F_BASE_ii + 2;
 i12 = 1;
 STACKTOP = i3;
 return i12 | 0;
}
function __ZN7WebCore18pluginScriptObjectEPN3JSC9ExecStateEPNS_13JSHTMLElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 + 12 >> 2] | 0;
 i6 = HEAP32[i5 + 44 >> 2] | 0;
 i7 = HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0;
 do {
  if ((i6 | 0) != (i7 | 0)) {
   i8 = HEAP32[i6 + 12 >> 2] | 0;
   if ((i8 | 0) == (HEAP32[i7 + 12 >> 2] | 0)) {
    if ((HEAP32[i6 + 16 >> 2] | 0) == (HEAP32[i7 + 16 >> 2] | 0)) {
     break;
    }
   }
   i9 = HEAP32[__ZN7WebCore9HTMLNames8embedTagE >> 2] | 0;
   if ((i6 | 0) == (i9 | 0)) {
    break;
   }
   if ((i8 | 0) == (HEAP32[i9 + 12 >> 2] | 0)) {
    if ((HEAP32[i6 + 16 >> 2] | 0) == (HEAP32[i9 + 16 >> 2] | 0)) {
     break;
    }
   }
   i9 = HEAP32[__ZN7WebCore9HTMLNames9appletTagE >> 2] | 0;
   if ((i6 | 0) == (i9 | 0)) {
    break;
   }
   if ((i8 | 0) != (HEAP32[i9 + 12 >> 2] | 0)) {
    i10 = 0;
    STACKTOP = i3;
    return i10 | 0;
   }
   if ((HEAP32[i6 + 16 >> 2] | 0) == (HEAP32[i9 + 16 >> 2] | 0)) {
    break;
   } else {
    i10 = 0;
   }
   STACKTOP = i3;
   return i10 | 0;
  }
 } while (0);
 i6 = i5;
 i5 = __ZN7WebCore17HTMLPlugInElement32scriptObjectForPluginReplacementEv(i6) | 0;
 if ((i5 | 0) != 0) {
  i10 = i5;
  STACKTOP = i3;
  return i10 | 0;
 }
 i5 = HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0;
 i2 = __ZNK7WebCore17HTMLPlugInElement12pluginWidgetEv(i6) | 0;
 do {
  if ((i2 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 3](i2) | 0)) {
    break;
   }
   i7 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 100 >> 2] & 1](i2, i5) | 0;
   if ((i7 | 0) == 0) {
    break;
   } else {
    i10 = i7;
   }
   STACKTOP = i3;
   return i10 | 0;
  }
 } while (0);
 __ZN7WebCore17HTMLPlugInElement11getInstanceEv(i4, i6);
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 i4 = i6 + 4 | 0;
 i5 = i4 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 do {
  if ((i2 | 0) == 0) {
   i7 = i4 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 48 >> 2] & 1](i7);
  } else {
   HEAP32[i5 >> 2] = i2;
  }
 } while (0);
 if ((__ZNK3JSC8Bindings8Instance10rootObjectEv(i6) | 0) == 0) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 i10 = __ZN3JSC8Bindings8Instance19createRuntimeObjectEPNS_9ExecStateE(i6, i1) | 0;
 STACKTOP = i3;
 return i10 | 0;
}
function __ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 HEAP32[i2 >> 2] = -1;
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i3 = i1 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i1 + 4 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if (!((i4 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  return;
 }
 i4 = (i5 | 0) / 2 & -1;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i4 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i4 << 2) | 0;
 if ((i5 | 0) != 0) {
  i4 = 0;
  while (1) {
   i1 = HEAP32[i7 + (i4 << 2) >> 2] | 0;
   i8 = i1;
   if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
    i9 = HEAP32[i6 >> 2] | 0;
    i10 = HEAP32[i3 >> 2] | 0;
    i11 = i8 + ~(i8 << 15) | 0;
    i8 = (i11 >>> 10 ^ i11) * 9 & -1;
    i11 = i8 >>> 6 ^ i8;
    i8 = i11 + ~(i11 << 11) | 0;
    i11 = i8 >>> 16 ^ i8;
    i8 = i10 & i11;
    i12 = i9 + (i8 << 2) | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    L9 : do {
     if ((i13 | 0) == 0) {
      i14 = 0;
      i15 = i12;
      i16 = 6;
     } else {
      i17 = (i11 >>> 23) + ~i11 | 0;
      i18 = i17 << 12 ^ i17;
      i17 = i18 >>> 7 ^ i18;
      i18 = i17 << 2 ^ i17;
      i17 = i18 >>> 20 ^ i18 | 1;
      i18 = 0;
      i19 = 0;
      i20 = i8;
      i21 = i12;
      i22 = i13;
      while (1) {
       if ((i22 | 0) == (i1 | 0)) {
        i23 = i21;
        break L9;
       }
       i24 = (i22 | 0) == -1 ? i21 : i18;
       i25 = (i19 | 0) == 0 ? i17 : i19;
       i26 = i25 + i20 & i10;
       i27 = i9 + (i26 << 2) | 0;
       i28 = HEAP32[i27 >> 2] | 0;
       if ((i28 | 0) == 0) {
        i14 = i24;
        i15 = i27;
        i16 = 6;
        break;
       } else {
        i18 = i24;
        i19 = i25;
        i20 = i26;
        i21 = i27;
        i22 = i28;
       }
      }
     }
    } while (0);
    if ((i16 | 0) == 6) {
     i16 = 0;
     i23 = (i14 | 0) != 0 ? i14 : i15;
    }
    HEAP32[i23 >> 2] = i1;
   }
   i4 = i4 + 1 | 0;
   if ((i4 | 0) == (i5 | 0)) {
    break;
   }
  }
 }
 HEAP32[i2 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i7);
 return;
}
function __ZN7WebCore14pluginInstanceERNS_11HTMLElementE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i5 = HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0;
 do {
  if ((i4 | 0) != (i5 | 0)) {
   i6 = HEAP32[i4 + 12 >> 2] | 0;
   if ((i6 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
    if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
     break;
    }
   }
   i7 = HEAP32[__ZN7WebCore9HTMLNames8embedTagE >> 2] | 0;
   if ((i4 | 0) == (i7 | 0)) {
    break;
   }
   if ((i6 | 0) == (HEAP32[i7 + 12 >> 2] | 0)) {
    if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i7 + 16 >> 2] | 0)) {
     break;
    }
   }
   i7 = HEAP32[__ZN7WebCore9HTMLNames9appletTagE >> 2] | 0;
   if ((i4 | 0) == (i7 | 0)) {
    break;
   }
   if ((i6 | 0) != (HEAP32[i7 + 12 >> 2] | 0)) {
    STACKTOP = i2;
    return 0;
   }
   if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i7 + 16 >> 2] | 0)) {
    break;
   }
   STACKTOP = i2;
   return 0;
  }
 } while (0);
 __ZN7WebCore17HTMLPlugInElement11getInstanceEv(i3, i1);
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return 0;
 }
 i3 = i1 + 4 | 0;
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  i8 = __ZNK3JSC8Bindings8Instance10rootObjectEv(i1) | 0;
  i9 = (i8 | 0) == 0;
  i10 = i9 ? 0 : i1;
  STACKTOP = i2;
  return i10 | 0;
 }
 i5 = i3 - 4 | 0;
 if ((i5 | 0) == 0) {
  i8 = __ZNK3JSC8Bindings8Instance10rootObjectEv(i1) | 0;
  i9 = (i8 | 0) == 0;
  i10 = i9 ? 0 : i1;
  STACKTOP = i2;
  return i10 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 48 >> 2] & 1](i5);
 i8 = __ZNK3JSC8Bindings8Instance10rootObjectEv(i1) | 0;
 i9 = (i8 | 0) == 0;
 i10 = i9 ? 0 : i1;
 STACKTOP = i2;
 return i10 | 0;
}
function __ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 2 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 2) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 2) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_(i1 | 0, i5);
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore27pluginElementPropertyGetterEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i2 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i2 = i3 | 0;
 i7 = i3 + 8 | 0;
 i8 = i4;
 L1 : do {
  if ((i4 & 0 | 0) == 0 & (i5 & -1 | 0) == (-5 | 0)) {
   i9 = i8;
   if ((HEAP32[(i8 & -65536) + 1048 >> 2] | 0) == 2) {
    i10 = i9 + 8 | 0;
   } else {
    i10 = (HEAP32[i9 >> 2] | 0) + 32 | 0;
   }
   i9 = HEAP32[i10 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   } else {
    i11 = i9;
   }
   while (1) {
    if ((i11 | 0) == (__ZN7WebCore13JSHTMLElement6s_infoE | 0)) {
     break;
    }
    i11 = HEAP32[i11 + 4 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break L1;
    }
   }
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = __ZN7WebCore18pluginScriptObjectEPN3JSC9ExecStateEPNS_13JSHTMLElementE(i1, i8) | 0;
   if ((i9 | 0) == 0) {
    i12 = -4;
    i13 = 0;
    STACKTOP = i3;
    return (tempRet0 = i12, i13) | 0;
   }
   HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
   __ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE(i2, i9, i1, i7);
   i9 = i2 | 0;
   i12 = HEAP32[i9 + 4 >> 2] | 0;
   i13 = HEAP32[i9 >> 2] | 0;
   STACKTOP = i3;
   return (tempRet0 = i12, i13) | 0;
  }
 } while (0);
 i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i2 | 0) == 0;
 i12 = (i1 ? -6 : -5) | 0;
 i13 = (i1 ? 0 : 0) | i2;
 STACKTOP = i3;
 return (tempRet0 = i12, i13) | 0;
}
function __ZN7WebCore22pluginElementCustomPutEPN3JSC9ExecStateENS0_12PropertyNameENS0_7JSValueEPNS_13JSHTMLElementERNS0_15PutPropertySlotE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
 i7 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = __ZN7WebCore18pluginScriptObjectEPN3JSC9ExecStateEPNS_13JSHTMLElementE(i1, i4) | 0;
 if ((i10 | 0) == 0) {
  i11 = 0;
  STACKTOP = i6;
  return i11 | 0;
 }
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i4;
 if (!(__ZNK3JSC8JSObject11hasPropertyEPNS_9ExecStateENS_12PropertyNameE(i10, i1, i7) | 0)) {
  i11 = 0;
  STACKTOP = i6;
  return i11 | 0;
 }
 i7 = i10 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 i12 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   if ((i12 | 0) == (HEAP32[i12 >> 2] | 0)) {
    break;
   }
   _WTFCrash();
   return 0;
  }
 } while (0);
 i12 = HEAP32[(HEAP32[((HEAP32[(i10 & -65536) + 1048 >> 2] | 0) == 2 ? i10 + 8 | 0 : i2 + 32 | 0) >> 2] | 0) + 36 >> 2] | 0;
 HEAP32[i8 >> 2] = i4;
 i4 = i3 | 0;
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 i2 = i9 | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = i3;
 FUNCTION_TABLE_viiiii[i12 & 1](i7, i1, i8, i9, i5);
 i11 = 1;
 STACKTOP = i6;
 return i11 | 0;
}
function __ZN7WebCore37pluginElementCustomGetOwnPropertySlotEPN3JSC9ExecStateENS0_12PropertyNameERNS0_12PropertySlotEPNS_13JSHTMLElementE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = __ZN7WebCore18pluginScriptObjectEPN3JSC9ExecStateEPNS_13JSHTMLElementE(i1, i4) | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
  STACKTOP = i5;
  return i8 | 0;
 }
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 if (!(__ZNK3JSC8JSObject11hasPropertyEPNS_9ExecStateENS_12PropertyNameE(i7, i1, i6) | 0)) {
  i8 = 0;
  STACKTOP = i5;
  return i8 | 0;
 }
 HEAP32[i3 + 8 >> 2] = F_BASE_iiiiiii + 2;
 HEAP32[i3 >> 2] = 12;
 HEAP32[i3 + 32 >> 2] = i4;
 HEAP32[i3 + 16 >> 2] = 3;
 HEAP32[i3 + 20 >> 2] = -1;
 i8 = 1;
 STACKTOP = i5;
 return i8 | 0;
}
function _memset(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 + i3 | 0;
 if ((i3 | 0) >= 20) {
  i2 = i2 & 255;
  i5 = i1 & 3;
  i6 = i2 | i2 << 8 | i2 << 16 | i2 << 24;
  i7 = i4 & ~3;
  if (i5) {
   i5 = i1 + 4 - i5 | 0;
   while ((i1 | 0) < (i5 | 0)) {
    HEAP8[i1] = i2;
    i1 = i1 + 1 | 0;
   }
  }
  while ((i1 | 0) < (i7 | 0)) {
   HEAP32[i1 >> 2] = i6;
   i1 = i1 + 4 | 0;
  }
 }
 while ((i1 | 0) < (i4 | 0)) {
  HEAP8[i1] = i2;
  i1 = i1 + 1 | 0;
 }
 return i1 - i3 | 0;
}
function _memcpy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 | 0;
 if ((i1 & 3) == (i2 & 3)) {
  while (i1 & 3) {
   if ((i3 | 0) == 0) return i4 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
   i1 = i1 + 1 | 0;
   i2 = i2 + 1 | 0;
   i3 = i3 - 1 | 0;
  }
  while ((i3 | 0) >= 4) {
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   i1 = i1 + 4 | 0;
   i2 = i2 + 4 | 0;
   i3 = i3 - 4 | 0;
  }
 }
 while ((i3 | 0) > 0) {
  HEAP8[i1] = HEAP8[i2] | 0;
  i1 = i1 + 1 | 0;
  i2 = i2 + 1 | 0;
  i3 = i3 - 1 | 0;
 }
 return i4 | 0;
}
function copyTempDouble(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
 HEAP8[tempDoublePtr + 4 | 0] = HEAP8[i1 + 4 | 0];
 HEAP8[tempDoublePtr + 5 | 0] = HEAP8[i1 + 5 | 0];
 HEAP8[tempDoublePtr + 6 | 0] = HEAP8[i1 + 6 | 0];
 HEAP8[tempDoublePtr + 7 | 0] = HEAP8[i1 + 7 | 0];
}
function dynCall_iiiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return FUNCTION_TABLE_iiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function b2(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(2);
 return 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function _strlen(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1;
 while (HEAP8[i2] | 0) {
  i2 = i2 + 1 | 0;
 }
 return i2 - i1 | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function b5(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(5);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function setTempRet9(i1) {
 i1 = i1 | 0;
 tempRet9 = i1;
}
function setTempRet8(i1) {
 i1 = i1 | 0;
 tempRet8 = i1;
}
function setTempRet7(i1) {
 i1 = i1 | 0;
 tempRet7 = i1;
}
function setTempRet6(i1) {
 i1 = i1 | 0;
 tempRet6 = i1;
}
function setTempRet5(i1) {
 i1 = i1 | 0;
 tempRet5 = i1;
}
function setTempRet4(i1) {
 i1 = i1 | 0;
 tempRet4 = i1;
}
function setTempRet3(i1) {
 i1 = i1 | 0;
 tempRet3 = i1;
}
function setTempRet2(i1) {
 i1 = i1 | 0;
 tempRet2 = i1;
}
function setTempRet1(i1) {
 i1 = i1 | 0;
 tempRet1 = i1;
}
function setTempRet0(i1) {
 i1 = i1 | 0;
 tempRet0 = i1;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b4() {
 abort(4);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_iiiiiii = [b2,b2,__ZN7WebCore27pluginElementPropertyGetterEPN3JSC9ExecStateExxNS0_12PropertyNameE,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZN7WebCoreL10callPluginEPN3JSC9ExecStateE,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iiiii = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_iiiiiii": invoke_iiiiiii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore13JSHTMLElement6s_infoE": __ZN7WebCore13JSHTMLElement6s_infoE, "__ZN7WebCore9HTMLNames9objectTagE": __ZN7WebCore9HTMLNames9objectTagE, "__ZN7WebCore9HTMLNames8embedTagE": __ZN7WebCore9HTMLNames8embedTagE, "__ZN7WebCore9HTMLNames9appletTagE": __ZN7WebCore9HTMLNames9appletTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
// === Auto-generated postamble setup entry stuff ===
function run(args) {
  initRuntime();
}
Module['run'] = run;
// {{PRE_RUN_ADDITIONS}}
run();
// {{POST_RUN_ADDITIONS}}
  // {{MODULE_ADDITIONS}}
  return Module;
});
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore24pluginElementGetCallDataEPNS_13JSHTMLElementERN3JSC8CallDataE","_strlen","__ZN7WebCore18pluginScriptObjectEPN3JSC9ExecStateEPNS_13JSHTMLElementE","__ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore27pluginElementPropertyGetterEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE","_memset","__ZN7WebCore22pluginElementCustomPutEPN3JSC9ExecStateENS0_12PropertyNameENS0_7JSValueEPNS_13JSHTMLElementERNS0_15PutPropertySlotE","_memcpy","__ZN7WebCore37pluginElementCustomGetOwnPropertySlotEPN3JSC9ExecStateENS0_12PropertyNameERNS0_12PropertySlotEPNS_13JSHTMLElementE","__ZN7WebCore14pluginInstanceERNS_11HTMLElementE","__ZN7WebCoreL10callPluginEPN3JSC9ExecStateE","__ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_"]