define(["libs/api.request"],function(e){return{saveErrorLogger:function(r){return e.request({url:"save_error_logger",data:r,method:"post"})},survey:function(r){return e.request({url:"agent/api/auth/agent/survey",method:"get",auth:!0})}}});