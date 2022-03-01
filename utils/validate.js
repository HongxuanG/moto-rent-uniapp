export const Validate = {
  /**
   * 验证手机格式
   */
  isMobile(value) {
    return /^1[23456789]\d{9}$/.test(value)
  },
  /**
   * 是否短信验证码
   */
  code(value, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value)
  }
}
