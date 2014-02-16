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

#if ENABLE(WEB_TIMING)

#include "JSPerformanceNavigation.h"

#include "PerformanceNavigation.h"
#include <wtf/GetPtr.h>

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSPerformanceNavigationTableValues[] =
{
    { "type", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceNavigationType), (intptr_t)0 },
    { "redirectCount", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceNavigationRedirectCount), (intptr_t)0 },
    { "constructor", DontEnum | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceNavigationConstructor), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSPerformanceNavigationTable = { 9, 7, JSPerformanceNavigationTableValues, 0 };
/* Hash table for constructor */

static const HashTableValue JSPerformanceNavigationConstructorTableValues[] =
{
    { "TYPE_NAVIGATE", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceNavigationTYPE_NAVIGATE), (intptr_t)0 },
    { "TYPE_RELOAD", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceNavigationTYPE_RELOAD), (intptr_t)0 },
    { "TYPE_BACK_FORWARD", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceNavigationTYPE_BACK_FORWARD), (intptr_t)0 },
    { "TYPE_RESERVED", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceNavigationTYPE_RESERVED), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSPerformanceNavigationConstructorTable = { 9, 7, JSPerformanceNavigationConstructorTableValues, 0 };

COMPILE_ASSERT(0 == PerformanceNavigation::TYPE_NAVIGATE, PerformanceNavigationEnumTYPE_NAVIGATEIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(1 == PerformanceNavigation::TYPE_RELOAD, PerformanceNavigationEnumTYPE_RELOADIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(2 == PerformanceNavigation::TYPE_BACK_FORWARD, PerformanceNavigationEnumTYPE_BACK_FORWARDIsWrongUseDoNotCheckConstants);
COMPILE_ASSERT(255 == PerformanceNavigation::TYPE_RESERVED, PerformanceNavigationEnumTYPE_RESERVEDIsWrongUseDoNotCheckConstants);

const ClassInfo JSPerformanceNavigationConstructor::s_info = { "PerformanceNavigationConstructor", &Base::s_info, &JSPerformanceNavigationConstructorTable, 0, CREATE_METHOD_TABLE(JSPerformanceNavigationConstructor) };

JSPerformanceNavigationConstructor::JSPerformanceNavigationConstructor(Structure* structure, JSDOMGlobalObject* globalObject)
    : DOMConstructorObject(structure, globalObject)
{
}

void JSPerformanceNavigationConstructor::finishCreation(VM& vm, JSDOMGlobalObject* globalObject)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
    putDirect(vm, vm.propertyNames->prototype, JSPerformanceNavigationPrototype::self(vm, globalObject), DontDelete | ReadOnly);
    putDirect(vm, vm.propertyNames->length, jsNumber(0), ReadOnly | DontDelete | DontEnum);
}

bool JSPerformanceNavigationConstructor::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    return getStaticValueSlot<JSPerformanceNavigationConstructor, JSDOMWrapper>(exec, JSPerformanceNavigationConstructorTable, jsCast<JSPerformanceNavigationConstructor*>(object), propertyName, slot);
}

/* Hash table for prototype */

static const HashTableValue JSPerformanceNavigationPrototypeTableValues[] =
{
    { "TYPE_NAVIGATE", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceNavigationTYPE_NAVIGATE), (intptr_t)0 },
    { "TYPE_RELOAD", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceNavigationTYPE_RELOAD), (intptr_t)0 },
    { "TYPE_BACK_FORWARD", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceNavigationTYPE_BACK_FORWARD), (intptr_t)0 },
    { "TYPE_RESERVED", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsPerformanceNavigationTYPE_RESERVED), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSPerformanceNavigationPrototypeTable = { 9, 7, JSPerformanceNavigationPrototypeTableValues, 0 };
const ClassInfo JSPerformanceNavigationPrototype::s_info = { "PerformanceNavigationPrototype", &Base::s_info, &JSPerformanceNavigationPrototypeTable, 0, CREATE_METHOD_TABLE(JSPerformanceNavigationPrototype) };

JSObject* JSPerformanceNavigationPrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSPerformanceNavigation>(vm, globalObject);
}

bool JSPerformanceNavigationPrototype::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSPerformanceNavigationPrototype* thisObject = jsCast<JSPerformanceNavigationPrototype*>(object);
    return getStaticValueSlot<JSPerformanceNavigationPrototype, JSObject>(exec, JSPerformanceNavigationPrototypeTable, thisObject, propertyName, slot);
}

const ClassInfo JSPerformanceNavigation::s_info = { "PerformanceNavigation", &Base::s_info, &JSPerformanceNavigationTable, 0 , CREATE_METHOD_TABLE(JSPerformanceNavigation) };

JSPerformanceNavigation::JSPerformanceNavigation(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<PerformanceNavigation> impl)
    : JSDOMWrapper(structure, globalObject)
    , m_impl(impl.leakRef())
{
}

void JSPerformanceNavigation::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSPerformanceNavigation::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSPerformanceNavigationPrototype::create(vm, globalObject, JSPerformanceNavigationPrototype::createStructure(vm, globalObject, globalObject->objectPrototype()));
}

void JSPerformanceNavigation::destroy(JSC::JSCell* cell)
{
    JSPerformanceNavigation* thisObject = static_cast<JSPerformanceNavigation*>(cell);
    thisObject->JSPerformanceNavigation::~JSPerformanceNavigation();
}

