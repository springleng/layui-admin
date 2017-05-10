layui.define(['layer', 'form', 'element'], function (exports) {
    var $ = layui.jquery,
        layer = layui.layer,
        form = layui.form(),
        element = layui.element(),
        device = layui.device();

    // Deny IE7
    if(device.ie && device.ie < 8){
        layer.alert('Layui最低支持ie8，您当前使用的是古老的 IE'+ device.ie + '，你丫的肯定不是程序猿！');
    }

    // Message dialog
    layer.alert('Hello World');

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

    var treeMobile = $('.site-tree-mobile'),
        shadeMobile = $('.site-mobile-shade')

    treeMobile.on('click', function(){
        $('body').addClass('site-mobile');
    });

    shadeMobile.on('click', function(){
        $('body').removeClass('site-mobile');
    });

    exports('index', {});
});
