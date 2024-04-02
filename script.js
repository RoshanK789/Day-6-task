//! Task 1: Movie class
/*
class movie
{
    constructor (title,studio,rating="PG")
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    static getRating(movies)
    {
        return movies.filter(movie=>movie.rating=="PG")
    }
}
console.log("question 1");
const obj=new movie("Kannur squad","mammootty company",7.6)
console.log(obj.title,obj.studio,obj.rating)
console.log(" ");
console.log("question 2");
const obj1=new movie("jailer","sun picture");
console.log(obj1.title,obj1.studio,obj1.rating);
console.log(" ");
console.log("question 3");
const movies=[
    new movie("fast&furious","universal picture",7),
    new movie("fast&furious 2","universal picture"),
    new movie("Hobbs & Shaw","universal picture",6.5),
    new movie("Despicable Me","universal picture",),
    new movie("Minions","universal picture",6.5)
]
const a=movie.getRating(movies)
console.log(a);
console.log(" ");
console.log("question 4");
const obj2=new movie("Casino Royale","Eno Production","PG13");
console.log(obj2.title,obj2.studio,obj2.rating);
*/

//! Task 2: Circle class
/*
class Circle
{
    constructor(radius,color)
    {
        this.radius=radius;
        this.color=color;
    }
    get Radius()
    {
        return this.radius;
    }
    set Radius(r)
    {
        this.radius=radius;
    }
    get Color()
    {
        return this.color;
    }
    set Color(c)
    {
        this.color=color
    }
    get tostring()
    {
        return `"Circle [radius=${this.radius},color=${this.color}]"`
    }
    get area()
    {
        return Math.pow(this.radius,2)*Math.PI;
    }
    get circumference()
    {
        return (2*Math.PI*this.radius);
    }
}
const obj=new Circle(1.0,"red");
console.log(obj.radius,obj.color);
console.log(obj.Radius);
console.log(obj.Color);
console.log(obj.tostring);
console.log(obj.area);
console.log(obj.circumference);
*/

//! Task 3: Person
/*
class person
{
    constructor(name,age,gender,maritalstatus,contact,email)
    {
        this.name=name;
        this.age=age;
        this.contact=contact;
        this.gender=gender;
        this.maritalstatus=maritalstatus;
        this.email=email;
    }
}
let obj=new person("Roshan",23,"Male","single",8825814143,"roshangym1999@gmail.com");
console.log("Name :",obj.name,",Age :",obj.age,",mailid :",obj.email,",Gender :",obj.gender,",maritalstatus :",obj.maritallstatus,",Contact :",obj.contact);
*/

//! Task 4: Uber calculation:
/*
class uberclaculation
{
    constructor(travelledkilometer,priceperkilometer)
    {
        this.travelledkilometer=travelledkilometer;
        this.priceperkilometer=priceperkilometer;
    }
    pricecalculation()
    {
        console.log("Your Uber bill is:",this.travelledkilometer*this.priceperkilometer)
    }
}
const obj=new uberclaculation(20,10);
obj.pricecalculation();
*/