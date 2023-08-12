import {
  type DrawerFormProps,
  type ProFormInstance,
  DrawerForm,
  ProFormText,
  ProFormTreeSelect,
  ProFormSelect,
  ProFormRadio,
} from '@ant-design/pro-components'
import { useModel } from '@umijs/max'
import { useRef, useEffect } from 'react'
import { selectableDeptTree } from '@/apis/system/dept'
import { selectablePost } from '@/apis/system/post'
import { selectableRole } from '@/apis/system/role'
import { addUser, updateUser, infoUser } from '@/apis/system/user'
import type { CreateUserParams, UserResult } from '@/apis/system/user'

interface UpdateFormProps extends DrawerFormProps {
  record?: UserResult
}

const UpdateForm: React.FC<UpdateFormProps> = ({ record, ...props }) => {
  const formRef = useRef<ProFormInstance>()

  /**
   * 注册字典数据
   */
  const { loadDict, toSelect } = useModel('dict')
  const sysUserSex = loadDict('sys_user_sex')
  const sysNormalDisable = loadDict('sys_normal_disable')

  /**
   * 获取初始化数据
   */
  useEffect(() => {
    formRef.current?.resetFields()
    if (record) {
      infoUser(record.userId).then((info) => {
        formRef.current?.setFieldsValue(info)
      })
    }
  }, [record])

  /**
   * 提交表单
   * @param values 表单值
   */
  const handleSubmit = async (values: CreateUserParams) => {
    if (record) {
      await updateUser({
        ...values,
        userId: record.userId,
        userName: record.userName,
      })
    } else {
      await addUser(values)
    }
    formRef.current?.resetFields()
  }

  return (
    <DrawerForm
      {...props}
      layout="horizontal"
      labelCol={{ flex: '100px' }}
      formRef={formRef}
      title={record ? `编辑用户` : `新增用户`}
      onFinish={async (values: any) => {
        await handleSubmit(values)
        props.onFinish?.(values)
        return true
      }}
    >
      <ProFormText name="nickName" label="用户昵称" rules={[{ required: true }]} />
      {record ? null : (
        <>
          <ProFormText name="userName" label="用户名称" rules={[{ required: true }]} />
          <ProFormText.Password
            name="password"
            label="用户密码"
            initialValue={'Aa@123456'}
            rules={[{ required: true }]}
          />
        </>
      )}
      <ProFormTreeSelect
        name="deptId"
        label="归属部门"
        request={selectableDeptTree}
        fieldProps={{
          fieldNames: { label: 'deptName', value: 'deptId' },
        }}
      />
      <ProFormText name="phonenumber" label="手机号码" />
      <ProFormText name="email" label="邮箱" />
      <ProFormSelect name="sex" label="用户性别" fieldProps={{ options: toSelect(sysUserSex) }} />
      <ProFormRadio.Group
        name="status"
        label="状态"
        initialValue={'0'}
        fieldProps={{ options: toSelect(sysNormalDisable) }}
      />
      <ProFormSelect
        name="roleIds"
        label="角色"
        request={selectableRole}
        fieldProps={{
          mode: 'multiple',
          fieldNames: { label: 'roleName', value: 'roleId' },
        }}
      />
      <ProFormSelect
        name="postIds"
        label="岗位"
        request={selectablePost}
        fieldProps={{
          mode: 'multiple',
          fieldNames: { label: 'postName', value: 'postId' },
        }}
      />
    </DrawerForm>
  )
}

export default UpdateForm
