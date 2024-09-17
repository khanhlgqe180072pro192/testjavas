// Làm Việc Với String
// var myString = '  Hoc JS tai F8!   ';
// 1.Length: Đếm độ dài
// console.log(myString.length)
// 2. Find index: Tìm vị trí từ trong chuỗi
// console.log(myString.indexOf('JS'))
// 3. Cut string: Cắt chuỗi
// console.log(myString.slice(-3, -1))
// 4.Replace: Ghi Đè
// console.log(myString.replace(/JS/g, 'Javascript'))
// 5. Convert to UPPER case: chuyển đổi thành chữ in hoa
// console.log(myString.toUpperCase())
// 6. Convert to LOWER case: chuyển dổi thành chứ thường
// console.log(myString.toLowerCase())
// 7. Trim: Loại bỏ kí tự khoảng trắng thừa
// console.log(myString.trim().length)
// 8. Split: Cắt 1 chuối thành 1 mảng
// var languages = 'Javascript';
// console.log(languages.split(''))
// 9. Get a character by index: Lấy 1 kí tự bởi index
// console.log(myString[10])

//Làm Việc Với Array

// var languages = [
//     'Js',
//     'PHP',
//     'Ruby',
// ];
// var languages2 = [
//     'Dart',
//     'Ruby',
// ];

//pop(): xóa elements cuối mảng và trả về phần tử đã xóa
// console.log(languages.pop())
// console.log(languages)
//push(): thêm phần tử vào cuối mảng
//shift(): xóa phần tử đầu và trả về giá trị 
//unshift(): thêm 1 hoặc nhiều phàn từ vào đầu mảng và trả về độ dài
//splice(ví trí, số phần tử xóa, chèn phần tử vào): xóa hoặc chèn phần tử vào mảng
// languages.splice(1, 1, 'Dart')
//concat: nối mảng
//slice(): cắt mảng

//OBJECT

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// User.prototype.className = 'F8';
// User.prototype.getClassName = function() {
//     return this.className;
// }

// var user = new User('Khanh', 'Gia', ' Avatar 1');
// var user2 = new User('Vu', 'Nguyen', ' Avatar 2');


// console.log(user.className);
// console.log(user2.getClassName());

var date = 2;

if (date === 1) {
    console.log('Hom nay la thu 2');
} else if (date>0) {
    console.log('Hom nay la thu 3')
} else {
    console.log('Hom nay la thu 4')
}


