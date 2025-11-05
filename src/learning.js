// teamplate literals use back-ticks(``)
// unshift add item with index = 0(add first), add vao dau 
// spread voi obj thuoc tinh se bi de khi su dung
// push add vao cuoi
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [...arr1, ...arr2]
console.log(...arr1)
console.log(arr3)
// destructing 
// without destructing
const person = { name: 'thai', age: 20, address: 'tphcm' }
console.log(person.name, person.age)
// with destructing
const { name, age } = person
console.log(name, age)
const { address: diaChi } = person
console.log(diaChi)
//destructing voi array phai chu y den index, con voi obj thi khong chi can dung thuoc tinh cua obj
const numbers = [1, 2, 3, 4, 5, 6]
const [mot, hai, ba, , , sau] = numbers
console.log(mot, hai, ba, sau)
//optional chaining (?.)
let user = {};
// ?. de kiem tra xem thuoc tinh do co hay k neu k se in ra undefined
// ?? dung de set defaul neu bi undefined
console.log(user?.address?.street ?? "user not found")
let userAdmin = {
    admin() {
        // alert("i'm admin")
        console.log("i'm admin")
    }
}
let userGuest = {};
userAdmin.admin()
// kiem tra xem ham do co trong obj khong. neu co ham do thi no se thuc hien neu k se khong thuc hien
//  ?. se check xem thg ben trai co ton tai hay k 
userGuest.admin?.()

