layui.define(['layer', 'form', 'element'], function (exports) {
    var $ = layui.jquery,
        layer = layui.layer,
        form = layui.form(),
        element = layui.element();

    // Message dialog
    layer.msg('Hello World');

    // Form submit
    form.on('submit(formDemo)', function (data) {
        layer.msg(JSON.stringify(data.field));
        return false;
    });

    // CheckBox check all
    form.on('checkbox(allChoose)', function (data) {
        var child = $(data.elem).parents('table').find('tbody input[type="checkbox"]');
            child.each(function (index, item) {
            item.checked = data.elem.checked;
        });
        form.render('checkbox');
    });

    exports('index', {});
});
