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

    // width를 위한 getter
    get width() {
        return this.width;
    }
    // width를 위한 setter
    set width(value) {
        // 검증 1 : value가 음수이면 오류!
        if (value <= 0) {
            // 
            console.log('[오류] 가로길이는 0보다 커야 합니다!')
        } else if (typeof value !== number) {
            console.log('[오류] 가로길이로 입력된 값이 숫자타입이 아닙니다!')
        }
        this.width = value;
    }
    // height를 위한 getter
    get height() {
        return this.height;

    }
    // height를 위한 setter
    set height(value) {
        this.height = value;
    }
}

// instance 생성
// const rect1 = new Rectangle(10, 20);
// const rect2 = new Rectangle(10, 30);
// const rect3 = new Rectangle(15, 20);