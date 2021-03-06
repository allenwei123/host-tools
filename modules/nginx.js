var Router = require('koa-router')
const service = require('./nginx/service')()

module.exports = function () {

    return new Router()
        .post('/nginx/del/:containerName', async = ctx => {
            return service.del(ctx)
        }).get('/nginx/list', async = ctx => {
            return service.list(ctx)
        }).get('/nginx/content/:name', async = ctx => {
            return service.content(ctx)
        }).post('/nginx/create', async = ctx => {
            var start = async = async function () {
                var domain = ctx.request.body.domain;
                var host = ctx.request.body.host;
                var projectPort = ctx.request.body.projectPort;
                var containerName = ctx.request.body.containerName;
                let result = await service.create1(domain,host,projectPort,containerName)
                ctx.body = result
            }
            return start()
        })
}