class parent{
    constructor(name,age)
    {
            this.parentname=name;
            this.parentage=age;

    }
    getname(){
        console.log(`NAME: ${this.parentname}`)
        console.log(`AGE: ${this.parentage}`)
    }
}

class child extends parent{
    constructor(name,age,id,gender)
    {
        super(name,age)

        this.stuname=name
        this.stuage=age
        this.stuid=id
        this.stugender=gender
        
        
    }
    getstu()
        {
             console.log(`NAME: ${this.stuname}`)
             console.log(`AGE: ${this.stuage}`)
             console.log(`id: ${this.stuid}`)
             console.log(`stugender: ${this.stugender}`)
        }
    
}

var parent1=new child('XYZ',45)
parent1.getname()


var child2=new child('Dhruv',20,185,'male')
child2.getstu()


