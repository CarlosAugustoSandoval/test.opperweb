export default class UserRegister {
    static create(IUserRegister = null) {
        if (IUserRegister) {
            const {
                id = null,
                type_user_id = null,
                name = null,
                lastname = null,
                telephone = null,
                identy_document = null,
                NIT = null,
                razon_social = null,
                email = null,
                password = null,
                password_confirmation = null,
            } = IUserRegister

            return new this(id, type_user_id, name, lastname, telephone, identy_document, NIT, razon_social, email, password, password_confirmation)
        }

        return new this( null,2,null,null,null,null,null,null,null,null,null)
    }

    constructor(id, type_user_id, name, lastname, telephone, identy_document, NIT, razon_social, email, password, password_confirmation) {
        this.id = id
        this.type_user_id = type_user_id
        this.name = name
        this.lastname = lastname
        this.telephone = telephone
        this.identy_document = identy_document
        this.NIT = NIT
        this.razon_social = razon_social
        this.email = email
        this.password = password
        this.password_confirmation = password_confirmation
    }
}