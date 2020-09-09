
enum Role {ADMIN=1,READ_ONLY=2,AUTHOR=3}

const person:{
    name:string,
    age:number,
    hobbies:string[],
    role: Role
} ={
    name:'Chen Gao' ,
    age:40,
    hobbies:['sports','reading'],
    role:Role
}

let favoriteActivities :string[]

favoriteActivities=['sports','reading','studying']

favoriteActivities.map((fact)=>{
    console.log ('indiviual activity:',fact)
})

person.hobbies.map(hobby=>console.log('indivial hobby',hobby))
person.role[1] = 'Programmer'
console.log('role is',person.role)