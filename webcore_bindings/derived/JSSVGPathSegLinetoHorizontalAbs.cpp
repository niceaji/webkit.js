/*
    This file is part of the WebKit open source project.
    This file has been generated by generate-bindings.pl. DO NOT MODIFY!

    This library is free software; you can redistribute it and/or
    modify it under the terms of the GNU Library General Public
    License as published by the Free Software Foundation; either
    version 2 of the License, or (at your option) any later version.

    This library is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
    Library General Public License for more details.

    You should have received a copy of the GNU Library General Public License
    along with this library; see the file COPYING.LIB.  If not, write to
    the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
    Boston, MA 02110-1301, USA.
*/

#include "config.h"

#if ENABLE(SVG)

#include "JSSVGPathSegLinetoHorizontalAbs.h"

#include "SVGPathSegLinetoHorizontalAbs.h"
#include <runtime/Error.h>
#include <wtf/GetPtr.h>

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSSVGPathSegLinetoHorizontalAbsTableValues[] =
{
    { "x", DontDelete, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGPathSegLinetoHorizontalAbsX), (intptr_t)setJSSVGPathSegLinetoHorizontalAbsX },
    { "constructor", DontEnum | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGPathSegLinetoHorizontalAbsConstructor), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSVGPathSegLinetoHorizontalAbsTable = { 5, 3, JSSVGPathSegLinetoHorizontalAbsTableValues, 0 };
/* Hash table for constructor */

static const HashTableValue JSSVGPathSegLinetoHorizontalAbsConstructorTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSVGPathSegLinetoHorizontalAbsConstructorTable = { 1, 0, JSSVGPathSegLinetoHorizontalAbsConstructorTableValues, 0 };
const ClassInfo JSSVGPathSegLinetoHorizontalAbsConstructor::s_info = { "SVGPathSegLinetoHorizontalAbsConstructor", &Base::s_info, &JSSVGPathSegLinetoHorizontalAbsConstructorTable, 0, CREATE_METHOD_TABLE(JSSVGPathSegLinetoHorizontalAbsConstructor) };

JSSVGPathSegLinetoHorizontalAbsConstructor::JSSVGPathSegLinetoHorizontalAbsConstructor(Structure* structure, JSDOMGlobalObject* globalObject)
    : DOMConstructorObject(structure, globalObject)
{
}

void JSSVGPathSegLinetoHorizontalAbsConstructor::finishCreation(VM& vm, JSDOMGlobalObject* globalObject)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
    putDirect(vm, vm.propertyNames->prototype, JSSVGPathSegLinetoHorizontalAbsPrototype::self(vm, globalObject), DontDelete | ReadOnly);
    putDirect(vm, vm.propertyNames->length, jsNumber(0), ReadOnly | DontDelete | DontEnum);
}

bool JSSVGPathSegLinetoHorizontalAbsConstructor::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    return getStaticValueSlot<JSSVGPathSegLinetoHorizontalAbsConstructor, JSDOMWrapper>(exec, JSSVGPathSegLinetoHorizontalAbsConstructorTable, jsCast<JSSVGPathSegLinetoHorizontalAbsConstructor*>(object), propertyName, slot);
}

/* Hash table for prototype */

static const HashTableValue JSSVGPathSegLinetoHorizontalAbsPrototypeTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSVGPathSegLinetoHorizontalAbsPrototypeTable = { 1, 0, JSSVGPathSegLinetoHorizontalAbsPrototypeTableValues, 0 };
const ClassInfo JSSVGPathSegLinetoHorizontalAbsPrototype::s_info = { "SVGPathSegLinetoHorizontalAbsPrototype", &Base::s_info, &JSSVGPathSegLinetoHorizontalAbsPrototypeTable, 0, CREATE_METHOD_TABLE(JSSVGPathSegLinetoHorizontalAbsPrototype) };

