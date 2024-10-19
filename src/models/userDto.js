
class UserDto{
    constructor(
        dni,
        name,
        lastname,
        emailAddress,
        phonoNumber,
        credentials
    ){
        this.dni = dni;
        this.name = name;
        this.lastname = lastname;
        this.emailAddress = emailAddress;
        this.phonoNumber = phonoNumber;
        this.credentials = credentials
    }
}

export default UserDto;
