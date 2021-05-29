const i = { id: 0, name: 'Financial', iconClass: 'bx bx-money' }
let arr = items.concat([item])
setItem(i)
arr = arr.filter((i2) => {
return i2.id !== i.id
})
setItems(arr)

function removeItemOnce(array: Array<any>, content: unknown) {
const index = array.indexOf(content)
if (index > -1) {
array.splice(index, 1)
}
return array
}
function removeItemAll(arr: Array<any>, value: unknown) {
var i = 0
while (i < arr.length) {
if (arr[i] === value) {
arr.splice(i, 1)
} else {
++i
}
}
return arr
}
