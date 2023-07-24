import axios from "axios"
const vertAPI = axios.create({
  baseURL: "https://vert2-4.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return vertAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_bder_list(payload) {
  return vertAPI.get(`/api/v1/bder/`)
}
function api_v1_bder_create(payload) {
  return vertAPI.post(`/api/v1/bder/`, payload)
}
function api_v1_bder_retrieve(payload) {
  return vertAPI.get(`/api/v1/bder/${payload.id}/`)
}
function api_v1_bder_update(payload) {
  return vertAPI.put(`/api/v1/bder/${payload.id}/`, payload)
}
function api_v1_bder_partial_update(payload) {
  return vertAPI.patch(`/api/v1/bder/${payload.id}/`, payload)
}
function api_v1_bder_destroy(payload) {
  return vertAPI.delete(`/api/v1/bder/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return vertAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return vertAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return vertAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return vertAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return vertAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return vertAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return vertAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return vertAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return vertAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return vertAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return vertAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return vertAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return vertAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_bder_list,
  api_v1_bder_create,
  api_v1_bder_retrieve,
  api_v1_bder_update,
  api_v1_bder_partial_update,
  api_v1_bder_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
