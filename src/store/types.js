/**
 * @Author: cest
 * @Date: 2022-06-17 23:02:14
 * @LastEditTime: 2022-06-20 10:54:10
 * @LastEditors: cest
 * @FilePath: /cedo-app-cli/src/store/types.js
 * @Description: mutations 函数常量声明
 */

// 公共部分:

/**
 * 设置列表数据
 */
export const SET_LIST = 'CHANGE_LIST'
/**
 * 更新列表项
 */
export const CHANGE_ITEM = 'CHANGE_ITEM'

// user - 用户模块的
export const CHANGE_PERMISSIONS_ROLES_USER = 'CHANGE_PERMISSIONS_ROLES_USER'

// 工单类型:
// 设置工单类型列表
export const SET_TICKET_TYPES = 'SET_TICKET_TYPES'
// 更新工单类型
export const CHANGE_TICKET_TYPE_ITEM = 'CHANGE_TICKET_TYPE_ITEM'

export const CHANGE_APPLICATION_ITEM = 'CHANGE_APPLICATION_ITEM'
export const SET_TICKET_STATUS = 'SET_TICKET_STATUS'
export const SET_TICKET_PRIORITY = 'SET_TICKET_PRIORITY'
export const GET_TICKET_STATUS_LABEL = 'GET_TICKET_STATUS_LABEL'

// disposal-person.js
export const CHANGE_DISPOSAL_PERSON_ITEM = 'CHANGE_DISPOSAL_PERSON_ITEM'

//knowledge
export const CHANGE_KNOW_APPLICATION_ITEM = 'CHANGE_KNOW_APPLICATION_ITEM'

//evaluation
export const CHANGE_EVAL_APPLICATION_ITEM = 'CHANGE_EVAL_APPLICATION_ITEM'
