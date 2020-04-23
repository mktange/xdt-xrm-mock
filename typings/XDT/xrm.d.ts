// XDT-like typings
declare namespace Xrm {

    interface Attribute<T> {
        setValue(val: T): void;
        getValue(): T;
    }

    interface Page {
        getAttribute(attr: "firstname"): Attribute<string>;
        getAttribute(attr: string): undefined;
    }
}

declare namespace Form {
    interface SomeContactForm {
        Page: Xrm.Page;
    }
}