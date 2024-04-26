// 클래스라는 설계도를 만들어봅시다!
class Person {
    // 우리는 사람이기 때문에 필수요소
    // name, age
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // 메서드 형태의 동사
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

// 설계도를 통해 인스턴스를(실제 사물) 만들어봅시다!
// 이름은 홍길동이고, 나이는 30살인 사람 하나를 만들어줘!!!(설계도에 근거해서!)
const person1 = new Person("홍길동", "30");
const person2 = new Person("홍길순", "25");

person1.sayHello();