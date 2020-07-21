import modernJquery from 'modernJquery'
import legacyJquery from 'legacyJquery'

console.log('Look how much Jquery we can pack into single bundle!')

// 3.x.x
console.log('This is Jquery version:', modernJquery().jquery)

// 2.x.x
console.log('This is Jquery version:', legacyJquery().jquery)
