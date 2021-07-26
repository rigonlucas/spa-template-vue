import api from "./api/apiClient"

export function createAddress(addressData) {
  return api.post("/address", addressData)
}

export function updateAddress(id, addressData) {
  return api.put(`/address/${id}`, addressData)
}

export function listAddress() {
  return api.get("/products")
}