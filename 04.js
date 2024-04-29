// Getter와 Setters
// 객체지향 프로그래밍 언어 -> G, S
// 클래스 --> 객체(인스턴스)
// 프로퍼티(Constructor)
// new Class(a, b, c)

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// instance 생성
const rect1 = new Rectangle(10, 20);
const rect2 = new Rectangle(10, 30);
const rect3 = new Rectangle(15, 20);