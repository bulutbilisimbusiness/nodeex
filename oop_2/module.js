//require('./module/index.js')
//require('./module/index')
//require('./module/')

'use strict'

/* const test=require('./module/')
test()
require('./module/')() */
/* const [test1,test2,test3]=require('./module/')

test1(),test2(),test3() */
const {test1,test2,test3,variable}=require('./module/')

test1(),test2(),test3(),console.log(variable)