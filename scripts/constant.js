// 存储公共变量
const path = require('path')

const PROJECT_PATH = path.resolve(__dirname, '../')
const PROJECT_NAME = path.parse(PROJECT_PATH).name

const isDev = process.env.NODE_ENV !== 'production'

const SERVER_HOST = '127.0.0.1'
const SERVER_PORT = 9000

module.exports = {
  isDev, // 是否开发环境
  PROJECT_PATH, // 项目的根目录
  PROJECT_NAME, // 项目名
  SERVER_HOST,
  SERVER_PORT
}
