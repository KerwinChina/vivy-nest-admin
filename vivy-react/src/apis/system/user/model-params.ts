/**
 * 查询用户
 */
export interface ListUserParams extends PaginateParams {
  /** 部门ID */
  deptId?: number

  /** 用户账号 */
  userName?: string

  /** 用户昵称 */
  nickName?: string

  /** 用户状态（0正常 1停用） */
  status?: string
}

/**
 * 新增
 */
export interface CreateUserParams {
  /** 部门ID */
  deptId?: number

  /** 用户账号 */
  userName: string

  /** 用户昵称 */
  nickName: string

  /** 用户类型（00系统用户） */
  userType?: string

  /** 用户邮箱 */
  email?: string

  /** 手机号码 */
  phonenumber?: string

  /** 用户性别（0男 1女 2未知） */
  sex?: string

  /** 头像地址 */
  avatar?: string

  /** 密码 */
  password: string

  /** 用户状态（0正常 1停用） */
  status?: string

  /** 用户角色 */
  roleIds?: number[]

  /** 用户岗位 */
  postIds?: number[]
}

/**
 * 更新
 */
export interface UpdateUserParams extends Omit<CreateUserParams, 'password'> {
  /** 用户ID */
  userId: number
}