JSPerformanceNavigation::~JSPerformanceNavigation()
{
    releaseImplIfNotNull();
}

bool JSPerformanceNavigation::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSPerformanceNavigation* thisObject = jsCast<JSPerformanceNavigation*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    return getStaticValueSlot<JSPerformanceNavigation, Base>(exec, JSPerformanceNavigationTable, thisObject, propertyName, slot);
}

EncodedJSValue jsPerformanceNavigationType(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSPerformanceNavigation* castedThis = jsDynamicCast<JSPerformanceNavigation*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    PerformanceNavigation& impl = castedThis->impl();
    JSValue result = jsNumber(impl.type());
    return JSValue::encode(result);
}


EncodedJSValue jsPerformanceNavigationRedirectCount(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSPerformanceNavigation* castedThis = jsDynamicCast<JSPerformanceNavigation*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    PerformanceNavigation& impl = castedThis->impl();
    JSValue result = jsNumber(impl.redirectCount());
    return JSValue::encode(result);
}


EncodedJSValue jsPerformanceNavigationConstructor(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue, PropertyName)
{
    JSPerformanceNavigation* domObject = jsDynamicCast<JSPerformanceNavigation*>(JSValue::decode(thisValue));
    if (!domObject)
        return throwVMTypeError(exec);
    if (!domObject)
        return throwVMTypeError(exec);
    return JSValue::encode(JSPerformanceNavigation::getConstructor(exec->vm(), domObject->globalObject()));
}

JSValue JSPerformanceNavigation::getConstructor(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMConstructor<JSPerformanceNavigationConstructor>(vm, jsCast<JSDOMGlobalObject*>(globalObject));
}

// Constant getters

EncodedJSValue jsPerformanceNavigationTYPE_NAVIGATE(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(0)));
}

EncodedJSValue jsPerformanceNavigationTYPE_RELOAD(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(1)));
}

EncodedJSValue jsPerformanceNavigationTYPE_BACK_FORWARD(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(2)));
}

EncodedJSValue jsPerformanceNavigationTYPE_RESERVED(ExecState* exec, EncodedJSValue, EncodedJSValue, PropertyName)
{
    UNUSED_PARAM(exec);
    return JSValue::encode(jsNumber(static_cast<int>(255)));
}

bool JSPerformanceNavigationOwner::isReachableFromOpaqueRoots(JSC::Handle<JSC::Unknown> handle, void*, SlotVisitor& visitor)
{
    UNUSED_PARAM(handle);
    UNUSED_PARAM(visitor);
    return false;
}

void JSPerformanceNavigationOwner::finalize(JSC::Handle<JSC::Unknown> handle, void* context)
{
    JSPerformanceNavigation* jsPerformanceNavigation = jsCast<JSPerformanceNavigation*>(handle.get().asCell());
    DOMWrapperWorld& world = *static_cast<DOMWrapperWorld*>(context);
    uncacheWrapper(world, &jsPerformanceNavigation->impl(), jsPerformanceNavigation);
    jsPerformanceNavigation->releaseImpl();
}

#if ENABLE(BINDING_INTEGRITY)
#if PLATFORM(WIN)
#pragma warning(disable: 4483)
extern "C" { extern void (*const __identifier("??_7PerformanceNavigation@WebCore@@6B@")[])(); }
#else
extern "C" { extern void* _ZTVN7WebCore21PerformanceNavigationE[]; }
#endif
#endif
JSC::JSValue toJS(JSC::ExecState* exec, JSDOMGlobalObject* globalObject, PerformanceNavigation* impl)
{
    if (!impl)
        return jsNull();
    if (JSValue result = getExistingWrapper<JSPerformanceNavigation>(exec, impl))
        return result;

#if ENABLE(BINDING_INTEGRITY)
    void* actualVTablePointer = *(reinterpret_cast<void**>(impl));
#if PLATFORM(WIN)
    void* expectedVTablePointer = reinterpret_cast<void*>(__identifier("??_7PerformanceNavigation@WebCore@@6B@"));
#else
    void* expectedVTablePointer = &_ZTVN7WebCore21PerformanceNavigationE[2];
#if COMPILER(CLANG)
    // If this fails PerformanceNavigation does not have a vtable, so you need to add the
    // ImplementationLacksVTable attribute to the interface definition
    COMPILE_ASSERT(__is_polymorphic(PerformanceNavigation), PerformanceNavigation_is_not_polymorphic);
#endif
#endif
    // If you hit this assertion you either have a use after free bug, or
    // PerformanceNavigation has subclasses. If PerformanceNavigation has subclasses that get passed
    // to toJS() we currently require PerformanceNavigation you to opt out of binding hardening
    // by adding the SkipVTableValidation attribute to the interface IDL definition
    RELEASE_ASSERT(actualVTablePointer == expectedVTablePointer);
#endif
    ReportMemoryCost<PerformanceNavigation>::reportMemoryCost(exec, impl);
    return createNewWrapper<JSPerformanceNavigation>(exec, globalObject, impl);
}

PerformanceNavigation* toPerformanceNavigation(JSC::JSValue value)
{
    return value.inherits(JSPerformanceNavigation::info()) ? &jsCast<JSPerformanceNavigation*>(value)->impl() : 0;
}

}

#endif // ENABLE(WEB_TIMING)