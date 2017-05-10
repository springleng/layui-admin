layui.define(['layer', 'form', 'element'], function (exports) {
    var layer = layui.layer,
        form = layui.form(),
        element = layui.element();
    layer.msg('Hello World');

    form.on('submit(formDemo)', function (data) {
        layer.msg(JSON.stringify(data.field));
        return false;
    });

    exports('index', {});
});