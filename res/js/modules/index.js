layui.define(['layer', 'form', 'element', 'util'], function (exports) {
    var $ = layui.jquery,
        layer = layui.layer,
        util = layui.util,
        form = layui.form(),
        element = layui.element(),
        device = layui.device();

    // Deny IE7
    if(device.ie && device.ie < 8){
        layer.alert('Layui最低支持ie8，您当前使用的是古老的 IE'+ device.ie + '，你丫的肯定不是程序猿！');
    }

    // Message dialog
    layer.alert('你丫的肯定不是程序猿！');

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

    // 回到顶部
    util.fixbar({
        bar1: false,
        click: function (type) {
            if (type === 'bar1') {
                location.href = '//php.net/';
            }
        }
    });

    // 兼容小屏、手机
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
