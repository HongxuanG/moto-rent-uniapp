import http from './request/http'
var Mock = require('./libs/mock')
// mock自定义占位符扩展
Mock.Random.extend({
  // 生成手机号
  phone: function () {
    var phonePrefixs = ['132', '135', '189'] // 自己写前缀哈
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/) //Number()
  },
})

const DEBUG = true // 切换数据来源
// 存放api
export async function isLogin() {
  if (DEBUG) {
    let res = Mock.mock({
      title: 'Syntax Demo',

      'string1|1-10': '★',
      'string2|3': 'value',

      'number1|+1': 100,
      'number2|1-100': 100,
      'number3|1-100.1-10': 1,
      'number4|123.1-10': 1,
      'number5|123.3': 1,
      'number6|123.10': 1.123,

      'boolean1|1': true,
      'boolean2|1-2': true,

      'object1|2-4': {
        110000: '北京市',
        120000: '天津市',
        130000: '河北省',
        140000: '山西省',
      },
      'object2|2': {
        310000: '上海市',
        320000: '江苏省',
        330000: '浙江省',
        340000: '安徽省',
      },

      'array1|1': ['AMD', 'CMD', 'KMD', 'UMD'],
      'array2|1-10': ['Mock.js'],
      'array3|3': ['Mock.js'],

      function: function () {
        return this.title
      },
    })
    return Promise.resolve(res)
  }
  return http.post()
}

export async function checkLogin() {
  if (DEBUG) {
    let res = Mock.mock({
      'errCode|1': '200',
      'errMsg|1': '登陆成功',
    })
    return Promise.resolve(res)
  }
  return http.post()
}

export async function doLogin(phoneNum, code) {
  if (DEBUG) {
    let res = Mock.mock({
      'errCode|1': '200',
      'errMsg|4': {
        userId: '@id()',
        nickName: '@cname()',
        phone: '@phone()',
        city: '@city()',
      },
    })
    console.log(res)
    return Promise.resolve(res)
  }
  return http.post()
}

export async function quickLogin() {
  if (DEBUG) {
    let res = Mock.mock({
      title: 'Syntax Demo',

      'string1|1-10': '★',
      'string2|3': 'value',

      'number1|+1': 100,
      'number2|1-100': 100,
      'number3|1-100.1-10': 1,
      'number4|123.1-10': 1,
      'number5|123.3': 1,
      'number6|123.10': 1.123,

      'boolean1|1': true,
      'boolean2|1-2': true,

      'object1|2-4': {
        110000: '北京市',
        120000: '天津市',
        130000: '河北省',
        140000: '山西省',
      },
      'object2|2': {
        310000: '上海市',
        320000: '江苏省',
        330000: '浙江省',
        340000: '安徽省',
      },

      'array1|1': ['AMD', 'CMD', 'KMD', 'UMD'],
      'array2|1-10': ['Mock.js'],
      'array3|3': ['Mock.js'],

      function: function () {
        return this.title
      },
    })
    return Promise.resolve(res)
  }
  return http.post()
}

export async function queryTransactionDetail() {
  if (DEBUG) {
    let res = Mock.mock({
      'errCode|1': '200',
      'errMsg|1-1000': [
        {
          billNumber: '@id()',
          'billAmount|1-100.2': 1,
          billType: '消费 | 余额',
          billTime: '@datetime()',
        },
      ],
    })
    return Promise.resolve(res)
  }
  return http.post()
}
