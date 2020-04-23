declare const Xrm: Form.SomeContactForm;

export default class Contact {

    public static onLoad() {
        Xrm.Page.getAttribute("firstname").setValue("Bob");
    }
}