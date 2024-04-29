// Test

// [요구사항]
// 1. Car라는 새로운 클래스를 만들되, 처름 객체를 만들 때는
// 다음 네개의 값이 필수로 입력돼야 합니다!
//      (1) modelName
//      (2) modelYear
//      (3) type
//      (4) price
// 2. makeNoise() 메서드를 만들어 클락션을 출력해주세요.
// 3. 이후 자동차를 3개 정도 만들어주세요(객체 생성)

class Car {
    constructor(modelName, modelYear, type, price) {
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.type = type;
        this.price = price;
    }

    // 클락션 울리게 하는거
    makeNoise() {
        console.log(`${this.modelName}: 빵!`);
    }
    
    printType() {
        console.log(`${this.type}`);
    }

}

// 자동차 만들기
const car1 = new Car("BMW 320d", "2021", "3", "7000");
car1.makeNoise();
const car2 = new Car("Benz", "2002", "S", "1.1");
car2.makeNoise();
const car3 = new Car("Hyundai", "2002", "Ioniq 6", "4000");
car3.makeNoise();