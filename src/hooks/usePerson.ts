class PersonClass{
    public name; // 公开属性
    private password; // 私有属性

    constructor(name: string, pass: number){
        console.log('person cto')
        this.name = name;
        this.password = pass;
    }

    checkPassword(){
        console.log('checkPassword', this.password)
    }
}


class Car{
    private name;
    private year;
    constructor(name: string, year:number){
        this.name = name;
        this.year = year
    }
    getAge(){
        const date = new Date();
        return date.getFullYear() - this.year
    }
}

export {
    PersonClass,
    Car
}