JSObject* JSSVGPathSegLinetoHorizontalAbsPrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSSVGPathSegLinetoHorizontalAbs>(vm, globalObject);
}

const ClassInfo JSSVGPathSegLinetoHorizontalAbs::s_info = { "SVGPathSegLinetoHorizontalAbs", &Base::s_info, &JSSVGPathSegLinetoHorizontalAbsTable, 0 , CREATE_METHOD_TABLE(JSSVGPathSegLinetoHorizontalAbs) };

JSSVGPathSegLinetoHorizontalAbs::JSSVGPathSegLinetoHorizontalAbs(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<SVGPathSegLinetoHorizontalAbs> impl)
    : JSSVGPathSeg(structure, globalObject, impl)
{
}

void JSSVGPathSegLinetoHorizontalAbs::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSSVGPathSegLinetoHorizontalAbs::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSSVGPathSegLinetoHorizontalAbsPrototype::create(vm, globalObject, JSSVGPathSegLinetoHorizontalAbsPrototype::createStructure(vm, globalObject, JSSVGPathSegPrototype::self(vm, globalObject)));
}

bool JSSVGPathSegLinetoHorizontalAbs::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSSVGPathSegLinetoHorizontalAbs* thisObject = jsCast<JSSVGPathSegLinetoHorizontalAbs*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    return getStaticValueSlot<JSSVGPathSegLinetoHorizontalAbs, Base>(exec, JSSVGPathSegLinetoHorizontalAbsTable, thisObject, propertyName, slot);
}

EncodedJSValue jsSVGPathSegLinetoHorizontalAbsX(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSSVGPathSegLinetoHorizontalAbs* castedThis = jsDynamicCast<JSSVGPathSegLinetoHorizontalAbs*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    SVGPathSegLinetoHorizontalAbs& impl = castedThis->impl();
    JSValue result = jsNumber(impl.x());
    return JSValue::encode(result);
}


EncodedJSValue jsSVGPathSegLinetoHorizontalAbsConstructor(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue, PropertyName)
{
    JSSVGPathSegLinetoHorizontalAbs* domObject = jsDynamicCast<JSSVGPathSegLinetoHorizontalAbs*>(JSValue::decode(thisValue));
    if (!domObject)
        return throwVMTypeError(exec);
    if (!domObject)
        return throwVMTypeError(exec);
    return JSValue::encode(JSSVGPathSegLinetoHorizontalAbs::getConstructor(exec->vm(), domObject->globalObject()));
}

void JSSVGPathSegLinetoHorizontalAbs::put(JSCell* cell, ExecState* exec, PropertyName propertyName, JSValue value, PutPropertySlot& slot)
{
    JSSVGPathSegLinetoHorizontalAbs* thisObject = jsCast<JSSVGPathSegLinetoHorizontalAbs*>(cell);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    lookupPut<JSSVGPathSegLinetoHorizontalAbs, Base>(exec, propertyName, value, JSSVGPathSegLinetoHorizontalAbsTable, thisObject, slot);
}

void setJSSVGPathSegLinetoHorizontalAbsX(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue encodedValue)
{
    JSValue value = JSValue::decode(encodedValue);
    UNUSED_PARAM(exec);
    JSSVGPathSegLinetoHorizontalAbs* castedThis = jsDynamicCast<JSSVGPathSegLinetoHorizontalAbs*>(JSValue::decode(thisValue));
    if (!castedThis) {
        throwVMTypeError(exec);
        return;
    }
    SVGPathSegLinetoHorizontalAbs& impl = castedThis->impl();
    float nativeValue(value.toFloat(exec));
    if (exec->hadException())
        return;
    impl.setX(nativeValue);
}


JSValue JSSVGPathSegLinetoHorizontalAbs::getConstructor(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMConstructor<JSSVGPathSegLinetoHorizontalAbsConstructor>(vm, jsCast<JSDOMGlobalObject*>(globalObject));
}


}

#endif // ENABLE(SVG)