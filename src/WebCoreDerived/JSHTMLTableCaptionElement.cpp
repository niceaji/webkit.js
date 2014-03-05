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
#include "JSHTMLTableCaptionElement.h"

#include "HTMLNames.h"
#include "HTMLTableCaptionElement.h"
#include "URL.h"
#include <runtime/JSString.h>
#include <wtf/GetPtr.h>

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSHTMLTableCaptionElementTableValues[] =
{
    { "align", DontDelete, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsHTMLTableCaptionElementAlign), (intptr_t)setJSHTMLTableCaptionElementAlign },
    { "constructor", DontEnum | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsHTMLTableCaptionElementConstructor), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSHTMLTableCaptionElementTable = { 5, 3, JSHTMLTableCaptionElementTableValues, 0 };
/* Hash table for constructor */

static const HashTableValue JSHTMLTableCaptionElementConstructorTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSHTMLTableCaptionElementConstructorTable = { 1, 0, JSHTMLTableCaptionElementConstructorTableValues, 0 };
const ClassInfo JSHTMLTableCaptionElementConstructor::s_info = { "HTMLTableCaptionElementConstructor", &Base::s_info, &JSHTMLTableCaptionElementConstructorTable, 0, CREATE_METHOD_TABLE(JSHTMLTableCaptionElementConstructor) };

JSHTMLTableCaptionElementConstructor::JSHTMLTableCaptionElementConstructor(Structure* structure, JSDOMGlobalObject* globalObject)
    : DOMConstructorObject(structure, globalObject)
{
}

void JSHTMLTableCaptionElementConstructor::finishCreation(VM& vm, JSDOMGlobalObject* globalObject)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
    putDirect(vm, vm.propertyNames->prototype, JSHTMLTableCaptionElementPrototype::self(vm, globalObject), DontDelete | ReadOnly);
    putDirect(vm, vm.propertyNames->length, jsNumber(0), ReadOnly | DontDelete | DontEnum);
}

bool JSHTMLTableCaptionElementConstructor::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    return getStaticValueSlot<JSHTMLTableCaptionElementConstructor, JSDOMWrapper>(exec, JSHTMLTableCaptionElementConstructorTable, jsCast<JSHTMLTableCaptionElementConstructor*>(object), propertyName, slot);
}

/* Hash table for prototype */

static const HashTableValue JSHTMLTableCaptionElementPrototypeTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSHTMLTableCaptionElementPrototypeTable = { 1, 0, JSHTMLTableCaptionElementPrototypeTableValues, 0 };
const ClassInfo JSHTMLTableCaptionElementPrototype::s_info = { "HTMLTableCaptionElementPrototype", &Base::s_info, &JSHTMLTableCaptionElementPrototypeTable, 0, CREATE_METHOD_TABLE(JSHTMLTableCaptionElementPrototype) };

JSObject* JSHTMLTableCaptionElementPrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSHTMLTableCaptionElement>(vm, globalObject);
}

const ClassInfo JSHTMLTableCaptionElement::s_info = { "HTMLTableCaptionElement", &Base::s_info, &JSHTMLTableCaptionElementTable, 0 , CREATE_METHOD_TABLE(JSHTMLTableCaptionElement) };

JSHTMLTableCaptionElement::JSHTMLTableCaptionElement(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<HTMLTableCaptionElement> impl)
    : JSHTMLElement(structure, globalObject, impl)
{
}

void JSHTMLTableCaptionElement::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSHTMLTableCaptionElement::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSHTMLTableCaptionElementPrototype::create(vm, globalObject, JSHTMLTableCaptionElementPrototype::createStructure(vm, globalObject, JSHTMLElementPrototype::self(vm, globalObject)));
}

bool JSHTMLTableCaptionElement::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSHTMLTableCaptionElement* thisObject = jsCast<JSHTMLTableCaptionElement*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    return getStaticValueSlot<JSHTMLTableCaptionElement, Base>(exec, JSHTMLTableCaptionElementTable, thisObject, propertyName, slot);
}

EncodedJSValue jsHTMLTableCaptionElementAlign(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSHTMLTableCaptionElement* castedThis = jsDynamicCast<JSHTMLTableCaptionElement*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    HTMLTableCaptionElement& impl = castedThis->impl();
    JSValue result = jsStringWithCache(exec, impl.fastGetAttribute(WebCore::HTMLNames::alignAttr));
    return JSValue::encode(result);
}


EncodedJSValue jsHTMLTableCaptionElementConstructor(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue, PropertyName)
{
    JSHTMLTableCaptionElement* domObject = jsDynamicCast<JSHTMLTableCaptionElement*>(JSValue::decode(thisValue));
    if (!domObject)
        return throwVMTypeError(exec);
    if (!domObject)
        return throwVMTypeError(exec);
    return JSValue::encode(JSHTMLTableCaptionElement::getConstructor(exec->vm(), domObject->globalObject()));
}

void JSHTMLTableCaptionElement::put(JSCell* cell, ExecState* exec, PropertyName propertyName, JSValue value, PutPropertySlot& slot)
{
    JSHTMLTableCaptionElement* thisObject = jsCast<JSHTMLTableCaptionElement*>(cell);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    lookupPut<JSHTMLTableCaptionElement, Base>(exec, propertyName, value, JSHTMLTableCaptionElementTable, thisObject, slot);
}

void setJSHTMLTableCaptionElementAlign(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue encodedValue)
{
    JSValue value = JSValue::decode(encodedValue);
    UNUSED_PARAM(exec);
    JSHTMLTableCaptionElement* castedThis = jsDynamicCast<JSHTMLTableCaptionElement*>(JSValue::decode(thisValue));
    if (!castedThis) {
        throwVMTypeError(exec);
        return;
    }
    HTMLTableCaptionElement& impl = castedThis->impl();
    const String& nativeValue(valueToStringWithNullCheck(exec, value));
    if (exec->hadException())
        return;
    impl.setAttribute(WebCore::HTMLNames::alignAttr, nativeValue);
}


JSValue JSHTMLTableCaptionElement::getConstructor(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMConstructor<JSHTMLTableCaptionElementConstructor>(vm, jsCast<JSDOMGlobalObject*>(globalObject));
}

HTMLTableCaptionElement* toHTMLTableCaptionElement(JSC::JSValue value)
{
    return value.inherits(JSHTMLTableCaptionElement::info()) ? &jsCast<JSHTMLTableCaptionElement*>(value)->impl() : 0;
}

}