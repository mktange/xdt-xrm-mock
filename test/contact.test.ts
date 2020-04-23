import Contact from "../src/contact";
import { XrmMockGenerator } from "xrm-mock";

declare const Xrm: Form.SomeContactForm;

describe("Contact", () => {
    beforeEach(() => {
        XrmMockGenerator.initialise();
        XrmMockGenerator.Attribute.createString("firstname", "Joe");
    });

    it("should initially be called Joe", () => {
        let name = Xrm.Page.getAttribute("firstname").getValue();
        expect(name).toBe("Joe"); // Pass
    });

    it("should change name to Bob onLoad", () => {
        Contact.onLoad();
        let name = Xrm.Page.getAttribute("firstname").getValue();
        expect(name).toBe("Bob"); // Pass
    });
});