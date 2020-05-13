import request from "@/utils/request";

export function home(query) {
  return request({
    url: "/pages/home",
    method: "get",
    params: query
  });
}
