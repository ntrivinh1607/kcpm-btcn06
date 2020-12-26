const Triangle = require('./Triangle.js');
const Point = require('./Point.js');
//Kiểm tra phương thức tính khoảng cách 2 điểm A, B của lớp Point và bằng 5
const A = new Point(1, 5);
const B = new Point(1, 0);
test('Kiểm tra phương thức tính khoảng cách 2 điểm A, B của lớp Point và bằng 5', () => {
    expect(Point.distance(A, B)).toBe(5);
});

// Tam giác vuông cân 
const p1 = new Point(0, 0);
const p2 = new Point(0, 5);
const p3 = new Point(5, 5);
const tri1 = new Triangle(p1, p2, p3);
test('Kiểm tra phương thức phân loại với tam giác vuông cân', () => {
    expect(tri1.classify()).toStrictEqual({ code: 1, message: 'Tam giác vuông cân' });
});
test('Kiểm tra tam giác có vuông cân trên với chu vi là 17.071067811865476', () => {
    expect(tri1.perimeter()).toBe(17.071067811865476);
});

// Tam giác vuông có chiều dài 3 cạnh là số nguyên.
const p1_1 = new Point(0, 3);
const p2_1 = new Point(4, 3);
const p3_1 = new Point(0, 0);
const tri1_1 = new Triangle(p1_1, p2_1, p3_1);
test('Kiểm tra phương thức phân loại với tam giác vuông"', () => {
    expect(tri1_1.classify()).toStrictEqual({ code: 1, message: 'Tam giác vuông' });
});
test('Kiểm tra phương thức tính chu vi tam giác vuông trên có chu vi là số nguyên', () => {
    expect(tri1_1.perimeter()).toBe(12);
});

//Tam giác đều
const p4 = new Point(2, 1);
const p5 = new Point(7, 1);
const p6 = new Point(4.5, 5.33012701892);
const tri2 = new Triangle(p4, p5, p6);
test('Kiểm tra phương thức phân loại với tam giác đều', () => {
    expect(tri2.classify()).toStrictEqual({ code: 2, message: 'Tam giác đều' });
});
test('Kiểm tra phương thức tính chu vi của tam giác đều', () => {
    expect(tri2.perimeter()).toBe(15);
});

//Tam giác cân
const p7 = new Point(5, 5);
const p8 = new Point(10, 10);
const p9 = new Point(15, 5);
const tri3 = new Triangle(p7, p8, p9);
test('Kiểm tra phương thức phân loại với tam giác cân', () => {
    expect(tri3.classify()).toStrictEqual({ code: 3, message: 'Tam giác cân' });
});
test('Kiểm tra phương thức tính chu vi của tam giác cân', () => {
    expect(tri3.perimeter()).toBe(24.14213562373095);
});

//Tam giác tù
const p10 = new Point(1, 1);
const p11 = new Point(2, 2);
const p12 = new Point(0, 1);
const tri4 = new Triangle(p10, p11, p12);
test('Kiểm tra phương thức phân loại với tam giác tù', () => {
    expect(tri4.classify()).toStrictEqual({ code: 4, message: 'Tam giác tù' });
});
test('Kiểm tra phương thức tính chu vi của tam giác tù', () => {
    expect(tri4.perimeter()).toBe(4.650281539872885);
});

//Tam giác nhọn
const p13 = new Point(-2.5, 3);
const p14 = new Point(1, 1);
const p15 = new Point(-3, -2);
const tri5 = new Triangle(p13, p14, p15);
test('Kiểm tra phương thức phân loại với tam giác nhọn', () => {
    expect(tri5.classify()).toStrictEqual({ code: 5, message: 'Tam giác nhọn' });
});
test('Kiểm tra phương thức tính chu vi của tam giác nhọn', () => {
    expect(tri5.perimeter()).toBe(14.05606668470972);
});

// Khong phai tam giac
const p16 = new Point(1, 1);
const p17 = new Point(2, 2);
const p18 = new Point(0, 0);
const tri6 = new Triangle(p16, p17, p18);
test('Kiểm tra phương thức phân loại với trường hợp 3 cạnh không tạo thành tam giác', () => {
    expect(tri6.classify()).toStrictEqual({ code: 0, message: 'Không phải tam giác' });
});
test('Kiểm tra phương thức tính chu vi với trường hợp 3 cạnh không tạo thành tam giác', () => {
    expect(tri6.perimeter()).toBe('Không phải tam giác');
});