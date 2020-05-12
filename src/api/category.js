import request from "@/utils/request";

export function index(query) {
  return request({
    url: "/categories",
    method: "get",
    params: query
  });
}

export function show(id) {
  return request({
    url: "/categories/" + id,
    method: "get"
  });
}
